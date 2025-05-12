import { Button } from "../../../../../../components/button/index.tsx";
import { MetaCardProps } from "./index";
import { useState } from "react";

export const MetaCard = (props: MetaCardProps) => {
  const { meta, onAtualizar, onRemover } = props;
  const [mostrarInput, setMostrarInput] = useState(false);
  const [valorAdicional, setValorAdicional] = useState("");

  const handleAddValue = () => {
    const valor = parseFloat(valorAdicional);
    if (!isNaN(valor)) {
      const novoValor = meta.valorAtual + valor;

      if (novoValor >= meta.valorMeta) {
        onRemover(meta.id);
      } else {
        onAtualizar(meta.id, novoValor);
      }

      setValorAdicional("");
      setMostrarInput(false);
    }
  };

  return (
    <div className="mr-5">
      <div
        className="p-4 rounded bg-zinc-100 dark:bg-zinc-800 dark:text-white mb-5 shadow-lg"
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
          {mostrarInput ? (
            <div className="flex items-center gap-2 mt-3">
              <input
                type="number"
                value={valorAdicional}
                onChange={(e) => setValorAdicional(e.target.value)}
                placeholder="Valor a adicionar"
                className="p-1 rounded text-black bg-slate-200 dark:text-white dark:bg-zinc-700"
              />
              <Button
                type="button"
                onClick={handleAddValue}
                className="bg-green-500 text-white px-2 py-1 rounded cursor-pointer"
              >
                Confirmar
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setMostrarInput(false);
                  setValorAdicional("");
                }}
                className="bg-gray-500 text-white px-2 py-1 rounded cursor-pointer"
              >
                Cancelar
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              onClick={() => setMostrarInput(true)}
              className="bg-orange-500 text-white dark:bg-purple-600 p-1 rounded-sm mt-3 w-50 cursor-pointer"
            >
              Adicionar Valor
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
