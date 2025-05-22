package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Loja;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

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

    public Loja buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        try {
        return jdbc.queryForObject("SELECT * FROM Loja WHERE ID_loja = ?",
                (rs, rowNum) -> new Loja(
                        rs.getInt("ID_loja"),
                        rs.getString("nome"),
                        rs.getString("cidade"),
                        rs.getString("rua")
                ), id);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Loja> buscarTodos() {
        return jdbc.query("SELECT * FROM Loja", (rs, rowNum) -> new Loja(
                rs.getInt("ID_loja"),
                rs.getString("nome"),
                rs.getString("cidade"),
                rs.getString("rua")
        ));
    }

    public Loja atualizar(Loja loja) {
        jdbc.update("UPDATE Loja SET nome = ?, cidade = ?, rua = ? WHERE ID_loja = ?",
                loja.getNome(), loja.getCidade(), loja.getRua(), loja.getId());

        return loja;
    }

    public LojaDTO1 rentabilidadeLojaPorNome(String nome) {
        String SQL = "CALL rentabilidadeLojaPorNome(?)";

        return jdbc.queryForObject(SQL, (rs, rowNum) -> new LojaDTO1(
                rs.getString("nome"),
                rs.getFloat("total_rentabilidade")
        ), nome);
    }

    public List<Object> vendasRecentesPorLoja(String nome) {
        String SQL = "CALL vendasRecentesPorLoja(?)";

        return jdbc.query(SQL, (rs, rowNum) -> new LojaDTO2(
                rs.getString("nome"),
                rs.getString("data_transacao")
        ), nome);
    }

    public class LojaDTO1 {
        private String nome;
        private float totalRentabilidade;

        public LojaDTO1(String nome, float totalRentabilidade) {
            this.nome = nome;
            this.totalRentabilidade = totalRentabilidade;
        }

        public String getNome() {
            return nome;
        }

        public float getTotalRentabilidade() {
            return totalRentabilidade;
        }
    }

    public class LojaDTO2 {
        private String nome;
        private String dataTransacao;

        public LojaDTO2(String nome, String dataTransacao) {
            this.nome = nome;
            this.dataTransacao = dataTransacao;
        }

        public String getNome() {
            return nome;
        }

        public String getDataTransacao() {
            return dataTransacao;
        }
    }
}
