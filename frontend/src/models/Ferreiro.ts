export const Ferreiro = {
    nome: "ferreiro",
    atributos: [
      { nome: "nome", tipo: "string" },
      { nome: "especializacao", tipo: "string" },
      { nome: "gerente", tipo: "foreign", referencia: "ferreiro"},
      { nome: "loja", tipo : "foreign", referencia: "loja"},
    ]
};