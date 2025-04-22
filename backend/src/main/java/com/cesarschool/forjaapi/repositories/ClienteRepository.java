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

    public Cliente salvar(Cliente cliente) {
        jdbc.update("INSERT INTO Cliente (nome) VALUES (?)", cliente.getNome());

        cliente.setId(jdbc.queryForObject("SELECT MAX(ID_cliente) FROM Cliente", Integer.class));
        return cliente;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Cliente WHERE ID_cliente = ?", id);
    }

    public Cliente buscarPorId(int id) {
        return jdbc.queryForObject("SELECT * FROM Cliente WHERE ID_cliente = ?", new Object[]{id}, (rs, rowNum) -> {
            Cliente cliente = new Cliente();
            cliente.setId(rs.getInt("ID_cliente"));
            cliente.setNome(rs.getString("nome"));
            return cliente;
        });
    }

    public Cliente atualizar(Cliente cliente) {
        jdbc.update("UPDATE Cliente SET nome = ? WHERE ID_cliente = ?", cliente.getNome(), cliente.getId());
        return cliente;
    }
}
