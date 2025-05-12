import { Button } from "../../../../../../components/button/index.tsx";
import { MetaCardProps } from "./index";

export const MetaCard = (props: MetaCardProps) => {
  const { meta, onAtualizar, onRemover } = props;

  const adicionarValor = () => {
    const valor = parseFloat(prompt("Quanto deseja adicionar") || "0");
    if (!isNaN(valor)) {
      const novoValor = meta.valorAtual + valor;

      if (novoValor >= meta.valorMeta) {
        onRemover(meta.id);
      } else {
        onAtualizar(meta.id, novoValor);
      }
    }
  };

  return (
    <div className="mr-5">
      <div
        className="p-4 rounded bg-slate-100 dark:bg-zinc-800 dark:text-white mb-5 shadow-lg"
        id={`id-${meta.id}`}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-orange-500 dark:text-purple-400 capitalize">
            {meta.nome}
          </h3>
          <p>
            {meta.valorAtual} / {meta.valorMeta}
          </p>

          <progress
            value={meta.valorAtual}
            max={meta.valorMeta}
            className="w-full h-3 rounded overflow-hidden progess-base"
          ></progress>

          <Button
            type="submit"
            onClick={adicionarValor}
            className="bg-orange-500 text-white dark:bg-purple-600 p-1 rounded-sm mt-3 w-50 cursor-pointer"
          >
            Adicionar Valor
          </Button>
        </div>
      </div>
    </div>
  );
};
