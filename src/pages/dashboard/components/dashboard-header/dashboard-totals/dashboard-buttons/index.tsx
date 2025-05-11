import { DashboardButtonsProps } from ".";
import { MetaButton } from "./meta-button/index.tsx";
import { ToggleTheme } from "../../../../../../components/toggle-theme/index.tsx";

export const DashboardButtons = (props: DashboardButtonsProps) => {
  const { onClick } = props;

  return (
    <div className="flex gap-2">
      <ToggleTheme />
      <MetaButton onClick={onClick} />
    </div>
  );
};
