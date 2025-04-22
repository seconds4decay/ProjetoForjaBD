package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Cliente;
import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.models.Loja;
import com.cesarschool.forjaapi.models.Venda;
import com.cesarschool.forjaapi.services.ClienteService;
import com.cesarschool.forjaapi.services.ItemService;
import com.cesarschool.forjaapi.services.LojaService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class VendaRepository {

    public final JdbcTemplate jdbc;
    private final LojaService lojaService;
    private final ItemService itemService;
    private final ClienteService clienteService;

    public VendaRepository(JdbcTemplate jdbc, LojaService lojaService, ItemService itemService, ClienteService clienteService) {
        this.jdbc = jdbc;
        this.lojaService = lojaService;
        this.itemService = itemService;
        this.clienteService = clienteService;
    }

    public Venda salvar(Venda venda) {
        jdbc.update("INSERT INTO Venda (ID_loja, ID_cliente, ID_item) VALUES (?, ?, ?)",
                venda.getLoja().getId(), venda.getCliente().getId(), venda.getItem().getId());

        return venda;
    }

    public void deletar(int id_loja, int id_item, int id_cliente) {
        jdbc.update("DELETE FROM Venda WHERE ID_loja = ? AND ID_item = ? AND ID_cliente = ?",
                id_loja, id_item, id_cliente);
    }

    public Venda buscarPorId(int id_loja, int id_item, int id_cliente) {
        return null;
    }

    public Venda atualizar(int id_loja, int id_item, int id_cliente, Venda venda) {
        jdbc.update("UPDATE Venda SET ID_loja = ?, ID_item = ?, ID_cliente = ? WHERE ID_loja = ? AND ID_item = ? AND ID_cliente = ?",
                venda.getLoja().getId(), venda.getItem().getId(), venda.getCliente().getId(),
                id_loja, id_item, id_cliente);

        return venda;
    }
}
