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
        return ResponseEntity
                .created(URI.create("/fornecedores/" + novoFornecedor.getId()))
                .body(novoFornecedor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
