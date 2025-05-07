import { ArrowRightFromLine, CircleX } from "lucide-react";

import { Button } from "../../../../../components/button/index.tsx";
import { FormActionsProps } from "./index.ts";

export const FormActions = (props: FormActionsProps) => {
  const { reset } = props;

  return (
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
  );
};
