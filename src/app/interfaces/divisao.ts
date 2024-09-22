export interface Divisao {
  id: string;
  nome: string;
  grupos: Grupo[];
}

export interface Grupo {
  id: string;
  nome: string;
  classes: Classe[];
}

export interface Classe {
  id: string;
  nome: string;
  subclasses: Subclasse[];
}

export interface Subclasse {
  id: string;
  nome: string;
}