import { FieldError } from "react-hook-form";
import { FocusEventHandler } from "react";

export type InputProps = {
  placeholder?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
  step?: number;
  error?: FieldError;
  value?: number | string;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
