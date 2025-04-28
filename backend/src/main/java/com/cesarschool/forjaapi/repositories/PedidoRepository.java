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
        jdbc.update("INSERT INTO requisicao_pedido (ID_pedido, cliente, item, ferreiro, status) VALUES (?, ?, ?, ?, ?)",
                pedido.getIdPedido(), pedido.getCliente().getId(), pedido.getItem().getId(), pedido.getFerreiro().getId(), pedido.getStatus());

        return pedido;
    }

    public void deletar(int idPedido, int idCliente, int idItem) {
        jdbc.update("DELETE FROM requisicao_pedido WHERE ID_pedido = ? AND cliente = ? AND item = ?",
                idPedido, idCliente, idItem);
    }

    public Pedido buscarPorId(Integer idPedido, Integer idCliente, Integer idItem) {
        if (idPedido == null || idCliente == null || idItem == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM requisicao_pedido WHERE ID_pedido = ? AND cliente = ? AND item = ?",
                    new Object[]{idPedido, idCliente, idItem}, (rs, rowNum) -> {
                    Pedido pedido = new Pedido();
                    pedido.setIdPedido(idPedido);
                    pedido.setCliente(clienteService.buscarPorId(rs.getInt("cliente")));
                    pedido.setItem(itemService.buscarPorId(rs.getInt("item")));
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
            pedido.setIdPedido(rs.getInt("ID_pedido"));
            pedido.setCliente(clienteService.buscarPorId(rs.getInt("cliente")));
            pedido.setItem(itemService.buscarPorId(rs.getInt("item")));

            return pedido;

        });
    }

    public Pedido atualizar(int idPedido, int idCliente, int idItem, Pedido pedido) {
        jdbc.update("UPDATE requisicao_pedido SET ID_pedido = ?, cliente = ?, item = ?, ferreiro = ?, status = ? " +
                "WHERE ID_pedido = ? AND cliente = ? AND item = ?",
                pedido.getIdPedido(), pedido.getCliente().getId(), pedido.getItem().getId(), pedido.getFerreiro().getId(), pedido.getStatus(),
                idPedido, idCliente, idItem);
        return pedido;
    }
}
