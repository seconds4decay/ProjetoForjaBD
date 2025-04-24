export const Material = {
    nome: "material",
    atributos: [
      { nome: "nome", tipo: "string" },
      { nome: "quantidade", tipo: "number" },
      { nome: "qualidade", tipo: "string" },
      { nome: "tipo", tipo: "string" },
      { nome: "fornecedor", tipo: "foreign", referencia: "fornecedor" },
    ]
};