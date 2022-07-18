const CondicionModel = require("../models/CondicionModel")

exports.getAll = async(req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await CondicionModel.getAll(buscar)
    if (result.length > 0) {
        datos = {status: 200, datos: result}
    }
    res.json(datos)
}

exports.insert = async(req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await CondicionModel.add(nombre)
    if (result.affectedRows > 0) {
        const  data = {
            id_condicion: result.insertId,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.update = async(req, res, next) => {
    const nombre = req.body.nombre
    const id_condicion = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await CondicionModel.update(nombre, id_condicion)
    if (result.affectedRows > 0) {
        const  data = {
            id_condicion: id_condicion,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.delete = async(req, res, next) => {
    const id_condicion = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await CondicionModel.delete(id_condicion)
    if (result.affectedRows > 0) {
        const  data = {
            id_condicion: id_condicion,
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

