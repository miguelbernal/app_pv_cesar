const pool = require('../databases/db')

module.exports = class ProductoModel {
    
    constructor(id, item){
        this.id = id
        this.item = item
    }

    // Get Todos los Productos
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre, costo, precio, stock, iva 
                            FROM productos 
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`
        return await pool.query(sql, [buscar])
    };

    // Agregar
    static add = async (nombre, costo, precio, stock, iva) => {
        const sql = `INSERT INTO productos(nombre, costo, precio, stock, iva) VALUES(?,?,?,?,?)`
        return await pool.query(sql, [nombre, costo, precio, stock,iva])
    };

    // Modificar
    static update = async (nombre, costo, precio, stock, iva, id_producto) => {
        const sql = `UPDATE productos SET nombre=?, costo=?, precio=?, stock=?, iva=? WHERE id=?`
        return await pool.query(sql, [nombre, costo, precio, stock, iva, id_producto])
    };

    // Eliminar
    static delete = async (id_producto) => {
        const sql = `DELETE FROM productos WHERE id=?`
        return await pool.query(sql, [id_producto])
    };

    // List
    static list = async (desde_producto, hasta_producto) => {
        const sql = `SELECT * FROM productos WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_producto, hasta_producto])
    };

}