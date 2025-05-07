import "react-datepicker/dist/react-datepicker.css";

import { FormBody } from "../../components/form-content/form-body/index.tsx";
import { ToggleTheme } from "../../components/toggle-theme/index.tsx";
import imageTeste from "../../images/imgTeste.png";

export const Form = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-gray-100 dark:bg-zinc-900 flex items-center px-8">
        <div className="flex flex-col gap-6 3xl:w-[450px] text-gray-900 dark:text-white">
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
          <FormBody />
        </div>
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
