-- criaçao do banco de dados:
CREATE DATABASE LojaEletronicos;

-- seleção do banco de dados:
USE LojaEletronicos;

-- criando a tabela:
CREATE TABLE Produtos (
    ProdutoID INT AUTO_INCREMENT,
    `Nome do Produto` VARCHAR(200),
    Preço DECIMAL(10,2),
    `Quantidade em Estoque` INT,
    PRIMARY KEY (ProdutoID)
);


-- inserindo os produtos:
INSERT INTO Produtos (`Nome do Produto`, Preço, `Quantidade em Estoque`) VALUES ('Laptop', 2500.99, 15);
INSERT INTO Produtos (`Nome do Produto`, Preço, `Quantidade em Estoque`) VALUES ('Monitor', 500.99, 30);
INSERT INTO Produtos (`Nome do Produto`, Preço, `Quantidade em Estoque`) VALUES ('Mouse', 25.99, 100);

-- atualizando os produtos:
UPDATE Produtos SET `Quantidade em Estoque` = 20, `Preço` = 2550.99 WHERE `Nome do Produto` = 'Laptop';

-- vendendo os produtos:
UPDATE Produtos SET `Quantidade em Estoque` = `Quantidade em Estoque` - 5 WHERE `Nome do Produto` = 'Monitor';
UPDATE Produtos SET `Quantidade em Estoque` = `Quantidade em Estoque` - 10 WHERE `Nome do Produto` = 'Mouse';
