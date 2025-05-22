package com.cesarschool.forjaapi.services;

import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.repositories.VendaRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class VendaService {

    private VendaRepository repository;
    private final LojaService lojaService;
    private final ItemService itemService;
    private final ClienteService clienteService;

    public VendaService(VendaRepository repository, LojaService lojaService, ItemService itemService, ClienteService clienteService) {
        this.repository = repository;
        this.lojaService = lojaService;
        this.itemService = itemService;
        this.clienteService = clienteService;
    }

    public Venda salvar(Venda venda) {
        if(venda.getLoja() == null || venda.getItem() == null || venda.getCliente() == null) {
            return null;
        }

        venda.setLoja(lojaService.buscarPorId(venda.getLoja().getId()));
        venda.setItem(itemService.buscarPorId(venda.getItem().getId()));
        venda.setCliente(clienteService.buscarPorId(venda.getCliente().getId()));
        venda.setDataTransacao(String.valueOf(LocalDate.now()));

        return repository.salvar(venda);
    }

    public void deletar(int id_loja, int id_item, int id_cliente) {
        repository.deletar(id_loja, id_item, id_cliente);
    }

    public Venda buscarPorId(Integer id_loja, Integer id_item, Integer id_cliente) {
        if(id_loja == null || id_item == null || id_cliente == null) {
            return null;
        }

        return repository.buscarPorId(id_loja, id_item, id_cliente);
    }

    public List<Venda> buscarTodos() {
        return repository.buscarTodos();
    }

    public Venda atualizar(int id_loja, int id_item, int id_cliente, Venda venda) {
        if(venda.getLoja() == null || venda.getItem() == null || venda.getCliente() == null) {
            return null;
        }

        return repository.atualizar(id_loja, id_item, id_cliente, venda);
    }

    public Object qntTotalVendas() {
        return repository.qntTotalVendas();
    }

    public Object tipoItemLucro() {
        return repository.tipoItemLucro();
    }

    public List<VendaRepository.VendaDTO3> clientesMaisCompradores() {
        return repository.clientesMaisCompradores();
    }
}
