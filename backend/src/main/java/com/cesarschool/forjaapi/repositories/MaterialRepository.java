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

    public void salvar(Material material) {
        jdbc.update("INSERT INTO Material (nome, quantidade, qualidade, tipo) VALUES (?, ?, ?, ?)",
                material.getNome(), material.getQuantidade(), material.getQualidade(), material.getTipo());
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Material WHERE ID_material = ?", id);
    }
}
