package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.dao.EmptyResultDataAccessException;
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

    public Ferreiro buscarPorId(Integer id) {
        if (id == null) {
            return null;
        }

        try {
            Ferreiro ferreiro = jdbc.queryForObject("SELECT * FROM Ferreiro WHERE ID_ferreiro = ?",
                    new Object[]{id}, (rs, rowNum) -> {
                        Ferreiro f = new Ferreiro();
                        f.setId(rs.getInt("ID_ferreiro"));
                        f.setNome(rs.getString("nome"));
                        f.setEspecializacao(rs.getString("especializacao"));

                        Integer gerenteId = rs.getObject("gerente", Integer.class);
                        if (gerenteId != null) {
                            f.setGerente(buscarPorId(gerenteId));
                        }

                        Integer lojaId = rs.getObject("loja", Integer.class);
                        if (lojaId != null) {
                            f.setLoja(lojaService.buscarPorId(lojaId));
                        }

                        return f;
                    });

            return ferreiro;
        } catch (EmptyResultDataAccessException e) {
            return null;
        }

    }

    public Ferreiro atualizar(Ferreiro ferreiro) {
        Integer gerenteId = (ferreiro.getGerente() != null) ? ferreiro.getGerente().getId() : null;
        Integer lojaId = (ferreiro.getLoja() != null) ? ferreiro.getLoja().getId() : null;

        jdbc.update("UPDATE Ferreiro SET nome = ?, especializacao = ?, gerente = ?, loja = ? WHERE ID_ferreiro = ?",
                ferreiro.getNome(), ferreiro.getEspecializacao(), gerenteId, lojaId, ferreiro.getId());

        return buscarPorId(ferreiro.getId());
    }
}
