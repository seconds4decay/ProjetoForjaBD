package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.MaterialRepository;

import com.cesarschool.forjaapi.models.Material;
import org.springframework.stereotype.Service;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class MaterialService {

    private final MaterialRepository repository;

    public MaterialService(MaterialRepository repository) {
        this.repository = repository;
    }

    public void salvar(Material material) {
        repository.salvar(material);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }
}
