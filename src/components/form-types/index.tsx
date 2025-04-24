import { FormTypeProps } from "./index";

export const FormType = (props: FormTypeProps) => {
  const { register, error } = props;
  return (
    <>
      <select
        {...register("type", { required: "Categoria é obrigatória" })}
        className="input-base"
      >
        <option value="" disabled>
          Escolha o tipo
        </option>
        <option value="receita" key="receita">
          Receita
        </option>
        <option value="despesa" key="despesa">
          Despesa
        </option>
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};
