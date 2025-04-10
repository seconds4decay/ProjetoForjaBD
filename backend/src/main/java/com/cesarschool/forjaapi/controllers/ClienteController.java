package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Cliente;
import com.cesarschool.forjaapi.services.ClienteService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    private final ClienteService service;

    public ClienteController(ClienteService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(@RequestBody Cliente cliente) {
        service.salvar(cliente);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id) {
        service.deletar(id);
    }
}