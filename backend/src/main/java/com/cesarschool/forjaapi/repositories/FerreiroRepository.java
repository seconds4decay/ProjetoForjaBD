package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Ferreiro;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class FerreiroRepository {
    private final JdbcTemplate jdbc;

    public FerreiroRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Ferreiro salvar(Ferreiro ferreiro) {
        jdbc.update("INSERT INTO Ferreiro (nome, especializacao) VALUES (?, ?)",
                ferreiro.getNome(), ferreiro.getEspecializacao());

        ferreiro.setId(jdbc.queryForObject("SELECT LAST_INSERT_ID()", Integer.class));
        return ferreiro;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Ferreiro WHERE ID_ferreiro = ?", id);
    }
}
