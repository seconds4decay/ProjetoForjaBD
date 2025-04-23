package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.FornecedorRepository;

import com.cesarschool.forjaapi.models.Fornecedor;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class FornecedorService {

    private final FornecedorRepository repository;

    public FornecedorService(FornecedorRepository repository) {
        this.repository = repository;
    }

    public Fornecedor salvar(Fornecedor fornecedor) {
        return repository.salvar(fornecedor);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }

    public Fornecedor buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return repository.buscarPorId(id);
    }

    public List<Fornecedor> buscarTodos() {
        return repository.buscarTodos();
    }

    public Fornecedor atualizar(int id, Fornecedor fornecedor) {

        fornecedor.setId(id);
        return repository.atualizar(fornecedor);
    }
}
