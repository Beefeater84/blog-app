"use client";

import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <button type="button" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
