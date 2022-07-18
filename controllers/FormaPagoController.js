const FormaPagoModel = require("../models/FormaPagoModel")

exports.getAll = async(req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await FormaPagoModel.getAll(buscar)
    if (result.length > 0) {
        datos = {status: 200, datos: result}
    }
    res.json(datos)
}

exports.insert = async(req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await FormaPagoModel.add(nombre)
    if (result.affectedRows > 0) {
        const  data = {
            id_forma_pago: result.insertId,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.update = async(req, res, next) => {
    const nombre = req.body.nombre
    const id_forma_pago = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await FormaPagoModel.update(nombre, id_forma_pago)
    if (result.affectedRows > 0) {
        const  data = {
            id_forma_pago: id_forma_pago,
            nombre: nombre
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

exports.delete = async(req, res, next) => {
    const id_forma_pago = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await FormaPagoModel.delete(id_forma_pago)
    if (result.affectedRows > 0) {
        const  data = {
            id_forma_pago: id_forma_pago,
        }
        datos = { status: 200, data: data};
    }
    res.send(datos);
}

