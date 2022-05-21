const pool = require('../databases/db')

module.exports = class ModuloModel {
    
    constructor(id, item){
        this.id = id
        this.item = item
    }

    // Get Todos los modulos
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre
                            FROM modulos
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`
        return await pool.query(sql, [buscar])
    };

    // Get Un modulos
    static getOne = async (id_modulo) => {
        const sql = `SELECT id, nombre
                            FROM modulos
                            WHERE id = ?`
        return await pool.query(sql, [id_modulo])
    };

    // Agregar
    static add = async (nombre) => {
        const sql = `INSERT INTO modulos(nombre) VALUES(?)`
        return await pool.query(sql, [nombre])
    };

    // Modificar
    static update = async (nombre, id_modulo) => {
        const sql = `UPDATE modulos SET nombre=? WHERE id=?`
        return await pool.query(sql, [nombre, id_modulo])
    };

    // Eliminar
    static delete = async (id_modulo) => {
        const sql = `DELETE FROM modulos WHERE id=?`
        return await pool.query(sql, [id_modulo])
    };

}