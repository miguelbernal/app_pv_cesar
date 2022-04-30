const pool = require('../databases/db')

module.exports = class EstadoCuentaBancariaModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos los estados de cuentas
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre
                            FROM estados_cuentas_bancarias
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Get un estado
    static getOne = async (id_estadoCuentaBancaria) => {
        const sql =  `SELECT id, nombre
                            FROM estados_cuentas_bancarias
                            WHERE id = ?`
        return await pool.query(sql, {id_estadoCuentaBancaria})
    };

    //Agregar
    static add = async (nombre) => {
        const sql = `INSERT INTO estados_cuentas_bancarias(nombre) VALUES(?)`
        return await pool.query(sql, [nombre])
    };

    //Modificar
    static update = async (nombre, id_estadoCuentaBancaria) => {
        const sql = `UPDATE estados_cuentas_bancarias SET nombre=? WHERE id=?`
        return await pool.query(sql, [nombre, id_estadoCuentaBancaria])
    };

    //Eliminar 
    static delete = async (id_estadoCuentaBancaria) => {
        const sql = `DELETE FROM estados_cuentas_bancarias WHERE id=?`
        return await pool.query(sql, [id_estadoCuentaBancaria])
    };

}