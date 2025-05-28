CREATE DATABASE bd_forja

CREATE TABLE Loja (
	ID_loja INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	nome VARCHAR(40),
	cidade VARCHAR(40),
	rua VARCHAR(40)
);

CREATE TABLE Ferreiro (
	ID_ferreiro INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	nome VARCHAR(40),
	especializacao VARCHAR(40),
	gerente INT,
	FOREIGN KEY (gerente) REFERENCES Ferreiro(ID_ferreiro),
	loja INT,
	FOREIGN KEY (loja) REFERENCES Loja(ID_loja)
);

CREATE TABLE Cliente (
	ID_cliente INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	nome VARCHAR(40)
);

CREATE TABLE Item (
	ID_item INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	nome VARCHAR(40),
	valor FLOAT,
	peso FLOAT,
	raridade VARCHAR(40),
	ferreiro INT,
	FOREIGN KEY (ferreiro) REFERENCES Ferreiro(ID_ferreiro),
	data_fabricacao DATE
);

CREATE TABLE Arma (
	Item INT AUTO_INCREMENT,
	nome VARCHAR(40),
	dano FLOAT,
	tipo VARCHAR(40),
	FOREIGN KEY(Item) REFERENCES Item(ID_item),
	PRIMARY KEY(Item)
);

CREATE TABLE Armadura (
	Item INT AUTO_INCREMENT,
	nome VARCHAR(40),
	defesa FLOAT,
	tipo VARCHAR(40),
	FOREIGN KEY(Item) REFERENCES Item(ID_item),
	PRIMARY KEY(Item)
);

CREATE TABLE Fornecedor (
	ID_fornecedor INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	nome VARCHAR(40),
	tipo_material VARCHAR(40)
);

CREATE TABLE Material (
	ID_material INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
	nome VARCHAR(40),
	quantidade INT,
	qualidade VARCHAR(40),
	tipo VARCHAR(40),
	fornecedor INT,
	FOREIGN KEY (fornecedor) REFERENCES Fornecedor(ID_fornecedor)
);

CREATE TABLE Venda (
       ID_venda INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
       data_transacao DATE,
       loja INT,
       FOREIGN KEY (loja) REFERENCES Loja(ID_loja),
       item INT,
       FOREIGN KEY (item) REFERENCES Item(ID_item),
       cliente INT,
       FOREIGN KEY (cliente) REFERENCES Cliente(ID_cliente)
);

CREATE TABLE Requisicao_Pedido (
	ID_pedido INT UNIQUE AUTO_INCREMENT,
	cliente INT,
	FOREIGN KEY (cliente) REFERENCES Cliente(ID_cliente),
	item INT,
	FOREIGN KEY (item) REFERENCES Item(ID_item),
	ferreiro INT,
	FOREIGN KEY (ferreiro) REFERENCES Ferreiro (ID_ferreiro),
	status VARCHAR (40),
	PRIMARY KEY (ID_pedido, cliente, item)
);

ALTER TABLE Venda
ADD COLUMN data_transacao DATE

ALTER TABLE Requisicao_Pedido
ADD COLUMN data_alteracao DATE