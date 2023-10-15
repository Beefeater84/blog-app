export type ThemeType = "light" | "dark";
export type SwitchTheme = () => void;

export type ThemeContextType = {
  theme: ThemeType;
  switchTheme: SwitchTheme;
};
