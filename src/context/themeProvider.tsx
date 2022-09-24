import { ReactNode, useEffect, useState, createContext } from "react";
import { Theme, ThemeContext } from "./themeContext";

type ProviderProps = {
  children: ReactNode;
};

const defaultTheme: Theme = Theme.light;

export const ThemeContextProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      checkTheme(JSON.parse(theme!) as Theme);
      setTheme(JSON.parse(theme!) as Theme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === Theme.light ? Theme.dark : Theme.light;
      checkTheme(newTheme);
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const setDarkModeTheme = () => {
    setTheme(Theme.dark);
    checkTheme(Theme.dark);
    localStorage.setItem("theme", JSON.stringify(Theme.dark));
  };

  const setLightModeTheme = () => {
    setTheme(Theme.light);
    checkTheme(Theme.light);
    localStorage.setItem("theme", JSON.stringify(Theme.light));
  };

  const checkTheme = (theme: Theme) => {
    console.log(theme);
    if (theme === Theme.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        setDarkModeTheme,
        setLightModeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
