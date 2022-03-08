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
