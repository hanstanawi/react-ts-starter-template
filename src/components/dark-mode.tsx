import { MoonIcon, SunIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import Button from './ui/button';

function getThemeString(isDark: boolean) {
  return isDark ? 'dark' : 'light';
}

function checkDarkMode(): boolean {
  return (
    (localStorage && localStorage.theme === 'dark') ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = useCallback((): void => {
    localStorage.theme = getThemeString(!isDark);
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDark((prevState) => !prevState);
  }, [isDark]);

  useEffect(() => {
    const isDarkMode = checkDarkMode();
    setIsDark(isDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <Button
      className="rounded-full bg-transparent p-2 outline-0 dark:bg-transparent"
      onClick={toggleMode}
    >
      {isDark ? (
        <MoonIcon data-testid="moon-icon" size={24} />
      ) : (
        <SunIcon data-testid="sun-icon" size={24} />
      )}
    </Button>
  );
}
