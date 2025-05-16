import { useEffect, useState } from "react";

import { FormData } from "../../pages/form/index";
import { useFinanceStore } from "../use-finance-store";

export const useTotalReceitas = (dataFormProps?: FormData[]) => {
  const fallbackData = useFinanceStore((state) => state.financeData);
  const financeData = dataFormProps ?? fallbackData;

  const [totalReceitas, setTotalReceitas] = useState(0);

  useEffect(() => {
    const receitas = financeData.filter(
      (item: FormData) => item.type === "receita"
    );
    const total = receitas.reduce((acc: number, item: FormData) => {
      const valor = Number(item.value);
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);

    setTotalReceitas(total);
  });

  return totalReceitas;
};
