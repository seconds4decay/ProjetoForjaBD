package com.cesarschool.forjaapi.repositories;

import com.cesarschool.forjaapi.models.Armadura;
import com.cesarschool.forjaapi.models.Item;
import com.cesarschool.forjaapi.services.FerreiroService;
import com.cesarschool.forjaapi.services.ItemService;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ArmaduraRepository {

    private final JdbcTemplate jdbc;
    private final ItemService itemService;
    private final FerreiroService ferreiroService;

    public ArmaduraRepository(JdbcTemplate jdbc, ItemService itemService, FerreiroService ferreiroService) {
        this.jdbc = jdbc;
        this.itemService = itemService;
        this.ferreiroService = ferreiroService;
    }

    public Armadura salvar(Armadura armadura) {
        Integer ferreiroId = armadura.getFerreiro() != null ? armadura.getFerreiro().getId() : null;

        jdbc.update("INSERT INTO Item (Nome, Valor, Peso, Raridade, Data_Fabricacao, Ferreiro) VALUES (?, ?, ?, ?, ?)",
                armadura.getNome(), armadura.getValor(), armadura.getPeso(), armadura.getRaridade(), armadura.getDataFabricacao(), ferreiroId);

        int itemId = jdbc.queryForObject("SELECT MAX(Item) FROM Item", Integer.class);

        jdbc.update("INSERT INTO Armadura (Item, Nome, Defesa, Tipo) VALUES (?, ?, ?, ?)",
                itemId, armadura.getNome(), armadura.getDefesa(), armadura.getTipo());

        armadura.setId(itemId);
        return armadura;
    }

    public void deletar(int id) {
        jdbc.update("DELETE FROM Item WHERE Item = ?", id);
    }

    public Armadura buscarPorId(Integer id) {
        if(id == null) {
            return null;
        }

        try {
            return jdbc.queryForObject("SELECT * FROM Armadura WHERE Item = ?", new Object[]{id}, (rs, rowNum) -> {
                Armadura armadura = new Armadura();
                Integer itemId = rs.getObject("Item", Integer.class);
                if(itemId != null) {
                    armadura.setId(itemId);
                }
                armadura.setNome(rs.getString("Nome"));
                armadura.setDefesa(rs.getInt("Defesa"));
                armadura.setTipo(rs.getString("Tipo"));

                Item item = itemService.buscarPorId(itemId);
                if (item != null) {
                    armadura.setValor(item.getValor());
                    armadura.setPeso(item.getPeso());
                    armadura.setRaridade(item.getRaridade());
                    armadura.setDataFabricacao(item.getDataFabricacao());
                    armadura.setFerreiro(ferreiroService.buscarPorId(item.getFerreiro().getId()));
                }
                
                return armadura;
            });
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    public List<Armadura> buscarTodos() {
        return jdbc.query("SELECT * FROM Armadura", (rs, rowNum) -> {
            Armadura armadura = new Armadura();
            Integer itemId = rs.getObject("Item", Integer.class);
            if(itemId != null) {
                armadura.setId(itemId);
            }
            armadura.setNome(rs.getString("Nome"));
            armadura.setDefesa(rs.getInt("Defesa"));
            armadura.setTipo(rs.getString("Tipo"));

            Item item = itemService.buscarPorId(itemId);
            if (item != null) {
                armadura.setValor(item.getValor());
                armadura.setPeso(item.getPeso());
                armadura.setRaridade(item.getRaridade());
                armadura.setDataFabricacao(item.getDataFabricacao());
                armadura.setFerreiro(ferreiroService.buscarPorId(item.getFerreiro().getId()));
            }

            return armadura;
        });
    }

    public Armadura atualizar(Armadura armadura) {
        jdbc.update("UPDATE Armadura SET Nome = ?, Defesa = ?, Tipo = ? WHERE Item = ?",
                armadura.getNome(), armadura.getDefesa(), armadura.getTipo(), armadura.getId());

        return armadura;
    }
}
