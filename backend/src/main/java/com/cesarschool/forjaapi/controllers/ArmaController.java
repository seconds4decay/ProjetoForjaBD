package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Arma;
import com.cesarschool.forjaapi.services.ArmaService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/arma")
public class ArmaController {

    private final ArmaService armaService;

    public ArmaController(ArmaService armaService) {
        this.armaService = armaService;
    }

    @PostMapping
    public void salvarArma(Arma arma) {
        armaService.salvarArma(arma);
    }

    @DeleteMapping("/{id}")
    public void deletarArma(int id) {
        armaService.deletarArma(id);
    }
}
