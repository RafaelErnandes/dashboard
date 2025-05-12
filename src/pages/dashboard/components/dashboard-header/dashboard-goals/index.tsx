import { ArrowLeftToLine } from "lucide-react";
import { Button } from "../../../../../components/button/index.tsx";
import { DashboardGoalsProps } from "./index.ts";
import { MetaForm } from "./meta-form/index.tsx";
import { useNavigate } from "react-router-dom";

export const DashboardGoals = (props: DashboardGoalsProps) => {
  const { showForm, onAdicionarMeta } = props;

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="grid grid-cols-[60%_40%]">
      {showForm === true ? (
        <div>{showForm && <MetaForm onAdd={onAdicionarMeta} />}</div>
      ) : (
        <div></div>
      )}
      <div className="flex justify-end">
        <Button
          type="button"
          className="flex flex-col items-center text-white h-fit"
          onClick={handleReturn}
        >
          <ArrowLeftToLine className=" cursor-pointer" />
          <span>Retornar</span>
        </Button>
      </div>
    </div>
  );
};
