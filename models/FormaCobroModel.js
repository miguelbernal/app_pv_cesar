const pool = require('../databases/db')

module.exports = class RolModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos las formas_cobros
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre
                            FROM formas_cobros
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Get un Rol
    static getOne = async (id_forma_cobro) => {
        const sql =  `SELECT id, nombre
                            FROM formas_cobros
                            WHERE id = ?`
        return await pool.query(sql, {id_forma_cobro})
    };

    //Agregar
    static add = async (nombre) => {
        const sql = `INSERT INTO formas_cobros(nombre) VALUES(?)`
        return await pool.query(sql, [nombre])
    };

    //Modificar
    static update = async (nombre, id_forma_cobro) => {
        const sql = `UPDATE formas_cobros SET nombre=? WHERE id=?`
        return await pool.query(sql, [nombre, id_forma_cobro])
    };

    //Eliminar 
    static delete = async (id_forma_cobro) => {
        const sql = `DELETE FROM formas_cobros WHERE id=?`
        return await pool.query(sql, [id_forma_cobro])
    };

}