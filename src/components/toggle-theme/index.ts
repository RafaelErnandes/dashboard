import { ThemesStateParams } from "./types";
import { create } from "zustand";

export const useThemeStore = create<ThemesStateParams>((set) => ({
  isDark: localStorage.getItem("theme-dashboard") === "dark",
  toggleTheme: () => {
    set((state) => {
      const newTheme = !state.isDark ? "dark" : "light";
      localStorage.setItem("theme-dashboard", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { isDark: newTheme === "dark" };
    });
  },
}));
