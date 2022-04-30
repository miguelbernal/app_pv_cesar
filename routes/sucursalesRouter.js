const express = require('express')
const router = express.Router()
const SucursalController = require("../controllers/SucursalController")


// Buscar
router.get('', function (req, res, next) {
    SucursalController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    SucursalController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    SucursalController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    SucursalController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    SucursalController.list(req, res, next)
});

module.exports = router
