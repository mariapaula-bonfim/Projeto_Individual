var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/totalUsuarios",
    function(req, res){
        dashboardController.totalUsuarios(req, res);
    }
);

router.get("/faccaoPopular",
    function(req, res){
        dashboardController.faccaoPopular(req, res);
    }
);

router.get("/personagemFavorito",
    function(req, res){
        dashboardController.personagemFavorito(req, res);
    }
);

router.get("/filmeFavorito",
    function(req, res){
        dashboardController.filmeFavorito(req, res);
    }
);

router.get("/graficoFaccoes",
    function(req, res){
        dashboardController.graficoFaccoes(req, res);
    }
);

router.get("/graficoTrilogias",
    function(req, res){
        dashboardController.graficoTrilogias(req, res);
    }
);

router.get("/ultimosAcessos",
    function(req, res){
        dashboardController.ultimosAcessos(req, res);
    }
);

module.exports = router;