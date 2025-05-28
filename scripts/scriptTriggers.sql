create definer = root@localhost trigger datePedidoAfterUpdate
    before update
    on requisicao_pedido
    for each row
BEGIN
    -- Verifica se o campo status foi alterado para 'Aprovado'
    IF OLD.status != NEW.status THEN
        -- Atualiza a data do pedido
        SET NEW.data_alteracao = NOW();
    END IF;
END;

create definer = root@localhost trigger datePedidoBeforeInsert
    before insert
    on requisicao_pedido
    for each row
BEGIN
        SET NEW.data_alteracao = NOW();
    END;

