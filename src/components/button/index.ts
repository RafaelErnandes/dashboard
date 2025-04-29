export type ButtonProps = {
  children: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
};
