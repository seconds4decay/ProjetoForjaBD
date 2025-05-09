package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Fornecedor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class FornecedorRepository {
    private final JdbcTemplate jdbc;

    public FornecedorRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Fornecedor salvar(Fornecedor fornecedor) {
        jdbc.update("INSERT INTO Fornecedor (nome, tipo_material) VALUES (?, ?)",
                fornecedor.getNome(), fornecedor.getTipo_material());

        fornecedor.setId(jdbc.queryForObject("SELECT MAX(ID_fornecedor) FROM Fornecedor", Integer.class));
        return fornecedor;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Fornecedor WHERE ID_fornecedor = ?", id);
    }

    public Fornecedor buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        try {
        return jdbc.queryForObject("SELECT * FROM Fornecedor WHERE ID_fornecedor = ?",
                (rs, rowNum) -> new Fornecedor(
                        rs.getInt("ID_fornecedor"),
                        rs.getString("nome"),
                        rs.getString("tipo_material")),
                id);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Fornecedor> buscarTodos() {
        return jdbc.query("SELECT * FROM Fornecedor", (rs, rowNum) -> new Fornecedor(
                rs.getInt("ID_fornecedor"),
                rs.getString("nome"),
                rs.getString("tipo_material")));
    }

    public Fornecedor atualizar(Fornecedor fornecedor) {
        jdbc.update("UPDATE Fornecedor SET nome = ?, tipo_material = ? WHERE ID_fornecedor = ?",
                fornecedor.getNome(), fornecedor.getTipo_material(), fornecedor.getId());

        return fornecedor;
    }
}
