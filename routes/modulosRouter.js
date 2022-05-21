const express = require('express')
const router = express.Router()
const ModuloController = require("../controllers/ModuloController")

// Buscar
router.get('', function (req, res, next) {
    ModuloController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    ModuloController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    ModuloController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    ModuloController.delete(req, res, next)
});

module.exports = router
