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
    public ResponseEntity<Loja> salvar(Loja loja) {
        Loja lojaSalva = service.salvar(loja);

        return ResponseEntity
                .created(URI.create("/loja/" + lojaSalva.getId()))
                .body(lojaSalva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build();
    }

}
