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
            id_conceptoMovimientoBancario: result.insertId,
            nombre: nombre,
        }
        datos = { status: 200, datos: data }
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const id_conceptoMovimientoBancario = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.update(nombre, id_conceptoMovimientoBancario)
    if (result.affectedRow > 0) {
        const data = {
            id_conceptoMovimientoBancario: id_conceptoMovimientoBancario,
            nombre: nombre,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_conceptoMovimientoBancario = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.delete(id_conceptoMovimientoBancario)
    if (result.affectedRows > 0) {
        const data = {
            id_conceptoMovimientoBancario: id_conceptoMovimientoBancario,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.list = async (req, res, next) => {
    const desde_conceptoMovimientoBancario = req.query.desde_conceptoMovimientoBancario
    const hasta_conceptoMovimientoBancario = req.query.hasta_conceptoMovimientoBancario
    let datos = { status: 404, datos: [] }
    const result = await  ConceptoMovimientoBancarioModel.list(desde_conceptoMovimientoBancario, hasta_conceptoMovimientoBancario)
    const pdf = new FPDF('L', 'mm', 'A4');
    pdf.AliasNbPages = '{nb}';
    pdf.Header = function Header() {
        let fecha = new Date().toISOString().split('T')[0]
        let hora = new Date().toISOString().split('T')[1].substring(0, 8)
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Image('public/img/logo_pdf.jpg', 10, 10, -300)
        pdf.Cell(0, 6, 'LISTADO DE MOVIMIENTOS BANCARIOS', 0, 0, 'C');
        pdf.Cell(0, 6, 'LISTADO: CONCEPTOSMOVIMIENTOSBANCARIOS', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `DESDE CONCEPTOSMOVIMIENTOSBANCARIOS: ${desde_conceptomovimientobancario} - HASTA CONCEPTOSMOVIMIENTOSBANCARIOS: ${hasta_conceptomovimientobancario}`, 0, 0, 'C');
        pdf.Cell(0, 6, 'USUARIO: admin', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `FECHA: ${fecha}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `HORA: ${hora}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(10, 6, 'ID', 1, 0);
        pdf.Cell(60, 6, 'CONCEPTOSMOVIMIENTOSBANCARIOS', 1, 0);
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
    const nombre = "conceptoMovimientoBancario";

    datos = { status: 200, data: { archivo: pdfBase64, nombre: nombre } }
    res.send(datos);
}

