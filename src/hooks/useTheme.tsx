import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context) {
    return context;
  }

  throw Error("Use this hook in ThemeProvider scope");
};
