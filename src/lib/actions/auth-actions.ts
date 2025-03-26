"use server"

import { signIn, signOut } from "@/auth"


/**
 * Authentifie l'utilisateur via un fournisseur d'authentification spécifique
 * @param provider - Le fournisseur d'authentification ('github' ou 'keycloak',...)
 * @param redirectTo - URL vers laquelle rediriger l'utilisateur après une authentification réussie (par default : '/')
 * @returns Redirige vers la page d'accueil après une authentification réussie
 */
export const singInAction = async (provider: 'github' | 'keycloak', redirectTo?: string) => {
    await signIn(provider, { redirectTo: redirectTo || '/' });
}


/**
 * Déconnecte l'utilisateur actuellement authentifié
 * @param redirectTo - URL vers laquelle rediriger l'utilisateur après la déconnexion (par default : '/')
 * @returns Redirige vers la page d'accueil après la déconnexion
 */
export const singOutAction = async (redirectTo?: string) => {
    await signOut({ redirectTo: redirectTo || '/' });
}