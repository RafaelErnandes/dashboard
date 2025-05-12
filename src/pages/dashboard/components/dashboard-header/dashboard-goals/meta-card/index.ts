import { Meta } from "../meta-form";

export type MetaCardProps = {
  meta: Meta;
  onAtualizar: (id: number, novoValorAtual: number) => void;
  onRemover: (id: number) => void;
};
