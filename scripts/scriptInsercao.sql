USE bd_forja;

-- Inserindo lojas
INSERT INTO Loja (nome, cidade, rua) VALUES
('Forja do Dragão', 'Valfenda', 'Rua dos Anões'),
('Martelo Flamejante', 'Gondor', 'Av. da Batalha'),
('Metal & Magia', 'Skellige', 'Travessa do Ferro');

-- Inserindo ferreiros (sem gerente primeiro para evitar erro de FK)
INSERT INTO Ferreiro (nome, especializacao, gerente, loja) VALUES
('Thorin Martelo', 'Espadas', NULL, 1),
('Gimli Rocha', 'Machados', 1, 1),
('Eitri Chamas', 'Armaduras', NULL, 2),
('Brokk Ferro', 'Martelos', 3, 2),
('Durin Chama', 'Diversos', NULL, 3);

-- Inserindo clientes
INSERT INTO Cliente (nome) VALUES
('Aragorn'),
('Legolas'),
('Frodo'),
('Eowyn'),
('Gandalf');

-- Inserindo fornecedores
INSERT INTO Fornecedor (nome, tipo_material) VALUES
('Minas de Moria', 'Metal'),
('Cavaleiros de Rohan', 'Couro'),
('Montanhas Cinzentas', 'Aço');

-- Inserindo materiais
INSERT INTO Material (nome, quantidade, qualidade, tipo, fornecedor) VALUES
('Aço Élfico', 100, 'Alta', 'Metal', 1),
('Couro de Dragão', 50, 'Rara', 'Couro', 2),
('Aço Anão', 80, 'Alta', 'Metal', 3);

-- Inserindo itens
INSERT INTO Item (nome, valor, peso, raridade, ferreiro, data_fabricacao) VALUES
('Espada Longa', 250.0, 5.5, 'Comum', 1, '2024-01-10'),
('Machado Duplo', 300.0, 7.0, 'Rara', 2, '2024-01-15'),
('Cota de Malha', 400.0, 10.0, 'Épica', 3, '2024-02-01'),
('Martelo de Guerra', 350.0, 8.5, 'Rara', 4, '2024-02-10'),
('Adaga Curva', 150.0, 2.0, 'Comum', 5, '2024-03-05');

-- Inserindo armas
INSERT INTO Arma (Item, nome, dano, tipo) VALUES
(1, 'Espada Longa', 35.0, 'Corte'),
(2, 'Machado Duplo', 50.0, 'Impacto'),
(5, 'Adaga Curva', 20.0, 'Perfuração');

-- Inserindo armaduras
INSERT INTO Armadura (Item, nome, defesa, tipo) VALUES
(3, 'Cota de Malha', 60.0, 'Corpo'),
(4, 'Martelo de Guerra', 40.0, 'Mão');

-- Inserindo vendas
INSERT INTO Venda (loja, item, cliente, data_transacao) VALUES
(1, 1, 1, '2025-05-20 10:00:00'),
(1, 2, 2, '2025-05-20 11:00:00'),
(2, 3, 4, '2025-05-21 09:30:00'),
(2, 4, 5, '2025-05-21 14:45:00'),
(3, 5, 3, '2025-05-22 16:00:00');

-- Inserindo pedidos
INSERT INTO Requisicao_Pedido (cliente, item, ferreiro, status) VALUES
(1, 1, 1, 'Entregue'),
(2, 2, 2, 'Produzido'),
(3, 3, 3, 'Em produção'),
(4, 4, 4, 'Entregue'),
(5, 5, 5, 'Cancelado');

INSERT INTO Item (nome, valor, peso, raridade, ferreiro, data_fabricacao) VALUES ('Claymore', 130.0, 3.0, 'Comum', 3, '2024-03-21');
INSERT INTO Arma (Item, nome, dano, tipo) values (6, 'Claymore', 60.0, 'Corte');

INSERT INTO Venda (loja, item, cliente, data_transacao) VALUES
(1, 1, 1, '2025-01-20'),
(1, 2, 2, '2025-02-20'),
(2, 3, 4, '2025-03-21'),
(2, 4, 5, '2025-04-21'),
(3, 5, 3, '2025-05-22');

