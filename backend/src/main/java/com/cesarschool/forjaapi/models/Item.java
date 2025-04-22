package com.cesarschool.forjaapi.models;

public class Item {

    private int id;
    private String nome;
    private float valor;
    private float peso;
    private String raridade;
    private Ferreiro ferreiro;

    public Item(int id, String nome, float valor, float peso, String raridade) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.peso = peso;
        this.raridade = raridade;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public float getValor() {
        return valor;
    }

    public float getPeso() {
        return peso;
    }

    public String getRaridade() {
        return raridade;
    }

    public Ferreiro getFerreiro() {
        return ferreiro;
    }

    public void setId(int itemId) {
        this.id = itemId;
    }
}
