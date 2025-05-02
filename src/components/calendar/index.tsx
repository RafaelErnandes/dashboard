import "../../index.css";

import { CalendarProps } from "./index";
import DatePicker from "react-datepicker";

export const Calendar = (props: CalendarProps) => {
  const { selected, onChange } = props;

  return (
    <div className="flex gap-1">
      <DatePicker
        selected={selected}
        onChange={(date) => {
          onChange(date);
        }}
        placeholderText="Selecione uma data"
        dateFormat="dd/MM/yyyy"
        className="input-base"
      />
    </div>
  );
};
