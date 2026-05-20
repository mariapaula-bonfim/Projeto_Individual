var questionarioModel = require("../models/questionarioModel");

function cadastrar(req, res) {

    var faccao     = req.body.faccaoServer;
    var personagem = req.body.personagemServer;  // ainda vem do front como nome
    var trilogia   = req.body.trilogiaServer;
    var filme      = req.body.filmeServer;
    var quantidade = req.body.quantidadeServer;
    var lado       = req.body.ladoServer;        // campo novo
    var elemento   = req.body.elementoServer;    // campo novo
    var idUsuario  = req.body.idUsuarioServer;

    // 1º: salva o questionário
    questionarioModel.cadastrar(faccao, trilogia, filme, quantidade, lado, elemento, idUsuario)

        .then(function () {
            // 2º: busca o id do personagem pelo nome escolhido
            return questionarioModel.buscarIdPersonagem(personagem);
        })

        .then(function (resultado) {
            var idPersonagem = resultado[0].id_personagem;
            // 3º: cria o vínculo N:N
            return questionarioModel.vincularPersonagem(idUsuario, idPersonagem);
        })

        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar
};