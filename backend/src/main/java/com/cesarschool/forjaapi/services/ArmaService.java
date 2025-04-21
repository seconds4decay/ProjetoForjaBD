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

    public Arma salvar(Arma arma) {
        return armaRepository.salvar(arma);
    }

    public void deletar(int id) {
        armaRepository.deletar(id);
    }
}
