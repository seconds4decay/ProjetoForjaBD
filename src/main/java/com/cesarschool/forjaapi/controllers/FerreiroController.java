package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.services.FerreiroService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ferreiro")
public class FerreiroController {

    private final FerreiroService service;

    public FerreiroController(FerreiroService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(@RequestBody Ferreiro ferreiro) {
        service.salvar(ferreiro);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id) {
        service.deletar(id);
    }
}
