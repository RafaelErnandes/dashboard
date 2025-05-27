import { FieldError, UseFormRegister } from "react-hook-form";

import { FormData } from "../../index";

export type FormTypeProps = {
  register: UseFormRegister<FormData>;
  error?: FieldError;
};
