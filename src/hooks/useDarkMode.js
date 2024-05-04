import { useEffect, useState } from "react";

const defaultTheme = "dark";

export default function useDarkMode() {
  const [theme, setTheme] = useState(localStorage.theme || defaultTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
