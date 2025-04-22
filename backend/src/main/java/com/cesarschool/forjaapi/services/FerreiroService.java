package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.FerreiroRepository;

import com.cesarschool.forjaapi.models.Ferreiro;
import com.cesarschool.forjaapi.repositories.LojaRepository;
import org.springframework.stereotype.Service;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class FerreiroService {

    private final FerreiroRepository repository;
    private final LojaRepository lojaRepository;

    public FerreiroService(FerreiroRepository repository, LojaRepository lojaRepository) {
        this.repository = repository;
        this.lojaRepository = lojaRepository;
    }

    public Ferreiro salvar(Ferreiro ferreiro) {
        if(ferreiro.getGerente() != null) {
            ferreiro.setGerente(repository.buscarPorId(ferreiro.getGerente().getId()));
        }

        if(ferreiro.getLoja() != null) {
            ferreiro.setLoja(lojaRepository.buscarPorId(ferreiro.getLoja().getId()));
        } else {
            return null;
        }

        return repository.salvar(ferreiro);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }

    public Ferreiro buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return repository.buscarPorId(id);
    }

    public Ferreiro atualizar(Ferreiro ferreiro) {
        Ferreiro ferreiroExistente = repository.buscarPorId(ferreiro.getId());

        if (ferreiroExistente == null) {
            return null;
        }

        if(ferreiro.getGerente() != null) {
            ferreiro.setGerente(repository.buscarPorId(ferreiro.getGerente().getId()));
        }

        return repository.atualizar(ferreiro);
    }
}
