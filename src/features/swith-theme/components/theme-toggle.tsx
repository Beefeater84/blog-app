"use client";

import { useContext } from "react";
import { ThemeContext } from "@/application/providers/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={switchTheme}>{theme} mode</button>
    </div>
  );
}
