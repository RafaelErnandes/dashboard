import { useForm, useWatch } from "react-hook-form";

import { ErrorMessage } from "../../../../components/error-message/index.tsx";
import { FormJuros } from "./index.ts";
import { Input } from "../../../../components/input/index.tsx";

export const CalculadoraJuros = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useForm<FormJuros>({
    defaultValues: {
      valorInicial: 0,
      taxaJuros: 0,
      periodos: 0,
    },
  });

  const [valorInicial = 0, taxaJuros = 0, periodos = 0] = useWatch({
    control,
    name: ["valorInicial", "taxaJuros", "periodos"],
  });

  const calcularResultadoFinal = () => {
    const taxa = taxaJuros / 100;

    const montanteSimples = valorInicial * (1 + taxa * periodos);
    const jurosSimples = montanteSimples - valorInicial;

    const montanteComposto = valorInicial * Math.pow(1 + taxa, periodos);
    const jurosCompostos = montanteComposto - valorInicial;

    return { jurosSimples, montanteSimples, jurosCompostos, montanteComposto };
  };

  const { jurosSimples, montanteSimples, jurosCompostos, montanteComposto } =
    calcularResultadoFinal();

  return (
    <>
      <div>
        <h1 className="text-orange-500 dark:text-purple-400 text-5xl font-bold mb-2">
          Calcule seus juros com a nossa tabela
        </h1>
        <span className="dark:text-white text-3xl block mb-2">
          Saiba como organizar seu dinheiro
        </span>
        <p className="text-gray-700 dark:text-gray-300 text-xl mb-2 max-w-2xl">
          Entender como os juros compostos funcionam pode ajudar você a planejar
          melhor seus investimentos e evitar dívidas que crescem rapidamente.
        </p>
      </div>
      <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4 text-orange-500 dark:text-purple-400">
          Comparativo de Juros (12% ao ano)
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block mb-1 text-sm dark:text-slate-100">
              Valor Inicial (R$)
            </label>
            <Input
              type="number"
              {...register("valorInicial", { valueAsNumber: true })}
            />
            {errors.valorInicial && (
              <ErrorMessage error={errors.valorInicial} />
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm dark:text-slate-100">
              Taxa de Juros (%)
            </label>
            <Input
              type="number"
              {...register("taxaJuros", { valueAsNumber: true })}
            />
            {errors.taxaJuros && <ErrorMessage error={errors.taxaJuros} />}
          </div>
          <div>
            <label className="block mb-1 text-sm dark:text-slate-100">
              Períodos (meses)
            </label>
            <Input
              type="number"
              {...register("periodos", { valueAsNumber: true })}
            />
            {errors.periodos && <ErrorMessage error={errors.periodos} />}
          </div>
        </div>

        {valorInicial > 0 && taxaJuros > 0 && periodos > 0 && (
          <div className="grid grid-cols-3 gap-6 text-center mt-6">
            <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl shadow-md">
              <h3 className="text-sm font-semibold dark:text-slate-100">
                Juros Simples
              </h3>
              <p className="text-lg text-orange-500 dark:text-purple-400">
                R$ {montanteSimples.toFixed(2)}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Juros: R$ {jurosSimples.toFixed(2)}
              </span>
            </div>

            <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl shadow-md">
              <h3 className="text-sm font-semibold dark:text-slate-100">
                Juros Compostos
              </h3>
              <p className="text-lg text-orange-500 dark:text-purple-400">
                R$ {montanteComposto.toFixed(2)}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Juros: R$ {jurosCompostos.toFixed(2)}
              </span>
            </div>

            <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-xl shadow-md">
              <h3 className="text-sm font-semibold dark:text-slate-100">
                Diferença
              </h3>
              <p className="text-lg text-orange-500 dark:text-purple-400">
                R$ {Math.abs(jurosCompostos - jurosSimples).toFixed(2)}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                A mais com juros compostos
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
