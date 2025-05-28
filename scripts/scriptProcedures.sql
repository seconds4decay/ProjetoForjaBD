create
    definer = root@localhost procedure vendasRecentesPorLoja(IN loja_nome varchar(255))
BEGIN
    SELECT l.nome, i.valor, v.data_transacao
    FROM venda v
             JOIN loja l ON v.loja = l.ID_loja
             JOIN item i ON v.item = i.ID_item
    WHERE l.nome = loja_nome
    GROUP BY l.nome, i.valor, v.data_transacao
    ORDER BY v.data_transacao DESC;
END;

create
    definer = root@localhost procedure vendasRecentes()
BEGIN
    SELECT l.nome, i.valor, v.data_transacao
    FROM venda v
             JOIN loja l ON v.loja = l.ID_loja
             JOIN item i ON v.item = i.ID_item
    GROUP BY l.nome, i.valor, v.data_transacao
    ORDER BY v.data_transacao DESC;
END;

create
    definer = root@localhost procedure tipoItemLucro()
BEGIN
    SELECT
        (SELECT SUM(i.valor)
         FROM venda v
                  JOIN item i ON v.item = i.ID_item
                  JOIN arma a ON a.Item = i.ID_item) AS total_arma,
        (SELECT SUM(i.valor)
         FROM venda v
                  JOIN item i ON v.item = i.ID_item
                  JOIN armadura a ON a.Item = i.ID_item) AS total_armadura;

END;

create
    definer = root@localhost procedure rentabilidadeLojaPorNome(IN loja_nome varchar(255))
BEGIN
    SELECT l.nome, SUM(i.valor) AS total_rentabilidade
    FROM loja l
             JOIN ferreiro f ON l.ID_loja = f.loja
             JOIN requisicao_pedido rp ON f.ID_ferreiro = rp.ferreiro
             JOIN item i ON rp.item = i.ID_item
    WHERE l.nome = loja_nome
    GROUP BY l.nome;
END;

create
    definer = root@localhost procedure rentabilidadeLoja()
BEGIN
    SELECT l.nome, SUM(i.valor) AS total_rentabilidade
    FROM loja l
             JOIN ferreiro f ON l.ID_loja = f.loja
             JOIN requisicao_pedido rp ON f.ID_ferreiro = rp.ferreiro
             JOIN item i ON rp.item = i.ID_item
    GROUP BY l.nome;
END;

create
    definer = root@localhost procedure qntTotalVendas(IN p_mes int)
BEGIN
    SELECT
        -- Contagem total de vendas para o mês e o ano atual
        (SELECT COUNT(*)
         FROM venda
         WHERE YEAR(data_transacao) = YEAR(CURDATE())  -- Ano atual
           AND MONTH(data_transacao) = p_mes) AS qnt_vendas,

        -- Soma total de vendas para o mês e o ano atual
        (SELECT SUM(i.valor)
         FROM venda v
                  JOIN item i ON v.item = i.ID_item
         WHERE YEAR(v.data_transacao) = YEAR(CURDATE())  -- Ano atual
           AND MONTH(v.data_transacao) = p_mes) AS total_vendas;
END;

create
    definer = root@localhost procedure qntPedidos()
BEGIN
    SELECT
        ( SELECT COUNT(*) FROM requisicao_pedido WHERE status = 'Em produção') AS qnt_emProducao,
        ( SELECT COUNT(*) FROM requisicao_pedido WHERE status = 'Produzido') AS qnt_produzido,
        ( SELECT COUNT(*) FROM requisicao_pedido WHERE status = 'Entregue') AS qnt_entregue,
        ( SELECT COUNT(*) FROM requisicao_pedido WHERE status = 'Cancelado') AS qnt_cancelado;
END;

create
    definer = root@localhost procedure qntFerreirosPorLoja()
BEGIN
    SELECT l.nome AS loja_nome, COUNT(f.ID_ferreiro) AS total_ferreiros
    FROM loja l
             LEFT JOIN ferreiro f ON l.ID_loja = f.loja
    GROUP BY l.nome;
END;

create
    definer = root@localhost procedure qntFerreirosEspecializados()
BEGIN
    SELECT f.especializacao, COUNT(f.ID_ferreiro) AS total_ferreiros
    FROM ferreiro f
    GROUP BY f.especializacao
    ORDER BY total_ferreiros DESC;
END;

create
    definer = root@localhost procedure qntFerreiroPedidoClienteVenda()
BEGIN
    SELECT
        (SELECT COUNT(DISTINCT ID_ferreiro) FROM ferreiro) AS qnt_ferreiro,
        (SELECT COUNT(DISTINCT ID_pedido) FROM requisicao_pedido) AS qnt_pedido,
        (SELECT COUNT(DISTINCT ID_cliente) FROM cliente) AS qnt_cliente,
        (SELECT COUNT(DISTINCT item) FROM venda) AS qnt_venda;
END;

create
    definer = root@localhost procedure findItemMaisVendido()
BEGIN
    IF (SELECT COUNT(*) FROM item i JOIN arma a ON a.Item = i.ID_item) > 0 THEN
        SELECT i.nome, COUNT(v.item) AS qnt_vendas, (SELECT l.nome FROM loja l WHERE l.ID_loja = v.loja) AS loja_nome, a.tipo
        FROM item i
                 JOIN venda v ON i.ID_item = v.item
                 JOIN arma a ON a.Item = i.ID_item
        GROUP BY i.nome, a.tipo, loja_nome
        ORDER BY COUNT(v.item) DESC
        LIMIT 1;
    ELSE
        SELECT i.nome, COUNT(v.item) AS qnt_vendas, (SELECT l.nome FROM loja l WHERE l.ID_loja = v.loja) AS loja_nome, a.tipo
        FROM item i
                 JOIN venda v ON i.ID_item = v.item
                 JOIN armadura a ON a.Item = i.ID_item
        GROUP BY i.nome, a.tipo
        ORDER BY COUNT(v.item) DESC
        LIMIT 1;
    END IF;
END;

create
    definer = root@localhost procedure findFerreiroMaisPedidos()
BEGIN
    SELECT f.nome, f.especializacao, l.nome AS loja, COUNT(rp.ID_pedido) AS pedidos
    FROM ferreiro f
             JOIN requisicao_pedido rp ON f.ID_ferreiro = rp.ferreiro
             JOIN loja l ON f.loja = l.ID_loja
    GROUP BY f.nome, f.especializacao, l.nome
    ORDER BY pedidos DESC
    LIMIT 1;
END;

create
    definer = root@localhost procedure drreirosMaisRequisitados()
BEGIN
    SELECT l.nome AS loja_nome, f.nome AS ferreiro_nome, COUNT(rp.ferreiro) AS total_requisicoes
    FROM ferreiro f
             JOIN requisicao_pedido rp ON rp.ferreiro = f.ID_ferreiro
             JOIN loja l ON f.loja = l.ID_loja
    GROUP BY l.nome, f.nome
    HAVING COUNT(rp.ferreiro) = (
        SELECT MAX(total_requisicoes)
    );
END;

create
    definer = root@localhost procedure ferreirosMaisRentaveis()
BEGIN
    SELECT f.nome, SUM(i.valor) AS total_rentabilidade
    FROM ferreiro f
             JOIN requisicao_pedido rp ON rp.ferreiro = f.ID_ferreiro
             JOIN item i ON rp.item = i.ID_item
    GROUP BY f.nome;
END;

create
    definer = root@localhost procedure clientesMaisCompradores()
BEGIN
    SELECT c.nome, COUNT(v.cliente) AS qnt_vendas
    FROM cliente c
             JOIN venda v ON c.ID_cliente = v.cliente
    GROUP BY c.nome
    ORDER BY qnt_vendas DESC
    LIMIT 5;
END;

