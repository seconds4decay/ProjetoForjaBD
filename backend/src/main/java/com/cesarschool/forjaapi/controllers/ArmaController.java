package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Arma;
import com.cesarschool.forjaapi.services.ArmaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/arma")
public class ArmaController {

    private final ArmaService service;

    public ArmaController(ArmaService armaService) {
        this.service = armaService;
    }

    @PostMapping
    public ResponseEntity<Arma> salvar(@RequestBody Arma arma) {
        Arma novaArma = service.salvar(arma);

        if (novaArma == null) {
            return ResponseEntity.badRequest().build(); // HTTP 400
        }

        return ResponseEntity
                .created(URI.create("/armas/" + novaArma.getId())) // HTTP 201 + Location header
                .body(novaArma); // JSON no corpo da resposta
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build(); // HTTP 204
    }

    @GetMapping("/{id}")
    public ResponseEntity<Arma> buscarPorId(@PathVariable int id) {
        Arma arma = service.buscarPorId(id);

        if (arma == null) {
            return ResponseEntity.notFound().build(); // HTTP 404
        }

        return ResponseEntity.ok(arma); // HTTP 200 + JSON no corpo da resposta
    }

    @PutMapping("/{id}")
    public ResponseEntity<Arma> atualizar(@PathVariable int id, @RequestBody Arma arma) {
        Arma armaAtualizada = service.atualizar(id, arma);

        if (armaAtualizada == null) {
            return ResponseEntity.notFound().build(); // HTTP 404
        }

        return ResponseEntity.ok(armaAtualizada); // HTTP 200 + JSON no corpo da resposta
    }
}
