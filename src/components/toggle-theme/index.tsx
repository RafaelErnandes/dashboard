import * as Tooltip from "@radix-ui/react-tooltip";

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
    <Tooltip.TooltipProvider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="bg-slate-100 p-2 rounded-sm dark:bg-zinc-700 flex items-center">
            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer"
            >
              {isDark ? (
                <Sun className="text-yellow-400 w-5 h-5" />
              ) : (
                <Moon className="text-blue-500 w-5 h-5" />
              )}
            </button>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-slate-100 dark:bg-zinc-700 dark:text-white text-xs px-2 py-1 rounded shadow"
            side="top"
            sideOffset={5}
          >
            Mudar tema
            <Tooltip.Arrow className="fill-slate-100 dark:fill-zinc-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.TooltipProvider>
  );
};
