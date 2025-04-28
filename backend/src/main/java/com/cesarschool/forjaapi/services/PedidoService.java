package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.models.Pedido;
import com.cesarschool.forjaapi.repositories.PedidoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    private PedidoRepository pedidoRepository;
    private final ClienteService clienteService;
    private final ItemService itemService;
    private final FerreiroService ferreiroService;

    public PedidoService (PedidoRepository pedidoRepository, ClienteService clienteService, ItemService itemService, FerreiroService ferreiroService) {
        this.pedidoRepository = pedidoRepository;
        this.clienteService = clienteService;
        this.itemService = itemService;
        this.ferreiroService = ferreiroService;
    }

    public Pedido salvar(Pedido pedido) {
        if (pedido.getIdPedido() == null || pedido.getCliente() == null || pedido.getItem() == null || pedido.getFerreiro() == null || pedido.getStatus() == null) {
            return null;
        }

        return pedidoRepository.salvar(pedido);
    }

    public void deletar(int idPedido, int idCliente, int idItem) {
        pedidoRepository.deletar(idPedido, idCliente, idItem);
    }

    public Pedido buscarPorId(Integer idPedido, Integer idCliente, Integer idItem) {
        if (idPedido == null || idCliente == null || idItem == null) {
            return null;
        }

        return pedidoRepository.buscarPorId(idPedido, idCliente, idItem);
    }

    public List<Pedido> buscarTodos() {
        return pedidoRepository.buscarTodos();
    }

    public Pedido atualizar(int idPedido, int idCliente, int idItem, Pedido pedido) {
        if (pedido.getIdPedido() == null || pedido.getCliente() == null || pedido.getItem() == null) {
            return null;
        }

        return pedidoRepository.atualizar(idPedido, idCliente, idItem, pedido);
    }
}
