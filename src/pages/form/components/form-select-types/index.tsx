import { ErrorMessage } from "../../../../components/error-message/index.tsx";
import { FormTypeProps } from "./index";

export const FormSelectType = (props: FormTypeProps) => {
  const { register, error } = props;
  return (
    <div>
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
      {error && <ErrorMessage error={error} />}
    </div>
  );
};
