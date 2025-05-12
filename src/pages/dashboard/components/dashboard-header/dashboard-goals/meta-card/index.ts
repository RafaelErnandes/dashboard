import { Meta } from "../meta-form";

export type MetaCardProps = {
  meta: Meta;
  onAtualizar: (id: string, novoValorAtual: number) => void;
  onRemover: (id: string) => void;
};
