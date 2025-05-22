export const Venda = {
    nome: "venda",
    atributos: [
      { nome: "loja", tipo: "foreign", referencia: "loja"},
      { nome: "item", tipo: "foreign", referencia: "item"},
      { nome: "cliente", tipo: "foreign", referencia: "cliente"},
      { nome: "dataTransacao", tipo: "date"}
    ]
};