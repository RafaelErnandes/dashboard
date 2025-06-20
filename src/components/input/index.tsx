import { ErrorMessage } from "../error-message/index.tsx";
import { InputProps } from "./index";

export const Input = (props: InputProps) => {
  const { placeholder, type, ref, step, error, value, onFocus, ...rest } =
    props;

  return (
    <>
      <input
        ref={ref}
        type={type}
        className="input-base"
        step={step}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        {...rest}
      />
      {error && <ErrorMessage error={error} />}
    </>
  );
};
