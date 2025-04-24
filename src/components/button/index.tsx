import { ButtonProps } from "./index";

export const Button = (props: ButtonProps) => {
  const { children, type } = props;
  return (
    <button type={type} className="button-base dark:button-base-dark">
      {children}
    </button>
  );
};
