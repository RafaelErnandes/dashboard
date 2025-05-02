import { useEffect, useState } from "react";

import { FormData } from "../../pages/form/index";

export const useStoreData = () => {
  const [data, setData] = useState<FormData[]>([]);

  useEffect(() => {
    const rawData = localStorage.getItem("financeData");
    if (rawData) {
      setData(JSON.parse(rawData));
    }
  }, []);

  return data;
};
