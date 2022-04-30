const express = require('express');
const router = express.Router();
const EstadoCuentaBancariaController = require("../controllers/EstadoCuentaBancariaController")

// Buscar
router.get('', function (req, res, next) {
    EstadoCuentaBancariaController.getAll(req, res, next)
})

//Agregar
router.post('', function (req, res, next) {
    EstadoCuentaBancariaController.insert(req, res, next)
});

//Modificar
router.put('/:id', function (req, res, next) {
    EstadoCuentaBancariaController.update(req, res, next)
});

//Eliminar
router.delete('/:id', function (req, res, next) {
    EstadoCuentaBancariaController.delete(req, res, next)
});

module.exports = router