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

        if(novoMaterial == null) {
            return ResponseEntity.badRequest().build(); // HTTP 400
        }

        return ResponseEntity
                .created(URI.create("/material/" + novoMaterial.getId()))
                .body(novoMaterial);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build(); // HTTP 204
    }

    @GetMapping("/{id}")
    public ResponseEntity<Material> buscarPorId(@PathVariable int id) {
        Material material = service.buscarPorId(id);
        if (material != null) {
            return ResponseEntity.ok(material); // HTTP 200
        } else {
            return ResponseEntity.notFound().build(); // HTTP 404
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Material> atualizar(@PathVariable int id, @RequestBody Material material) {
        Material materialAtualizado = service.atualizar(id, material);

        if (materialAtualizado != null) {
            return ResponseEntity.ok(materialAtualizado); // HTTP 200
        }

        return ResponseEntity.notFound().build(); // HTTP 404

    }

}
