import { ArrowLeftToLine } from "lucide-react";
import { BarGraphic } from "./components/graphics/bar-graphic/index.tsx";
import { Button } from "../../components/button/index.tsx";
import { DashboardHistory } from "./components/dashboard-history/index.tsx";
import { DashboardTotals } from "./components/dashboard-totals/index";
import { LineGraphic } from "./components/graphics/line-graphic/index.tsx";
import { PizzaGraphic } from "./components/graphics/pizza-graphic/index.tsx";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className=" p-8 bg-slate-100 dark:bg-zinc-900">
      <div className="flex flex-row w-full min-h-screen rounded-xl p-6 bg-slate-100 dark:bg-zinc-900  dark:text-white gap-6">
        <div className="w-1/4 bg-gray-300 dark:bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-lg dark:text-white font-semibold mb-4">
            Histórico
          </h2>
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-270px)] rounded-xl scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-zinc-500 scrollbar-track-transparent">
            <div className="pr-2">
              <DashboardHistory />
            </div>
          </div>

          <div className="p-4 bg-gray-400 dark:bg-zinc-900 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-orange-500 dark:text-purple-400 mb-2">
              Dica de Finanças
            </h3>
            <p className="text-sm text-white dark:text-gray-300">
              Evite gastar mais do que você ganha. Acompanhe seus gastos e
              defina metas mensais para manter sua saúde financeira em dia!
            </p>
          </div>
          <div className="p-4 mt-4 bg-gray-400 dark:bg-zinc-900 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-orange-500 dark:text-purple-400 mb-2">
              Dica de Finanças
            </h3>
            <p className="text-sm text-white dark:text-gray-300">
              Evite compras por impulso: espere 24 horas antes de comprar algo
              não essencial. Muitas vezes, você perceberá que não precisa
              realmente daquilo.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-3/4 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <DashboardTotals />
            <div className="flex items-start justify-end ">
              <Button
                type="button"
                className="flex flex-col items-center dark:text-white"
                onClick={handleReturn}
              >
                <ArrowLeftToLine className=" cursor-pointer" />
                <span>Retornar</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-4 g-[3000px]">
            <div className="w-4/5 bg-gray-300 dark:bg-zinc-800 p-4 rounded-xl">
              <BarGraphic />
            </div>
            <div className="w-2/5 bg-gray-300 dark:bg-zinc-800 p-4 rounded-xl text-[15px]">
              <PizzaGraphic />
            </div>
          </div>
          <div className="w-full bg-gray-300 dark:bg-zinc-800 p-4 rounded-xl">
            <LineGraphic />
          </div>
        </div>
      </div>
    </div>
  );
};
