import { FieldError } from "react-hook-form";

export type ErrorMessageProps = {
  error: string | FieldError | undefined;
};
