package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.DashboardRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    public DashboardRepository repository;

    public DashboardService(DashboardRepository repository) {
        this.repository = repository;
    }

    public Object qntFerreiroPedidoClienteVenda() {
        return repository.qntFerreiroPedidoClienteVenda();
    }

    public Object findFerreiroMaisPedidos() {
        return repository.findFerreiroMaisPedidos();
    }

    public Object findItemMaisVendido() {
        return repository.findItemMaisVendido();
    }
}
