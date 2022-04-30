const TarjetaModel = require("../models/TarjetaModel")

exports.getAll = async(req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await TarjetaModel.getAll(buscar)
    if (result.length > 0) {
        datos = {status: 200, datos: result}
    }
    res.json(datos)
}

exports.insert = async(req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await TarjetaModel.add(nombre)
    if (result.affectedRows > 0) {
        const  data = {
            id_tarjeta: result.insertId,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.update = async(req, res, next) => {
    const nombre = req.body.nombre
    const id_tarjeta = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await TarjetaModel.update(nombre, id_tarjeta)
    if (result.affectedRows > 0) {
        const  data = {
            id_tarjeta: id_tarjeta,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.delete = async(req, res, next) => {
    const id_tarjeta = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await TarjetaModel.delete(id_tarjeta)
    if (result.affectedRows > 0) {
        const  data = {
            id_tarjeta: id_tarjeta,
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

