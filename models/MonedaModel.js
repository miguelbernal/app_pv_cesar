const pool = require('../databases/db')

module.exports = class MonedaModel {
    
    constructor(id, item){
        this.id = id
        this.item = item
    }
    
    // Get Todos las monedas
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre, simbolo, compra, venta
                            FROM monedas 
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`
        return await pool.query(sql, [buscar])
    };

    // Agregar
    static add = async (nombre, simbolo, compra, venta) => {
        const sql = `INSERT INTO monedas(nombre, simbolo, compra, venta) VALUES(?,?,?,?)`
        return await pool.query(sql, [nombre, simbolo, compra, venta])
    };

    // Modificar
    static update = async (nombre, simbolo, compra, venta, id_moneda) => {
        const sql = `UPDATE monedas SET nombre=?, simbolo=?, compra=?,venta=? WHERE id=?`
        return await pool.query(sql, [nombre, simbolo, compra, venta, id_moneda])
    };

    // Eliminar
    static delete = async (id_moneda) => {
        const sql = `DELETE FROM monedas WHERE id=?`
        return await pool.query(sql, [id_moneda])
    };

    // List
    static list = async (desde_moneda, hasta_moneda) => {
        const sql = `SELECT * FROM monedas WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_moneda, hasta_moneda])
    };
}