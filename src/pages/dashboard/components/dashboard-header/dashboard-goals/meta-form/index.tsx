import { MetaFormData, MetaFormProps } from "./index";

import { Button } from "../../../../../../components/button/index.tsx";
import { Input } from "../../../../../../components/input/index.tsx";
import { useForm } from "react-hook-form";

export const MetaForm = (props: MetaFormProps) => {
  const { onAdd } = props;

  const { register, handleSubmit, reset } = useForm<MetaFormData>();

  const onSubmit = (data: MetaFormData) => {
    onAdd({
      id: Date.now(),
      nome: data.nome,
      valorMeta: parseFloat(data.valorMeta),
      valorAtual: 0,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Input type="text" {...register("nome")} placeholder="Nome da meta" />
      <Input
        type="number"
        {...register("valorMeta")}
        placeholder="Valor da meta"
      />
      <Button
        type="submit"
        className="bg-green-500 p-1 rounded-md cursor-pointer"
      >
        Criar Meta
      </Button>
    </form>
  );
};
