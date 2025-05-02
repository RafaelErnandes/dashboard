import { Moon, Sun } from "lucide-react";

import { useEffect } from "react";
import { useThemeStore } from ".";

export const ToggleTheme = () => {
  const { isDark, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button type="button" onClick={toggleTheme} className="cursor-pointer">
      {isDark ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-blue-500 w-5 h-5" />
      )}
    </button>
  );
};
