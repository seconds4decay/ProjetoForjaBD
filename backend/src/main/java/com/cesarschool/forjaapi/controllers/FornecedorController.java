package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Fornecedor;
import com.cesarschool.forjaapi.services.FornecedorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    private final FornecedorService service;

    public FornecedorController(FornecedorService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Fornecedor> salvar(@RequestBody Fornecedor fornecedor) {
        Fornecedor novoFornecedor = service.salvar(fornecedor);

        if (novoFornecedor == null) {
            return ResponseEntity
                    .badRequest()
                    .body(null);
        }

        return ResponseEntity
                .created(URI.create("/fornecedores/" + novoFornecedor.getId()))
                .body(novoFornecedor);
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
    public ResponseEntity<Fornecedor> buscarPorId(@PathVariable int id) {
        Fornecedor fornecedor = service.buscarPorId(id);
        if (fornecedor != null) {
            return ResponseEntity.ok(fornecedor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Fornecedor> atualizar(@PathVariable int id, @RequestBody Fornecedor fornecedor) {
        Fornecedor fornecedorAtualizado = service.atualizar(id, fornecedor);
        if (fornecedorAtualizado != null) {
            return ResponseEntity.ok(fornecedorAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
