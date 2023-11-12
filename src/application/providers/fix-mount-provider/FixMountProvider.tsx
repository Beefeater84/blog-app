"use client";

import { ReactNode, useEffect, useState } from "react";

interface FixMountProviderProps {
  children: ReactNode;
}

export default function FixMountProvider({ children }: FixMountProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div>{children}</div>;
  }
}
