const express = require('express');
const router = express.Router();
const TarjetaController = require("../controllers/TarjetaController")

// Buscar
router.get('', function (req, res, next) {
    TarjetaController.getAll(req, res, next)
})

//Agregar
router.post('', function (req, res, next) {
    TarjetaController.insert(req, res, next)
});

//Modificar
router.put('/:id', function (req, res, next) {
    TarjetaController.update(req, res, next)
});

//Eliminar
router.delete('/:id', function (req, res, next) {
    TarjetaController.delete(req, res, next)
});

module.exports = router