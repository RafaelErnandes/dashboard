import { BanknoteArrowDown, BanknoteArrowUp, Trash2 } from "lucide-react";

import { Button } from "../../../../components/button/index.tsx";
import { useFinanceStore } from "../../../../hooks/use-finance-store/index.ts";

export const DashboardHistory = () => {
  const financeData = useFinanceStore((state) => state.financeData);
  const removeItem = useFinanceStore((state) => state.removeItem);

  return (
    <div className="mb-4 space-y-4">
      {financeData.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white p-4 rounded-lg shadow-lg flex justify-between items-center"
        >
          <div className="flex flex-col w-full space-y-1">
            <span className="font-semibold text-sm capitalize">
              {item.description}
            </span>
            <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
              {item.category}
              {item.type === "receita" ? (
                <BanknoteArrowUp className="text-green-500 h-4 w-4 mt-1" />
              ) : (
                <BanknoteArrowDown className="text-red-500 h-4 w-4 mt-1" />
              )}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium truncate">{`R$ ${
              item.value ? item.value : 0
            }`}</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {item.date?.toLocaleString()}
            </span>
            <Button type="button" onClick={() => removeItem(item.id)}>
              <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
