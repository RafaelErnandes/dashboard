export type MoneyInputProps = {
  onChangeValue?: (
    event: React.ChangeEvent<HTMLInputElement>,
    originalValue: number,
    maskedValue: string
  ) => void;
};
