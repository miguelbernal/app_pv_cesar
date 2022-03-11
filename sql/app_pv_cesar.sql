CREATE DATABASE `app_pv` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;

CREATE TABLE app_pv_cesar.`usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `id_rol` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE app_pv_cesar.`roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE app_pv_cesar.submenus (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) DEFAULT NULL,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE app_pv_cesar.formularios (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  url varchar(100) NOT NULL,
  id_submenu int(11) DEFAULT 1,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY formularios_un (nombre)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE app_pv_cesar.permisos (
  id int(11) NOT NULL AUTO_INCREMENT,
  id_rol int(11) NOT NULL,
  id_formulario int(11) NOT NULL,
  agregar tinyint(1) DEFAULT NULL,
  modificar tinyint(1) DEFAULT NULL,
  eliminar tinyint(1) DEFAULT NULL,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

CREATE TABLE app_pv_cesar.clientes (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  direccion varchar(100) NOT NULL,
  telefono varchar(100) NOT NULL,
  ruc varchar(20) NOT NULL,
  email varchar(100) NOT NULL,
  clave varchar(100) NOT NULL,
  localizacion varchar(50) NOT NULL,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

CREATE TABLE app_pv_cesar.proveedores (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  direccion varchar(100) NOT NULL,
  telefono varchar(100) NOT NULL,
  ruc varchar(20) NOT NULL,
  email varchar(100) NOT NULL,
  localizacion varchar(50) NOT NULL,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

CREATE TABLE app_pv_cesar.productos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  costo int(11) NOT NULL,
  precio int(11) NOT NULL,
  stock int(11) NOT NULL,
  iva int(2) NOT NULL,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- INVENTARIOS_CABECERAS
CREATE TABLE app_pv_cesar.inventarios_cabeceras (
  id int(11) NOT NULL AUTO_INCREMENT,
  fecha datetime DEFAULT current_timestamp(),
  observaciones varchar(100) NOT NULL,
  total_costo int(11) DEFAULT 0,
  total_precio int(11) DEFAULT 0,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- INVENTARIOS_DETALLES
CREATE TABLE app_pv_cesar.inventarios_detalles (
  id int(11) NOT NULL AUTO_INCREMENT,
  id_inventario_cabecera int(11) NOT NULL,
  id_producto int(11) NOT NULL,
  cantidad int(11) DEFAULT 1,
  costo int(11) DEFAULT 0,
  precio int(11) DEFAULT 1,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- COMPRAS_CABECERAS
CREATE TABLE app_pv_cesar.compras_cabeceras (
  id int(11) NOT NULL AUTO_INCREMENT,
  fecha datetime DEFAULT current_timestamp(),
  id_proveedor int(11) NOT NULL,
  condicion int(1) DEFAULT 1,
  timbrado varchar(10) NOT NULL,
  fiscal varchar(20) NOT NULL,
  total_precio int(11) DEFAULT 0,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- COMPRAS_DETALLES
CREATE TABLE app_pv_cesar.compras_detalles (
  id int(11) NOT NULL AUTO_INCREMENT,
  id_compra_cabecera int(11) NOT NULL,
  id_producto int(11) NOT NULL,
  cantidad int(11) DEFAULT 1,
  precio int(11) DEFAULT 1,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- VENTAS_CABECERAS
CREATE TABLE app_pv_cesar.ventas_cabeceras (
  id int(11) NOT NULL AUTO_INCREMENT,
  fecha datetime DEFAULT current_timestamp(),
  id_cliente int(11) NOT NULL,
  condicion int(1) DEFAULT 1,
  timbrado varchar(10) NOT NULL,
  fiscal varchar(20) NOT NULL,
  total_costo int(11) DEFAULT 0,
  total_precio int(11) DEFAULT 0,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- VENTAS_DETALLES
CREATE TABLE app_pv_cesar.ventas_detalles (
  id int(11) NOT NULL AUTO_INCREMENT,
  id_venta_cabecera int(11) NOT NULL,
  id_producto int(11) NOT NULL,
  cantidad int(11) DEFAULT 1,
  costo int(11) DEFAULT 0,
  precio int(11) DEFAULT 1,
  usuario_id int(11) DEFAULT 1,
  date_add datetime DEFAULT current_timestamp(),
  date_mod datetime DEFAULT NULL,
  date_del datetime DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- TRIGGERS
-- VENTAS DETALLES
DELIMITER //
CREATE TRIGGER ventas_cabeceras_total_delete AFTER DELETE ON ventas_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE ventas_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)
                WHERE id = OLD.id_venta_cabecera;
       END;
//

CREATE TRIGGER ventas_cabeceras_total_update AFTER UPDATE ON ventas_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE ventas_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)  
                WHERE id = OLD.id_venta_cabecera;
	       UPDATE ventas_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo)
                WHERE id = NEW.id_venta_cabecera;
       END;
//

CREATE TRIGGER ventas_cabeceras_total_insert AFTER INSERT ON ventas_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE ventas_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo) 
                WHERE id = NEW.id_venta_cabecera;
       END;
//


-- INVENTARIOS DETALLES
DELIMITER //
CREATE TRIGGER inventarios_cabeceras_total_delete AFTER DELETE ON inventarios_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE inventarios_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)
                WHERE id = OLD.id_inventario_cabecera;
       END;
//

CREATE TRIGGER inventarios_cabeceras_total_update AFTER UPDATE ON inventarios_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE inventarios_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)  
                WHERE id = OLD.id_inventario_cabecera;
	       UPDATE inventarios_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo)
                WHERE id = NEW.id_inventario_cabecera;
       END;
//      

CREATE TRIGGER inventarios_cabeceras_total_insert AFTER INSERT ON inventarios_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE inventarios_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo) 
                WHERE id = NEW.id_inventario_cabecera;
       END;
//

-- COMPRAS DETALLES
DELIMITER //
CREATE TRIGGER compras_cabeceras_total_delete AFTER DELETE ON compras_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE compras_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio)
                WHERE id = OLD.id_compra_cabecera;
       END;
//

CREATE TRIGGER compras_cabeceras_total_update AFTER UPDATE ON compras_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE compras_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio)
                WHERE id = OLD.id_compra_cabecera;
	       UPDATE compras_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio)
                WHERE id = NEW.id_compra_cabecera;
       END;
//

CREATE TRIGGER compras_cabeceras_total_insert AFTER INSERT ON compras_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE compras_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio)
                WHERE id = NEW.id_compra_cabecera;
       END;
//