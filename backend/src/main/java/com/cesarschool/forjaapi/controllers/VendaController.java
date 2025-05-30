package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.repositories.VendaRepository;
import com.cesarschool.forjaapi.services.VendaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/venda")
public class VendaController {

    private final VendaService service;

    public VendaController(VendaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Venda> salvar(@RequestBody Venda venda) {

        if (venda.getCliente() == null || venda.getLoja() == null || venda.getItem() == null) {
            return ResponseEntity
                    .badRequest()
                    .body(null);
        }

        return ResponseEntity
                .created(URI.create("/venda/" + venda.getCliente() + "/" + venda.getLoja() + "/" + venda.getItem()))
                .body(service.salvar(venda));

    }

    @DeleteMapping("/{loja}/{item}/{cliente}")
    public ResponseEntity<Void> deletar(@PathVariable int loja, @PathVariable int item, @PathVariable int cliente) {
        if (service.buscarPorId(loja, item, cliente) == null) {
            return ResponseEntity.notFound().build();
        }

        service.deletar(loja, item, cliente);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{loja}/{item}/{cliente}")
    public ResponseEntity<Venda> buscarPorId(@PathVariable int loja, @PathVariable int item, @PathVariable int cliente) {
        Venda venda = service.buscarPorId(loja, item, cliente);

        if (venda != null) {
            return ResponseEntity.ok(venda);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Venda>> buscarTodos() {
        List<Venda> vendas = service.buscarTodos();

        if (vendas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(vendas);

    }

    @PutMapping("/{loja}/{item}/{cliente}")
    public ResponseEntity<Venda> atualizar(@PathVariable int loja, @PathVariable int item, @PathVariable int cliente, @RequestBody Venda venda) {
        Venda vendaAtualizada = service.atualizar(loja, item, cliente, venda);

        if (vendaAtualizada != null) {
            return ResponseEntity.ok(vendaAtualizada);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/qntTotalVendas/{mes}")
    public ResponseEntity<Object> qntTotalVendas(@PathVariable int mes) {
        Object qntVendas = service.qntTotalVendas(mes);

        if (qntVendas != null) {
            return ResponseEntity.ok(qntVendas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/tipoItemLucro")
    public ResponseEntity<Object> tipoItemLucro() {
        Object tipoItemLucro = service.tipoItemLucro();

        if (tipoItemLucro != null) {
            return ResponseEntity.ok(tipoItemLucro);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/clientesMaisCompradores")
    public ResponseEntity<List<VendaRepository.VendaDTO3>> clientesMaisCompradores() {
        List<VendaRepository.VendaDTO3> clientesMaisCompradores = service.clientesMaisCompradores();

        if (clientesMaisCompradores != null) {
            return ResponseEntity.ok(clientesMaisCompradores);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
