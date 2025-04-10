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

    public void salvar(Item item) {
        jdbc.update("INSERT INTO Item (nome, valor, peso, raridade) VALUES (?, ?, ?, ?)",
                item.getNome(), item.getValor(), item.getPeso(), item.getRaridade());
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE ID_item = ?", id);
    }
}
