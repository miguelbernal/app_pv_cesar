const express = require('express')
const router = express.Router()
const CajaController = require("../controllers/CajaController")


// Buscar
router.get('', function (req, res, next) {
    CajaController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    CajaController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    CajaController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    CajaController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    CajaController.list(req, res, next)
});

module.exports = router
