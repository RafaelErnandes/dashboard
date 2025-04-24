import { FormData } from "../form/index";
import { UseFormRegister } from "react-hook-form";

export type FormTypeProps = {
  register: UseFormRegister<FormData>;
  error?: string;
};
