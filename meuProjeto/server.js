const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'seuUsuario',
    password: 'suaSenha',
    database: 'MeuBancoDeDados'
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão ao banco de dados MySQL estabelecida');
});

// Rota para buscar usuários
app.get('/users', (req, res) => {
    db.query('SELECT * FROM Usuarios', (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuários:', err);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
