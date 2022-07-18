const pool = require('../databases/db')

module.exports = class RolModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos las condiciones
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre
                            FROM condiciones
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Get un Rol
    static getOne = async (id_condicion) => {
        const sql =  `SELECT id, nombre
                            FROM condiciones
                            WHERE id = ?`
        return await pool.query(sql, {id_condicion})
    };

    //Agregar
    static add = async (nombre) => {
        const sql = `INSERT INTO condiciones(nombre) VALUES(?)`
        return await pool.query(sql, [nombre])
    };

    //Modificar
    static update = async (nombre, id_condicion) => {
        const sql = `UPDATE condiciones SET nombre=? WHERE id=?`
        return await pool.query(sql, [nombre, id_condicion])
    };

    //Eliminar 
    static delete = async (id_condicion) => {
        const sql = `DELETE FROM condiciones WHERE id=?`
        return await pool.query(sql, [id_condicion])
    };

}