const pool = require('../databases/db')

module.exports = class CuentaBancariaModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todas las cuentas bancarias
    static getAll = async (buscar) => {
        const sql = `SELECT cb.id, cb.numero, cb.titular_cuenta, tc.id id_tipoCuentaBancaria, tc.nombre nombre_tipoCuentaBancaria
        tc.id id_tipoCuentaBancaria, tc.nombre nombre_tipo_cuenta_bancaria
                            FROM cuentas_bancarias cb
                            LEFT JOIN tipos_cuentas_bancarias tc ON cb.id_cuentaBancaria = tc.id
                            LEFT JOIN bancos b ON cb.id_cuentasBancarias = b.id
                            LEFT JOIN estados_cuentas_bancarias ec ON cb.id_cuentaBancaria = ec.id
                            WHERE cb.titular_cuenta LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Agregar
    static add = async (numero, titular_cuenta, id_tipoCuentaBancaria, id_banco, id_estadoCuentaBancaria) => {
        const sql = `INSERT INTO cuentas_bancarias(numero, titular_cuenta, id_tipoCuentaBancaria, id_banco, id_estadoCuentaBancaria) VALUES(?,?,?,?,?)`
        return await pool.query(sql, [numero, titular_cuenta, id_tipoCuentaBancaria, id_banco, id_estadoCuentaBancaria])
    };

    //Modificar
    static update = async (numero, titular_cuenta, id_tipoCuentaBancaria, id_banco, id_estadoCuentaBancaria) => {
        const sql = `UPDATE depositos SET numero=?, titular_cuenta=?, id_tipoCuentaBancaria=? , id_banco=?, id_estadoCuentaBancaria=? WHERE id=?`
        return await pool.query(sql, [numero, titular_cuenta, id_tipoCuentaBancaria, id_banco, id_estadoCuentaBancaria])
    };

    //Eliminar 
    static delete = async (id_cuentaBancaria) => {
        const sql = `DELETE FROM cuentas_bancarias WHERE id=?`
        return await pool.query(sql, [id_cuentaBancaria])
    };

    //list
    static list = async (desde_cuentaBancaria, hasta_cuentaBancaria) => {
        const sql = `SELECT * FROM cuentas_bancarias WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_cuentaBancaria, hasta_cuentaBancaria])
    };
}