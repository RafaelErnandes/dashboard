import { Calendar } from "../../../../../components/calendar/index.tsx";
import { FormFieldProps } from "./index.ts";
import { FormSelectCategories } from "../../form-select-categories/index.tsx";
import { FormSelectType } from "../../form-select-types/index.tsx";
import { Input } from "../../../../../components/input/index.tsx";
import { Label } from "../../../../../components/label/index.tsx";

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
          <Label>
            <span>Valor</span>
          </Label>
          <Input
            type="number"
            step={0.01}
            placeholder="Ex: 1500, 1929.32"
            {...register("value", {
              required: "Valor é obrigatório",
            })}
            error={errors.value?.message}
          />
        </div>
        <div className="w-full">
          <Label>
            <span>Data</span>
          </Label>

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
        <Label>
          <span>Descrição</span>
        </Label>
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
        <Label>
          <span>Categoria</span>
        </Label>
        <FormSelectCategories
          selectedType={selectedType}
          register={register}
          error={errors.category?.message}
        />
      </div>
    </>
  );
};
