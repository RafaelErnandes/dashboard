import { Button } from "../../../../../../components/button/index.tsx";
import { MetaCardProps } from "./index";

export const MetaCard = (props: MetaCardProps) => {
  const { meta, onAtualizar } = props;

  const progresso = (meta.valorAtual / meta.valorMeta) * 100;

  const adicionarValor = () => {
    const valor = parseFloat(prompt("Quanto deseja adicionar") || "0");
    if (!isNaN(valor)) {
      onAtualizar(meta.id, meta.valorAtual + valor);
    }
  };

  return (
    <div className="p-4 border rounded dark:text-white">
      <div className="flex flex-col gap-1">
        <h3 className="text-purple-400 capitalize">{meta.nome}</h3>
        <p>
          {meta.valorAtual.toFixed(2)} / {meta.valorMeta.toFixed(2)}
        </p>
        <div className="w-full h-3 bg-gray-300 rounded">
          <div
            className="h-full bg-green-500 rounded"
            style={{ width: `${Math.min(progresso, 100)}%` }}
          ></div>
        </div>
        <Button
          type="submit"
          onClick={adicionarValor}
          className="dark:bg-purple-600 p-1 rounded-sm mt-3 w-50"
        >
          Adicionar Valor
        </Button>
      </div>
    </div>
  );
};
