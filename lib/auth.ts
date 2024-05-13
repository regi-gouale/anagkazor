import GoogleProvider from "next-auth/providers/google";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "./env";
import { prisma } from "./prisma";
import { AuthOptions, getServerSession } from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
      style: {
        logo: 'https://cdn-icons-png.flaticon.com/512/281/281764.png',
        bg: "#fff",
        text: "#000",
      }
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (!session?.user) return session;
      session.user = user;
      return session;
    },
  },
  pages: {
    // signIn: "/auth/signin",
  },
  theme: {
    logo: "/favicon.ico",
    brandColor: "#7C3AED",
    colorScheme: "dark",
  
  },
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
