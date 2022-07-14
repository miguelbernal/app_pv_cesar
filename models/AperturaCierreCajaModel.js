const pool = require('../databases/db')

module.exports = class AperturaCierreCajaModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }

    //Get Todas las cajas por Usuario
    static getByUsuario = async (id_usuario) => {
        const sql = `SELECT id, apertura, cierre, cerrado,
                            usuario_id
                            FROM apertura_cierre_cajas 
                            WHERE usuario_id = ? AND cerrado = 0
                            ORDER BY id DESC`
        return await pool.query(sql, [id_usuario])
    };

    //Agregar
    static add = async (apertura, cerrado, usuario_id) => {
        const sql = `INSERT INTO apertura_cierre_cajas(apertura, cerrado, usuario_id) VALUES(?,?,?)`
        return await pool.query(sql, [apertura, cerrado, usuario_id])
    };

    //Modificar
    static update = async (apertura, cierre, cerrado, id_apertura_cierre_caja) => {
        const sql = `UPDATE apertura_cierre_cajas SET apertura=?, cierre=?, cerrado=? WHERE id=?`
        return await pool.query(sql, [apertura, cierre, cerrado, id_apertura_cierre_caja])
    };

}