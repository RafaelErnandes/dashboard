export type MetaFormProps = {
  onAdd: (data: Meta) => void;
};

export type Meta = {
  id: number;
  nome: string;
  valorMeta: number;
  valorAtual: number;
};

export type MetaFormData = {
  nome: string;
  valorMeta: string;
};
