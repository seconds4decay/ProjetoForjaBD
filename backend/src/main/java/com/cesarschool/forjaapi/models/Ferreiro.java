package com.cesarschool.forjaapi.models;

/*
Models: É onde as classes das entidades do banco de dados são criadas.
*/

public class Ferreiro {
    private int id;
    private String nome;
    private String especializacao;
    private Ferreiro gerente;
    private Loja loja;

    public Ferreiro() {}

    public Ferreiro(int id, String nome, String especializacao, Ferreiro gerente, Loja loja) {
        this.id = id;
        this.nome = nome;
        this.especializacao = especializacao;
        this.gerente = gerente;
        this.loja = loja;
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

    public Ferreiro getGerente() {
        return gerente;
    }

    public Loja getLoja() {
        return loja;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEspecializacao(String especializacao) {
        this.especializacao = especializacao;
    }

    public void setGerente(Ferreiro gerente) {
        this.gerente = gerente;
    }

    public void setLoja(Loja loja) {
        this.loja = loja;
    }
}
