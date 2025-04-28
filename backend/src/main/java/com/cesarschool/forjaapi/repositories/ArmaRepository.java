package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Arma;
import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.services.FerreiroService;
import com.cesarschool.forjaapi.services.ItemService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ArmaRepository {

    private final JdbcTemplate jdbc;
    private final FerreiroService ferreiroService;
    private final ItemService itemService;

    public ArmaRepository(JdbcTemplate jdbc, FerreiroService ferreiroService, ItemService itemService) {
        this.jdbc = jdbc;
        this.ferreiroService = ferreiroService;
        this.itemService = itemService;
    }

    public Arma salvar(Arma arma) {
        Integer ferreiroId = arma.getFerreiro() != null ? arma.getFerreiro().getId() : null;

        jdbc.update("INSERT INTO Item (Nome, Valor, Peso, Raridade, Ferreiro) VALUES (?, ?, ?, ?, ?)",
                arma.getNome(), arma.getValor(), arma.getPeso(), arma.getRaridade(), ferreiroId);

        int itemId = jdbc.queryForObject("SELECT MAX(Item) FROM Item", Integer.class);

        jdbc.update("INSERT INTO Arma (Item, Nome, Dano, Tipo) VALUES (?, ?, ?, ?)",
                itemId, arma.getNome(), arma.getDano(), arma.getTipo());

        arma.setId(itemId);
        return arma;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE Item = ?", id);
    }

    public Arma buscarPorId(Integer id) {
        if (id == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM Arma WHERE Item = ?", new Object[]{id}, (rs, rowNum) -> {
                Arma arma = new Arma();

                Integer itemId = rs.getObject("Item", Integer.class);
                if(itemId != null) {
                    arma.setId(itemId);

                }

                arma.setNome(rs.getString("Nome"));
                arma.setDano(rs.getInt("Dano"));
                arma.setTipo(rs.getString("Tipo"));

                Item item = itemService.buscarPorId(itemId);
                if (item != null) {
                    arma.setValor(item.getValor());
                    arma.setPeso(item.getPeso());
                    arma.setRaridade(item.getRaridade());
                    arma.setFerreiro(ferreiroService.buscarPorId(item.getFerreiro().getId()));
                }

                return arma;
            });
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Arma> buscarTodos() {
        return jdbc.query("SELECT * FROM Arma", (rs, rowNum) -> {
            Arma arma = new Arma();
            Integer itemId = rs.getObject("Item", Integer.class);
            if(itemId != null) {
                arma.setId(itemId);
            }

            arma.setNome(rs.getString("Nome"));
            arma.setDano(rs.getInt("Dano"));
            arma.setTipo(rs.getString("Tipo"));

            Item item = itemService.buscarPorId(itemId);
            if (item != null) {
                arma.setValor(item.getValor());
                arma.setPeso(item.getPeso());
                arma.setRaridade(item.getRaridade());
                arma.setFerreiro(ferreiroService.buscarPorId(item.getFerreiro().getId()));
            }

            return arma;
        });
    }

    public Arma atualizar(Arma arma) {
        jdbc.update("UPDATE Arma SET Nome = ?, Dano = ?, Tipo = ? WHERE Item = ?",
                arma.getNome(), arma.getDano(), arma.getTipo(), arma.getId());

        return arma;
    }
}
