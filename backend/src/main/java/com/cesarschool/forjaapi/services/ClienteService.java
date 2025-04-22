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

    public Cliente salvar(Cliente cliente) {
        return repository.salvar(cliente);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }

    public Cliente buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return repository.buscarPorId(id);
    }

    public Cliente atualizar(int id, Cliente cliente) {
        Cliente clienteExistente = repository.buscarPorId(id);

        if (clienteExistente == null) {
            return null;
        }

        cliente.setId(id);
        return repository.atualizar(cliente);
    }
}
