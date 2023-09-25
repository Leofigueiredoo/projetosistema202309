CREATE DATABASE MeuBancoDeDados;
USE MeuBancoDeDados;
CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);
INSERT INTO Usuarios (nome, telefone)
VALUES
    ('João', '123-456-7890'),
    ('Maria', '987-654-3210');
