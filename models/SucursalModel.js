const pool = require('../databases/db')

module.exports = class SucursalModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos las sucrsales
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre, direccion, telefono, email
                            FROM sucursales
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Agregar
    static add = async (nombre, direccion, telefono, email) => {
        const sql = `INSERT INTO sucursales(nombre, direccion, telefono, email) VALUES(?,?,?,?)`
        return await pool.query(sql, [nombre, direccion, telefono, email])
    };

    //Modificar
    static update = async (nombre, direccion, telefono, email, id_sucursal) => {
        const sql = `UPDATE sucursales SET nombre=?, direccion=?, telefono=?, email=? WHERE id=?`
        return await pool.query(sql, [nombre, direccion, telefono, email, id_sucursal])
    };

    //Eliminar 
    static delete = async (id_sucursal) => {
        const sql = `DELETE FROM sucursales WHERE id=?`
        return await pool.query(sql, [id_sucursal])
    };

    //list
    static list = async (desde_sucursal, hasta_sucursal) => {
        const sql = `SELECT * FROM sucursales WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_sucursal, hasta_sucursal])
    };
}