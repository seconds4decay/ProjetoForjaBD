package com.cesarschool.forjaapi.models;

public class Venda {

    private Loja loja;
    private Item item;
    private Cliente cliente;
    private String dataTransacao;

    public Venda () {}

    public Venda(Loja loja, Item item, Cliente cliente, String dataTransacao) {
        this.loja = loja;
        this.item = item;
        this.cliente = cliente;
        this.dataTransacao = dataTransacao;
    }

    public Loja getLoja() {
        return loja;
    }

    public void setLoja(Loja loja) {
        this.loja = loja;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getDataTransacao() {
        return dataTransacao;
    }

    public void setDataTransacao(String dataTransacao) {
        this.dataTransacao = dataTransacao;
    }
}
