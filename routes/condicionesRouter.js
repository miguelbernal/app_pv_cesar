const express = require('express');
const router = express.Router();
const CondicionController = require("../controllers/CondicionController")

// Buscar
router.get('', function (req, res, next) {
    CondicionController.getAll(req, res, next)
})

//Agregar
router.post('', function (req, res, next) {
    CondicionController.insert(req, res, next)
});

//Modificar
router.put('/:id', function (req, res, next) {
    CondicionController.update(req, res, next)
});

//Eliminar
router.delete('/:id', function (req, res, next) {
    CondicionController.delete(req, res, next)
});

module.exports = router