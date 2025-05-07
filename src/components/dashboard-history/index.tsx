import { useStoreData } from "../../hooks/use-stored-data";

export const DashboardHistory = () => {
  const financeData = useStoreData();
  return (
    <div className="mb-4 space-y-4">
      {financeData.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-700 dark:bg-zinc-900 text-white p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div className="flex flex-col w-full space-y-1">
            <span className="font-semibold text-sm capitalize">
              {item.description}
            </span>
            <span className="text-xs text-gray-400">{item.category}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium truncate">{`R$ ${
              item.value ? item.value : 0
            }`}</span>
            <span className="text-xs text-gray-400">
              {item.date?.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
