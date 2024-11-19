import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.classList.remove(theme)
    document.body.classList.add(newTheme)
    localStorage.setItem("theme", newTheme)
  };

  const contextValue = {
    themeName: theme,
    handleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
