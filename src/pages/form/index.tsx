import "react-datepicker/dist/react-datepicker.css";

import { FormBody } from "./components/form-content/form-body/index.tsx";
import { ToggleTheme } from "../../components/toggle-theme/index.tsx";
import bannerImg from "../../images/bannerImg.jpg";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex h-screen min-h-[600px]">
      <div className="w-full md:w-1/3 bg-gray-100 dark:bg-zinc-900 flex items-center px-6 py-8">
        <div className="flex flex-col gap-6 max-w-md mx-auto text-gray-900 dark:text-white">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500 dark:text-purple-600">
                Cadastro de Receitas e Despesas
              </h2>
              <ToggleTheme />
            </div>
            <span className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
              Insira seus dados para cadastro
            </span>
          </div>
          <FormBody />
          <button
            onClick={handleGoToDashboard}
            className="mt-4 py-2 px-4 button-base"
          >
            Ir para Dashboard
          </button>
        </div>
      </div>
      <div className="hidden md:block w-2/3 bg-gray-200 dark:bg-zinc-800">
        <img
          src={bannerImg}
          alt="Imagem meramente ilustrativa do dashboard"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
