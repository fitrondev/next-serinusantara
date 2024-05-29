import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/db";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = await loginSchema.parseAsync(credentials);

        const user = await prisma.user.findUnique({
          where: {
            email: email as string,
          },
        });

        const hashedPassword = user?.password;

        const matchPassword = bcrypt.compareSync(
          password as string,
          hashedPassword!
        );

        if (!user) {
          throw new Error("User not found.");
        }

        if (!matchPassword) {
          throw new Error("Password does not match.");
        } else {
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
});
