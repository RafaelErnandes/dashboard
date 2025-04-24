import { FormCategoriesProps } from "./index";

export const FormCategories = (props: FormCategoriesProps) => {
  const { selectedType, register } = props;
  return (
    <select {...register("category")} className="input-base" required>
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
  );
};
