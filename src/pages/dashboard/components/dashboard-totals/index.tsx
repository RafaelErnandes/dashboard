import { ToggleTheme } from "../../../../components/toggle-theme/index.tsx";
import { useTotalDespesas } from "../../../../hooks/use-total-despesas/index.ts";
import { useTotalReceitas } from "../../../../hooks/use-total-receitas/index.ts";

export const DashboardTotals = () => {
  const totalReceitas = useTotalReceitas();
  const totalDespesas = useTotalDespesas();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <div className="bg-gray-200 p-1 rounded-sm pt-2 dark:bg-zinc-700">
          <ToggleTheme />
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl w-full dark:text-white shadow-md">
          <span className="block text-lg font-medium mb-2">Receitas</span>
          <span className="text-xl font-bold">
            R${totalReceitas.toFixed(2)}
          </span>
        </div>
        <div className="bg-gray-200 dark:bg-zinc-700 p-4 rounded-xl w-full dark:text-white shadow-md">
          <span className="block text-lg font-medium mb-2">Despesas</span>
          <span className="text-xl font-bold">
            R${totalDespesas.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
