package com.cesarschool.forjaapi.models;

public class Arma extends Item {
    private float dano;
    private String tipo;

    public Arma(int id, String nome, float valor, float peso, String raridade, float dano, String tipo) {
        super(id, nome, valor, peso, raridade);
        this.dano = dano;
        this.tipo = tipo;
    }

    public float getDano() {
        return dano;
    }

    public String getTipo() {
        return tipo;
    }
}
