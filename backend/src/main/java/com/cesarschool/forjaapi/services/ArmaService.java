package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.models.Arma;
import com.cesarschool.forjaapi.repositories.ArmaRepository;
import org.springframework.stereotype.Service;

@Service
public class ArmaService {
    private final ArmaRepository armaRepository;
    private final FerreiroService ferreiroService;

    public ArmaService(ArmaRepository armaRepository, FerreiroService ferreiroService) {
        this.armaRepository = armaRepository;
        this.ferreiroService = ferreiroService;
    }

    public Arma salvar(Arma arma) {
        if(arma.getFerreiro() != null) {
            arma.setFerreiro(ferreiroService.buscarPorId(arma.getFerreiro().getId()));
        } else {
            return null;
        }

        return armaRepository.salvar(arma);
    }

    public void deletar(int id) {
        armaRepository.deletar(id);
    }

    public Arma buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return armaRepository.buscarPorId(id);
    }

    public Arma atualizar(int id, Arma arma) {
        if(arma.getFerreiro() != null) {
            arma.setFerreiro(ferreiroService.buscarPorId(arma.getFerreiro().getId()));
        } else {
            return null;
        }

        arma.setId(id);
        return armaRepository.atualizar(arma);
    }
}
