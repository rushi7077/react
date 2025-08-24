import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme.jsx";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
