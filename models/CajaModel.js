const pool = require('../databases/db')

module.exports = class CajaModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todas las cajas
    static getAll = async (buscar) => {
        const sql = `SELECT c.id, c.nombre, s.id id_sucursal, s.nombre nombre_sucursal
                            FROM cajas c
                            LEFT JOIN sucursales s ON c.id_sucursal = s.id
                            WHERE c.nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Agregar
    static add = async (nombre, id_sucursal) => {
        const sql = `INSERT INTO cajas(nombre, id_sucursal) VALUES(?,?)`
        return await pool.query(sql, [nombre, id_sucursal])
    };

    //Modificar
    static update = async (nombre, id_sucursal, id_caja) => {
        const sql = `UPDATE cajas SET nombre=?, id_sucursal=? WHERE id=?`
        return await pool.query(sql, [nombre, id_sucursal, id_caja])
    };

    //Eliminar 
    static delete = async (id_caja) => {
        const sql = `DELETE FROM cajas WHERE id=?`
        return await pool.query(sql, [id_caja])
    };

    //list
    static list = async (desde_caja, hasta_caja) => {
        const sql = `SELECT * FROM cajas WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_caja, hasta_caja])
    };
}