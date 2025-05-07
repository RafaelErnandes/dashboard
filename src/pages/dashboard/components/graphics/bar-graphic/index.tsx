import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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

export const BarGraphic = () => {
  const financeData = useStoreData();
  const isDark = useThemeStore((state) => state.isDark);

  const chartData = financeData.map((item) => ({
    category: item.category,
    value: Number(item.value),
    type: item.type,
  }));

  const barColor = isDark ? "#9333ea" : "#f97316";
  const axisColor = isDark ? "#fff" : "#000";
  const gridColor = isDark ? "#4b5563" : "#fff";

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg mb-4">Gráfico de Receitas e Despesas</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="category" stroke={axisColor} />
          <YAxis stroke={axisColor} />
          <Tooltip content={<CustomBarGraphicTooltip />} />
          <Legend />
          <Bar dataKey="value" name="Valor" fill={barColor} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomBarGraphicTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white dark:bg-zinc-800 flex flex-col gap-2 rounded-md shadow-lg">
        <p className="text-base">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className="text-sm text-orange-500 dark:text-purple-400"
          >
            {entry.name}:<span className="ml-2">${entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};
