const AperturaCierreCajaModel = require("../models/AperturaCierreCajaModel")

exports.getByUsuario = async (req, res, next) => {
    const id_usuario = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await AperturaCierreCajaModel.getByUsuario(id_usuario)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const apertura = req.body.apertura
    const cerrado = req.body.cerrado
    const usuario_id = req.body.usuario_id
    let datos = { status: 404, datos: [] }
    const result = await AperturaCierreCajaModel.add(apertura, cerrado, usuario_id)
    if (result.affectedRow > 0) {
        const data = {
            id_apertura_cierre_caja: result.insertId,
            apertura: apertura,
            cerrado: cerrado,
            usuario_id: usuario_id
        }
        datos = { status: 200, datos: data }
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const id_apertura_cierre_caja = req.params.id
    const apertura = req.body.apertura
    const cierre = req.body.cierre
    const cerrado = req.body.cerrado
    let datos = { status: 404, datos: [] }
    const result = await AperturaCierreCajaModel.update(apertura, cierre, cerrado, id_apertura_cierre_caja)
    if (result.affectedRow > 0) {
        const data = {
            id_apertura_cierre_caja: id_apertura_cierre_caja,
            apertura: apertura,
            cierre: cierre,
            cerrado: cerrado,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}
