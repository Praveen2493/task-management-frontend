import { useState } from "react";
import { ThemeContext } from "./contexts";

const ThemeProvider = ({
  children,
}) => {

  const [darkMode, setDarkMode] =
    useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;