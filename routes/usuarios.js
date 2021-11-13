const express = require('express')
const router = express.Router()
const mysql = require('mysql')

router.post('/login', (req, res, next) => {
    const con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: 'root',
        password: '1',
        database: 'app_pv_cesar'
    })
    let datos = { status: 404, datos: [] }
    con.connect((err) => {
        if (err) {
            console.log(err)
            res.send(datos)
        }
        console.log('Conectado')
        const usuario = req.body.usuario
        const clave = req.body.clave
        const sql = `SELECT id, nombre, usuario
                     FROM usuarios
                     WHERE usuario = '${usuario}' AND clave = '${clave}'`
        con.query(sql, (err, result) => {
            if (err) {
                console.log(err)
                res.send(datos)
            } else {
                console.log(result)
                if (result.length > 0) {
                    datos = { status: 200, datos: result[0]}
                }
                res.send(datos)
            }
        })
    })
})

// Buscar
router.post('/buscar', function (req, res, next) {
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1",
        database: "app_pv_cesar"
    });
    var datos = { status: 404, data: [] };
    con.connect(function (err) {
        if (err) {
            console.log(err);
            res.send(datos);
        }
        console.log("Conectado");
        var buscar = req.body.buscar;
        var sql = `SELECT u.id, u.nombre, usuario, email, clave, u.id_rol, r.nombre nombre_rol
                          FROM usuarios u
                          LEFT JOIN roles r ON u.id_rol = r.id 
                          WHERE u.nombre LIKE '%${buscar}%'
                          ORDER BY u.id DESC
                          `;
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.send(datos);
            } else {
                console.log(result);
                if (result.length > 0) {
                    datos = { status: 200, data: result};
                }
                res.send(datos);    
            }
        });
    });
});

// Agregar
router.post('', function (req, res, next) {
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1",
        database: "app_pv_cesar"
    });
    var datos = { status: 404, data: [] };
    con.connect(function (err) {
        if (err) {
            console.log(err);
            res.send(datos);
        }
        console.log("Conectado");
        var nombre = req.body.nombre;
        var sql = `INSERT INTO usuarios(nombre) VALUES('${nombre}')`;
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.send(datos);
            } else {                               
                let data = {
                    id: result.insertId,
                    nombre: nombre
                }
                if (result.affectedRows > 0) {
                    datos = { status: 200, data: data};
                    console.log(datos);
                }
                res.send(datos);    
            }
        });
    });
});

// Modificar
router.put('', function (req, res, next) {
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1",
        database: "app_pv_cesar"
    });
    var datos = { status: 404, data: [] };
    con.connect(function (err) {
        if (err) {
            console.log(err);
            res.send(datos);
        }
        console.log("Conectado");
        var id_rol = req.body.id_rol;
        var nombre = req.body.nombre;
        var sql = `UPDATE usuarios SET nombre='${nombre}' WHERE id=${id_rol}`;
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.send(datos);
            } else {                               
                let data = {
                    id: id_rol,
                    nombre: nombre
                }
                if (result.affectedRows > 0) {
                    datos = { status: 200, data: data};
                    console.log(datos);
                }
                res.send(datos);    
            }
        });
    });
});

// Eliminar
router.delete('', function (req, res, next) {
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1",
        database: "app_pv_cesar"
    });
    var datos = { status: 404, data: [] };
    con.connect(function (err) {
        if (err) {
            console.log(err);
            res.send(datos);
        }
        console.log("Conectado");
        var id_rol = req.body.id_rol;
        var sql = `DELETE FROM usuarios WHERE id=${id_rol}`;
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.send(datos);
            } else {                               
                let data = {
                    id: id_rol
                }
                if (result.affectedRows > 0) {
                    datos = { status: 200, data: data};
                    console.log(datos);
                }
                res.send(datos);    
            }
        });
    });
});

module.exports = router