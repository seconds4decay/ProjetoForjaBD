package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.ItemRepository;

import com.cesarschool.forjaapi.models.Item;
import org.springframework.stereotype.Service;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class ItemService {

    private final ItemRepository repository;

    public ItemService(ItemRepository repository) {
        this.repository = repository;
    }

    public Item salvar(Item item) {
        return repository.salvar(item);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }
}