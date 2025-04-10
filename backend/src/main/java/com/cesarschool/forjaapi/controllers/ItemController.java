package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.services.ItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Item> salvar(Item item) {
        Item novoItem = service.salvar(item);
        return ResponseEntity
                .created(URI.create("/itens/" + novoItem.getId()))
                .body(novoItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        service.deletar(id);

        return ResponseEntity.noContent().build();
    }

}
