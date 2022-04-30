const pool = require('../databases/db')

module.exports = class RolModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos las tarjetas
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre
                            FROM tarjetas
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Get un Rol
    static getOne = async (id_tarjeta) => {
        const sql =  `SELECT id, nombre
                            FROM tarjetas
                            WHERE id = ?`
        return await pool.query(sql, {id_tarjeta})
    };

    //Agregar
    static add = async (nombre) => {
        const sql = `INSERT INTO tarjetas(nombre) VALUES(?)`
        return await pool.query(sql, [nombre])
    };

    //Modificar
    static update = async (nombre, id_tarjeta) => {
        const sql = `UPDATE tarjetas SET nombre=? WHERE id=?`
        return await pool.query(sql, [nombre, id_tarjeta])
    };

    //Eliminar 
    static delete = async (id_tarjeta) => {
        const sql = `DELETE FROM tarjetas WHERE id=?`
        return await pool.query(sql, [id_tarjeta])
    };

}