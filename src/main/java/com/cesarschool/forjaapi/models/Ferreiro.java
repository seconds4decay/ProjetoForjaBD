package com.cesarschool.forjaapi.models;

/*
Models: É onde as classes das entidades do banco de dados são criadas.
*/

public class Ferreiro {
    private int id;
    private String nome;
    private String especializacao;

    public Ferreiro(int id, String nome, String especializacao) {
        this.id = id;
        this.nome = nome;
        this.especializacao = especializacao;
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

    public String getEspecializacao() {
        return especializacao;
    }
}
