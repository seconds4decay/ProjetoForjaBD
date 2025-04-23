package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.FornecedorRepository;
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
    private final FornecedorRepository fornecedorRepository;

    public MaterialService(MaterialRepository repository, FornecedorRepository fornecedorRepository) {
        this.repository = repository;
        this.fornecedorRepository = fornecedorRepository;
    }

    public Material salvar(Material material) {
        if(material.getFornecedor() != null) {
            material.setFornecedor(fornecedorRepository.buscarPorId(material.getFornecedor().getId()));
        } else {
            return null;
        }

        return repository.salvar(material);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }

    public Material buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return repository.buscarPorId(id);
    }

    public Material atualizar(int id, Material material) {

        if(material.getFornecedor() != null) {
            material.setFornecedor(fornecedorRepository.buscarPorId(material.getFornecedor().getId()));
        } else {
            return null;
        }

        material.setId(id);
        return repository.atualizar(material);
    }
}
