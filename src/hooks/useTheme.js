import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (!isDarkTheme) {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleTheme };
};