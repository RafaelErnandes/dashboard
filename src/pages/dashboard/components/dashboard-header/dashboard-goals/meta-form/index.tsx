import { MetaFormData, MetaFormProps } from "./index";

import { Button } from "../../../../../../components/button/index.tsx";
import { CircleCheckBig } from "lucide-react";
import { Input } from "../../../../../../components/input/index.tsx";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export const MetaForm = (props: MetaFormProps) => {
  const { onAdd } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MetaFormData>();

  const onSubmit = (data: MetaFormData) => {
    onAdd({
      id: uuidv4(),
      nome: data.nome,
      valorMeta: parseFloat(data.valorMeta),
      valorAtual: 0,
    });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-2">Criar nova meta:</h2>
          <Button
            type="submit"
            className="bg-green-500 text-white p-1 rounded-md cursor-pointer flex items-center"
          >
            <CircleCheckBig />
          </Button>
        </div>
        <div>
          <Input
            type="text"
            {...register("nome", { required: "O nome da meta é obrigatório" })}
            placeholder="Nome da meta"
            error={errors.nome?.message}
          />
        </div>
        <div>
          <Input
            type="number"
            {...register("valorMeta", {
              required: "O valor da meta é obrigatório",
              validate: (value) =>
                parseFloat(value) > 0 || "O valor deve ser maior que zero",
            })}
            placeholder="Valor da meta"
            error={errors.valorMeta?.message}
          />
        </div>
      </form>
    </>
  );
};
