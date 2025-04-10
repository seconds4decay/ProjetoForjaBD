package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.ClienteRepository;

import com.cesarschool.forjaapi.models.Cliente;
import org.springframework.stereotype.Service;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class ClienteService {

    private final ClienteRepository repository;

    public ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public void salvar(Cliente cliente) {
        repository.salvar(cliente);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }
}
