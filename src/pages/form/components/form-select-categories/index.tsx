import { FormCategoriesProps } from "./index";

export const FormSelectCategories = (props: FormCategoriesProps) => {
  const { selectedType, register, error } = props;
  return (
    <>
      <select
        {...register("category", { required: "Categoria é obrigatório" })}
        className="input-base"
      >
        <option value="" disabled>
          Selecione uma categoria
        </option>
        {selectedType === "receita" ? (
          <>
            <option value="salario">Salário</option>
            <option value="freelancer">Freelancer</option>
            <option value="investimentos">Investimentos</option>
            <option value="outros-receita">Outros (Receita)</option>
          </>
        ) : (
          <>
            <option value="moradia">Moradia</option>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="lazer">Lazer</option>
            <option value="educacao">Educação</option>
            <option value="saude">Saúde</option>
            <option value="assinaturas">Assinaturas</option>
            <option value="outros-despesa">Outros (Despesa)</option>
          </>
        )}
      </select>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </>
  );
};
