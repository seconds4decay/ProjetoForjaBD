package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Material;
import com.cesarschool.forjaapi.services.MaterialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/material")
public class MaterialController {

    private final MaterialService service;

    public MaterialController(MaterialService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Material> cadastrar(@RequestBody Material material) {
        Material novoMaterial = service.salvar(material);

        return ResponseEntity
                .created(URI.create("/material/" + novoMaterial.getId()))
                .body(novoMaterial);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build(); // HTTP 204
    }

}
