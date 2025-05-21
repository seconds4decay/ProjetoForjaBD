export const Item = {
    nome: "item",
    atributos: [
      { nome: "nome", tipo: "string" },
      { nome: "valor", tipo: "number" },
      { nome: "peso", tipo: "number" },
      { nome: "data_fabricacao", tipo: "string" },
      { nome: "raridade", tipo: "string" },
      { nome: "ferreiro", tipo: "foreign", referencia: "ferreiro"},
    ]
};