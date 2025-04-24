export type CalendarProps = {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
};
