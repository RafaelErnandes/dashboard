import { useEffect, useState } from "react";

import { FormData } from "../../../index"; // ajuste para o caminho correto
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useFinanceStore } from "../../../../../hooks/use-finance-store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const { addItem } = useFinanceStore();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const selectedType = watch("type");

  useEffect(() => {
    if (selectedType === "receita") {
      setValue("category", "salario");
    } else if (selectedType === "despesa") {
      setValue("category", "moradia");
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    register("date", { required: "Data é obrigatória" });
    setValue("date", new Date());
  }, [register, setValue]);

  const handleSave = (data: FormData) => {
    const formattedDate = data.date
      ? format(data.date, "dd/MM/yyyy")
      : format(new Date(), "dd/MM/yyyy");

    const finalData = { ...data, id: uuidv4(), date: formattedDate };

    const currentData = JSON.parse(localStorage.getItem("financeData") || "[]");
    currentData.push(finalData);
    localStorage.setItem("financeData", JSON.stringify(currentData));

    addItem(finalData);

    toast.success("Dados enviados com sucesso!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 100);
  };

  return {
    register,
    handleSubmit,
    errors,
    reset,
    handleSave,
    selectedDate,
    setSelectedDate,
    selectedType,
    setValue,
  };
};
