import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
