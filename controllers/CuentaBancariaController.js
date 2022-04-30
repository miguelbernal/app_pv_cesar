const CuentaBancariaModel = require("../models/CuentaBancariaModel")
const FPDF = require('node-fpdf')

exports.getAll = async (req, res, next) => {
    let buscar = req.query.buscar
    let datos = { status: 404, datos: [] }
    const result = await CuentaBancariaModel.getAll(buscar)
    if (result.length > 0) {
        datos = { status: 200, datos: result }
    }
    res.json(datos)
}

exports.insert = async (req, res, next) => {
    const numero = req.body.numero
    const titular_cuenta = req.body.titular_cuenta
    const id_tipoCuentaBancaria = req.body.id_tipoCuentaBancaria
    const id_banco = req.body.id_banco
    const id_estadoCuentaBancaria = req.body.id_estadoCuentaBancaria
    let datos = { status: 404, datos: [] }
    const result = await CuentaBancariaModel.add(numero, titular_cuenta, id_tipoCuentaBancaria, id_banco, id_estadoCuentaBancaria)
    if (result.affectedRow > 0) {
        const data = {
            id_cuenta_bancaria: result.insertId,
            numero: numero,
            titular_cuenta: titular_cuenta,
            id_tipo_cuenta_bancaria: id_tipo_cuenta_bancaria,
            id_banco: id_banco,
            id_estado_cuenta_bancaria: id_estado_cuenta_bancaria
        }
        datos = { status: 200, datos: data }
    }
    res.send(datos);
}

exports.update = async (req, res, next) => {
    const numero = req.body.numero
    const titular_cuenta = req.body.titular_cuenta
    const id_tipo_cuenta_bancaria = req.body.id_tipo_cuenta_bancaria
    const id_banco = req.body.id_banco
    const id_estado_cuenta_bancaria = req.body.id_estado_cuenta_bancaria
    const id_cuenta_bancaria = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await Cuenta_BancariaModel.update(numero, titular_cuenta, id_tipo_cuenta_bancaria, id_banco, id_estado_cuenta_bancaria, id_cuenta_bancaria)
    if (result.affectedRow > 0) {
        const data = {
            id_cuenta_bancaria: id_cuenta_bancaria,
            numero: numero,
            id_tipo_cuenta_bancaria: id_tipo_cuenta_bancaria,
            id_banco: id_banco,
            id_estado_cuenta_bancaria: id_estado_cuenta_bancaria
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.delete = async (req, res, next) => {
    const id_cuenta_bancaria = req.params.id
    let datos = { status: 404, datos: [] }
    const result = await Cuenta_BancariaModel.delete(id_cuenta_bancaria)
    if (result.affectedRows > 0) {
        const data = {
            id_cuenta_bancaria: id_cuenta_bancaria,
        }
        datos = { status: 200, data: data };
    }
    res.send(datos);
}

exports.list = async (req, res, next) => {
    const desde_cuenta_bancaria = req.query.desde_cuenta_bancaria
    const hasta_cuenta_bancaria = req.query.hasta_cuenta_bancaria
    let datos = { status: 404, datos: [] }
    const result = await Cuenta_BancariaModel.list(desde_cuenta_bancaria, hasta_cuenta_bancaria)
    const pdf = new FPDF('L', 'mm', 'A4');
    pdf.AliasNbPages = '{nb}';
    pdf.Header = function Header() {
        let fecha = new Date().toISOString().split('T')[0]
        let hora = new Date().toISOString().split('T')[1].substring(0, 8)
        pdf.SetFont('helvetica', 'B', 8);
        pdf.Image('public/img/logo_pdf.jpg', 10, 10, -300)
        pdf.Cell(0, 6, 'LISTADO DE CUENTAS BANCARIAS', 0, 0, 'C');
        pdf.Cell(0, 6, 'LISTADO: CUENTAS BANCARIAS', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `DESDE CUENTAS BANCARIAS: ${desde_cuenta_bancaria} - HASTA CUENTAS BANCARIAS: ${hasta_cuenta_bancaria}`, 0, 0, 'C');
        pdf.Cell(0, 6, 'USUARIO: admin', 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `FECHA: ${fecha}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(0, 6, `HORA: ${hora}`, 0, 0, 'R');
        pdf.Ln(5);
        pdf.Cell(10, 6, 'ID', 1, 0);
        pdf.Cell(60, 6, 'CUENTAS BANCARIAS', 1, 0);
        pdf.Cell(60, 6, 'TIPOS CUENTAS BANCARIAS', 1, 0);
        pdf.Cell(60, 6, 'BANCOS', 1, 0);
        pdf.Cell(60, 6, 'ESTADOS CUENTAS BANCARIAS', 1, 0);
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
    const numero = "cuenta_bancaria";

    datos = { status: 200, data: { archivo: pdfBase64, numero: numero } }
    res.send(datos);
}

