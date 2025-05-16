import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

import { useFinanceStore } from "../../../../../hooks/use-finance-store";
import { useThemeStore } from "../../../../../components/toggle-theme";

export const LineGraphic = () => {
  const financeData = useFinanceStore((state) => state.financeData);
  const isDark = useThemeStore((state) => state.isDark);

  const chartData = financeData.map((item) => ({
    date: item.date,
    value: Number(item.value),
    type: item.type,
  }));

  const lineColor = isDark ? "#3B82F6" : "#f97316";
  const axisColor = isDark ? "#fff" : "#000";
  const gridColor = isDark ? "#4b5563" : "#BEBEBE";

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg mb-4">
        Gráfico de Evolução de Despesas e Receitas
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="date" stroke={axisColor} />
          <YAxis stroke={axisColor} />
          <Tooltip content={CustomLineGraphicTooltip} />
          <Line type="monotone" dataKey="value" stroke={lineColor} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomLineGraphicTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const { date, value, type } = payload[0].payload;
    return (
      <div className="p-4 bg-white dark:bg-zinc-800 flex flex-col gap-2 rounded-md shadow-xl/25">
        <p className="text-sm text-orange-500 dark:text-blue-500">
          Data: <span className="ml-2 text-black dark:text-white">{date}</span>
        </p>
        <p className="text-sm text-orange-500 dark:text-blue-500">
          Valor:
          <span className="ml-2 text-black dark:text-white">${value}</span>
        </p>
        <p className="text-sm text-orange-500 dark:text-blue-500">
          Tipo:
          <span className="ml-2 text-black dark:text-white capitalize">
            {type}
          </span>
        </p>
      </div>
    );
  }
  return null;
};
