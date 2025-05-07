import { useEffect, useState } from "react";

import { FormData } from "../../../pages/form/index"; // ajuste para o caminho correto
import { format } from "date-fns";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const selectedType = watch("type");
  const navigate = useNavigate();

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
