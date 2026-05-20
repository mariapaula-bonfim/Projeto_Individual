var database = require("../database/config");

function totalUsuarios() {

    var instrucaoSql = `
    
        SELECT COUNT(*) AS total
        FROM usuario;
    
    `;

    return database.executar(instrucaoSql);
}

function faccaoPopular() {

    var instrucaoSql = `
    
        SELECT
            faccao_favorita,
            COUNT(*) AS votos
        FROM questionario
        GROUP BY faccao_favorita
        ORDER BY votos DESC
        LIMIT 1;
    
    `;

    return database.executar(instrucaoSql);
}

function personagemFavorito() {

    var instrucaoSql = `
    
        SELECT
            p.nome,
            COUNT(up.id_personagem) AS votos
        FROM personagem p
        JOIN usuario_personagem up
            ON p.id_personagem = up.id_personagem
        GROUP BY p.nome
        ORDER BY votos DESC
        LIMIT 1;
    
    `;

    return database.executar(instrucaoSql);
}

function filmeFavorito() {

    var instrucaoSql = `
    
        SELECT
            filme_favorito,
            COUNT(*) AS votos
        FROM questionario
        GROUP BY filme_favorito
        ORDER BY votos DESC
        LIMIT 1;
    
    `;

    return database.executar(instrucaoSql);
}

function graficoFaccoes() {

    var instrucaoSql = `
    
        SELECT
            faccao_favorita,
            COUNT(*) AS votos
        FROM questionario
        GROUP BY faccao_favorita;
    
    `;

    return database.executar(instrucaoSql);
}

function graficoTrilogias() {

    var instrucaoSql = `
    
        SELECT
            trilogia_favorita,
            COUNT(*) AS votos
        FROM questionario
        GROUP BY trilogia_favorita;
    
    `;

    return database.executar(instrucaoSql);
}

function ultimosAcessos() {

    var instrucaoSql = `
    
        SELECT
            u.nome AS usuario,
            q.faccao_favorita,
            p.nome AS personagem,
            q.filme_favorito
        FROM usuario u
        JOIN questionario q
            ON u.id_usuario = q.id_usuario
        JOIN usuario_personagem up
            ON u.id_usuario = up.id_usuario
        JOIN personagem p
            ON up.id_personagem = p.id_personagem
        ORDER BY q.id_questionario DESC
        LIMIT 3;
    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    totalUsuarios,
    faccaoPopular,
    personagemFavorito,
    filmeFavorito,
    graficoFaccoes,
    graficoTrilogias,
    ultimosAcessos
}