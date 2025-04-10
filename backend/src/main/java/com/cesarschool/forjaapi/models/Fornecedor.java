package com.cesarschool.forjaapi.models;

public class Fornecedor {
    private int id;
    private String nome;
    private String tipo_material;

    public Fornecedor(int id, String nome, String tipo_material) {
        this.id = id;
        this.nome = nome;
        this.tipo_material = tipo_material;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return this.nome;
    }

    public String getTipo_material() {
        return this.tipo_material;
    }

    public void setId(int id) {
        this.id = id;
    }
}
