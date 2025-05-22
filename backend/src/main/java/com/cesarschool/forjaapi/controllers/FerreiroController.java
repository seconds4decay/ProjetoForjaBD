package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.FerreiroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

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

        if (novoFerreiro == null) {
            return ResponseEntity
                    .badRequest()
                    .body(null);
        }

        return ResponseEntity
                .created(URI.create("/ferreiros/" + novoFerreiro.getId()))
                .body(novoFerreiro);
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
    public ResponseEntity<Ferreiro> buscarPorId(@PathVariable int id) {
        Ferreiro ferreiro = service.buscarPorId(id);
        if (ferreiro != null) {
            return ResponseEntity.ok(ferreiro);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Ferreiro>> buscarTodos() {
        List<Ferreiro> ferreiros = service.buscarTodos();

        if (ferreiros.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(ferreiros);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ferreiro> atualizar(@PathVariable int id, @RequestBody Ferreiro ferreiro) {
        Ferreiro ferreiroAtualizado = service.atualizar(id, ferreiro);

        if (ferreiroAtualizado != null) {
            return ResponseEntity.ok(ferreiroAtualizado);
        }

        return ResponseEntity.notFound().build();

    }

    @GetMapping("/ferreirosMaisRequisitados")
    public ResponseEntity<List<Object>> ferreirosMaisRequisitados() {
        List<Object> ferreiros = service.ferreirosMaisRequisitados();

        if (ferreiros.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(ferreiros);
    }

    @GetMapping("/ferreirosMaisRentaveis")
    public ResponseEntity<List<Object>> ferreirosMaisRentaveis() {
        List<Object> ferreiros = service.ferreirosMaisRentaveis();

        if (ferreiros.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(ferreiros);
    }

    @GetMapping("/qntFerreirosPorLoja")
    public ResponseEntity<List<Object>> qntFerreirosPorLoja() {
        List<Object> ferreiros = service.qntFerreirosPorLoja();

        if (ferreiros.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(ferreiros);
    }

    @GetMapping("/qntFerreirosEspecializados")
    public ResponseEntity<List<Object>> qntFerreirosEspecializados() {
        List<Object> ferreiros = service.qntFerreirosEspecializados();

        if (ferreiros.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(ferreiros);
    }
}
