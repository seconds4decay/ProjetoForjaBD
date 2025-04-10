package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Loja;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class LojaRepository {
    private final JdbcTemplate jdbc;

    public LojaRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Loja salvar(Loja loja) {
        jdbc.update("INSERT INTO Loja (nome, cidade, rua) VALUES (?, ?, ?)",
                loja.getNome(), loja.getCidade(), loja.getRua());

        loja.setId(jdbc.queryForObject("SELECT MAX(ID_loja) FROM Loja", Integer.class));
        return loja;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Loja WHERE ID_loja = ?", id);
    }
}
