const express = require('express')
const router = express.Router()
const AperturaCierreCajaController = require("../controllers/AperturaCierreCajaController")


// Buscar
router.get('/usuario/:id', function (req, res, next) {
    AperturaCierreCajaController.getByUsuario(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    AperturaCierreCajaController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    AperturaCierreCajaController.update(req, res, next)
});

module.exports = router
