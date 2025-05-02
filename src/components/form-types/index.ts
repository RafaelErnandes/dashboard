import { FormData } from "../../pages/form/index";
import { UseFormRegister } from "react-hook-form";

export type FormTypeProps = {
  register: UseFormRegister<FormData>;
  error?: string;
};
