"use client";

import { signIn } from "next-auth/react";

export default function AuthButton() {
  return (
    <button type="button" onClick={() => signIn("google")}>
      Auth
    </button>
  );
}
