import { Calendar } from "../../../../../components/calendar/index.tsx";
import { FormFieldProps } from "./index.ts";
import { FormSelectCategories } from "../../form-select-categories/index.tsx";
import { FormSelectType } from "../../form-select-types/index.tsx";
import { Input } from "../../../../../components/input/index.tsx";
import { MoneyInput } from "../../../../../components/money-input/index.tsx";

export const FormFields = (props: FormFieldProps) => {
  const {
    errors,
    register,
    selectedDate,
    selectedType,
    setSelectedDate,
    setValue,
  } = props;

  return (
    <>
      <FormSelectType register={register} error={errors.type?.message} />

      <div className="flex gap-4">
        <div className="w-full">
          <label>
            <span>Valor</span>
          </label>
          <MoneyInput
            onChangeValue={(_, originalValue) => {
              const parsed =
                typeof originalValue === "string"
                  ? parseFloat(originalValue)
                  : originalValue;
              setValue("value", isNaN(parsed) ? 0 : parsed, {
                shouldValidate: true,
              });
            }}
          />
        </div>
        <div className="w-full">
          <label>
            <span>Data</span>
          </label>

          <Calendar
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setValue("date", date ?? undefined);
            }}
          />
        </div>
      </div>

      <div className="w-full">
        <label>
          <span>Descrição</span>
        </label>
        <Input
          type="text"
          placeholder="Ex: Aluguel, Salário, Netflix"
          {...register("description", {
            required: "Descrição é obrigatório",
          })}
          error={errors.description?.message}
        />
      </div>

      <div>
        <label>
          <span>Categoria</span>
        </label>
        <FormSelectCategories
          selectedType={selectedType}
          register={register}
          error={errors.category?.message}
        />
      </div>
    </>
  );
};
