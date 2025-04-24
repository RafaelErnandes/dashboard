import { LabelProps } from "./index";
import React from "react";

export const Label = (props: LabelProps) => {
  const { children } = props;
  return <label>{children}</label>;
};
