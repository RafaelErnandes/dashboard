import { useEffect, useState } from "react";

import { FormData } from "../../components/form";
import { useStoreData } from "../use-stored-data";

export const useTotalDespesas = () => {
  const financeData = useStoreData();
  const [totalDespesas, setTotalDespesas] = useState(0);

  useEffect(() => {
    const despesas = financeData.filter(
      (item: FormData) => item.type === "despesa"
    );
    const totalDespesas = despesas.reduce((acc: number, item: FormData) => {
      const valor = Number(item.value);
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);

    setTotalDespesas(totalDespesas);
  });

  return totalDespesas;
};
