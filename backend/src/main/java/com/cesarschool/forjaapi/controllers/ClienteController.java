package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Cliente;
import com.cesarschool.forjaapi.services.ClienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    private final ClienteService service;

    public ClienteController(ClienteService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody Cliente cliente) {
        Cliente novoCliente = service.salvar(cliente);
        return ResponseEntity
                .created(URI.create("/clientes/" + novoCliente.getId())) // HTTP 201 + Location header
                .body(novoCliente); // JSON no corpo da resposta
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build(); // HTTP 204
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable int id) {
        Cliente cliente = service.buscarPorId(id);
        if (cliente != null) {
            return ResponseEntity.ok(cliente); // HTTP 200
        } else {
            return ResponseEntity.notFound().build(); // HTTP 404
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable int id, @RequestBody Cliente cliente) {
        Cliente clienteAtualizado = service.atualizar(id, cliente);
        if (clienteAtualizado != null) {
            return ResponseEntity.ok(clienteAtualizado); // HTTP 200
        }

        return ResponseEntity.notFound().build(); // HTTP 404
    }
}