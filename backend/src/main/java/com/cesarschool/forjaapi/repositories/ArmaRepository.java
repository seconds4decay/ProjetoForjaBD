package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Arma;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ArmaRepository {

    private final JdbcTemplate jdbc;

    public ArmaRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Arma salvar(Arma arma) {
        Integer ferreiroId = arma.getFerreiro() != null ? arma.getFerreiro().getId() : null;

        jdbc.update("INSERT INTO Item (Nome, Valor, Peso, Raridade, Ferreiro) VALUES (?, ?, ?, ?, ?)",
                arma.getNome(), arma.getValor(), arma.getPeso(), arma.getRaridade(), ferreiroId);

        int itemId = jdbc.queryForObject("SELECT MAX(ID_item) FROM Item", Integer.class);

        jdbc.update("INSERT INTO Arma (Item, Nome, Dano, Tipo) VALUES (?, ?, ?, ?)",
                itemId, arma.getNome(), arma.getDano(), arma.getTipo());

        arma.setId(itemId);
        return arma;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE ID_item = ?", id);
    }

    public Arma buscarPorId(Integer id) {
        if (id == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM Arma WHERE ID_item = ?", new Object[]{id}, (rs, rowNum) -> {
                Arma arma = new Arma();

                Integer itemId = rs.getObject("ID_item", Integer.class);
                if(itemId != null) {
                    arma.setId(itemId);
                }
                arma.setNome(rs.getString("Nome"));
                arma.setDano(rs.getInt("Dano"));
                arma.setTipo(rs.getString("Tipo"));
                return arma;
            });
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Arma> buscarTodos() {
        return jdbc.query("SELECT * FROM Arma", (rs, rowNum) -> {
            Arma arma = new Arma();
            Integer itemId = rs.getObject("ID_item", Integer.class);
            if(itemId != null) {
                arma.setId(itemId);
            }
            arma.setNome(rs.getString("Nome"));
            arma.setDano(rs.getInt("Dano"));
            arma.setTipo(rs.getString("Tipo"));
            return arma;
        });
    }

    public Arma atualizar(Arma arma) {
        jdbc.update("UPDATE Arma SET Nome = ?, Dano = ?, Tipo = ? WHERE ID_item = ?",
                arma.getNome(), arma.getDano(), arma.getTipo(), arma.getId());

        return arma;
    }
}
