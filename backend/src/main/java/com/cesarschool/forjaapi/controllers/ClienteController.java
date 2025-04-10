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
}