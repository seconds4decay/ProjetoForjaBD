package com.cesarschool.forjaapi.models;

public class Loja {
    private int id;
    private String nome;
    private String cidade;
    private String rua;

    public Loja(int id, String nome, String cidade, String rua) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.rua = rua;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public String getCidade() {
        return cidade;
    }

    public String getRua() {
        return rua;
    }
}
