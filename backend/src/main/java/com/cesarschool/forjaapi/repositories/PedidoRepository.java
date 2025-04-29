package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Pedido;
import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.models.Cliente;
import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.ClienteService;
import com.cesarschool.forjaapi.services.ItemService;
import com.cesarschool.forjaapi.services.FerreiroService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.util.List;

@Repository
public class PedidoRepository {
    public final JdbcTemplate jdbc;
    public final ItemService itemService;
    public final ClienteService clienteService;
    public final FerreiroService ferreiroService;

    public PedidoRepository (JdbcTemplate jdbc, ItemService itemService, ClienteService clienteService, FerreiroService ferreiroService) {
        this.jdbc = jdbc;
        this.itemService = itemService;
        this.clienteService = clienteService;
        this.ferreiroService = ferreiroService;
    }

    public Pedido salvar(Pedido pedido) {
        jdbc.update("INSERT INTO requisicao_pedido (cliente, item, ferreiro, status) VALUES (?, ?, ?, ?)",
                pedido.getCliente().getId(), pedido.getItem().getId(), pedido.getFerreiro().getId(), pedido.getStatus());

        pedido.setId(jdbc.queryForObject("SELECT LAST_INSERT_ID()", Integer.class));
        return pedido;
    }

    public void deletar(int idPedido) {
        jdbc.update("DELETE FROM requisicao_pedido WHERE ID_pedido = ?",
                idPedido);
    }

    public Pedido buscarPorId(Integer idPedido) {
        if (idPedido == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM requisicao_pedido WHERE ID_pedido = ?",
                    new Object[]{idPedido}, (rs, rowNum) -> {
                        Pedido pedido = new Pedido();
                        pedido.setId(rs.getInt("ID_pedido"));
                        pedido.setCliente(clienteService.buscarPorId(rs.getInt("cliente")));
                        pedido.setItem(itemService.buscarPorId(rs.getInt("item")));
                        pedido.setFerreiro(ferreiroService.buscarPorId(rs.getInt("ferreiro")));
                        pedido.setStatus(rs.getString("status"));

                        return pedido;
                    }
            );
        }
        catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Pedido> buscarTodos() {
        return jdbc.query("SELECT * FROM requisicao_pedido", (rs, rowNum) -> {
            Pedido pedido = new Pedido();
            pedido.setId(rs.getInt("ID_pedido"));
            pedido.setCliente(clienteService.buscarPorId(rs.getInt("cliente")));
            pedido.setItem(itemService.buscarPorId(rs.getInt("item")));
            pedido.setFerreiro(ferreiroService.buscarPorId(rs.getInt("ferreiro")));
            pedido.setStatus(rs.getString("status"));

            return pedido;

        });
    }

    public Pedido atualizar(int idPedido, Pedido pedido) {
        Integer clienteId = (pedido.getCliente() != null) ? pedido.getCliente().getId() : null;
        Integer itemId = (pedido.getItem() != null) ? pedido.getItem().getId() : null;
        Integer ferreiroId = (pedido.getFerreiro() != null) ? pedido.getFerreiro().getId() : null;

        jdbc.update("UPDATE requisicao_pedido SET cliente = ?, item = ?, ferreiro = ?, status = ? WHERE ID_pedido = ?",
                clienteId, itemId, ferreiroId, pedido.getStatus(), idPedido);
        return pedido;
    }
}
