package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Loja;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/loja")
public class LojaController {

    private final LojaService service;

    public LojaController(LojaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Loja> salvar(@RequestBody Loja loja) {
        Loja lojaSalva = service.salvar(loja);

        if (lojaSalva == null) {
            return ResponseEntity
                    .badRequest()
                    .body(null);
        }

        return ResponseEntity
                .created(URI.create("/loja/" + lojaSalva.getId()))
                .body(lojaSalva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Loja> buscarPorId(@PathVariable int id) {
        Loja loja = service.buscarPorId(id);

        if (loja != null) {
            return ResponseEntity.ok(loja);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
