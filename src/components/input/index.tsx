import { InputProps } from "./index";

export const Input = (props: InputProps) => {
  const { placeholder, type, ref, step, ...rest } = props;
  return (
    <input
      ref={ref}
      type={type}
      className="input-base"
      step={step}
      placeholder={placeholder}
      required
      {...rest}
    />
  );
};
