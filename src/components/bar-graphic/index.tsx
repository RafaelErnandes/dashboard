import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useStoreData } from "../../hooks/use-stored-data";

export const BarGraphic = () => {
  const financeData = useStoreData();

  const chartData = financeData.map((item) => ({
    category: item.category,
    value: Number(item.value),
    type: item.type,
  }));

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg mb-4">Gráfico de Receitas e Despesas</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" stroke="#737270" />
          <YAxis stroke="#737270" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4F84B1" name="Valor" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
