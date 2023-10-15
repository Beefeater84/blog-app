"use client";

import { createContext, useMemo, useState } from "react";
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

  const switchTheme = () => {
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
