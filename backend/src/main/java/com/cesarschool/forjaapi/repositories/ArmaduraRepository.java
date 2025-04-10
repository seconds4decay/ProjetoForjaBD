package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Armadura;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ArmaduraRepository {

    private final JdbcTemplate jdbc;

    public ArmaduraRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Armadura salvar(Armadura armadura) {;
        jdbc.update("INSERT INTO Item (Nome, Valor, Peso, Raridade) VALUES (?, ?, ?, ?)",
                armadura.getNome(), armadura.getValor(), armadura.getPeso(), armadura.getRaridade());

        int itemId = jdbc.queryForObject("SELECT MAX(ID_item) FROM Item", Integer.class);

        jdbc.update("INSERT INTO Armadura (Item, Nome, Defesa, Tipo) VALUES (?, ?, ?, ?)",
                itemId, armadura.getNome(), armadura.getDefesa(), armadura.getTipo());

        armadura.setId(itemId);
        return armadura;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE ID_item = ?", id);
    }
}
