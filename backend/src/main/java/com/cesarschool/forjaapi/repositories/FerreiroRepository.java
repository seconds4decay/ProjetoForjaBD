package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    public List<Ferreiro> buscarTodos() {
        return jdbc.query("SELECT * FROM Ferreiro", (rs, rowNum) -> {
            Ferreiro ferreiro = new Ferreiro();
            ferreiro.setId(rs.getInt("ID_ferreiro"));
            ferreiro.setNome(rs.getString("nome"));
            ferreiro.setEspecializacao(rs.getString("especializacao"));

            Integer gerenteId = rs.getObject("gerente", Integer.class);
            if (gerenteId != null) {
                ferreiro.setGerente(buscarPorId(gerenteId));
            }

            Integer lojaId = rs.getObject("loja", Integer.class);
            if (lojaId != null) {
                ferreiro.setLoja(lojaService.buscarPorId(lojaId));
            }

            return ferreiro;
        });
    }

    public Ferreiro atualizar(Ferreiro ferreiro) {
        Integer gerenteId = (ferreiro.getGerente() != null) ? ferreiro.getGerente().getId() : null;
        Integer lojaId = (ferreiro.getLoja() != null) ? ferreiro.getLoja().getId() : null;

        jdbc.update("UPDATE Ferreiro SET nome = ?, especializacao = ?, gerente = ?, loja = ? WHERE ID_ferreiro = ?",
                ferreiro.getNome(), ferreiro.getEspecializacao(), gerenteId, lojaId, ferreiro.getId());

        return buscarPorId(ferreiro.getId());
    }

    public List<Object> ferreirosMaisRequisitados() {
        String SQL = "CALL ferreirosMaisRequisitados()";

        List<Object> result = jdbc.query(SQL, (rs, rowNum) -> {
                String loja = rs.getString("loja_nome");
                String ferreiroNome = rs.getString("ferreiro_nome");
                int totalRequisicoes = rs.getInt("total_requisicoes");

                return new FerreiroDTO1(loja, ferreiroNome, totalRequisicoes);
            });

        return result;
    }

    public List<Object> ferreirosMaisRentaveis() {
        String SQL = "CALL ferreirosMaisRentaveis()";

        List<Object> result = jdbc.query(SQL, (rs, rowNum) -> {
            String nome = rs.getString("nome");
            int totalRequisicoes = rs.getInt("total_rentabilidade");

            return new FerreiroDTO2(nome, totalRequisicoes);
        });

        return result;
    }

    public List<Object> qntFerreirosPorLoja() {
        String SQL = "CALL qntFerreirosPorLoja()";

        List<Object> result = jdbc.query(SQL, (rs, rowNum) -> {
            String lojaNome = rs.getString("loja_nome");
            int totalFerreiros = rs.getInt("total_ferreiros");

            return new FerreiroDTO3(lojaNome, totalFerreiros);
        });

        return result;
    }

    public List<Object> qntFerreirosEspecializados() {
        String SQL = "CALL qntFerreirosEspecializados()";

        List<Object> result = jdbc.query(SQL, (rs, rowNum) -> {
            String especializacao = rs.getString("especializacao");
            int totalFerreiros = rs.getInt("total_ferreiros");

            return new FerreiroDTO4(especializacao, totalFerreiros);
        });

        return result;

    }

    public class FerreiroDTO1 {
        private String loja;
        private String ferreiroNome;
        private int totalRequisicoes;

        public FerreiroDTO1(String loja, String ferreiroNome, int totalRequisicoes) {
            this.loja = loja;
            this.ferreiroNome = ferreiroNome;
            this.totalRequisicoes = totalRequisicoes;
        }

        public String getLoja() {
            return loja;
        }

        public String getFerreiroNome() {
            return ferreiroNome;
        }

        public int getTotalRequisicoes() {
            return totalRequisicoes;
        }
    }

    public class FerreiroDTO2 {
        private String nome;
        private int totalRequisicoes;

        public FerreiroDTO2(String nome, int totalRequisicoes) {
            this.nome = nome;
            this.totalRequisicoes = totalRequisicoes;
        }

        public String getNome() {
            return nome;
        }

        public int getTotalRequisicoes() {
            return totalRequisicoes;
        }
    }

    public class FerreiroDTO3 {
        private String lojaNome;
        private int totalFerreiros;

        public FerreiroDTO3(String lojaNome, int totalFerreiros) {
            this.lojaNome = lojaNome;
            this.totalFerreiros = totalFerreiros;
        }

        public String getLojaNome() {
            return lojaNome;
        }

        public int getTotalFerreiros() {
            return totalFerreiros;
        }
    }

    public class FerreiroDTO4 {
        private String especializacao;
        private int totalFerreiros;

        public FerreiroDTO4(String especializacao, int totalFerreiros) {
            this.especializacao = especializacao;
            this.totalFerreiros = totalFerreiros;
        }

        public String getEspecializacao() {
            return especializacao;
        }

        public int getTotalFerreiros() {
            return totalFerreiros;
        }
    }
}
