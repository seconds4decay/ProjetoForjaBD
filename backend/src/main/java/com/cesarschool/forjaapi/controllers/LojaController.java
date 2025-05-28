package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Loja;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

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
        if (service.buscarPorId(id) == null) {
            return ResponseEntity.notFound().build();
        }

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

    @GetMapping
    public ResponseEntity<List<Loja>> buscarTodos() {
        List<Loja> lojas = service.buscarTodos();

        if(lojas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(lojas);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Loja> atualizar(@PathVariable int id, @RequestBody Loja loja) {
        Loja lojaAtualizada = service.atualizar(id, loja);

        if (lojaAtualizada != null) {
            return ResponseEntity.ok(lojaAtualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/rentabilidadeLojaPorNome/{nome}")
    public ResponseEntity<List<Object>> rentabilidadeLojaPorNome(@PathVariable String nome) {
        List<Object> loja = service.rentabilidadeLojaPorNome(nome);

        if (loja != null) {
            return ResponseEntity.ok(loja);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/rentabilidadeLoja")
    public ResponseEntity<List<Object>> rentabilidadeLoja() {
        List<Object> lojas = service.rentabilidadeLoja();

        if (lojas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(lojas);
    }

    @GetMapping("/vendasRecentesPorLoja/{nome}")
    public ResponseEntity<List<Object>> vendasRecentesPorLoja(@PathVariable String nome) {
        List<Object> loja = service.vendasRecentesPorLoja(nome);

        if (loja != null) {
            return ResponseEntity.ok(loja);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/vendasRecentes")
    public ResponseEntity<List<Object>> vendasRecentes() {
        List<Object> lojas = service.vendasRecentes();

        if (lojas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(lojas);
    }


}
