package com.cesarschool.forjaapi.models;

public class Item {
    private int id;
    private String nome;
    private float valor;
    private float peso;
    private String raridade;
    private String dataFabricacao;
    private Ferreiro ferreiro;

    public Item() {}

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

    public String getDataFabricacao() {
        return dataFabricacao;
    }

    public void setId(int itemId) {
        this.id = itemId;
    }

    public void setFerreiro(Ferreiro ferreiro) {
        this.ferreiro = ferreiro;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public void setRaridade(String raridade) {
        this.raridade = raridade;
    }

    public void setDataFabricacao(String dataFabricacao) {
        this.dataFabricacao = dataFabricacao;
    }
}
