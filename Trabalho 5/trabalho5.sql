CREATE DATABASE Biblioteca;

USE Biblioteca;

CREATE TABLE Autores (
    AutorID INT AUTO_INCREMENT,
    Nome VARCHAR(200),
    Nacionalidade VARCHAR(200),
    PRIMARY KEY (AutorID)
);

CREATE TABLE Livros (
    LivroID INT AUTO_INCREMENT,
    Titulo VARCHAR(200),
    AnoPublicacao INT,
    AutorID INT,
    PRIMARY KEY (LivroID),
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

-- inserindo dados:
-- Inserindo autores
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Machado de Assis', 'Brasileiro');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('William Shakespeare', 'Inglês');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Fernando Pessoa', 'Portugal');

-- Inserindo livros
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Dom Casmurro', 1899, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Memórias Póstumas de Brás Cubas', 1881, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Hamlet', 1603, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Romeu e Julieta', 1597, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro do Desassossego', 1982, 3);

-- consulta simples:
SELECT * FROM Autores;
SELECT * FROM Livros;


-- consulta com junção INNER JOIN:
SELECT Livros.Titulo, Livros.AnoPublicacao, Autores.Nome 
FROM Livros 
INNER JOIN Autores ON Livros.AutorID = Autores.AutorID;


-- consulta com junção LEFT JOIN:
SELECT Autores.Nome, Livros.Titulo, Livros.AnoPublicacao 
FROM Autores 
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;


-- consulta com filtro por nacionalidade:
SELECT Autores.Nome, Livros.Titulo 
FROM Autores 
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID 
WHERE Autores.Nacionalidade = 'Brasileiro';


-- consulta agregada:
SELECT Autores.Nome, COUNT(Livros.LivroID) AS NumeroDeLivros 
FROM Autores 
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID 
GROUP BY Autores.Nome;
