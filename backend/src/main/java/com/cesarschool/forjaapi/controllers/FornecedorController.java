package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Fornecedor;
import com.cesarschool.forjaapi.services.FornecedorService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    private final FornecedorService service;

    public FornecedorController(FornecedorService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(@RequestBody Fornecedor fornecedor) {
        service.salvar(fornecedor);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id) {
        service.deletar(id);
    }
}
