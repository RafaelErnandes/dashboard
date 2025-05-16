import { useEffect, useState } from "react";

import { FormData } from "../../pages/form/index";
import { useFinanceStore } from "../use-finance-store";

export const useTotalDespesas = (dataFormProps?: FormData[]) => {
  const fallbackData = useFinanceStore((state) => state.financeData);
  const financeData = dataFormProps ?? fallbackData;

  const [totalDespesas, setTotalDespesas] = useState(0);

  useEffect(() => {
    const despesas = financeData.filter(
      (item: FormData) => item.type === "despesa"
    );
    const total = despesas.reduce((acc: number, item: FormData) => {
      const valor = Number(item.value);
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);

    setTotalDespesas(total);
  });

  return totalDespesas;
};
