import NextAuth from "next-auth";
import type { JWT } from "next-auth/jwt";
import GitHub from "next-auth/providers/github";
import Keycloak from "next-auth/providers/keycloak";


async function refreshAccesssToken(token: JWT) {

    const params = new URLSearchParams();
    params.append('client_id', process.env.AUTH_KEYCLOAK_ID ?? '');
    params.append('client_secret', process.env.AUTH_KEYCLOAK_SECRET ?? '');
    params.append('grant_type', 'refresh_token');

    if (token.refreshToken) {
        params.append('refresh_token', token.refreshToken);
    } else {
        throw new Error('Missing refresh token');
    }

    const response = await fetch(`${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
    });

    const data = await response.json();
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>> REFRESH CALLED :)")
    if (!response.ok) throw data;

    return {
        ...token,
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresAt: Math.floor(Date.now() / 1000 + (data.expires_in ?? 0))
    }

}

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
        Keycloak({
            clientId: process.env.AUTH_KEYCLOAK_ID,
            clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
            issuer: process.env.AUTH_KEYCLOAK_ISSUER,
        })
    ],
    callbacks: {
        authorized: async ({ auth, request: { nextUrl } }) => {
            const isLoggedIn = !!auth;
            const defaultCallback = new URL(process.env.NEXT_DEFAULT_CALLBACK_PATH || "/", process.env.NEXTAUTH_URL).toString();
            const callbackUrl = nextUrl.searchParams.get("callbackUrl");

            if (isLoggedIn) {
                return callbackUrl ? Response.redirect(callbackUrl || defaultCallback) : true;
            }
            return false;
        },
        jwt: async ({ token, account }) => {
            // Initialisation: copie des tokens depuis le compte
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.expiresAt = account.expires_at;
                return token;
            }

            // Vérification si le token est expiré
            if (Date.now() < (token.expiresAt ?? 0) * 1000) {
                return token;
            }

            // Refresh du token
            try {
                const refreshedToken = await refreshAccesssToken(token)
                return refreshedToken;
            } catch (error) {
                console.error('Error refreshing access token', error);
                // En cas d'erreur, on marque le token comme invalide
                return {
                    ...token,
                    error: 'RefreshAccessTokenError',
                };
            }
        },
        session: async ({ session, token }) => {
            if (token.error === 'RefreshAccessTokenError') {
                // Redirection vers la page de login
                const loginUrl = new URL("/api/auth/signin", process.env.NEXTAUTH_URL ?? "");
                loginUrl.searchParams.set("error", "RefreshAccessTokenError");
                throw new Error("RefreshAccessTokenError");
            }

            return {
                ...session,
                error: token.error,
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
            };
        },
    },
})