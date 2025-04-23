package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Armadura;
import com.cesarschool.forjaapi.services.ArmaduraService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/armadura")
public class ArmaduraController {

    private final ArmaduraService service;

    public ArmaduraController(ArmaduraService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Armadura> criarArmadura(@RequestBody Armadura armadura) {
        Armadura novaArmadura = service.salvar(armadura);

        if (novaArmadura == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity
                .created(URI.create("/armaduras/" + novaArmadura.getId()))
                .body(novaArmadura);
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
    public ResponseEntity<Armadura> buscarPorId(@PathVariable int id) {
        Armadura armadura = service.buscarPorId(id);

        if (armadura != null) {
            return ResponseEntity.ok(armadura);
        } else {
            return ResponseEntity.notFound().build();
        }


    }

    @PutMapping("/{id}")
    public ResponseEntity<Armadura> atualizar(@PathVariable int id, @RequestBody Armadura armadura) {
        Armadura armaduraAtualizada = service.atualizar(id, armadura);

        if (armaduraAtualizada != null) {
            return ResponseEntity.ok(armaduraAtualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
