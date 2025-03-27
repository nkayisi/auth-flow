import { DefaultSession } from "next-auth"
import 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module "next-auth" {
  interface User {
    roles?: string[]
  }
  
  interface Session {
    user?: User & DefaultSession["user"]
    error?: string;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        expiresAt?: number;
        error?: string;
    }
}
