import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: () => void;
};
