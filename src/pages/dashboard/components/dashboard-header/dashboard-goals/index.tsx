import { ArrowLeftToLine } from "lucide-react";
import { Button } from "../../../../../components/button/index.tsx";
import { DashboardGoalsProps } from "./index.ts";
import { Meta } from "./meta-form/index.ts";
import { MetaForm } from "./meta-form/index.tsx";
import { useNavigate } from "react-router-dom";

export const DashboardGoals = (props: DashboardGoalsProps) => {
  const { showForm, onToggleForm } = props;

  const navigate = useNavigate();

  const adicionarMeta = (meta: Meta) => {
    const metasSalvas = JSON.parse(localStorage.getItem("metas") || "[]");
    const novasMetas = [...metasSalvas, meta];
    localStorage.setItem("metas", JSON.stringify(novasMetas));
  };

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-end">
        <Button
          type="button"
          className="flex flex-col items-center text-white"
          onClick={handleReturn}
        >
          <ArrowLeftToLine className=" cursor-pointer" />
          <span>Retornar</span>
        </Button>
      </div>
      {showForm === true ? (
        <div>
          <h2 className="text-xl font-bold mb-2">Criar nova meta:</h2>
          <MetaForm onAdd={adicionarMeta} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
