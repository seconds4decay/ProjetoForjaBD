package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/*
Repositories: É onde o acesso ao banco de dados é realizado e onde informações são cadastradas ou buscadas.
*/

@Repository
    public class FerreiroRepository {
        private final JdbcTemplate jdbc;

        private final LojaService lojaService;

        public FerreiroRepository(JdbcTemplate jdbc, LojaService lojaService) {
            this.jdbc = jdbc;
            this.lojaService = lojaService;
        }

        public Ferreiro salvar(Ferreiro ferreiro) {
            Integer gerenteId = (ferreiro.getGerente() != null) ? ferreiro.getGerente().getId() : null;
            Integer lojaId = (ferreiro.getLoja() != null) ? ferreiro.getLoja().getId() : null;

            jdbc.update("INSERT INTO Ferreiro (nome, especializacao, gerente, loja) VALUES (?, ?, ?, ?)",
                            ferreiro.getNome(), ferreiro.getEspecializacao(), gerenteId, lojaId);

            ferreiro.setId(jdbc.queryForObject("SELECT LAST_INSERT_ID()", Integer.class));
            return ferreiro;
        }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Ferreiro WHERE ID_ferreiro = ?", id);
    }

    public Ferreiro buscarPorId(int id) {
        return jdbc.queryForObject("SELECT * FROM Ferreiro WHERE ID_ferreiro = ?",
                (rs, rowNum) -> new Ferreiro(
                        rs.getInt("ID_ferreiro"),
                        rs.getString("nome"),
                        rs.getString("especializacao"),
                        buscarPorId(rs.getInt("gerente")),
                        lojaService.buscarPorId(rs.getInt("loja"))

                ), id);
    }

    public Ferreiro atualizar(Ferreiro ferreiro) {
        Integer gerenteId = (ferreiro.getGerente() != null) ? ferreiro.getGerente().getId() : null;
        Integer lojaId = (ferreiro.getLoja() != null) ? ferreiro.getLoja().getId() : null;

        jdbc.update("UPDATE Ferreiro SET nome = ?, especializacao = ?, gerente = ?, loja = ? WHERE ID_ferreiro = ?",
                ferreiro.getNome(), ferreiro.getEspecializacao(), gerenteId, lojaId, ferreiro.getId());

        return ferreiro;
    }
}
