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

import { BarGraphicProps } from ".";
import { useFinanceStore } from "../../../../../hooks/use-finance-store";
import { useThemeStore } from "../../../../../components/toggle-theme";

export const BarGraphic = (props: BarGraphicProps) => {
  const { filter } = props;

  const financeData = useFinanceStore((state) => state.financeData);
  const isDark = useThemeStore((state) => state.isDark);

  const filteredData = financeData.filter((item) => {
    if (filter === "todos") return true;
    return item.type === filter;
  });

  const chartData = filteredData.reduce((acc, item) => {
    const existingCategory = acc.find(
      (entry) => entry.category === item.category
    );
    if (existingCategory) {
      existingCategory.value += Number(item.value);
    } else {
      acc.push({
        category: item.category,
        value: Number(item.value),
        type: item.type,
      });
    }
    return acc;
  }, [] as { category: string; value: number; type: string }[]);

  const barColor = isDark ? "#9333ea" : "#f97316";
  const axisColor = isDark ? "#fff" : "#000";
  const gridColor = isDark ? "#4b5563" : "#BEBEBE";

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg mb-4">{`Gráfico de ${
        filter === "receita"
          ? "Receitas"
          : filter === "despesa"
          ? "Despesas"
          : "Receitas e Despesas"
      }`}</h2>
      {chartData.length === 0 ? (
        <div className="text-center text-gray-600 dark:text-gray-300 text-lg py-20">
          Nenhum dado disponível para exibir o gráfico.
        </div>
      ) : (
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
      )}
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
