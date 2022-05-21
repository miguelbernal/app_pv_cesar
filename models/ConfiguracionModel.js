const pool = require('../databases/db')

module.exports = class ConfiguracionModel {
    
    constructor(id, item){
        this.id = id
        this.item = item
    }
    
    // Get por Id configuraciones
    static getOne = async (id) => {
        const sql = `SELECT c.id, c.nombre, c.direccion, c.telefono, c.ruc, c.id_moneda, m.nombre nombre_moneda
                            FROM configuraciones c
                            LEFT JOIN monedas m ON c.id_moneda = m.id
                            WHERE c.id = ?
                            ORDER BY c.id ASC`
        return await pool.query(sql, [id])
    };

    // Modificar
    static update = async (nombre, direccion, telefono, ruc, id_moneda, id_configuracion) => {
        const sql = `UPDATE configuraciones SET nombre=?, direccion=?, telefono=?, ruc=?, id_moneda=? WHERE id=?`
        return await pool.query(sql, [nombre, direccion, telefono, ruc, id_moneda, id_configuracion])
    };

}