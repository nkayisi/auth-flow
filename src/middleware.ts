export { auth as middleware } from "@/auth"

export const config = {
  matcher: [
    /**
     * Routes protégées qui nécessitent une authentification
     * Vous pouvez ajouter d'autres routes protégées ici comme les routes dans le dossier (site)
     * qui ne sont pas protégées par défaut (ex. /about ou /about/:path*)
     */
    '/dashboard/:path*',
    
    /**
     * Routes publiques à exclure pour la protection de l'authentification
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup|).*)',
  ]
}