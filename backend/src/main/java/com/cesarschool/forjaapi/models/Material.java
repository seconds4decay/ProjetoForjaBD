package com.cesarschool.forjaapi.models;

public class Material {
    private int id;
    private String nome;
    private int quantidade;
    private String qualidade;
    private String tipo;
    private Fornecedor fornecedor;

    public Material(int id, String name, int quantidade, String qualidade, String tipo, Fornecedor fornecedor) {
        this.id = id;
        this.nome = name;
        this.quantidade = quantidade;
        this.qualidade = qualidade;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
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

    public Fornecedor getFornecedor() {
        return fornecedor;
    }

    public void setId(int id) {
        this.id = id;
    }
}
