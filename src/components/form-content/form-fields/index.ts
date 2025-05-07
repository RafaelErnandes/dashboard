import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

import { FormData } from "../../../pages/form";

export type FormFieldProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedType: string;
  setValue: UseFormSetValue<FormData>;
};
