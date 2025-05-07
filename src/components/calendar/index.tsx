import "../../index.css";

import { CalendarProps } from "./index";
import DatePicker from "react-datepicker";
import React from "react";

export const Calendar = (props: CalendarProps) => {
  const { selected, onChange } = props;

  return (
    <DatePicker
      selected={selected}
      onChange={(date) => {
        onChange(date);
      }}
      placeholderText="Selecione uma data"
      dateFormat="dd/MM/yyyy"
      className="input-base"
      wrapperClassName="w-full"
    />
  );
};
