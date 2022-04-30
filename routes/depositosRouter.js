const express = require('express')
const router = express.Router()
const DepositoController = require("../controllers/DepositoController")


// Buscar
router.get('', function (req, res, next) {
    DepositoController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    DepositoController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    DepositoController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    DepositoController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    DepositoController.list(req, res, next)
});

module.exports = router
