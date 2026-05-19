var questionarioModel = require("../models/questionarioModel");

function cadastrar(req, res){

    var faccao = req.body.faccaoServer;
    var personagem = req.body.personagemServer;
    var trilogia = req.body.trilogiaServer;
    var filme = req.body.filmeServer;
    var quantidade = req.body.quantidadeServer;
    var idUsuario = req.body.idUsuarioServer;

    questionarioModel.cadastrar(
        faccao,
        personagem,
        trilogia,
        filme,
        quantidade,
        idUsuario
    )

    .then(function(resultado){
        res.json(resultado);
    })

    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });

}

module.exports = {
    cadastrar
};