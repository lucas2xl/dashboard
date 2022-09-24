import { createContext } from "react";

export enum Theme {
  dark = "dark",
  light = "light",
}
export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setDarkModeTheme: () => void;
  setLightModeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);
