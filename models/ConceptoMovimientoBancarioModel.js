const pool = require('../databases/db')

module.exports = class ConceptoMovimientoBancarioModel {

    constructor(id, item){
        this.id = id
        this.item = item
    }
    
        //Get Todos 
        static getAll = async (buscar) => {
            const sql = `SELECT id, nombre
                                FROM conceptos_movimientos_bancarios
                                WHERE nombre LIKE ?
                                ORDER BY id DESC`
            buscar = `%${buscar}%`  
            return await pool.query(sql, [buscar])                 
        };
    
        //Agregar
        static add = async (nombre) => {
            const sql = `INSERT INTO conceptos_movimientos_bancarios(nombre) VALUES(?)`
            return await pool.query(sql, [nombre])
        };
    
        //Modificar
        static update = async (nombre, id_conceptoMovimientoBancario) => {
            const sql = `UPDATE conceptos_movimientos_bancarios SET nombre=? WHERE id=?`
            return await pool.query(sql, [nombre, id_conceptoMovimientoBancario])
        };
    
        //Eliminar 
        static delete = async (id_conceptoMovimientoBancario) => {
            const sql = `DELETE FROM conceptos_movimientos_bancarios WHERE id=?`
            return await pool.query(sql, [id_conceptoMovimientoBancario])
        };
    
        //list
        static list = async (desde_conceptoMovimientoBancario, hasta_conceptoMovimientoBancario) => {
            const sql = `SELECT * FROM conceptos_movimientos_bancarios WHERE id >= ? AND id <= ?`
            return await pool.query(sql, [desde_conceptoMovimientoBancario, hasta_conceptoMovimientoBancario])
        };
    }