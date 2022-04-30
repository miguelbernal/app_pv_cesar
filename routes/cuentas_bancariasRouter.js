const express = require('express')
const router = express.Router()
const CuentaBancariaController = require("../controllers/CuentaBancariaController")


// Buscar
router.get('', function (req, res, next) {
    CuentaBancariaController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    CuentaBancariaController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    CuentaBancariaController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    CuentaBancariaController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    CuentaBancariaController.list(req, res, next)
});

module.exports = router
