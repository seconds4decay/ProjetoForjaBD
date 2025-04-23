package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.models.Armadura;
import com.cesarschool.forjaapi.repositories.ArmaduraRepository;
import org.springframework.stereotype.Service;

@Service
public class ArmaduraService {
    private final ArmaduraRepository armaduraRepository;

    public ArmaduraService(ArmaduraRepository armaduraRepository) {
        this.armaduraRepository = armaduraRepository;
    }

    public Armadura salvar(Armadura armadura) {
        if(armadura.getFerreiro() != null) {
            armadura.setFerreiro(armadura.getFerreiro());
        } else {
            return null;
        }

        return armaduraRepository.salvar(armadura);
    }

    public void deletar(int id) {
        armaduraRepository.deletar(id);
    }

    public Armadura buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        return armaduraRepository.buscarPorId(id);
    }

    public Armadura atualizar(int id, Armadura armadura) {
        if(armadura.getFerreiro() != null) {
            armadura.setFerreiro(armadura.getFerreiro());
        } else {
            return null;
        }

        armadura.setId(id);
        return armaduraRepository.atualizar(armadura);
    }
}
