import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { useStoreData } from "../../../../../hooks/use-stored-data";
import { useThemeStore } from "../../../../../components/toggle-theme";

export const PizzaGraphic = () => {
  const isDark = useThemeStore((state) => state.isDark);
  const financeData = useStoreData();

  const totalReceitas = financeData.filter(
    (item) => item.type === "receita"
  ).length;
  const totalDespesas = financeData.filter(
    (item) => item.type === "despesa"
  ).length;

  const data = [
    { name: "Receitas", value: totalReceitas },
    { name: "Despesas", value: totalDespesas },
  ];

  const COLORS = isDark ? ["#2563EB", "#9333EA"] : ["#a855f7", "#f97316"];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip content={CustomPizzaGraphicTooltip} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

const CustomPizzaGraphicTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white dark:bg-zinc-800 flex flex-col gap-2 rounded-md border border-gray-300 dark:border-zinc-600 shadow-lg">
        {payload.map((entry, index) => {
          const isReceita = entry.name === "Receitas";
          const textColor = isReceita
            ? "text-violet-500 dark:text-blue-400"
            : "text-orange-500 dark:text-purple-400";

          return (
            <p key={index} className={`text-sm ${textColor}`}>
              {entry.name}:
              <span className="ml-2">{entry.value} lançamentos</span>
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};
