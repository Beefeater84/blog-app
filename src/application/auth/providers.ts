import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/application/db/connets";
import { getServerSession } from "next-auth";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET_ID || "",
    }),
  ],
};

export default authOptions;

export const getAuthOptions = () => getServerSession(authOptions);
