-- Cria o banco de dados BlogDB
CREATE DATABASE IF NOT EXISTS BlogDB;
USE BlogDB;

-- Cria a tabela Autor
CREATE TABLE IF NOT EXISTS Autor (
    AutorID INT AUTO_INCREMENT,
    NomeAutor VARCHAR(45) NOT NULL,
    Email VARCHAR(45) UNIQUE NOT NULL,
    PRIMARY KEY (AutorID)
);

-- Cria a tabela Post
CREATE TABLE IF NOT EXISTS Post (
    PostID INT AUTO_INCREMENT,
    Titulo VARCHAR(45) NOT NULL,
    Conteudo TEXT NOT NULL,
    DataPublicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    AutorID INT,
    PRIMARY KEY (PostID),
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID)
);

-- Cria a tabela Comentario
CREATE TABLE IF NOT EXISTS Comentario (
    ComentarioID INT AUTO_INCREMENT,
    TextoComentario TEXT NOT NULL,
    DataComentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    AutorID INT,
    PostID INT,
    PRIMARY KEY (ComentarioID),
    FOREIGN KEY (AutorID) REFERENCES Autor(AutorID),
    FOREIGN KEY (PostID) REFERENCES Post(PostID)
);

SHOW TABLES;
