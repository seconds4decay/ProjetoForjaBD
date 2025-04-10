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
        return armaduraRepository.salvar(armadura);
    }

    public void deletar(int id) {
        armaduraRepository.deletar(id);
    }
}
