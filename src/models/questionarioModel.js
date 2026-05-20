var database = require("../database/config");

// Salva o questionário (sem personagem_favorito — agora é relação N:N)
function cadastrar(faccao, trilogia, filme, quantidade, lado, elemento, idUsuario) {

    var instrucaoSql = `
        INSERT INTO questionario
        (
            faccao_favorita,
            trilogia_favorita,
            filme_favorito,
            qtd_filmes_assistidos,
            lado_favorito,
            elemento_favorito,
            id_usuario
        )
        VALUES
        (
            '${faccao}',
            '${trilogia}',
            '${filme}',
            ${quantidade},
            '${lado}',
            '${elemento}',
            ${idUsuario}
        );
    `;

    return database.executar(instrucaoSql);
}

// Busca o id do personagem pelo nome
function buscarIdPersonagem(nomePersonagem) {

    var instrucaoSql = `
        SELECT id_personagem FROM personagem
        WHERE nome = '${nomePersonagem}';
    `;

    return database.executar(instrucaoSql);
}

// Cria o vínculo N:N entre usuário e personagem favorito
function vincularPersonagem(idUsuario, idPersonagem) {

    var instrucaoSql = `
        INSERT INTO usuario_personagem (id_usuario, id_personagem)
        VALUES (${idUsuario}, ${idPersonagem});
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarIdPersonagem,
    vincularPersonagem
};