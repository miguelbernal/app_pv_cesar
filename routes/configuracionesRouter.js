const express = require('express')
const router = express.Router()
const ConfiguracionController = require("../controllers/ConfiguracionController")


// Buscar por Id
router.get('/:id', function (req, res, next) {
    ConfiguracionController.getOne(req, res, next)
})


// Modificar
router.put('/:id', function (req, res, next) {
    ConfiguracionController.update(req, res, next)
});

module.exports = router
