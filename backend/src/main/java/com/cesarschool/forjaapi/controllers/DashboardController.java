package com.cesarschool.forjaapi.controllers;

import com.cesarschool.forjaapi.services.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    public DashboardService service;

    public DashboardController(DashboardService service) {
        this.service = service;
    }

    @GetMapping("/qntFerreiroPedidoClienteVenda")
    public ResponseEntity<Object> qntFerreiroPedidoClienteVenda() {

        Object result = service.qntFerreiroPedidoClienteVenda();
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/findFerreiroMaisPedidos")
    public ResponseEntity<Object> findFerreiroMaisPedidos() {

        Object result = service.findFerreiroMaisPedidos();
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/findItemMaisVendido")
    public ResponseEntity<Object> findItemMaisVendido() {

        Object result = service.findItemMaisVendido();
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }

    }



}


