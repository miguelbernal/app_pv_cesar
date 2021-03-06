const EstadoCuentaBancariaModel = require("../models/EstadoCuentaBancariaModel")

exports.getAll = async(req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await EstadoCuentaBancariaModel.getAll(buscar)
    if (result.length > 0) {
        datos = {status: 200, datos: result}
    }
    res.json(datos)
}

exports.insert = async(req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await EstadoCuentaBancariaModel.add(nombre)
    if (result.affectedRows > 0) {
        const  data = {
            id_estado_cuenta_bancaria: result.insertId,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.update = async(req, res, next) => {
    const nombre = req.body.nombre
    const id_estado_cuenta_bancaria = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await EstadoCuentaBancariaModel.update(nombre, id_estado_cuenta_bancaria)
    if (result.affectedRows > 0) {
        const  data = {
            id_estado_cuenta_bancaria: id_estado_cuenta_bancaria,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.delete = async(req, res, next) => {
    const id_estado_cuenta_bancaria = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await EstadoCuentaBancariaModel.delete(id_estado_cuenta_bancaria)
    if (result.affectedRows > 0) {
        const  data = {
            id_estado_cuenta_bancaria: id_estado_cuenta_bancaria,
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

