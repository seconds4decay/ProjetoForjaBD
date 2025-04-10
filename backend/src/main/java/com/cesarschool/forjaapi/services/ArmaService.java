package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.models.Arma;
import com.cesarschool.forjaapi.repositories.ArmaRepository;
import org.springframework.stereotype.Service;

@Service
public class ArmaService {
    private final ArmaRepository armaRepository;

    public ArmaService(ArmaRepository armaRepository) {
        this.armaRepository = armaRepository;
    }

    public void salvarArma(Arma arma) {
        armaRepository.salvar(arma);
    }

    public void deletarArma(int id) {
        armaRepository.deletar(id);
    }
}
