package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.FerreiroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/ferreiro")
public class FerreiroController {

    private final FerreiroService service;

    public FerreiroController(FerreiroService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Ferreiro> salvar(@RequestBody Ferreiro ferreiro) {
        Ferreiro novoFerreiro = service.salvar(ferreiro);

        return ResponseEntity
                .created(URI.create("/ferreiros/" + novoFerreiro.getId())) // HTTP 201 + Location header
                .body(novoFerreiro); // JSON no corpo da resposta
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build(); // HTTP 204
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ferreiro> buscarPorId(@PathVariable int id) {
        Ferreiro ferreiro = service.buscarPorId(id);
        if (ferreiro != null) {
            return ResponseEntity.ok(ferreiro); // HTTP 200
        } else {
            return ResponseEntity.notFound().build(); // HTTP 404
        }
    }
}
