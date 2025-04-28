package com.cesarschool.forjaapi.models;

public class Pedido {
    private Integer idPedido;
    private Cliente cliente;
    private Item item;
    private Ferreiro ferreiro;
    private String status;

    public Pedido (){}

    public Pedido(int idPedido, Cliente cliente, Item item, Ferreiro ferreiro, String status) {
        this.idPedido = idPedido;
        this.cliente = cliente;
        this.item = item;
        this.ferreiro = ferreiro;
        this.status = status;
    }

    public Integer getIdPedido() { return idPedido; }

    public void setIdPedido(int idPedido) { this.idPedido = idPedido; }

    public Cliente getCliente() { return cliente; }

    public void setCliente(Cliente cliente) { this.cliente = cliente; }

    public Item getItem() { return item; }

    public void setItem(Item item) { this.item = item; }

    public Ferreiro getFerreiro() { return ferreiro; }

    public void setFerreiro(Ferreiro ferreiro) { this.ferreiro = ferreiro; }

    public String getStatus() { return status; }

    public void setStatus(String status) { this.status = status; }

}
