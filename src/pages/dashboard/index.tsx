import { useEffect, useState } from "react";

import { BarGraphic } from "./components/graphics/bar-graphic/index.tsx";
import { CalculadoraJuros } from "./components/interest-calculator/index.tsx";
import { DashboardGoals } from "./components/dashboard-header/dashboard-goals/index.tsx";
import { DashboardHistory } from "./components/dashboard-history/index.tsx";
import { DashboardTotals } from "./components/dashboard-header/dashboard-totals/index.tsx";
import { LineGraphic } from "./components/graphics/line-graphic/index.tsx";
import { Meta } from "./components/dashboard-header/dashboard-goals/meta-form/index.ts";
import { MetaCard } from "./components/dashboard-header/dashboard-goals/meta-card/index.tsx";
import { PizzaGraphic } from "./components/graphics/pizza-graphic/index.tsx";

export const DashboardPage = () => {
  const [filter, setFilter] = useState<"receita" | "despesa">("receita");
  const [metas, setMetas] = useState<Meta[]>([]);
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleShowInput = () => {
    if (showInput === false) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  useEffect(() => {
    const metasSalvas = JSON.parse(localStorage.getItem("metas") || "[]");
    setMetas(metasSalvas);
  }, []);

  const atualizarValor = (id: number, novoValor: number) => {
    const novasMetas = metas.map((meta) =>
      meta.id === id ? { ...meta, valorAtual: novoValor } : meta
    );
    setMetas(novasMetas);
    localStorage.setItem("metas", JSON.stringify(novasMetas));
  };

  return (
    <div className=" p-8 bg-gray-300 dark:bg-zinc-900">
      <div className="flex flex-row w-full min-h-screen rounded-xl p-6 bg-gray-300 dark:bg-zinc-900  dark:text-white gap-6">
        <div className="w-1/4 bg-gray-200 dark:bg-zinc-800 p-4 rounded-xl">
          <h2 className="text-lg dark:text-white font-semibold mb-4">
            Histórico
          </h2>
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[calc(100vh-270px)] rounded-xl scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-zinc-500 scrollbar-track-transparent">
            <div className="pr-2">
              <DashboardHistory />
            </div>
          </div>

          <div className="p-4 bg-slate-100 dark:bg-zinc-900 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-orange-500 dark:text-purple-400 mb-2">
              Dica de Finanças
            </h3>
            <p className="text-sm text-black dark:text-gray-300">
              Evite gastar mais do que você ganha. Acompanhe seus gastos e
              defina metas mensais para manter sua saúde financeira em dia!
            </p>
          </div>
          <div className="p-4 mt-4 bg-slate-100  dark:bg-zinc-900 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-orange-500 dark:text-purple-400 mb-2">
              Dica de Finanças
            </h3>
            <p className="text-sm text-black dark:text-gray-300">
              Evite compras por impulso: espere 24 horas antes de comprar algo
              não essencial. Muitas vezes, você perceberá que não precisa
              realmente daquilo.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-3/4 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <DashboardTotals setFilter={setFilter} />
            <DashboardGoals
              showForm={showInput}
              onToggleForm={handleShowInput}
            />
          </div>
          <div className="flex gap-4 g-[3000px]">
            <div className="w-4/5 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl">
              <BarGraphic filter={filter} />
            </div>
            <div className="w-2/5 bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl text-[15px]">
              <PizzaGraphic />
            </div>
          </div>
          <div className="w-full bg-slate-100 dark:bg-zinc-800 p-4 rounded-xl">
            <LineGraphic />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {metas.length === 0 ? (
          <p>Nenhuma meta adicionada ainda.</p>
        ) : (
          metas.map((meta) => (
            <MetaCard key={meta.id} meta={meta} onAtualizar={atualizarValor} />
          ))
        )}
      </div>
      <CalculadoraJuros />
    </div>
  );
};
