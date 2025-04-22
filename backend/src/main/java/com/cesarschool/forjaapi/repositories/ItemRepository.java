package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Item;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class ItemRepository {
    private final JdbcTemplate jdbc;

    public ItemRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
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

    public Item buscarPorId(int id) {
        return jdbc.queryForObject("SELECT * FROM Item WHERE ID_item = ?", new Object[]{id}, (rs, rowNum) -> {
            Item item = new Item();
            item.setId(rs.getInt("ID_item"));
            item.setNome(rs.getString("nome"));
            item.setValor((float) rs.getDouble("valor"));
            item.setPeso((float) rs.getDouble("peso"));
            item.setRaridade(rs.getString("raridade"));
            return item;
        });
    }

    public Item atualizar(int id, Item item) {
        Integer idFerreiro = item.getFerreiro() != null ? item.getFerreiro().getId() : null;

        jdbc.update("UPDATE Item SET nome = ?, valor = ?, peso = ?, raridade = ?, ferreiro = ? WHERE ID_item = ?",
                item.getNome(), item.getValor(), item.getPeso(), item.getRaridade(), idFerreiro, id);

        return buscarPorId(id);
    }
}
