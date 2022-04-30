const pool = require('../databases/db')

module.exports = class BancoModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos los bancos
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre, direccion, telefono 
                            FROM bancos
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Agregar
    static add = async (nombre, direccion, telefono) => {
        const sql = `INSERT INTO bancos(nombre, direccion, telefono) VALUES(?,?,?)`
        return await pool.query(sql, [nombre, direccion, telefono])
    };

    //Modificar
    static update = async (nombre, direccion, telefono, id_banco) => {
        const sql = `UPDATE bancos SET nombre=?, direccion=?, telefono=? WHERE id=?`
        return await pool.query(sql, [nombre, direccion, telefono, id_banco])
    };

    //Eliminar 
    static delete = async (id_banco) => {
        const sql = `DELETE FROM bancos WHERE id=?`
        return await pool.query(sql, [id_banco])
    };

    //list
    static list = async (desde_banco, hasta_banco) => {
        const sql = `SELECT * FROM bancos WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_banco, hasta_banco])
    };
}