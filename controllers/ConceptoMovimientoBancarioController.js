const ConceptoMovimientoBancarioModel = require("../models/ConceptoMovimientoBancarioModel")
const FPDF = require('node-fpdf')

exports.getAll = async (req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.getAll(buscar)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const nombre = req.body.nombre
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.add(nombre, )
    if (result.affectedRow > 0) {
        const data = {
            id_concepto_movimiento_bancario: result.insertId,
            nombre: nombre,
        }
        datos = { status: 200, datos: data }
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const id_concepto_movimiento_bancario = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.update(nombre, id_concepto_movimiento_bancario)
    if (result.affectedRow > 0) {
        const data = {
            id_concepto_movimiento_bancario: id_concepto_movimiento_bancario,
            nombre: nombre,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_concepto_movimiento_bancario = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.delete(id_concepto_movimiento_bancario)
    if (result.affectedRows > 0) {
        const data = {
            id_concepto_movimiento_bancario: id_concepto_movimiento_bancario,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.list = async (req, res, next) => {
    const desde_concepto_movimiento_bancario = req.query.desde_concepto_movimiento_bancario
    const hasta_concepto_movimiento_bancario = req.query.hasta_concepto_movimiento_bancario
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.list(desde_concepto_movimiento_bancario, hasta_concepto_movimiento_bancario)
    const pdf = new FPDF('L', 'mm', 'A4');
    pdf.AliasNbPages = '{nb}';
    pdf.Header = function Header() {
        let fecha = new Date().toISOString().split('T')[0]
        let hora = new Date().toISOString().split('T')[1].substring(0, 8)
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Image('public/img/logo_pdf.jpg', 10, 10, -300)
        pdf.Cell(0, 6, 'LISTADO DE MOVIMIENTOS BANCARIOS', 0, 0, 'C');
        pdf.Cell(0, 6, 'LISTADO: CONCEPTOS_MOVIMIENTOS_BANCARIOS', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `DESDE CONCEPTOS_MOVIMIENTOS_BANCARIOS: ${desde_concepto_movimiento_bancario} - HASTA CONCEPTOS_MOVIMIENTOS_BANCARIOS: ${hasta_concepto_movimiento_bancario}`, 0, 0, 'C');
        pdf.Cell(0, 6, 'USUARIO: admin', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `FECHA: ${fecha}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `HORA: ${hora}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(10, 6, 'ID', 1, 0);
        pdf.Cell(60, 6, 'CONCEPTOS_MOVIMIENTOS_BANCARIOS', 1, 0);
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
        pdf.Ln(5);
    });

    const pdfBase64 = pdf.Output('base64');
    const nombre = "concepto_movimiento_bancario";

    datos = { status: 200, data: { archivo: pdfBase64, nombre: nombre } }
    res.send(datos);
}

