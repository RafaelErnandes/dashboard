import "react-datepicker/dist/react-datepicker.css";

import { ArrowRightFromLine, CircleX } from "lucide-react";
import { FieldErrors, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import { Button } from "../../components/button/index.tsx";
import { Calendar } from "../../components/calendar/index.tsx";
import { FormCategories } from "../../components/form-categories/index.tsx";
import { FormData } from "./index.ts";
import { FormType } from "../../components/form-types/index.tsx";
import { Input } from "../../components/input/index.tsx";
import { Label } from "../../components/label/index.tsx";
import { ToggleTheme } from "../../components/toggle-theme/index.tsx";
import { format } from "date-fns";
import imageTeste from "../../images/imgTeste.png";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const navigate = useNavigate();
  const selectedType = watch("type");

  useEffect(() => {
    register("date", { required: "Data é obrigatória" });
    setValue("date", new Date());
  }, [register, setValue]);

  const handleSave = (data: FormData) => {
    const formattedDate = data.date
      ? format(data.date, "dd/MM/yyyy")
      : setValue("date", new Date());

    const finalData = { ...data, date: formattedDate };
    const currentData = JSON.parse(localStorage.getItem("financeData") || "[]");
    currentData.push(finalData);
    localStorage.setItem("financeData", JSON.stringify(currentData));

    toast.success("Dados enviados!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 100);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100 dark:bg-zinc-900 flex items-center px-8">
        <form
          onSubmit={handleSubmit(handleSave)}
          className="flex flex-col gap-6 3xl:w-[450px] text-gray-900 dark:text-white"
        >
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl 3xl:text-2xl font-semibold text-orange-500 dark:text-purple-600">
                Cadastro de Receitas e Despesas
              </h2>
              <ToggleTheme />
            </div>
            <span className="text-sm 3xl:text-lg text-gray-600 dark:text-gray-400">
              Insira seus dados para cadastro
            </span>
          </div>

          <FormType register={register} error={errors.type?.message} />

          <div className="flex gap-2">
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
            <FormCategories
              selectedType={selectedType}
              register={register}
              error={errors.category?.message}
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              className="button-base w-1/2 flex justify-center items-center gap-2"
              onClick={() => reset()}
            >
              <CircleX className="w-5 h-5" />
              Limpar tudo
            </Button>

            <Button
              type="submit"
              className="button-base w-1/2 flex justify-center items-center gap-2"
            >
              Enviar
              <ArrowRightFromLine className="w-5 h-5" />
            </Button>
          </div>

          <ToastContainer />
        </form>
      </div>

      <div className="w-2/3 bg-gray-200 dark:bg-zinc-800">
        <img
          src={imageTeste}
          alt="Imagem meramente ilustrativa do dashboard"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
