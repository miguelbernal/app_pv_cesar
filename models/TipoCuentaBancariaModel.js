const pool = require('../databases/db')

module.exports = class TipoCuentaBancariaModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todos los tipos de cuentas
    static getAll = async (buscar) => {
        const sql = `SELECT id, nombre
                            FROM tipos_cuentas_bancarias
                            WHERE nombre LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Get un Rol
    static getOne = async (id_tipo_cuenta_bancaria) => {
        const sql =  `SELECT id, nombre
                            FROM tipos_cuentas_bancarias
                            WHERE id = ?`
        return await pool.query(sql, {id_tipo_cuenta_bancaria})
    };

    //Agregar
    static add = async (nombre) => {
        const sql = `INSERT INTO tipos_cuentas_bancarias(nombre) VALUES(?)`
        return await pool.query(sql, [nombre])
    };

    //Modificar
    static update = async (nombre, id_tipo_cuenta_bancaria) => {
        const sql = `UPDATE tipos_cuentas_bancarias SET nombre=? WHERE id=?`
        return await pool.query(sql, [nombre, id_tipo_cuenta_bancaria])
    };

    //Eliminar 
    static delete = async (id_tipo_cuenta_bancaria) => {
        const sql = `DELETE FROM tipos_cuentas_bancarias WHERE id=?`
        return await pool.query(sql, [id_tipo_cuenta_bancaria])
    };

}