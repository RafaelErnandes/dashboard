import { FormData } from "../../pages/form";
import { UseFormRegister } from "react-hook-form";

export type FormCategoriesProps = {
  selectedType: string;
  register: UseFormRegister<FormData>;
  error?: string;
};
