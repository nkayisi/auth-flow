import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Keycloak from "next-auth/providers/keycloak";

export const {auth, handlers, signIn, signOut} = NextAuth({
    providers:[
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Keycloak({
            clientId: process.env.KEYCLOAK_ID,
            clientSecret: process.env.KEYCLOAK_SECRET,
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ],
})