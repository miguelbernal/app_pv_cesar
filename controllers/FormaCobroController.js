const FormaCobroModel = require("../models/FormaCobroModel")

exports.getAll = async(req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await FormaCobroModel.getAll(buscar)
    if (result.length > 0) {
        datos = {status: 200, datos: result}
    }
    res.json(datos)
}

exports.insert = async(req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await FormaCobroModel.add(nombre)
    if (result.affectedRows > 0) {
        const  data = {
            id_forma_cobro: result.insertId,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.update = async(req, res, next) => {
    const nombre = req.body.nombre
    const id_forma_cobro = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await FormaCobroModel.update(nombre, id_forma_cobro)
    if (result.affectedRows > 0) {
        const  data = {
            id_forma_cobro: id_forma_cobro,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.delete = async(req, res, next) => {
    const id_forma_cobro = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await FormaCobroModel.delete(id_forma_cobro)
    if (result.affectedRows > 0) {
        const  data = {
            id_forma_cobro: id_forma_cobro,
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

