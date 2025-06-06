package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.services.ItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Item> salvar(@RequestBody Item item) {
        Item novoItem = service.salvar(item);

        if(novoItem == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity
                .created(URI.create("/itens/" + novoItem.getId()))
                .body(novoItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        if (service.buscarPorId(id) == null) {
            return ResponseEntity.notFound().build();
        }

        service.deletar(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> buscarPorId(@PathVariable int id) {
        Item item = service.buscarPorId(id);

        if(item != null) {
            return ResponseEntity.ok(item);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping
    public ResponseEntity<List<Item>> buscarTodos() {
        List<Item> itens = service.buscarTodos();

        if(itens.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(itens);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> atualizar(@PathVariable int id, @RequestBody Item item) {
        Item itemAtualizado = service.atualizar(id, item);

        if(itemAtualizado != null) {
            return ResponseEntity.ok(itemAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
