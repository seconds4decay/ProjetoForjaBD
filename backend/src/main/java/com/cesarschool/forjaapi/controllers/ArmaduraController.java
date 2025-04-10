package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Armadura;
import com.cesarschool.forjaapi.services.ArmaduraService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/armaduras")
public class ArmaduraController {

    private final ArmaduraService service;

    public ArmaduraController(ArmaduraService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(Armadura armadura) {
        service.salvar(armadura);
    }

    @DeleteMapping("/{id}")
    public void deletar(int id) {
        service.deletar(id);
    }
}
