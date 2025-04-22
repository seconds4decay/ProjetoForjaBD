package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Material;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class MaterialRepository {
    private final JdbcTemplate jdbc;

    public MaterialRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public Material salvar(Material material) {
        Integer fornecedorId = (material.getFornecedor() != null) ? material.getFornecedor().getId() : null;

        jdbc.update("INSERT INTO Material (nome, quantidade, qualidade, tipo, fornecedor) VALUES (?, ?, ?, ?, ?)",
                material.getNome(), material.getQuantidade(), material.getQualidade(), material.getTipo(), fornecedorId);

        material.setId(jdbc.queryForObject("SELECT MAX(ID_material) FROM Material", Integer.class));
        return material;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Material WHERE ID_material = ?", id);
    }

    public Material buscarPorId(int id) {
        return jdbc.queryForObject("SELECT * FROM Material WHERE ID_material = ?",
                (rs, rowNum) -> new Material(
                        rs.getInt("ID_material"),
                        rs.getString("nome"),
                        rs.getInt("quantidade"),
                        rs.getString("qualidade"),
                        rs.getString("tipo"),
                        null
                ), id);
    }

    public Material atualizar(Material material) {
        Integer fornecedorId = (material.getFornecedor() != null) ? material.getFornecedor().getId() : null;

        jdbc.update("UPDATE Material SET nome = ?, quantidade = ?, qualidade = ?, tipo = ?, fornecedor = ? WHERE ID_material = ?",
                material.getNome(), material.getQuantidade(), material.getQualidade(), material.getTipo(), fornecedorId, material.getId());

        return material;
    }
}
