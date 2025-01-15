import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaClient } from "@prisma/client"
import {prisma} from "@/lib/prisma"
import bcrypt from "bcrypt";

// const prisma = new PrismaClient()
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }
        const { email, password } = credentials;

        const user:any = await prisma.user.findUnique({
          where: { email },
        });
        console.log(user)
        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid email or password");
        }

        return { id: user.id.toString(), name: user.name, email: user.email };
      }
    })
  ],
  
});
