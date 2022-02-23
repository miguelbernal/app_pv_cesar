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
