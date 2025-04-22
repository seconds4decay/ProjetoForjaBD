package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.repositories.VendaRepository;
import org.springframework.stereotype.Service;

@Service
public class VendaService {

    private VendaRepository repository;

    public VendaService(VendaRepository repository) {
        this.repository = repository;
    }

    public Venda salvar(Venda venda) {
        if(venda.getLoja() == null || venda.getItem() == null || venda.getCliente() == null) {
            return null;
        }


        return repository.salvar(venda);
    }

    public void deletar(int id_loja, int id_item, int id_cliente) {
        repository.deletar(id_loja, id_item, id_cliente);
    }

    public Venda buscarPorId(int id_loja, int id_item, int id_cliente) {
        return repository.buscarPorId(id_loja, id_item, id_cliente);
    }

    public Venda atualizar(int id_loja, int id_item, int id_cliente, Venda venda) {
        if(venda.getLoja() == null || venda.getItem() == null || venda.getCliente() == null) {
            return null;
        }

        return repository.atualizar(id_loja, id_item, id_cliente, venda);
    }
}
