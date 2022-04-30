const express = require('express')
const router = express.Router()
const BancoController = require("../controllers/BancoController")


// Buscar
router.get('', function (req, res, next) {
    BancoController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    BancoController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    BancoController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    BancoController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    BancoController.list(req, res, next)
});

module.exports = router
