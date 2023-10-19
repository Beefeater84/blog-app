"use client";

import { useSession } from "next-auth/react";
import SignOutBtn from "@/features/signOutBtn/sign-out";
import AuthButton from "@/features/authButton/authButton";

export default function AuthButtons() {
  const { status } = useSession();

  return status === "authenticated" ? <SignOutBtn /> : <AuthButton />;
}
