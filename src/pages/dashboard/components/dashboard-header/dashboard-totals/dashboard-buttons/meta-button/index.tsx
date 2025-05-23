import * as Tooltip from "@radix-ui/react-tooltip";

import { Goal } from "lucide-react";
import { MetaButtonProps } from ".";

export const MetaButton = (props: MetaButtonProps) => {
  const { onClick } = props;

  return (
    <Tooltip.TooltipProvider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            className="bg-zinc-100 p-2 rounded-sm dark:bg-zinc-700 flex items-center cursor-pointer"
            onClick={onClick}
          >
            <Goal />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-zinc-100 dark:bg-zinc-700 dark:text-white text-sm px-2 py-1 rounded shadow"
            side="top"
            sideOffset={5}
          >
            Criar metas
            <Tooltip.Arrow className="fill-slate-100 dark:fill-zinc-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.TooltipProvider>
  );
};
