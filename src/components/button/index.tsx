import { ButtonProps } from "./index";

export const Button = (props: ButtonProps) => {
  const { children, type, onClick, className } = props;
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
