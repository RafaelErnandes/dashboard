import { CurrencyInput } from "react-currency-mask";
import { Input } from "../input/index.tsx";
import { MoneyInputProps } from ".";

export const MoneyInput = (props: MoneyInputProps) => {
  const { onChangeValue } = props;

  return (
    <CurrencyInput
      onChangeValue={(event, originalValue, maskedValue) => {
        onChangeValue?.(event, Number(originalValue), String(maskedValue));
      }}
      InputElement={<Input type="text" placeholder="Ex: 1.500,00" />}
    />
  );
};
