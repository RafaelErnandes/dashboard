import { ButtonProps } from "./index";

export const Button = (props: ButtonProps) => {
  const { children, type, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="button-base dark:button-base-dark"
    >
      {children}
    </button>
  );
};
