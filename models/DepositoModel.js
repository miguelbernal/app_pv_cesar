const pool = require('../databases/db')

module.exports = class DepositoModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos los depositos
    static getAll = async (buscar) => {
        const sql = `SELECT d.id, d.nombre, s.id id_sucursal, s.nombre nombre_sucursal
                            FROM depositos d
                            LEFT JOIN sucursales s ON d.id_sucursal = s.id
                            WHERE d.nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Agregar
    static add = async (nombre, id_sucursal) => {
        const sql = `INSERT INTO depositos(nombre, id_sucursal) VALUES(?,?)`
        return await pool.query(sql, [nombre, id_sucursal])
    };

    //Modificar
    static update = async (nombre, id_sucursal, id_deposito) => {
        const sql = `UPDATE depositos SET nombre=?, id_sucursal=? WHERE id=?`
        return await pool.query(sql, [nombre, id_sucursal, id_deposito])
    };

    //Eliminar 
    static delete = async (id_deposito) => {
        const sql = `DELETE FROM depositos WHERE id=?`
        return await pool.query(sql, [id_deposito])
    };

    //list
    static list = async (desde_deposito, hasta_deposito) => {
        const sql = `SELECT * FROM depositos WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_deposito, hasta_deposito])
    };
}