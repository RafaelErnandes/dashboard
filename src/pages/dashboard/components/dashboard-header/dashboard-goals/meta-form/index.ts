export type MetaFormProps = {
  onAdd: (data: Meta) => void;
};

export type Meta = {
  id: string;
  nome: string;
  valorMeta: number;
  valorAtual: number;
};

export type MetaFormData = {
  nome: string;
  valorMeta: string;
};
