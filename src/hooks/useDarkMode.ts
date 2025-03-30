// hooks/useDarkMode.ts
'use client';

import { useTheme } from 'next-themes';

export default function useDarkMode() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
