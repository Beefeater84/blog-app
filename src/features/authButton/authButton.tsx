"use client";

import { signIn, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data, status } = useSession();

  console.log(data, status);

  return (
    <div>
      <button type="button" onClick={() => signIn("google")}>
        Auth
      </button>
    </div>
  );
}
