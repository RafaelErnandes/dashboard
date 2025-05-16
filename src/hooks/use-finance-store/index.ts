import { FinanceState } from "./types";
import { create } from "zustand";

export const useFinanceStore = create<FinanceState>((set) => {
  const storedData = localStorage.getItem("financeData");
  const initialData = storedData ? JSON.parse(storedData) : [];

  return {
    financeData: initialData,

    setFinanceData: (data) => {
      localStorage.setItem("financeData", JSON.stringify(data));
      set({ financeData: data });
    },

    addItem: (item) =>
      set((state) => {
        const newData = [...state.financeData, item];
        localStorage.setItem("financeData", JSON.stringify(newData));
        return { financeData: newData };
      }),

    removeItem: (id) =>
      set((state) => {
        const newData = state.financeData.filter((item) => item.id !== id);
        localStorage.setItem("financeData", JSON.stringify(newData));
        return { financeData: newData };
      }),
  };
});
