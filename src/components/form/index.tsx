import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";

import { Button } from "../button/index.tsx";
import { Calendar } from "../calendar/index.tsx";
import { FormCategories } from "../form-categories/index.tsx";
import { FormData } from "./index.ts";
import { FormType } from "../form-types/index.tsx";
import { Input } from "../input/index.tsx";
import { Label } from "../label/index.tsx";
import { ToggleTheme } from "../toggle-theme/index.tsx";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  useEffect(() => {
    setValue("date", new Date());
  }, [setValue]);

  const navigate = useNavigate();

  const selectedType = watch("type");

  const handleSave = (data: FormData) => {
    const formattedDate = data.date
      ? format(data.date, "dd/MM/yyyy")
      : "sem data";

    const finalData = {
      ...data,
      date: formattedDate,
    };
    const currentData = JSON.parse(localStorage.getItem("financeData") || "[]");
    currentData.push(finalData);
    localStorage.setItem("financeData", JSON.stringify(currentData));

    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(handleSave)}
      className="flex flex-col p-6 bg-gray-200 dark:bg-zinc-900 w-96 text-gray-900 dark:text-white rounded-lg shadow-lg gap-4"
    >
      <div className="flex item-">
        <span className="text-lg">Cadastro de Receitas/Despesas Pessoais</span>
        <ToggleTheme />
      </div>
      <FormType register={register} error={errors.type?.message} />
      <Label>
        <span>Valor:</span>
      </Label>
      <Input
        type="number"
        step={0.01}
        placeholder="input your value..."
        {...register("value")}
      />
      <Label>
        <span>Descrição:</span>
      </Label>
      <Input
        type="text"
        placeholder="Ex: 'aluguel', 'salário', 'netflix'"
        {...register("description")}
      />
      <Label>
        <span>Selecione a data:</span>
      </Label>
      <Calendar
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          setValue("date", date ?? undefined);
        }}
      />
      <Label>
        <span>Categoria:</span>
      </Label>
      <FormCategories selectedType={selectedType} register={register} />

      <Button type="submit">Enviar</Button>
    </form>
  );
};
