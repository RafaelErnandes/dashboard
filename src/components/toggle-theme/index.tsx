import { Moon, Sun } from "lucide-react";

import { useState } from "react";

export const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button type="button" onClick={toggleDark} className="cursor-pointer">
      {isDark ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-blue-500 w-5 h-5" />
      )}
    </button>
  );
};
