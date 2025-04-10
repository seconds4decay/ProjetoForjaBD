package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Arma;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ArmaRepository {

    private final JdbcTemplate jdbc;

    public ArmaRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void salvar(Arma arma) {
        jdbc.update("INSERT INTO Item (Nome, Valor, Peso, Raridade) VALUES (?, ?, ?, ?)",
                arma.getNome(), arma.getValor(), arma.getPeso(), arma.getRaridade());

        int itemId = jdbc.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);

        jdbc.update("INSERT INTO Arma (Item, Nome, Dano, Tipo) VALUES (?, ?, ?, ?)",
                itemId, arma, arma.getDano(), arma.getTipo());
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE ID_item = ?", id);
    }
}
