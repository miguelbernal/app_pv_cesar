const express = require('express');
const router = express.Router();
const FormaCobroController = require("../controllers/FormaCobroController")

// Buscar
router.get('', function (req, res, next) {
    FormaCobroController.getAll(req, res, next)
})

//Agregar
router.post('', function (req, res, next) {
    FormaCobroController.insert(req, res, next)
});

//Modificar
router.put('/:id', function (req, res, next) {
    FormaCobroController.update(req, res, next)
});

//Eliminar
router.delete('/:id', function (req, res, next) {
    FormaCobroController.delete(req, res, next)
});

module.exports = router