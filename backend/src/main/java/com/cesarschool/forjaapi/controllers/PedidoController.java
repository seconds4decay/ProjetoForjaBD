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
        if (pedido.getIdPedido() == null || pedido.getCliente() == null || pedido.getItem() == null) {
            return ResponseEntity.badRequest().body(null);
        }

        return ResponseEntity.created(URI.create("/pedido/" + pedido.getIdPedido() + "/" + pedido.getCliente() + "/" + pedido.getItem()))
                .body(pedidoService.salvar(pedido));
    }

    @DeleteMapping("/{ID_pedido}/{cliente}/{item}")
    public ResponseEntity<Void> deletar (@PathVariable int ID_pedido, @PathVariable int cliente, @PathVariable int item){
        if (pedidoService.buscarPorId(ID_pedido, cliente, item) == null) {
            return ResponseEntity.notFound().build();
        }

        pedidoService.deletar(ID_pedido, cliente, item);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{ID_pedido}/{cliente}/{item}")
    public ResponseEntity<Pedido> buscarPorId(@PathVariable int ID_pedido, @PathVariable int cliente, @PathVariable int item){
        Pedido pedido = pedidoService.buscarPorId(ID_pedido, cliente, item);

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

    @PutMapping("/{ID_pedido}/{cliente}/{item}")
    public ResponseEntity<Pedido> atualizar (@PathVariable int ID_pedido, @PathVariable int cliente, @PathVariable int item, @RequestBody Pedido pedido){
        Pedido pedidoAtualizado = pedidoService.atualizar(ID_pedido, cliente, item, pedido);

        if (pedidoAtualizado == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(pedidoAtualizado);
    }

}
