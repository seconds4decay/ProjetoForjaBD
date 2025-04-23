package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.services.FerreiroService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class ItemRepository {
    private final JdbcTemplate jdbc;
    private final FerreiroService ferreiroService;

    public ItemRepository(JdbcTemplate jdbc, FerreiroService ferreiroService) {
        this.jdbc = jdbc;
        this.ferreiroService = ferreiroService;
    }


    public Item salvar(Item item) {
        Integer idFerreiro = item.getFerreiro() != null ? item.getFerreiro().getId() : null;

        jdbc.update("INSERT INTO Item (nome, valor, peso, raridade, ferreiro) VALUES (?, ?, ?, ?, ?)",
                item.getNome(), item.getValor(), item.getPeso(), item.getRaridade(), idFerreiro);

        item.setId(jdbc.queryForObject("SELECT MAX(ID_item) FROM Item", Integer.class));
        return item;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE ID_item = ?", id);
    }

    public Item buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM Item WHERE ID_item = ?", new Object[]{id}, (rs, rowNum) -> {
                Item item = new Item();
                item.setId(rs.getInt("ID_item"));
                item.setNome(rs.getString("nome"));
                item.setValor((float) rs.getDouble("valor"));
                item.setPeso((float) rs.getDouble("peso"));
                item.setRaridade(rs.getString("raridade"));

                Integer ferreiroId = rs.getObject("ferreiro", Integer.class);
                if (ferreiroId != null) {
                    item.setFerreiro(ferreiroService.buscarPorId(ferreiroId));
                }
                return item;
            });
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public Item atualizar(int id, Item item) {
        Integer idFerreiro = item.getFerreiro() != null ? item.getFerreiro().getId() : null;

        jdbc.update("UPDATE Item SET nome = ?, valor = ?, peso = ?, raridade = ?, ferreiro = ? WHERE ID_item = ?",
                item.getNome(), item.getValor(), item.getPeso(), item.getRaridade(), idFerreiro, id);

        return buscarPorId(id);
    }
}
