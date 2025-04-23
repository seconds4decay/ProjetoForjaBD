package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Material;
import com.cesarschool.forjaapi.services.MaterialService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

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
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity
                .created(URI.create("/material/" + novoMaterial.getId()))
                .body(novoMaterial);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        if (service.buscarPorId(id) == null) {
            return ResponseEntity.notFound().build();
        }

        service.deletar(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Material> buscarPorId(@PathVariable int id) {
        Material material = service.buscarPorId(id);

        if (material != null) {
            return ResponseEntity.ok(material);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Material>> buscarTodos() {
        List<Material> materiais = service.buscarTodos();

        if(materiais.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(materiais);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Material> atualizar(@PathVariable int id, @RequestBody Material material) {
        Material materialAtualizado = service.atualizar(id, material);

        if (materialAtualizado != null) {
            return ResponseEntity.ok(materialAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
