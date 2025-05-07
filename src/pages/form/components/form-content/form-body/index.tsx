import { FormActions } from "../form-actions/index.tsx";
import { FormFields } from "../form-fields/index.tsx";
import { useFormLogic } from "../hooks/useFormLogic.ts";

export const FormBody = () => {
  const {
    register,
    handleSubmit,
    errors,
    reset,
    handleSave,
    selectedDate,
    setSelectedDate,
    selectedType,
    setValue,
  } = useFormLogic();

  return (
    <form onSubmit={handleSubmit(handleSave)} className="flex flex-col gap-6">
      <FormFields
        register={register}
        errors={errors}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedType={selectedType}
        setValue={setValue}
      />
      <FormActions reset={reset} />
    </form>
  );
};
