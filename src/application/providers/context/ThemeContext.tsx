"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import {
  ThemeContextType,
  ThemeType,
} from "@/application/providers/context/types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  switchTheme: () => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    setTheme(savedTheme || "light");
  }, []);

  const switchTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue = useMemo(() => {
    return { theme, switchTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={[theme, "content-provider"].join(" ")}>{children}</div>
    </ThemeContext.Provider>
  );
}
