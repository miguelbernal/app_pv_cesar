const express = require('express')
const router = express.Router()
const MonedaController = require("../controllers/MonedaController")

// Login
router.post('/login', async (req, res, next) => {
    MonedaController.login(req, res, next)
})

// Buscar
router.get('', function (req, res, next) {
    MonedaController.getAll(req, res, next)
})

// Agregar
router.post('', function (req, res, next) {
    MonedaController.insert(req, res, next)
});

// Modificar
router.put('/:id', function (req, res, next) {
    MonedaController.update(req, res, next)
});

// Eliminar
router.delete('/:id', function (req, res, next) {
    MonedaController.delete(req, res, next)
});

// Listado
router.get('/listado', (req, res, next) => {
    MonedaController.list(req, res, next)
});

module.exports = router
