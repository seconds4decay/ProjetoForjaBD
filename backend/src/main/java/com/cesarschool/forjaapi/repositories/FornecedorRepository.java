package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Fornecedor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class FornecedorRepository {
    private final JdbcTemplate jdbc;

    public FornecedorRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void salvar(Fornecedor fornecedor) {
        jdbc.update("INSERT INTO Fornecedor (nome, tipo_material) VALUES (?, ?)",
                fornecedor.getNome(), fornecedor.getTipo_material());
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Fornecedor WHERE ID_fornecedor = ?", id);
    }
}
