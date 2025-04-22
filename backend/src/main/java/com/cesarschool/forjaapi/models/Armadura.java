package com.cesarschool.forjaapi.models;

public class Armadura extends Item {
    private String tipo;
    private int defesa;

    public Armadura() {
        super();
    }

    public Armadura(int id, String nome, float valor, float peso, String raridade, String tipo, int defesa) {
        super(id, nome, valor, peso, raridade);
        this.tipo = tipo;
        this.defesa = defesa;
    }

    public String getTipo() {
        return tipo;
    }

    public int getDefesa() {
        return defesa;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setDefesa(int defesa) {
        this.defesa = defesa;
    }
}
