package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Cliente;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class ClienteRepository {
    private final JdbcTemplate jdbc;

    public ClienteRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void salvar(Cliente cliente) {
        jdbc.update("INSERT INTO Cliente (nome) VALUES (?)", cliente.getNome());
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Cliente WHERE ID_cliente = ?", id);
    }
}
