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
        if (pedido.getCliente() != null) {
            pedido.setCliente(clienteService.buscarPorId(pedido.getCliente().getId()));
        } else {
            return null;
        }

        if (pedido.getItem() != null) {
            pedido.setItem(itemService.buscarPorId(pedido.getItem().getId()));
        } else {
            return null;
        }

        if (pedido.getFerreiro() != null) {
            pedido.setFerreiro(ferreiroService.buscarPorId(pedido.getFerreiro().getId()));
        } else {
            return null;
        }

        return pedidoRepository.salvar(pedido);
    }

    public void deletar(int idPedido) {
        pedidoRepository.deletar(idPedido);
    }

    public Pedido buscarPorId(Integer idPedido) {

        if (idPedido == null) {
            return null;
        }

        return pedidoRepository.buscarPorId(idPedido);
    }

    public List<Pedido> buscarTodos() {
        return pedidoRepository.buscarTodos();
    }

    public Pedido atualizar(Integer idPedido, Pedido pedido) {
        if (buscarPorId(idPedido) == null) {
            return null;
        }

        if (pedido.getCliente() != null) {
            pedido.setCliente(clienteService.buscarPorId(pedido.getCliente().getId()));
        } else {
            return null;
        }

        if (pedido.getItem() != null) {
            pedido.setItem(itemService.buscarPorId(pedido.getItem().getId()));
        } else {
            return null;
        }

        if (pedido.getFerreiro() != null) {
            pedido.setFerreiro(ferreiroService.buscarPorId(pedido.getFerreiro().getId()));
        } else {
            return null;
        }

        pedido.setId(idPedido);
        return pedidoRepository.atualizar(idPedido, pedido);
    }

    public Object qntPedidos() {
        return pedidoRepository.qntPedidos();
    }
}
