package com.cesarschool.forjaapi.models;

public class Pedido {
    private Integer id;
    private Cliente cliente;
    private Item item;
    private Ferreiro ferreiro;
    private String status;
    private String dataAlteracao;

    public Pedido (){}

    public Pedido(int id, Cliente cliente, Item item, Ferreiro ferreiro, String status) {
        this.id = id;
        this.cliente = cliente;
        this.item = item;
        this.ferreiro = ferreiro;
        this.status = status;
    }

    public Integer getId() { return id; }

    public void setId(int idPedido) { this.id = idPedido; }

    public Cliente getCliente() { return cliente; }

    public void setCliente(Cliente cliente) { this.cliente = cliente; }

    public Item getItem() { return item; }

    public void setItem(Item item) { this.item = item; }

    public Ferreiro getFerreiro() { return ferreiro; }

    public void setFerreiro(Ferreiro ferreiro) { this.ferreiro = ferreiro; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }

    public String getDataAlteracao() { return dataAlteracao; }

    public void setDataAlteracao(String dataAlteracao) { this.dataAlteracao = dataAlteracao;}

}
