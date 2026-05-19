var database = require("../database/config");

function cadastrar(
    faccao,
    personagem,
    trilogia,
    filme,
    quantidade,
    idUsuario
){

    var instrucaoSql = `

        INSERT INTO questionario
        (
            faccao_favorita,
            personagem_favorito,
            trilogia_favorita,
            filme_favorito,
            quantidade_assistidos,
            id_usuario
        )

        VALUES
        (
            '${faccao}',
            '${personagem}',
            '${trilogia}',
            '${filme}',
            ${quantidade},
            ${idUsuario}
        );

    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};