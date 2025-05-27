import { ErrorMessageProps } from "./index";

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { error } = props;

  return <p className="text-red-500 text-sm">{error?.message}</p>;
};
