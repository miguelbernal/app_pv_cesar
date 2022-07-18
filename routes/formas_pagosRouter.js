const express = require('express');
const router = express.Router();
const FormaPagoController = require("../controllers/FormaPagoController")

// Buscar
router.get('', function (req, res, next) {
    FormaPagoController.getAll(req, res, next)
})

//Agregar
router.post('', function (req, res, next) {
    FormaPagoController.insert(req, res, next)
});

//Modificar
router.put('/:id', function (req, res, next) {
    FormaPagoController.update(req, res, next)
});

//Eliminar
router.delete('/:id', function (req, res, next) {
    FormaPagoController.delete(req, res, next)
});

module.exports = router