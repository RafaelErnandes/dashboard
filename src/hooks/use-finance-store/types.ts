import { FormData } from "../../pages/form";

export type FinanceState = {
  financeData: FormData[];
  setFinanceData: (data: FormData[]) => void;
  addItem: (item: FormData) => void;
  removeItem: (id: string) => void;
};
