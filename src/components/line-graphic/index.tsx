import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useStoreData } from "../../hooks/use-stored-data";

export const LineGraphic = () => {
  const financeData = useStoreData();

  const chartData = financeData.map((item) => ({
    category: item.category,
    value: Number(item.value),
    type: item.type,
  }));

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-lg mb-4">
        Gráfico de Evolução de Despesas e Receitas
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#737270" />
          <YAxis stroke="#737270" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4F84B1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
