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
    <div className=" p-8 bg-gray-100 dark:bg-zinc-800">
      <div className="flex flex-row w-full min-h-screen rounded-xl p-6 bg-gray-400 dark:bg-zinc-900  dark:text-white gap-6">
        <div className="w-1/4 bg-gray-200 dark:bg-zinc-800 p-4 rounded-xl overflow-y-auto max-h-[calc(100vh-48px)]">
          <h2 className="text-lg font-semibold mb-4">Histórico</h2>
          <DashboardHistory />
        </div>
        <div className="flex flex-col w-3/4 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <DashboardTotals />
            <div className="flex items-start justify-end ">
              <Button
                type="button"
                className="flex flex-col items-center text-white"
                onClick={handleReturn}
              >
                <ArrowLeftToLine className=" cursor-pointer" />
                <span>Retornar</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-4 g-[3000px]">
            <div className="w-4/5 bg-gray-200 dark:bg-zinc-800 p-4 rounded-xl">
              <BarGraphic />
            </div>
            <div className="w-2/5 bg-gray-200 dark:bg-zinc-800 p-4 rounded-xl text-[15px]">
              <PizzaGraphic />
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-zinc-800 p-4 rounded-xl">
            <LineGraphic />
          </div>
        </div>
      </div>
    </div>
  );
};
