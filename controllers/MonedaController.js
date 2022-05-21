const MonedaModel = require("../models/MonedaModel")
const FPDF = require('node-fpdf')
const jwt = require("jsonwebtoken");

exports.getAll = async (req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await MonedaModel.getAll(buscar)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const nombre = req.body.nombre
    const simbolo = req.body.simbolo
    const compra = req.body.compra
    const venta = req.body.venta
    let datos = { status: 404, datos: [] }
    const result = await MonedaModel.add(nombre, simbolo, compra, venta)
    if (result.affectedRows > 0) {
        const data = {
            id_moneda: result.insertId,
            nombre: nombre,
            simbolo: simbolo,
            compra: compra,
            venta: venta
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const simbolo = req.body.simbolo
    const compra = req.body.compra
    const venta = req.body.venta
    const id_moneda = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await MonedaModel.update(nombre, simbolo, compra, venta, id_moneda)
    if (result.affectedRows > 0) {
        const data = {
            id_moneda: id_moneda,
            nombre: nombre,
            simbolo: simbolo,
            compra: compra,
            venta: venta
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_moneda = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await MonedaModel.delete(id_moneda)
    if (result.affectedRows > 0) {
        const data = {
            id_moneda: id_moneda,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.list = async (req, res, next) => {
    const desde_moneda = req.query.desde_moneda
    const hasta_moneda = req.query.hasta_moneda
    let datos = { status: 404, datos: [] }
    const result = await MonedaModel.list(desde_moneda, hasta_moneda)
    const pdf = new FPDF('L', 'mm', 'A4');
    pdf.AliasNbPages = '{nb}';
    pdf.Header = function Header() {
        let fecha = new Date().toISOString().split('T')[0]
        let hora = new Date().toISOString().split('T')[1].substring(0, 8)
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Image('public/img/logo_pdf.jpg', 10, 10, -300)
        pdf.Cell(0, 6, 'LISTADO DE MONEDAS', 0, 0, 'C');
        pdf.Cell(0, 6, 'LISTADO: monedas', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `DESDE MONEDA: ${desde_moneda} - HASTA MONEDA: ${hasta_moneda}`, 0, 0, 'C');
        pdf.Cell(0, 6, 'USUARIO: admin', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `FECHA: ${fecha}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `HORA: ${hora}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(10, 6, 'ID', 1, 0);
        pdf.Cell(60, 6, 'NOMBRE', 1, 0);
        pdf.Cell(60, 6, 'SIMBOLO', 1, 0);
        pdf.Cell(50, 6, 'COMPRA', 1, 0);
        pdf.Cell(50, 6, 'VENTA', 1, 0);
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
        pdf.Cell(60, 6, fila.simbolo);
        pdf.Cell(50, 6, fila.compra);
        pdf.Cell(50, 6, fila.venta);
        pdf.Ln(5);
    });

    const pdfBase64 = pdf.Output('base64');
    const nombre = "moneda";

    datos = { status: 200, data: { archivo: pdfBase64, nombre: nombre } }
    res.send(datos);
}