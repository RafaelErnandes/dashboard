import { useEffect, useState } from "react";

import { FormData } from "../../pages/form/index";
import { useStoreData } from "../use-stored-data/index";

export const useTotalReceitas = () => {
  const financeData = useStoreData();
  const [totalReceitas, setTotalReceitas] = useState(0);

  useEffect(() => {
    const receitas = financeData.filter(
      (item: FormData) => item.type === "receita"
    );
    const totalReceitas = receitas.reduce((acc: number, item: FormData) => {
      const valor = Number(item.value);
      return acc + (isNaN(valor) ? 0 : valor);
    }, 0);

    setTotalReceitas(totalReceitas);
  });

  return totalReceitas;
};
