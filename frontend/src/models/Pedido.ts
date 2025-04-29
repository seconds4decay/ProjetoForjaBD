export const Pedido = {
    nome: "pedido",
    atributos: [
      { nome: "cliente", tipo: "foreign", referencia: "cliente" },
      { nome: "item", tipo: "foreign", referencia: "item" },
      { nome: "ferreiro", tipo: "foreign", referencia: "ferreiro" },
      { nome: "status", tipo: "string" }
    ]
};