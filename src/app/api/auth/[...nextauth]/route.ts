import NextAuth from "next-auth";
import authOptions from "@/application/auth/providers";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
