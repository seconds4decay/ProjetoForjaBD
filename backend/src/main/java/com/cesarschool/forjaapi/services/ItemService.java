package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.FerreiroRepository;
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
    private final FerreiroRepository ferreiroRepository;

    public ItemService(ItemRepository repository, FerreiroRepository ferreiroRepository) {
        this.repository = repository;
        this.ferreiroRepository = ferreiroRepository;
    }

    public Item salvar(Item item) {

        if(item.getFerreiro() != null) {
            item.setFerreiro(ferreiroRepository.buscarPorId(item.getFerreiro().getId()));
        } else {
            return null;
        }

        return repository.salvar(item);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }

    public Item buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return repository.buscarPorId(id);
    }

    public Item atualizar(int id, Item item) {

        if(item.getFerreiro() != null) {
            item.setFerreiro(ferreiroRepository.buscarPorId(item.getFerreiro().getId()));
        } else {
            return null;
        }

        item.setId(id);
        return repository.atualizar(id, item);
    }
}