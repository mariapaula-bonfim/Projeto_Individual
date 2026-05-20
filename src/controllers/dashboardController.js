var dashboardModel = require("../models/dashboardModel");

function totalUsuarios(req, res) {

    dashboardModel.totalUsuarios()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function faccaoPopular(req, res) {

    dashboardModel.faccaoPopular()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function personagemFavorito(req, res) {

    dashboardModel.personagemFavorito()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function filmeFavorito(req, res) {

    dashboardModel.filmeFavorito()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function graficoFaccoes(req, res) {

    dashboardModel.graficoFaccoes()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function graficoTrilogias(req, res) {

    dashboardModel.graficoTrilogias()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}

function ultimosAcessos(req, res) {

    dashboardModel.ultimosAcessos()
        .then(function(resultado){

            res.json(resultado);

        }).catch(function(erro){

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
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