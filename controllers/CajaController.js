const CajaModel = require("../models/CajaModel")
const FPDF = require('node-fpdf')

exports.getAll = async (req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await CajaModel.getAll(buscar)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const nombre = req.body.nombre
    const id_sucursal = req.body.id_sucursal
    let datos = { status: 404, datos: [] }
    const result = await CajaModel.add(nombre, id_sucursal)
    if (result.affectedRow > 0) {
        const data = {
            id_caja: result.insertId,
            nombre: nombre,
            id_sucursal: id_sucursal
        }
        datos = { status: 200, datos: data }
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const id_sucursal = req.body.id_sucursal
    const id_caja = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await CajaModel.update(nombre, id_sucursal, id_caja)
    if (result.affectedRow > 0) {
        const data = {
            id_caja: id_caja,
            nombre: nombre,
            id_sucursal: id_sucursal
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_caja = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await CajaModel.delete(id_caja)
    if (result.affectedRows > 0) {
        const data = {
            id_caja: id_caja,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.list = async (req, res, next) => {
    const desde_caja = req.query.desde_caja
    const hasta_caja = req.query.hasta_caja
    let datos = { status: 404, datos: [] }
    const result = await CajaModel.list(desde_caja, hasta_caja)
    const pdf = new FPDF('L', 'mm', 'A4');
    pdf.AliasNbPages = '{nb}';
    pdf.Header = function Header() {
        let fecha = new Date().toISOString().split('T')[0]
        let hora = new Date().toISOString().split('T')[1].substring(0, 8)
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Image('public/img/logo_pdf.jpg', 10, 10, -300)
        pdf.Cell(0, 6, 'LISTADO DE CAJAS', 0, 0, 'C');
        pdf.Cell(0, 6, 'LISTADO: CAJAS', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `DESDE CAJA: ${desde_caja} - HASTA CAJA: ${hasta_caja}`, 0, 0, 'C');
        pdf.Cell(0, 6, 'USUARIO: admin', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `FECHA: ${fecha}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `HORA: ${hora}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(10, 6, 'ID', 1, 0);
        pdf.Cell(60, 6, 'CAJA', 1, 0);
        pdf.Cell(60, 6, 'SUCURSAL', 1, 0);
        pdf.Ln(5);
    }
    pdf.Footer = function Footer() {
        pdf.SetY(-15);
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Cell(0, 10, 'Página ' + pdf.PageNo() + ' de {nb}', 0, 0, 'R');
    }

    pdf.AddPage();
    pdf.SetFont('Arial', 'B', 8);
    result.forEach(function (fila) {
        pdf.Cell(10, 6, fila.id.toString());
        pdf.Cell(60, 6, fila.nombre);
        pdf.Cell(60, 6, fila.sucursal);
        pdf.Ln(5);
    });

    const pdfBase64 = pdf.Output('base64');
    const nombre = "caja";

    datos = { status: 200, data: { archivo: pdfBase64, nombre: nombre } }
    res.send(datos);
}

