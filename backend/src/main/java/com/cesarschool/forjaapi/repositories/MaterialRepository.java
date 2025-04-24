package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Material;
import com.cesarschool.forjaapi.services.FornecedorService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
public class MaterialRepository {
    private final JdbcTemplate jdbc;
    private final FornecedorService fornecedorService;

    public MaterialRepository(JdbcTemplate jdbc, FornecedorService fornecedorService) {
        this.jdbc = jdbc;
        this.fornecedorService = fornecedorService;
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

    public Material buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM Material WHERE ID_material = ?",
                    new Object[]{id}, (rs, rowNum) -> {
                        Material material = new Material();
                        material.setId(rs.getInt("ID_material"));
                        material.setNome(rs.getString("nome"));
                        material.setQuantidade(rs.getInt("quantidade"));
                        material.setQualidade(rs.getString("qualidade"));
                        material.setTipo(rs.getString("tipo"));

                        Integer fornecedorId = rs.getObject("fornecedor", Integer.class);
                        if (fornecedorId != null) {
                            material.setFornecedor(fornecedorService.buscarPorId(fornecedorId));
                        }

                        return material;
                    });

        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Material> buscarTodos() {
        return jdbc.query("SELECT * FROM Material", (rs, rowNum) -> {
            Material material = new Material();
            material.setId(rs.getInt("ID_material"));
            material.setNome(rs.getString("nome"));
            material.setQuantidade(rs.getInt("quantidade"));
            material.setQualidade(rs.getString("qualidade"));
            material.setTipo(rs.getString("tipo"));

            Integer fornecedorId = rs.getObject("fornecedor", Integer.class);
            if (fornecedorId != null) {
                material.setFornecedor(fornecedorService.buscarPorId(fornecedorId));
            }

            return material;
        });
    }

    public Material atualizar(Material material) {
        Integer fornecedorId = (material.getFornecedor() != null) ? material.getFornecedor().getId() : null;

        jdbc.update("UPDATE Material SET nome = ?, quantidade = ?, qualidade = ?, tipo = ?, fornecedor = ? WHERE ID_material = ?",
                material.getNome(), material.getQuantidade(), material.getQualidade(), material.getTipo(), fornecedorId, material.getId());

        return material;
    }
}
