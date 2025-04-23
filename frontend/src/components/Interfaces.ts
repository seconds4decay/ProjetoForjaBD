export interface Atributo {
  nome: string;
  tipo: string;
  referencia?: string;
}

export interface Entidade {
  nome: string;
  atributos: Atributo[];
}

export interface Props {
  entidade: Entidade;
}