export const Arma = {
    nome: "arma",
    atributos: [
      { nome: "nome", tipo: "string" },
      { nome: "valor", tipo: "number" },
      { nome: "peso", tipo: "number" },
      { nome: "dataFabricacao", tipo: "string" },
      { nome: "raridade", tipo: "string" },
      { nome: "ferreiro", tipo: "foreign", referencia: "ferreiro" },
      { nome: "dano", tipo: "number" },
      { nome: "tipo", tipo: "string" }
    ]
};