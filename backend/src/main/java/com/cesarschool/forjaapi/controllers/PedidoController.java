package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Pedido;
import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.services.PedidoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    private final PedidoService pedidoService;

    public PedidoController(PedidoService pedidoService) { this.pedidoService = pedidoService; }

    @PostMapping
    public ResponseEntity<Pedido> salvar(@RequestBody Pedido pedido) {
        Pedido novoPedido = pedidoService.salvar(pedido);

        if (novoPedido == null || novoPedido.getId() == null || novoPedido.getCliente() == null || novoPedido.getItem() == null) {
            return ResponseEntity.badRequest().body(null);
        }

        return ResponseEntity.created(URI.create("/pedido/" + pedido.getId()))
                .body(pedidoService.salvar(pedido));
    }

    @DeleteMapping("/{ID_pedido}")
    public ResponseEntity<Void> deletar (@PathVariable int ID_pedido){
        if (pedidoService.buscarPorId(ID_pedido) == null) {
            return ResponseEntity.notFound().build();
        }

        pedidoService.deletar(ID_pedido);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{ID_pedido}")
    public ResponseEntity<Pedido> buscarPorId(@PathVariable int ID_pedido){
        Pedido pedido = pedidoService.buscarPorId(ID_pedido);

        if (pedido == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(pedido);
    }

    @GetMapping
    public ResponseEntity<List<Pedido>> buscarTodos(){
        List<Pedido> pedidos = pedidoService.buscarTodos();

        if (pedidos.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(pedidos);
    }

    @PutMapping("/{ID_pedido}")
    public ResponseEntity<Pedido> atualizar (@PathVariable int ID_pedido, @RequestBody Pedido pedido){
        Pedido pedidoAtualizado = pedidoService.atualizar(ID_pedido, pedido);

        if (pedidoAtualizado == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(pedidoAtualizado);
    }

    @GetMapping("/qntPedidos")
    public ResponseEntity<Object> qntPedidos() {
        Object result = pedidoService.qntPedidos();

        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
