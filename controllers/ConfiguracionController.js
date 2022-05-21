const ConfiguracionModel = require("../models/ConfiguracionModel")
const FPDF = require('node-fpdf')
const jwt = require("jsonwebtoken");

exports.getOne = async (req, res, next) => {
    let id = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await ConfiguracionModel.getOne(id)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    const ruc = req.body.ruc
    const id_moneda = req.body.id_moneda
    const id_configuracion = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await ConfiguracionModel.update(nombre, direccion, telefono, ruc, id_moneda, id_configuracion)
    if (result.affectedRows > 0) {
        const data = {
            id_configuracion: id_configuracion,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            ruc: ruc,
            id_moneda: id_moneda
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}
