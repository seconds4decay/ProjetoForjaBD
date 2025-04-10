package com.cesarschool.forjaapi.models;

public class Material {
    private int id;
    private String nome;
    private int quantidade;
    private String qualidade;
    private String tipo;

    public Material(int id, String name, int quantidade, String qualidade, String tipo) {
        this.id = id;
        this.nome = name;
        this.quantidade = quantidade;
        this.qualidade = qualidade;
        this.tipo = tipo;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public String getQualidade() {
        return qualidade;
    }

    public String getTipo() {
        return tipo;
    }
}
