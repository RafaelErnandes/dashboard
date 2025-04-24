import { CalendarProps } from "./index";
import DatePicker from "react-datepicker";

export const Calendar = (props: CalendarProps) => {
  const { selected, onChange, error } = props;

  return (
    <div>
      <DatePicker
        selected={selected}
        onChange={(date) => {
          onChange(date);
        }}
        placeholderText="Selecione uma data"
        dateFormat="dd/MM/yyyy"
        className="input-base"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
