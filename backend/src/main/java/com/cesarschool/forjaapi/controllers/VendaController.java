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

        return ResponseEntity
                .created(URI.create("/venda/" + venda.getCliente() + "/" + venda.getLoja() + "/" + venda.getItem()))
                .body(service.salvar(venda));

    }

    @DeleteMapping("/{id_loja}/{id_item}/{id_cliente}")
    public ResponseEntity<Void> deletar(@PathVariable int id_loja, @PathVariable int id_item, @PathVariable int id_cliente) {
        service.deletar(id_loja, id_item, id_cliente);
        return ResponseEntity.noContent().build(); // HTTP 204
    }

    @GetMapping("/{id_loja}/{id_item}/{id_cliente}")
    public ResponseEntity<Venda> buscarPorId(@PathVariable int id_loja, @PathVariable int id_item, @PathVariable int id_cliente) {
        Venda venda = service.buscarPorId(id_loja, id_item, id_cliente);
        if (venda != null) {
            return ResponseEntity.ok(venda); // HTTP 200
        } else {
            return ResponseEntity.notFound().build(); // HTTP 404
        }
    }

    @PutMapping("/{id_loja}/{id_item}/{id_cliente}")
    public ResponseEntity<Venda> atualizar(@PathVariable int id_loja, @PathVariable int id_item, @PathVariable int id_cliente, @RequestBody Venda venda) {
        Venda vendaAtualizada = service.atualizar(id_loja, id_item, id_cliente, venda);

        if (vendaAtualizada != null) {
            return ResponseEntity.ok(vendaAtualizada); // HTTP 200
        }

        return ResponseEntity.notFound().build(); // HTTP 404
    }



}
