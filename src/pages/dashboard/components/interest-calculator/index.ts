import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export type FormJuros = {
  valorInicial: number;
  taxaJuros: number;
  periodos: number;
};

export type FormFieldsJurosProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  error?: string;
};
