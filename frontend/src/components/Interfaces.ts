export interface Atributo {
  nome: string
  tipo: string
  referencia?: string
  required?: boolean
}

export interface Entidade {
  nome: string;
  atributos: Atributo[];
}

export interface Props {
  entidade: Entidade;
}