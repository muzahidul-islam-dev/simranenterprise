import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { AuthUser } from "@/types/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/customer/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            // @ts-expect-error node https agent for self-signed cert
            agent: (() => {
              if (process.env.NODE_ENV !== "production") {
                const https = require("https");
                return new https.Agent({ rejectUnauthorized: false });
              }
              return undefined;
            })(),
          }
        );

        if (!res.ok) return null;

        const data = await res.json();

        if (data.message) return null;

        return {
          id: String(data.user.id),
          token: data.token,
          ...data.user,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        const u = user as AuthUser & { id: string; token: string };
        token.id = u.id;
        token.apiToken = u.token;
        token.first_name = u.first_name;
        token.last_name = u.last_name;
        token.email = u.email;
        token.phone = u.phone;
        token.avatar = u.avatar;
        token.role = u.role;
        token.customer_profile = u.customer_profile;
      }
      if (trigger === "update" && session) {
        if (session.avatar !== undefined) token.avatar = session.avatar;
        if (session.first_name !== undefined) token.first_name = session.first_name;
        if (session.last_name !== undefined) token.last_name = session.last_name;
        if (session.phone !== undefined) token.phone = session.phone;
        if (session.customer_profile !== undefined) token.customer_profile = session.customer_profile;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.apiToken = token.apiToken as string;
      session.user.first_name = token.first_name as string;
      session.user.last_name = token.last_name as string;
      session.user.phone = token.phone as string;
      session.user.avatar = token.avatar as string | null;
      session.user.role = token.role as string;
      session.user.customer_profile = token.customer_profile;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: { strategy: "jwt" },
});
