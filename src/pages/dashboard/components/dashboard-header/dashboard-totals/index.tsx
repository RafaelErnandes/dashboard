import * as Tooltip from "@radix-ui/react-tooltip";

import { DashboardButtons } from "./dashboard-buttons/index.tsx";
import { DashboardTotalProps } from "./index.ts";
import { Grid } from "lucide-react";
import { useTotalDespesas } from "../../../../../hooks/use-total-despesas/index.ts";
import { useTotalReceitas } from "../../../../../hooks/use-total-receitas/index.ts";

export const DashboardTotals = (props: DashboardTotalProps) => {
  const { setFilter, onToggleForm } = props;

  const totalReceitas = useTotalReceitas();
  const totalDespesas = useTotalDespesas();

  const handleClick = (type: "receita" | "despesa" | "todos") => {
    setFilter(type);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        </div>
        <div className="flex justify-end gap-4">
          <DashboardButtons onClick={onToggleForm} />
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <div
          className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-xl w-full text-black dark:text-white shadow-md cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105 "
          onClick={() => handleClick("receita")}
        >
          <span className="block text-lg font-medium mb-2 hover:text-green-500">
            Receitas
          </span>
          <span className="text-xl font-bold">
            R${totalReceitas.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div
          className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-xl w-full text-black dark:text-white shadow-md cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105"
          onClick={() => handleClick("despesa")}
        >
          <span className="block text-lg font-medium mb-2 hover:text-red-500">
            Despesas
          </span>
          <span className="text-xl font-bold">
            R${totalDespesas.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <Tooltip.TooltipProvider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <div
                onClick={() => handleClick("todos")}
                className="flex h-10 items-center gap-1 cursor-pointer bg-orange-500 dark:bg-purple-600 text-white rounded-md px-2 py-1 shadow-md hover:bg-orange-600 dark:hover:bg-purple-700 select-none text-sm"
              >
                <Grid size={16} />
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-zinc-100 dark:bg-zinc-700 dark:text-white text-sm px-2 py-1 rounded shadow"
                side="right"
                sideOffset={5}
              >
                Mostrar Tudo
                <Tooltip.Arrow className="fill-slate-100 dark:fill-zinc-700" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.TooltipProvider>
      </div>
    </div>
  );
};
