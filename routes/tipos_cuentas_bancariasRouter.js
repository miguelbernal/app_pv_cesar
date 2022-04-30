const express = require('express');
const router = express.Router();
const TipoCuentaBancariaController = require("../controllers/TipoCuentaBancariaController")

// Buscar
router.get('', function (req, res, next) {
    TipoCuentaBancariaController.getAll(req, res, next)
})

//Agregar
router.post('', function (req, res, next) {
    TipoCuentaBancariaController.insert(req, res, next)
});

//Modificar
router.put('/:id', function (req, res, next) {
    TipoCuentaBancariaController.update(req, res, next)
});

//Eliminar
router.delete('/:id', function (req, res, next) {
    TipoCuentaBancariaController.delete(req, res, next)
});

module.exports = router