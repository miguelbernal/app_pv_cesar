const pool = require('../databases/db')

module.exports = class UsuarioModel {
    
    constructor(id, item){
        this.id = id
        this.item = item
    }

    // Login
    static login = async(usuario, clave) => {
        const sql = `SELECT id, nombre, usuario 
                         FROM usuarios
                         WHERE usuario = ? AND clave = ?`
        return await pool.query(sql, [usuario, clave])
    }
    
    // Get Todos los Usuarios
    static getAll = async (buscar) => {
        const sql = `SELECT u.id, u.nombre, u.usuario, u.email, u.clave, 
                            r.id id_rol, r.nombre nombre_rol,
                            c.id id_caja, c.nombre nombre_caja,
                            d.id id_deposito, d.nombre nombre_deposito,
                            s.id id_sucursal, s.nombre nombre_sucursal
                            FROM usuarios u
                            LEFT JOIN roles r ON u.id_rol = r.id
                            LEFT JOIN cajas c ON u.id_caja = c.id
                            LEFT JOIN depositos d ON c.id_deposito = d.id
                            LEFT JOIN sucursales s ON d.id_sucursal = s.id
                            WHERE u.nombre LIKE ?
                            ORDER BY u.id DESC`
        buscar = `%${buscar}%`
        return await pool.query(sql, [buscar])
    };

    // Get Un Usuario
    static getOne = async (id_usuario) => {
        const sql = `SELECT u.id, u.nombre, u.usuario, 
                            u.id_rol, r.nombre nombre_rol,
                            c.id id_caja, c.nombre nombre_caja
                            FROM usuarios u
                            LEFT JOIN roles r ON u.id_rol = r.id
                            LEFT JOIN cajas c ON u.id_caja = c.id
                            WHERE u.id = ?`
        return await pool.query(sql, [id_usuario])
    };

    // Agregar
    static add = async (nombre, usuario, clave, id_rol, id_caja) => {
        const sql = `INSERT INTO usuarios(nombre, usuario, clave, id_rol, id_caja) VALUES(?,?,?,?,?)`
        return await pool.query(sql, [nombre, usuario, clave, id_rol, id_caja])
    };

    // Modificar
    static update = async (nombre, usuario, clave, id_rol, id_caja, id_usuario) => {
        const sql = `UPDATE usuarios SET nombre=?, usuario=?, clave=?, id_rol=?, id_caja=? WHERE id=?`
        return await pool.query(sql, [nombre, usuario, clave, id_rol, id_caja, id_usuario])
    };

    // Eliminar
    static delete = async (id_usuario) => {
        const sql = `DELETE FROM usuarios WHERE id=?`
        return await pool.query(sql, [id_usuario])
    };

    // Modificar
    static changePassword = async (clave, id_usuario) => {
        const sql = `UPDATE usuarios SET clave=? WHERE id=?`
        return await pool.query(sql, [clave, id_usuario])
    };

}