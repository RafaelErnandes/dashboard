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

import { useStoreData } from "../../../../../hooks/use-stored-data";
import { useThemeStore } from "../../../../../components/toggle-theme";

export const LineGraphic = () => {
  const financeData = useStoreData();
  const isDark = useThemeStore((state) => state.isDark);

  const chartData = financeData.map((item) => ({
    category: item.category,
    value: Number(item.value),
    type: item.type,
  }));

  const lineColor = isDark ? "#3B82F6" : "#f97316";
  const axisColor = isDark ? "#fff" : "#000";
  const gridColor = isDark ? "#4b5563" : "#fff";

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg mb-4 ">
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
    return (
      <div className="p-4 bg-white dark:bg-zinc-800 flex flex-col gap-2 rounded-md shadow-lg">
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-orange-500 dark:text-blue-500">
            {entry.name}:<span className="ml-2">${entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
};
