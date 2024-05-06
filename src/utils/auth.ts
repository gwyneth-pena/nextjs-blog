import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers:{GET,POST}, auth, signIn, signOut } = NextAuth({ providers: [ GitHub({
    clientId: process.env.NEXT_PUBLIC_GITHUB_ID||'',
    clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET||'',
}) ] })
