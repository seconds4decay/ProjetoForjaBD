package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Material;
import com.cesarschool.forjaapi.services.MaterialService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/material")
public class MaterialController {

    private final MaterialService service;

    public MaterialController(MaterialService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(Material material) {
        service.salvar(material);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id) {
        service.deletar(id);
    }

}
