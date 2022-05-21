const ModuloModel = require("../models/ModuloModel")

exports.getAll = async (req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await ModuloModel.getAll(buscar)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await ModuloModel.add(nombre)
    if (result.affectedRows > 0) {
        const data = {
            id_modulo: result.insertId,
            nombre: nombre
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const id_modulo = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await ModuloModel.update(nombre, id_modulo)
    if (result.affectedRows > 0) {
        const data = {
            id_modulo: id_modulo,
            nombre: nombre,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_modulo = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await ModuloModel.delete(id_modulo)
    if (result.affectedRows > 0) {
        const data = {
            id_modulo: id_modulo,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}
