const pool = require('../databases/db')

module.exports = class CuentaBancariaModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todas las cuentas bancarias
    static getAll = async (buscar) => {
        const sql = `SELECT cb.id, cb.numero_cuenta, cb.titular_cuenta, cb.saldo,
                            cb.id_tipo_cuenta_bancaria id_tipo_cuenta_bancaria, tc.nombre nombre_tipo_cuenta_bancaria,
                            cb.id_banco id_banco, b.nombre nombre_banco,
                            cb.id_estado_cuenta_bancaria id_estado_cuenta_bancaria, ec.nombre nombre_estado_cuenta_bancaria
                            FROM cuentas_bancarias cb
                            LEFT JOIN tipos_cuentas_bancarias tc ON cb.id_tipo_cuenta_bancaria = tc.id
                            LEFT JOIN bancos b ON cb.id_banco = b.id
                            LEFT JOIN estados_cuentas_bancarias ec ON cb.id_estado_cuenta_bancaria = ec.id
                            WHERE cb.titular_cuenta LIKE ?
                            ORDER BY id DESC`
        buscar = `%${buscar}%`  
        return await pool.query(sql, [buscar])                 
    };

    //Agregar
    static add = async (numero_cuenta, titular_cuenta, id_tipo_cuenta_bancaria, id_banco, id_estado_cuenta_bancaria) => {
        const sql = `INSERT INTO cuentas_bancarias(numero_cuenta, titular_cuenta, id_tipo_cuenta_bancaria, id_banco, id_estado_cuenta_bancaria) VALUES(?,?,?,?,?)`
        return await pool.query(sql, [numero_cuenta, titular_cuenta, id_tipo_cuenta_bancaria, id_banco, id_estado_cuenta_bancaria])
    };

    //Modificar
    static update = async (numero_cuenta, titular_cuenta, id_tipo_cuenta_bancaria, id_banco, id_estado_cuenta_bancaria, id_cuenta_bancaria) => {
        const sql = `UPDATE cuentas_bancarias SET numero_cuenta=?, titular_cuenta=?, id_tipo_cuenta_bancaria=? , id_banco=?, id_estado_cuenta_bancaria=? WHERE id=?`
        return await pool.query(sql, [numero_cuenta, titular_cuenta, id_tipo_cuenta_bancaria, id_banco, id_estado_cuenta_bancaria, id_cuenta_bancaria])
    };

    //Eliminar 
    static delete = async (id_cuenta_bancaria) => {
        const sql = `DELETE FROM cuentas_bancarias WHERE id=?`
        return await pool.query(sql, [id_cuenta_bancaria])
    };

    //list
    static list = async (desde_cuenta_bancaria, hasta_cuenta_bancaria) => {
        const sql = `SELECT * FROM cuentas_bancarias WHERE id >= ? AND id <= ?`
        return await pool.query(sql, [desde_cuenta_bancaria, hasta_cuenta_bancaria])
    };
}