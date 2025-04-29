import { LabelProps } from "./index";

export const Label = (props: LabelProps) => {
  const { children } = props;
  return <label className="flex flex-col">{children}</label>;
};
