-- criando o banco de dados:
CREATE DATABASE TechData;

-- selecionando o banco de dados:
USE TechData;

-- criando a tabela:
CREATE TABLE Transacoes (
    TransacaoID INT AUTO_INCREMENT,
    DataTransacao DATE,
    ValorTransacao DECIMAL(10,2),
    Produto VARCHAR(255),
    PRIMARY KEY (TransacaoID)
);


-- adicionar dados à tabela:
INSERT INTO Transacoes (DataTransacao, ValorTransacao, Produto) 
VALUES ('2024-01-01', 150.00, 'Produto A'), 
       ('2024-01-02', 200.00, 'Produto B'), 
       ('2024-01-03', 250.00, 'Produto C');


-- selecionando os dados:
SELECT * FROM Transacoes;


-- renomeando colunas:
SELECT TransacaoID AS ID_Transacao, DataTransacao AS Data, ValorTransacao AS Valor FROM Transacoes;


-- filtrando a cláusula WHERE:
SELECT * FROM Transacoes WHERE ValorTransacao > 100;


-- ordenando a cláusula ORDER BY:
SELECT * FROM Transacoes ORDER BY ValorTransacao DESC;


-- agregando com funções SQL:
SELECT AVG(ValorTransacao) AS Media, MAX(ValorTransacao) AS Maximo, MIN(ValorTransacao) AS Minimo, COUNT(*) AS Total FROM Transacoes;


-- agrupando com a cláusula GROUP BY:
SELECT Produto, AVG(ValorTransacao) AS Media FROM Transacoes GROUP BY Produto;


-- consulta combinada:
SELECT COUNT(DISTINCT Produto) AS TotalProdutos FROM Transacoes;
