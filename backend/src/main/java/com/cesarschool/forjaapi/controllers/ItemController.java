package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.services.ItemService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    @PostMapping
    public void salvar(Item item) {
        service.salvar(item);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable int id) {
        service.deletar(id);
    }

}
