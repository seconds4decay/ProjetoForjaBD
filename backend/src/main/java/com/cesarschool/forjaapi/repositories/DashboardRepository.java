package com.cesarschool.forjaapi.repositories;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DashboardRepository {
    private final JdbcTemplate jdbc;

    public DashboardRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public DashboardDTO1 qntFerreiroPedidoClienteVenda() {
        String SQL = "CALL qntFerreiroPedidoClienteVenda()";

        List<DashboardDTO1> result = jdbc.query(SQL, (rs, rowNum) -> {
            int qntFerreiros = rs.getInt("qnt_ferreiro");
            int qntPedidos = rs.getInt("qnt_pedido");
            int qntClientes = rs.getInt("qnt_cliente");
            int qntVendas = rs.getInt("qnt_venda");

            return new DashboardDTO1(qntFerreiros, qntPedidos, qntClientes, qntVendas);
        });

        return result.isEmpty() ? null : result.get(0);
    }

    public DashboardDTO2 findFerreiroMaisPedidos() {
        String SQL = "CALL findFerreiroMaisPedidos()";

        List<DashboardDTO2> result = jdbc.query(SQL, (rs, rowNum) -> {
            String nome = rs.getString("nome");
            String especializacao = rs.getString("especializacao");
            String lojaNome = rs.getString("loja");
            int qntPedidos = rs.getInt("pedidos");

            return new DashboardDTO2(nome, especializacao, lojaNome, qntPedidos);
        });

        return result.isEmpty() ? null : result.get(0);
    }

    public DashboardDTO3 findItemMaisVendido() {
        String SQL = "CALL findItemMaisVendido()";

        List<DashboardDTO3> result = jdbc.query(SQL, (rs, rowNum) -> {
            String nome = rs.getString("nome");
            int qntVendas = rs.getInt("qnt_vendas");
            float total_vendas = rs.getFloat("total_vendas");

            return new DashboardDTO3(nome, qntVendas, total_vendas);
        });

        return result.isEmpty() ? null : result.get(0);
    }

    public class DashboardDTO1 {
        private int qntFerreiros;
        private int qntPedidos;
        private int qntClientes;
        private int qntVendas;

        public DashboardDTO1(int qntFerreiros, int qntPedidos, int qntClientes, int qntVendas) {
            this.qntFerreiros = qntFerreiros;
            this.qntPedidos = qntPedidos;
            this.qntClientes = qntClientes;
            this.qntVendas = qntVendas;
        }

        public int getQntFerreiros() {
            return qntFerreiros;
        }

        public int getQntPedidos() {
            return qntPedidos;
        }

        public int getQntClientes() {
            return qntClientes;
        }

        public int getQntVendas() {
            return qntVendas;
        }
    }

    public class DashboardDTO2 {
        private String nome;
        private String especializacao;
        private String lojaNome;
        private int qntPedidos;

        public DashboardDTO2(String nome, String especializacao, String lojaNome, int qntPedidos) {
            this.nome = nome;
            this.especializacao = especializacao;
            this.lojaNome = lojaNome;
            this.qntPedidos = qntPedidos;
        }

        public String getNome() {
            return nome;
        }

        public String getEspecializacao() {
            return especializacao;
        }

        public String getLojaNome() {
            return lojaNome;
        }

        public int getQntPedidos() {
            return qntPedidos;
        }

    }

    public class DashboardDTO3 {
        private String nome;
        private int qntVendas;
        private float totalVendas;

        public DashboardDTO3(String nome, int qntVendas, float totalVendas) {
            this.nome = nome;
            this.qntVendas = qntVendas;
            this.totalVendas = totalVendas;
        }

        public String getNome() {
            return nome;
        }

        public int getQntVendas() {
            return qntVendas;
        }

        public float getTotalVendas() {
            return totalVendas;
        }
    }


}
