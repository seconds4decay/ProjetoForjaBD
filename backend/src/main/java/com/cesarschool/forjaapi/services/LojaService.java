package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.LojaRepository;

import com.cesarschool.forjaapi.models.Loja;
import org.springframework.stereotype.Service;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class LojaService {

    private final LojaRepository repository;

    public LojaService(LojaRepository repository) {
        this.repository = repository;
    }

    public Loja salvar(Loja loja) {
        return repository.salvar(loja);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }

    public Loja buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return repository.buscarPorId(id);
    }

    public Loja atualizar(int id, Loja loja) {
        loja.setId(id);
        return repository.atualizar(loja);
    }
}
