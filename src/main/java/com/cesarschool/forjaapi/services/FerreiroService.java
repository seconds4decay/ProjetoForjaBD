package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.repositories.FerreiroRepository;

import com.cesarschool.forjaapi.models.Ferreiro;
import org.springframework.stereotype.Service;

/*
Camada de Serviços: É onde acontece a lógica de negócio da aplicação
e onde as informações recebidas são validadas antes de serem adicionadas
ao banco de dados.
*/

@Service
public class FerreiroService {

    private final FerreiroRepository repository;

    public FerreiroService(FerreiroRepository repository) {
        this.repository = repository;
    }

    public void salvar(Ferreiro ferreiro) {
        repository.salvar(ferreiro);
    }

    public void deletar(int id) {
        repository.deletar(id);
    }
}
