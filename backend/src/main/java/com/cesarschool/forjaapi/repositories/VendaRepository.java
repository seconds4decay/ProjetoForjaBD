package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Cliente;
import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.models.Loja;
import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.services.ClienteService;
import com.cesarschool.forjaapi.services.ItemService;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public class VendaRepository {

    public final JdbcTemplate jdbc;
    private final LojaService lojaService;
    private final ItemService itemService;
    private final ClienteService clienteService;

    public VendaRepository(JdbcTemplate jdbc, LojaService lojaService, ItemService itemService, ClienteService clienteService) {
        this.jdbc = jdbc;
        this.lojaService = lojaService;
        this.itemService = itemService;
        this.clienteService = clienteService;
    }

    public Venda salvar(Venda venda) {
        jdbc.update("INSERT INTO Venda (loja, cliente, item) VALUES (?, ?, ?)",
                venda.getLoja().getId(), venda.getCliente().getId(), venda.getItem().getId());

        return venda;
    }

    public void deletar(int id_loja, int id_item, int id_cliente) {
        jdbc.update("DELETE FROM Venda WHERE loja = ? AND item = ? AND cliente = ?",
                id_loja, id_item, id_cliente);
    }

    public Venda buscarPorId(Integer id_loja, Integer id_item, Integer id_cliente) {
        if (id_loja == null || id_item == null || id_cliente == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM Venda WHERE loja = ? AND item = ? AND cliente = ?",
                    new Object[]{id_loja, id_item, id_cliente}, (rs, rowNum) -> {
                        Loja loja = lojaService.buscarPorId(rs.getInt("loja"));
                        Item item = itemService.buscarPorId(rs.getInt("item"));
                        Cliente cliente = clienteService.buscarPorId(rs.getInt("cliente"));

                        return new Venda(loja, item, cliente);
                    });
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Venda> buscarTodos() {
        return jdbc.query("SELECT * FROM Venda", (rs, rowNum) -> {
            Loja loja = lojaService.buscarPorId(rs.getInt("loja"));
            Item item = itemService.buscarPorId(rs.getInt("item"));
            Cliente cliente = clienteService.buscarPorId(rs.getInt("cliente"));

            return new Venda(loja, item, cliente);
        });
    }

    public Venda atualizar(int id_loja, int id_item, int id_cliente, Venda venda) {
        jdbc.update("UPDATE Venda SET loja = ?, item = ?, cliente = ? WHERE loja = ? AND item = ? AND cliente = ?",
                venda.getLoja().getId(), venda.getItem().getId(), venda.getCliente().getId(),
                id_loja, id_item, id_cliente);

        return venda;
    }

    public VendaDTO1 qntTotalVendas() {
        String SQL = "CALL qntTotalVendas()";

        return jdbc.queryForObject(SQL, (rs, rowNum) -> {
            int qntVendas = rs.getInt("qnt_vendas");
            float totalVendas = rs.getFloat("total_vendas");

            return new VendaDTO1(qntVendas, totalVendas);
        });
    }

    public VendaDTO2 tipoItemLucro() {
        String SQL = "CALL tipoItemLucro()";

        return jdbc.queryForObject(SQL, (rs, rowNum) -> {
            float totalArma = rs.getFloat("total_arma");
            float totalArmadura = rs.getFloat("total_armadura");

            return new VendaDTO2(totalArma, totalArmadura);
        });
    }

    public List<VendaDTO3> clientesMaisCompradores () {
        String SQL = "CALL clientesMaisCompradores()";

        List<VendaDTO3> result = jdbc.query(SQL, (rs, rowNum) -> {
            String nome = rs.getString("nome");
            int qntVendas = rs.getInt("qnt_vendas");

            return new VendaDTO3(nome, qntVendas);
        });

        return result;
    }



    public class VendaDTO1 {
        public int qntVendas;
        public float totalVendas;

        public VendaDTO1(int qntVendas, float totalVendas) {
            this.qntVendas = qntVendas;
            this.totalVendas = totalVendas;
        }

        public int getQntVendas() {
            return qntVendas;
        }


        public float getTotalVendas() {
            return totalVendas;
        }
    }

    public class VendaDTO2 {
        public float totalArma;
        public float totalArmadura;

        public VendaDTO2(float totalArma, float totalArmadura) {
            this.totalArma = totalArma;
            this.totalArmadura = totalArmadura;
        }

        public float getTotalArma() {
            return totalArma;
        }

        public float getTotalArmadura() {
            return totalArmadura;
        }
    }

    public class VendaDTO3 {
        public String nome;
        public int qntVendas;

        public VendaDTO3 (String nome, int qntVendas) {
            this.nome = nome;
            this.qntVendas = qntVendas;
        }

        public String getNome() {
            return nome;
        }

        public int getQntVendas() {
            return qntVendas;
        }
    }
}
