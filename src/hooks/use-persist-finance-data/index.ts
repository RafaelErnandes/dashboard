import { useEffect } from "react";
import { useFinanceStore } from "../use-finance-store/index.ts";

export function usePersistFinanceData() {
  const financeData = useFinanceStore((state) => state.financeData);
  const setFinanceData = useFinanceStore((state) => state.setFinanceData);

  useEffect(() => {
    const stored = localStorage.getItem("financeData");
    if (stored) {
      setFinanceData(JSON.parse(stored));
    }
  }, [setFinanceData]);

  useEffect(() => {
    localStorage.setItem("financeData", JSON.stringify(financeData));
  }, [financeData]);
}
