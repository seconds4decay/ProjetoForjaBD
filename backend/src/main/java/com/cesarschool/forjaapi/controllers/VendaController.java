package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.services.VendaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

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

    @PutMapping("/{loja}/{item}/{cliente}")
    public ResponseEntity<Venda> atualizar(@PathVariable int loja, @PathVariable int item, @PathVariable int cliente, @RequestBody Venda venda) {
        Venda vendaAtualizada = service.atualizar(loja, item, cliente, venda);

        if (vendaAtualizada != null) {
            return ResponseEntity.ok(vendaAtualizada);
        } else {
            return ResponseEntity.notFound().build();
        }

    }



}
