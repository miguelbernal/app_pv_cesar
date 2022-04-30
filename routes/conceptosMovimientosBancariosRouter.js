const express = require('express')
const router = express.Router()
const ConceptoMovimientoBancarioController = require("../controllers/ConceptoMovimientoBancarioController")


// Buscar
router.get('', function (req, res, next) {
    ConceptoMovimientoBancarioController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    ConceptoMovimientoBancarioController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    ConceptoMovimientoBancarioController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    ConceptoMovimientoBancarioController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    ConceptoMovimientoBancarioController.list(req, res, next)
});

module.exports = router
