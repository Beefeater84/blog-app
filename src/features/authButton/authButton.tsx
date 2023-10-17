"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthButton() {
  return (
    <div>
      <button type="button">Auth</button>
    </div>
  );
}
