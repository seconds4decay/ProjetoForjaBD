package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Loja;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/loja")
public class LojaController {

    private final LojaService service;

    public LojaController(LojaService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(Loja loja) {
        service.salvar(loja);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id) {
        service.deletar(id);
    }

}
