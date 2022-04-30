const SucursalModel = require("../models/SucursalModel")
const FPDF = require('node-fpdf')

exports.getAll = async (req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await SucursalModel.getAll(buscar)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    const email = req.body.email
    let datos = { status: 404, datos: [] }
    const result = await SucursalModel.add(nombre, direccion, telefono, email)
    if (result.affectedRow > 0) {
        const data = {
            id_sucursal: result.insertId,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email
        }
        datos = { status: 200, datos: data }
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    const email = req.body.email
    const id_sucursal = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await SucursalModel.update(nombre, direccion, telefono, email, id_sucursal)
    if (result.affectedRow > 0) {
        const data = {
            id_sucursal: id_sucursal,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_sucursal = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await SucursalModel.delete(id_sucursal)
    if (result.affectedRows > 0) {
        const data = {
            id_sucursal: id_sucursal,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.list = async (req, res, next) => {
    const desde_sucursal = req.query.desde_sucursal
    const hasta_sucursal = req.query.hasta_sucursal
    let datos = { status: 404, datos: [] }
    const result = await SucursalModel.list(desde_sucursal, hasta_sucursal)
    const pdf = new FPDF('L', 'mm', 'A4');
    pdf.AliasNbPages = '{nb}';
    pdf.Header = function Header() {
        let fecha = new Date().toISOString().split('T')[0]
        let hora = new Date().toISOString().split('T')[1].substring(0, 8)
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Image('public/img/logo_pdf.jpg', 10, 10, -300)
        pdf.Cell(0, 6, 'LISTADO DE SUCURSALES', 0, 0, 'C');
        pdf.Cell(0, 6, 'LISTADO: SUCURSALES', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `DESDE SUCURSAL: ${desde_sucursal} - HASTA SUCURSAL: ${hasta_sucursal}`, 0, 0, 'C');
        pdf.Cell(0, 6, 'USUARIO: admin', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `FECHA: ${fecha}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `HORA: ${hora}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(10, 6, 'ID', 1, 0);
        pdf.Cell(60, 6, 'NOMBRE', 1, 0);
        pdf.Cell(60, 6, 'DIRECCION', 1, 0);
        pdf.Cell(50, 6, 'TELEFONO', 1, 0);
        pdf.Cell(50, 6, 'EMAIL', 1, 0);
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
        pdf.Cell(60, 6, fila.direccion);
        pdf.Cell(50, 6, fila.telefono);
        pdf.Cell(50, 6, fila.email);
        pdf.Ln(5);
    });

    const pdfBase64 = pdf.Output('base64');
    const nombre = "sucursal";

    datos = { status: 200, data: { archivo: pdfBase64, nombre: nombre } }
    res.send(datos);
}

