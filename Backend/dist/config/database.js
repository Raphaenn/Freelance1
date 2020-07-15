"use strict";require("dotenv/config");

// configuração de credenciais no dialeto postgres
module.exports = { 
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: { 
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}

/* 
timestamps: true, - garante uma coluna criado em
        underscored: true, dimiinui a caixa da tabela
        underscoredAll: true, diminui a caixa da coluna
*/