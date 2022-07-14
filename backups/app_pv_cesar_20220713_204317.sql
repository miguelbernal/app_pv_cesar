-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: app_pv_cesar
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apertura_cierre_cajas`
--

DROP TABLE IF EXISTS `apertura_cierre_cajas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apertura_cierre_cajas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apertura` datetime DEFAULT NULL,
  `cierre` datetime DEFAULT NULL,
  `cerrado` tinyint(1) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apertura_cierre_cajas`
--

LOCK TABLES `apertura_cierre_cajas` WRITE;
/*!40000 ALTER TABLE `apertura_cierre_cajas` DISABLE KEYS */;
INSERT INTO `apertura_cierre_cajas` VALUES (1,'2022-01-01 03:00:00','2022-07-02 21:27:01',1,1,'2022-07-02 19:46:40',NULL,NULL),(2,'2022-07-03 01:27:36','2022-07-02 21:31:20',1,1,'2022-07-02 21:27:47',NULL,NULL),(3,'2022-07-03 01:32:39',NULL,0,1,'2022-07-02 21:32:42',NULL,NULL);
/*!40000 ALTER TABLE `apertura_cierre_cajas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bancos`
--

DROP TABLE IF EXISTS `bancos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bancos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bancos`
--

LOCK TABLES `bancos` WRITE;
/*!40000 ALTER TABLE `bancos` DISABLE KEYS */;
INSERT INTO `bancos` VALUES (3,'Itau','España','223344',1,'2022-04-13 13:09:30',NULL,NULL),(2,'Atlas','Mariscal Lopez','4325430',1,'2022-04-13 12:56:19',NULL,NULL),(4,'Continental','San Martin','332244',1,'2022-04-13 13:09:53',NULL,NULL),(5,'Basa','Autopista','112233',1,'2022-04-13 13:10:08',NULL,NULL),(6,'GNB','Mcal.Lopez','12345656',1,'2022-05-05 15:42:11',NULL,NULL);
/*!40000 ALTER TABLE `bancos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cajas`
--

DROP TABLE IF EXISTS `cajas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cajas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `id_deposito` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cajas`
--

LOCK TABLES `cajas` WRITE;
/*!40000 ALTER TABLE `cajas` DISABLE KEYS */;
INSERT INTO `cajas` VALUES (1,'Caja-1',1,1,'2022-04-15 15:52:49',NULL,NULL),(2,'Caja-1',2,1,'2022-04-15 15:55:21',NULL,NULL),(3,'Caja-1',3,1,'2022-04-15 15:56:53',NULL,NULL),(4,'Caja-1',4,1,'2022-04-15 15:58:54',NULL,NULL),(5,'Caja-1',5,1,'2022-04-15 16:08:40',NULL,NULL),(6,'Caja-2',6,1,'2022-04-15 16:09:00',NULL,NULL),(7,'Caja-2',7,1,'2022-04-15 16:09:19',NULL,NULL),(8,'Caja-1',8,1,'2022-05-05 15:43:47',NULL,NULL);
/*!40000 ALTER TABLE `cajas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `ruc` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `localizacion` varchar(50) NOT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Jose','Las Palmas','123123','123123','jose@gmail.com','1','[ -25.325490270752955 , -57.527161434803645 ]',1,'2022-02-17 21:10:43',NULL,NULL),(4,'Client1','Dir1','Tel1','001','C@gmail.com','1','[-25.3253331, -57.5255339]',1,'2022-03-09 21:18:34',NULL,NULL),(3,'Victor','Brasil casi Panama','123456','123456','Vic@gmail.com','3','[ -25.324399273163216  ,  -57.535982222026114 ]',1,'2022-02-17 21:21:23',NULL,NULL),(5,'Gael','Guatemala casi Brasil','752233','752233','G@gmail.com','2','[ -25.163308973273587  ,  -57.49242227575077 ]',1,'2022-03-15 20:54:59',NULL,NULL),(6,'Estela','Brasil','751231','751231','e@gmail.com','3','[ -25.32503253773175  ,  -57.52665941234394 ]',1,'2022-03-15 20:56:17',NULL,NULL),(7,'Tita','Autopista','606303','606303','ti@gmail.com','4','[ -25.302441463561774  ,  -57.57645309596479 ]',1,'2022-03-15 20:57:30',NULL,NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_cabeceras`
--

DROP TABLE IF EXISTS `compras_cabeceras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras_cabeceras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT current_timestamp(),
  `id_proveedor` int(11) NOT NULL,
  `condicion` int(1) DEFAULT 1,
  `timbrado` varchar(10) NOT NULL,
  `fiscal` varchar(20) NOT NULL,
  `total_precio` int(11) DEFAULT 0,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_cabeceras`
--

LOCK TABLES `compras_cabeceras` WRITE;
/*!40000 ALTER TABLE `compras_cabeceras` DISABLE KEYS */;
INSERT INTO `compras_cabeceras` VALUES (1,'2022-03-23 22:44:45',5,1,'1234567','00100100123',45000,1,'2022-03-23 22:45:17',NULL,NULL),(2,'2022-03-24 13:00:14',5,1,'12345677','0010010012233',125000,1,'2022-03-24 13:00:59',NULL,NULL);
/*!40000 ALTER TABLE `compras_cabeceras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_detalles`
--

DROP TABLE IF EXISTS `compras_detalles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compras_detalles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_compra_cabecera` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT 1,
  `precio` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_detalles`
--

LOCK TABLES `compras_detalles` WRITE;
/*!40000 ALTER TABLE `compras_detalles` DISABLE KEYS */;
INSERT INTO `compras_detalles` VALUES (1,1,2,3,15000,1,'2022-03-23 22:45:18',NULL,NULL),(2,2,10,10,2500,1,'2022-03-24 13:00:59',NULL,NULL),(3,2,11,2,50000,1,'2022-03-24 13:01:47',NULL,NULL);
/*!40000 ALTER TABLE `compras_detalles` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER compras_cabeceras_total_insert AFTER INSERT ON compras_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE compras_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio)
                WHERE id = NEW.id_compra_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER compras_cabeceras_total_update AFTER UPDATE ON compras_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE compras_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio)
                WHERE id = OLD.id_compra_cabecera;
	       UPDATE compras_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio)
                WHERE id = NEW.id_compra_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER compras_cabeceras_total_delete AFTER DELETE ON compras_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE compras_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio)
                WHERE id = OLD.id_compra_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary table structure for view `compras_meses`
--

DROP TABLE IF EXISTS `compras_meses`;
/*!50001 DROP VIEW IF EXISTS `compras_meses`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `compras_meses` (
  `mes` tinyint NOT NULL,
  `anio` tinyint NOT NULL,
  `total_precio` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `conceptos_movimientos_bancarios`
--

DROP TABLE IF EXISTS `conceptos_movimientos_bancarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conceptos_movimientos_bancarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conceptos_movimientos_bancarios`
--

LOCK TABLES `conceptos_movimientos_bancarios` WRITE;
/*!40000 ALTER TABLE `conceptos_movimientos_bancarios` DISABLE KEYS */;
INSERT INTO `conceptos_movimientos_bancarios` VALUES (2,'Test1',1,'2022-04-22 15:15:22',NULL,NULL),(3,'Test2',1,'2022-04-22 15:15:31',NULL,NULL),(4,'Test3',1,'2022-04-22 15:15:38',NULL,NULL),(5,'test4',1,'2022-05-05 16:22:58',NULL,NULL);
/*!40000 ALTER TABLE `conceptos_movimientos_bancarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configuraciones`
--

DROP TABLE IF EXISTS `configuraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configuraciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `ruc` varchar(20) DEFAULT NULL,
  `id_moneda` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configuraciones`
--

LOCK TABLES `configuraciones` WRITE;
/*!40000 ALTER TABLE `configuraciones` DISABLE KEYS */;
INSERT INTO `configuraciones` VALUES (1,'Fventas','Guate','123333','223333',2,'2022-05-13 22:14:58',NULL,NULL);
/*!40000 ALTER TABLE `configuraciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuentas_bancarias`
--

DROP TABLE IF EXISTS `cuentas_bancarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuentas_bancarias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero_cuenta` varchar(100) DEFAULT NULL,
  `titular_cuenta` varchar(100) DEFAULT NULL,
  `id_tipo_cuenta_bancaria` int(11) DEFAULT 1,
  `id_banco` int(11) DEFAULT 1,
  `id_estado_cuenta_bancaria` int(11) DEFAULT 1,
  `saldo` int(11) DEFAULT 0,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuentas_bancarias`
--

LOCK TABLES `cuentas_bancarias` WRITE;
/*!40000 ALTER TABLE `cuentas_bancarias` DISABLE KEYS */;
INSERT INTO `cuentas_bancarias` VALUES (2,'000112','Victor O',6,4,5,0,1,'2022-05-06 16:30:03',NULL,NULL),(3,'000123','Jose',3,3,5,0,1,'2022-05-06 22:00:44',NULL,NULL);
/*!40000 ALTER TABLE `cuentas_bancarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `depositos`
--

DROP TABLE IF EXISTS `depositos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `depositos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `id_sucursal` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `depositos`
--

LOCK TABLES `depositos` WRITE;
/*!40000 ALTER TABLE `depositos` DISABLE KEYS */;
INSERT INTO `depositos` VALUES (1,'Deposito-1',1,1,'2022-04-05 15:19:54',NULL,NULL),(2,'Deposito-2',1,1,'2022-04-11 12:20:08',NULL,NULL),(3,'Deposito-1',2,1,'2022-04-15 15:26:29',NULL,NULL),(4,'Deposito-1',6,1,'2022-05-09 15:04:35',NULL,NULL);
/*!40000 ALTER TABLE `depositos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados_cuentas_bancarias`
--

DROP TABLE IF EXISTS `estados_cuentas_bancarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estados_cuentas_bancarias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados_cuentas_bancarias`
--

LOCK TABLES `estados_cuentas_bancarias` WRITE;
/*!40000 ALTER TABLE `estados_cuentas_bancarias` DISABLE KEYS */;
INSERT INTO `estados_cuentas_bancarias` VALUES (1,'Test1',1,'2022-04-22 15:28:17',NULL,NULL),(2,'Test2',1,'2022-04-22 15:28:25',NULL,NULL),(5,'Test3',1,'2022-05-05 15:45:19',NULL,NULL),(6,'test4',1,'2022-05-05 16:23:59',NULL,NULL);
/*!40000 ALTER TABLE `estados_cuentas_bancarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formularios`
--

DROP TABLE IF EXISTS `formularios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `formularios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `id_submenu` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  `id_modulo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `formularios_un` (`nombre`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formularios`
--

LOCK TABLES `formularios` WRITE;
/*!40000 ALTER TABLE `formularios` DISABLE KEYS */;
INSERT INTO `formularios` VALUES (2,'Usuarios','frm/configuraciones/seguridad/usuarios/index.html',6,1,'2022-01-20 21:08:53',NULL,NULL,6),(3,'Roles','frm/configuraciones/seguridad/roles/index.html',6,1,'2022-01-20 21:09:45',NULL,NULL,6),(4,'Formularios','frm/configuraciones/seguridad/formularios/index.html',6,1,'2022-01-20 21:10:57',NULL,NULL,6),(5,'Submenus','frm/configuraciones/seguridad/submenus/index.html',6,1,'2022-01-20 21:11:58',NULL,NULL,6),(6,'Permisos','frm/configuraciones/seguridad/permisos/index.html',6,1,'2022-01-26 19:05:22',NULL,NULL,6),(7,'Cambiar contraseña','	frm/configuraciones/seguridad/cambiar_clave/index.html',6,1,'2022-02-08 21:20:01',NULL,NULL,6),(8,'Copias de seguridad','	frm/configuraciones/seguridad/copias_seguridad/index.html',6,1,'2022-02-08 21:20:43',NULL,NULL,6),(9,'Clientes','frm/ventas/archivos/clientes/index.html',5,1,'2022-02-15 21:18:58',NULL,NULL,3),(10,'Proveedores','frm/compras/archivos/proveedores/index.html',5,1,'2022-02-18 11:59:02',NULL,NULL,2),(11,'Productos','frm/stock/archivos/productos/index.html',5,1,'2022-02-21 14:08:31',NULL,NULL,5),(12,'Inventarios','frm/stock/procesos/inventarios/index.html',4,1,'2022-02-24 20:15:50',NULL,NULL,5),(13,'Compras','frm/compras/procesos/compras/index.html',4,1,'2022-03-03 12:37:44',NULL,NULL,2),(15,'Ventas','frm/ventas/procesos/ventas/index.html',4,1,'2022-03-07 21:51:38',NULL,NULL,3),(19,'Consulta de Inventarios','frm/stock/consultas/inventarios/index.html',3,1,'2022-03-14 16:16:23',NULL,NULL,5),(20,'Consulta de Compras','frm/compras/consultas/compras/index.html',3,1,'2022-03-14 16:17:00',NULL,NULL,2),(21,'Consulta de Ventas','frm/ventas/consultas/ventas/index.html',3,1,'2022-03-14 16:17:29',NULL,NULL,3),(22,'Listado de Clientes','frm/ventas/listados/clientes/index.html',2,1,'2022-03-16 13:33:47',NULL,NULL,3),(23,'Listado de Productos','frm/stock/listados/productos/index.html  ',2,1,'2022-03-16 13:34:17',NULL,NULL,5),(24,'Listado de Proveedores','frm/compras/listados/proveedores/index.html',2,1,'2022-03-16 13:36:10',NULL,NULL,2),(25,'Informes Inventarios por meses','frm/stock/informes/inventarios_meses/index.html',1,1,'2022-03-22 10:50:02',NULL,NULL,5),(26,'Informes Compras por meses','frm/compras/informes/compras_meses/index.html',1,1,'2022-03-22 10:51:33',NULL,NULL,2),(27,'Informes Ventas por meses','frm/ventas/informes/ventas_meses/index.html',1,1,'2022-03-22 10:52:41',NULL,NULL,3),(28,'Sucursales','frm/stock/archivos/sucursales/index.html',5,1,'2022-04-05 11:02:38',NULL,NULL,5),(29,'Depositos','frm/stock/archivos/depositos/index.html',5,1,'2022-04-05 15:11:13',NULL,NULL,5),(30,'Tarjetas','frm/tesoreria/archivos/tarjetas/index.html',5,1,'2022-04-11 16:54:31',NULL,NULL,4),(31,'Bancos','frm/tesoreria/archivos/bancos/index.html',5,1,'2022-04-13 12:49:16',NULL,NULL,4),(32,'Cajas','frm/tesoreria/archivos/cajas/index.html',5,1,'2022-04-15 15:48:32',NULL,NULL,4),(33,'Movimientos Bancarios','frm/tesoreria/archivos/conceptos_movimientos_bancarios/index.html',5,1,'2022-04-19 20:12:36',NULL,NULL,4),(34,'Tipos de cuentas bancarias','frm/tesoreria/archivos/tipos_cuentas_bancarias/index.html',5,1,'2022-04-19 20:13:47',NULL,NULL,4),(35,'Estados de cuentas bancarias','frm/tesoreria/archivos/estados_cuentas_bancarias/index.html',5,1,'2022-04-19 20:14:31',NULL,NULL,4),(36,'Cuentas Bancarias','frm/tesoreria/archivos/cuentas_bancarias/index.html',5,1,'2022-04-20 15:14:01',NULL,NULL,4),(37,'Moneda','frm/tesoreria/archivos/monedas/index.html',5,1,'2022-05-11 16:07:10',NULL,NULL,4),(39,'Configuraciones','frm/configuraciones/seguridad/configuraciones/index.html',6,1,'2022-05-16 16:08:57',NULL,NULL,6),(40,'Apertura y Cierre de Cajas','frm/ventas/procesos/apertura_cierre_cajas/index.html',4,1,'2022-06-11 19:45:03',NULL,NULL,3);
/*!40000 ALTER TABLE `formularios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventarios_cabeceras`
--

DROP TABLE IF EXISTS `inventarios_cabeceras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inventarios_cabeceras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT current_timestamp(),
  `observaciones` varchar(100) NOT NULL,
  `total_costo` int(11) DEFAULT 0,
  `total_precio` int(11) DEFAULT 0,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventarios_cabeceras`
--

LOCK TABLES `inventarios_cabeceras` WRITE;
/*!40000 ALTER TABLE `inventarios_cabeceras` DISABLE KEYS */;
INSERT INTO `inventarios_cabeceras` VALUES (4,'2022-05-09 19:29:52','Inventario test',105000,180000,1,'2022-05-09 15:30:50',NULL,NULL),(3,'2022-03-23 21:40:29','Inventario Inicial',20000,40000,1,'2022-03-23 21:40:50',NULL,NULL);
/*!40000 ALTER TABLE `inventarios_cabeceras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventarios_detalles`
--

DROP TABLE IF EXISTS `inventarios_detalles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inventarios_detalles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_inventario_cabecera` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT 1,
  `costo` int(11) DEFAULT 0,
  `precio` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventarios_detalles`
--

LOCK TABLES `inventarios_detalles` WRITE;
/*!40000 ALTER TABLE `inventarios_detalles` DISABLE KEYS */;
INSERT INTO `inventarios_detalles` VALUES (5,4,10,4,5000,2500,1,'2022-05-09 15:31:02',NULL,NULL),(4,4,13,5,15000,30000,1,'2022-05-09 15:30:50',NULL,NULL),(3,3,3,4,5000,10000,1,'2022-03-23 21:40:50',NULL,NULL),(6,4,3,2,5000,10000,1,'2022-05-09 15:31:16',NULL,NULL);
/*!40000 ALTER TABLE `inventarios_detalles` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER inventarios_cabeceras_total_insert AFTER INSERT ON inventarios_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE inventarios_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo) 
                WHERE id = NEW.id_inventario_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER inventarios_cabeceras_total_update AFTER UPDATE ON inventarios_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE inventarios_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)  
                WHERE id = OLD.id_inventario_cabecera;
	       UPDATE inventarios_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo)
                WHERE id = NEW.id_inventario_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER inventarios_cabeceras_total_delete AFTER DELETE ON inventarios_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE inventarios_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)
                WHERE id = OLD.id_inventario_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary table structure for view `inventarios_meses`
--

DROP TABLE IF EXISTS `inventarios_meses`;
/*!50001 DROP VIEW IF EXISTS `inventarios_meses`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `inventarios_meses` (
  `mes` tinyint NOT NULL,
  `anio` tinyint NOT NULL,
  `total_costo` tinyint NOT NULL,
  `total_precio` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `modulos`
--

DROP TABLE IF EXISTS `modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modulos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulos`
--

LOCK TABLES `modulos` WRITE;
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
INSERT INTO `modulos` VALUES (1,'Pedidos',1,'2022-05-04 21:17:51',NULL,NULL),(2,'Compras',1,'2022-05-04 21:17:51',NULL,NULL),(3,'Ventas',1,'2022-05-04 21:18:39',NULL,NULL),(4,'Tesoreria',1,'2022-05-04 21:18:39',NULL,NULL),(5,'Stock',1,'2022-05-04 21:18:39',NULL,NULL),(6,'Configuraciones',1,'2022-05-04 21:18:39',NULL,NULL);
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monedas`
--

DROP TABLE IF EXISTS `monedas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monedas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `simbolo` varchar(5) DEFAULT NULL,
  `compra` decimal(11,2) DEFAULT 1.00,
  `venta` decimal(11,2) DEFAULT 1.00,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monedas`
--

LOCK TABLES `monedas` WRITE;
/*!40000 ALTER TABLE `monedas` DISABLE KEYS */;
INSERT INTO `monedas` VALUES (1,'Guarani','G',100.00,100.00,'2022-05-13 22:17:13',NULL,NULL),(2,'Dolar','$',6900.00,7000.00,'2022-05-17 16:30:00',NULL,NULL);
/*!40000 ALTER TABLE `monedas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permisos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_rol` int(11) NOT NULL,
  `id_formulario` int(11) NOT NULL,
  `agregar` tinyint(1) DEFAULT NULL,
  `modificar` tinyint(1) DEFAULT NULL,
  `eliminar` tinyint(1) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (1,1,2,1,1,1,1,'2022-01-28 18:24:51',NULL,NULL),(2,1,3,1,1,1,1,'2022-02-08 21:22:48',NULL,NULL),(3,1,4,1,1,1,1,'2022-02-08 21:22:55',NULL,NULL),(4,1,5,1,1,1,1,'2022-02-08 21:22:59',NULL,NULL),(5,1,6,1,1,1,1,'2022-02-08 21:23:03',NULL,NULL),(6,1,7,1,1,1,1,'2022-02-08 21:23:07',NULL,NULL),(7,1,8,1,1,1,1,'2022-02-08 21:23:11',NULL,NULL),(8,1,9,1,1,1,1,'2022-02-15 21:19:22',NULL,NULL),(9,1,10,1,1,1,1,'2022-02-18 11:59:55',NULL,NULL),(10,1,11,1,1,1,1,'2022-02-21 14:09:03',NULL,NULL),(11,1,12,1,1,1,1,'2022-02-24 20:16:38',NULL,NULL),(12,1,13,1,1,1,1,'2022-03-03 12:38:10',NULL,NULL),(13,1,14,0,0,0,1,'2022-03-07 21:49:30',NULL,NULL),(14,1,14,0,0,0,1,'2022-03-07 21:49:32',NULL,NULL),(15,1,15,1,1,1,1,'2022-03-07 21:52:03',NULL,NULL),(16,1,16,0,0,0,1,'2022-03-14 15:30:15',NULL,NULL),(17,1,17,0,0,0,1,'2022-03-14 15:30:16',NULL,NULL),(18,1,18,0,0,0,1,'2022-03-14 15:30:17',NULL,NULL),(19,1,19,1,1,1,1,'2022-03-14 16:18:25',NULL,NULL),(20,1,20,1,1,1,1,'2022-03-14 16:18:26',NULL,NULL),(21,1,21,1,1,1,1,'2022-03-14 16:18:27',NULL,NULL),(22,1,22,1,1,1,1,'2022-03-16 13:36:47',NULL,NULL),(23,1,23,1,1,1,1,'2022-03-16 13:36:49',NULL,NULL),(24,1,24,1,1,1,1,'2022-03-16 13:36:50',NULL,NULL),(25,1,27,1,1,1,1,'2022-03-22 10:53:08',NULL,NULL),(26,1,26,1,1,1,1,'2022-03-22 10:53:09',NULL,NULL),(27,1,25,1,1,1,1,'2022-03-22 10:53:10',NULL,NULL),(28,1,28,1,1,1,1,'2022-04-05 11:02:57',NULL,NULL),(29,1,29,1,1,1,1,'2022-04-05 15:11:27',NULL,NULL),(30,1,30,1,1,1,1,'2022-04-11 16:54:48',NULL,NULL),(31,1,31,1,1,1,1,'2022-04-13 12:49:32',NULL,NULL),(32,1,32,1,1,1,1,'2022-04-15 15:48:58',NULL,NULL),(33,1,33,1,1,1,1,'2022-04-19 20:14:45',NULL,NULL),(34,1,34,1,1,1,1,'2022-04-19 20:14:46',NULL,NULL),(35,1,35,1,1,1,1,'2022-04-19 20:14:47',NULL,NULL),(36,1,36,1,1,1,1,'2022-04-20 15:14:16',NULL,NULL),(37,1,37,1,1,1,1,'2022-05-13 22:16:36',NULL,NULL),(38,1,38,0,0,0,1,'2022-05-16 16:04:44',NULL,NULL),(39,1,38,1,1,1,1,'2022-05-16 16:04:45',NULL,NULL),(40,1,39,1,1,1,1,'2022-05-16 16:09:17',NULL,NULL),(41,1,40,1,1,1,1,'2022-06-11 19:46:09',NULL,NULL);
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `costo` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `iva` int(2) NOT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (2,'Martillo',10000,15000,5,10,1,'2022-02-22 21:27:59',NULL,NULL),(3,'Pincel',5000,10000,10,10,1,'2022-02-22 21:28:20',NULL,NULL),(4,'Media sombra',100000,200000,2,10,1,'2022-02-22 21:29:04',NULL,NULL),(5,'Cable pre-ensamblado',2500,5000,1000,10,1,'2022-03-15 20:58:14',NULL,NULL),(6,'Cable de 3mm',1500,3000,1000,10,1,'2022-03-15 20:58:46',NULL,NULL),(7,'Llave tm de 10',10000,18000,10,10,1,'2022-03-15 20:59:25',NULL,NULL),(8,'LLave tm de 32',15000,30000,10,10,1,'2022-03-15 21:00:06',NULL,NULL),(9,'Guantes',22000,35000,10,10,1,'2022-03-15 21:00:40',NULL,NULL),(10,'Manguera hogar',1200,2500,100,10,1,'2022-03-15 21:01:23',NULL,NULL),(11,'Machete',25000,50000,5,10,1,'2022-03-15 21:02:10',NULL,NULL),(12,'Rastrillo plastico',20000,40000,5,10,1,'2022-03-15 21:02:32',NULL,NULL),(13,'Rastrillo plastico',15000,30000,5,10,1,'2022-05-09 15:01:46',NULL,NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `ruc` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `localizacion` varchar(50) NOT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'AOC','Palma casi independencia','111222','111111','aocgmail.com','[ -25.28120920415188 , -57.594714794714974 ]',1,'2022-02-18 12:12:28',NULL,NULL),(3,'Tigre','Eusebio Ayala','1233211','1231231','T@gmail.com','[ -25.330310903948888  ,  -57.552733779510106 ]',1,'2022-03-07 16:32:16',NULL,NULL),(4,'Sanisart','Transchaco km14','765432','7654435','Sa@gamail.com','[ -25.190029831210598  ,  -57.498049531361254 ]',1,'2022-03-07 16:34:07',NULL,NULL),(5,'Tramontina','Palma','333444','001001333444','tra@gmail.com','[ -25.288162873186213  ,  -57.63343464890521 ]',1,'2022-03-09 20:58:47',NULL,NULL),(6,'M3M','Fernando','444555','001001444555','m3@gmail.com','[ -25.298592591285036  ,  -57.60432596435364 ]',1,'2022-03-09 21:00:48',NULL,NULL),(7,'Lincoln','Transchaco','321321','321321','ln@gmail.com','[ -25.24096949112138  ,  -57.539247307143526 ]',1,'2022-03-15 20:49:20',NULL,NULL),(8,'Electropar','Autopista','234234','234234','Elec@gmail.com','[ -25.275745340949022  ,  -57.54678754041313 ]',1,'2022-03-15 20:51:03',NULL,NULL),(9,'Impaco','Eusebio Ayala','345345','345345','Imp@gmail.com','[ -25.302565587530438  ,  -57.57055249028718 ]',1,'2022-03-15 20:52:27',NULL,NULL),(10,'Alba','Luque','432432','432432','al@gmail.com','[-25.3253331, -57.5255339]',1,'2022-03-15 21:03:25',NULL,NULL),(11,'Acepar-py','Villa Hayes','432432','345345','a@gmail.com','[ -25.093558706182336 , -57.50024854237622 ]',1,'2022-05-05 15:41:01',NULL,NULL),(12,'Test','ttt','333','443322','fd','[ -25.330993597596898  ,  -57.49801733164374 ]',1,'2022-05-05 16:22:11',NULL,NULL);
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador',1,'2021-10-14 22:06:24',NULL,NULL),(2,'Caja',1,'2021-10-14 22:06:24',NULL,NULL),(3,'Tesoreria',1,'2021-10-14 22:06:24',NULL,NULL),(4,'Test',1,'2021-10-21 21:30:31',NULL,NULL),(9,NULL,1,'2022-01-07 16:54:08',NULL,NULL),(10,NULL,1,'2022-01-07 20:54:43',NULL,NULL),(11,NULL,1,'2022-01-07 20:56:06',NULL,NULL),(12,NULL,1,'2022-01-07 20:56:12',NULL,NULL),(13,NULL,1,'2022-01-07 20:59:09',NULL,NULL),(14,NULL,1,'2022-01-07 20:59:23',NULL,NULL),(15,NULL,1,'2022-01-07 20:59:26',NULL,NULL),(16,'Test-2',1,'2022-05-09 15:05:55',NULL,NULL),(17,'test4',1,'2022-05-09 21:44:09',NULL,NULL),(19,'test5',1,'2022-05-09 21:47:46',NULL,NULL),(20,'test6',1,'2022-05-09 21:49:55',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submenus`
--

DROP TABLE IF EXISTS `submenus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `submenus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submenus`
--

LOCK TABLES `submenus` WRITE;
/*!40000 ALTER TABLE `submenus` DISABLE KEYS */;
INSERT INTO `submenus` VALUES (1,'Informes',1,'2022-01-12 12:06:35',NULL,NULL),(2,'Listados',1,'2022-01-12 12:06:43',NULL,NULL),(3,'Consultas',1,'2022-01-12 12:06:54',NULL,NULL),(4,'Procesos',1,'2022-01-12 12:07:00',NULL,NULL),(5,'Archivos',1,'2022-01-12 12:07:07',NULL,NULL),(6,'Seguridad',1,'2022-01-12 12:07:46',NULL,NULL),(7,'Auditoria',1,'2022-05-09 15:07:00',NULL,NULL);
/*!40000 ALTER TABLE `submenus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sucursales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursales`
--

LOCK TABLES `sucursales` WRITE;
/*!40000 ALTER TABLE `sucursales` DISABLE KEYS */;
INSERT INTO `sucursales` VALUES (1,'M. R. Alonso-La Rural','Brasil casi Guatemala','123123','ferre@gmail.com',1,'2022-04-05 11:04:04',NULL,NULL),(2,'Luque-Centro','Las pinos','321321','ferreLuque@gmail.com',1,'2022-04-05 14:20:31',NULL,NULL),(3,'M. R. Alonso-Shoping Mariano','Transchaco km15','333444','mraShop@gmail.com',1,'2022-04-15 14:57:45',NULL,NULL),(4,'Limpio-Centro','Ruta-3','555444','lm@gmail.com',1,'2022-04-15 15:27:40',NULL,NULL),(5,'Fernando de la Mora','Eusebio Ayala','22244r','ea@gmail.com',1,'2022-04-15 15:28:29',NULL,NULL),(6,'Asunción-Metropolitano','Brasil','506506','Asn@gmail.com',1,'2022-05-09 15:03:28',NULL,NULL);
/*!40000 ALTER TABLE `sucursales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tarjetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
INSERT INTO `tarjetas` VALUES (7,'GNB VISA',1,'2022-05-05 15:41:44',NULL,NULL),(6,'BASA VISA',1,'2022-04-13 11:59:04',NULL,NULL),(5,'ITAU VISA',1,'2022-04-13 11:58:46',NULL,NULL),(4,'SUDAMERIS VISA',1,'2022-04-13 11:55:38',NULL,NULL);
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos_cuentas_bancarias`
--

DROP TABLE IF EXISTS `tipos_cuentas_bancarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipos_cuentas_bancarias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_cuentas_bancarias`
--

LOCK TABLES `tipos_cuentas_bancarias` WRITE;
/*!40000 ALTER TABLE `tipos_cuentas_bancarias` DISABLE KEYS */;
INSERT INTO `tipos_cuentas_bancarias` VALUES (1,'Montos Mayores',1,'2022-04-20 21:32:49',NULL,NULL),(2,'Montos Menores',1,'2022-04-20 21:33:00',NULL,NULL),(3,'Cuentas Credito',1,'2022-04-22 16:19:28',NULL,NULL),(6,'Caja ahorro',1,'2022-05-05 16:23:25',NULL,NULL);
/*!40000 ALTER TABLE `tipos_cuentas_bancarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
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
  `id_caja` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'administrador','admin','admin@hotmail.com','1',1,1,'2021-09-23 21:43:35',NULL,NULL,1),(2,'Ana','anita','Ana@hotmail.com','4',2,1,'2021-09-23 21:44:19',NULL,NULL,4),(7,'Jose','jose',NULL,'2',1,1,'2022-06-04 21:17:16',NULL,NULL,3);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_cabeceras`
--

DROP TABLE IF EXISTS `ventas_cabeceras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_cabeceras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT current_timestamp(),
  `id_cliente` int(11) NOT NULL,
  `condicion` int(1) DEFAULT 1,
  `timbrado` varchar(10) NOT NULL,
  `fiscal` varchar(20) NOT NULL,
  `total_costo` int(11) DEFAULT 0,
  `total_precio` int(11) DEFAULT 0,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  `id_apertura_cierre_caja` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_cabeceras`
--

LOCK TABLES `ventas_cabeceras` WRITE;
/*!40000 ALTER TABLE `ventas_cabeceras` DISABLE KEYS */;
INSERT INTO `ventas_cabeceras` VALUES (1,'2022-03-11 00:25:11',4,1,'123456789','00100100111',0,0,1,'2022-03-10 21:25:42',NULL,NULL,2),(2,'2022-03-24 12:47:27',3,1,'123456789','00100100124',NULL,45000,1,'2022-03-24 12:48:26',NULL,NULL,2),(3,'2022-03-24 12:50:45',4,1,'123456789','00100100125',NULL,100000,1,'2022-03-24 12:51:14',NULL,NULL,2),(4,'2022-03-24 12:55:06',3,1,'123456789','00100100126',NULL,30000,1,'2022-03-24 12:55:45',NULL,NULL,2),(5,'2022-03-24 12:59:03',4,1,'123456789','001001001236',NULL,42000,1,'2022-03-24 12:59:31',NULL,NULL,2),(6,'2022-07-13 20:36:38',4,1,'11111111','001-001-0000001',45000,90000,1,'2022-07-13 20:38:37',NULL,NULL,3);
/*!40000 ALTER TABLE `ventas_cabeceras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventas_detalles`
--

DROP TABLE IF EXISTS `ventas_detalles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ventas_detalles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_venta_cabecera` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT 1,
  `costo` int(11) DEFAULT 0,
  `precio` int(11) DEFAULT 1,
  `usuario_id` int(11) DEFAULT 1,
  `date_add` datetime DEFAULT current_timestamp(),
  `date_mod` datetime DEFAULT NULL,
  `date_del` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventas_detalles`
--

LOCK TABLES `ventas_detalles` WRITE;
/*!40000 ALTER TABLE `ventas_detalles` DISABLE KEYS */;
INSERT INTO `ventas_detalles` VALUES (1,1,3,1,NULL,10000,1,'2022-03-10 21:25:42',NULL,NULL),(2,1,2,1,NULL,15000,1,'2022-03-10 21:27:55',NULL,NULL),(3,2,10,4,NULL,2500,1,'2022-03-24 12:48:26',NULL,NULL),(4,2,9,1,NULL,35000,1,'2022-03-24 12:48:40',NULL,NULL),(5,3,11,1,NULL,50000,1,'2022-03-24 12:51:14',NULL,NULL),(6,3,9,1,NULL,35000,1,'2022-03-24 12:51:22',NULL,NULL),(7,3,2,1,NULL,15000,1,'2022-03-24 12:51:34',NULL,NULL),(8,4,8,1,NULL,30000,1,'2022-03-24 12:55:45',NULL,NULL),(9,5,8,1,NULL,30000,1,'2022-03-24 12:59:31',NULL,NULL),(10,5,6,4,NULL,3000,1,'2022-03-24 12:59:48',NULL,NULL),(11,6,8,3,15000,30000,1,'2022-07-13 20:38:37',NULL,NULL);
/*!40000 ALTER TABLE `ventas_detalles` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER ventas_cabeceras_total_insert AFTER INSERT ON ventas_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE ventas_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo) 
                WHERE id = NEW.id_venta_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER ventas_cabeceras_total_update AFTER UPDATE ON ventas_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE ventas_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)  
                WHERE id = OLD.id_venta_cabecera;
	       UPDATE ventas_cabeceras SET total_precio = total_precio + (NEW.cantidad * NEW.precio),
                total_costo = total_costo + (NEW.cantidad * NEW.costo)
                WHERE id = NEW.id_venta_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER ventas_cabeceras_total_delete AFTER DELETE ON ventas_detalles
       FOR EACH ROW
       BEGIN
	       UPDATE ventas_cabeceras SET total_precio = total_precio - (OLD.cantidad * OLD.precio),
                total_costo = total_costo - (OLD.cantidad * OLD.costo)
                WHERE id = OLD.id_venta_cabecera;
       END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary table structure for view `ventas_meses`
--

DROP TABLE IF EXISTS `ventas_meses`;
/*!50001 DROP VIEW IF EXISTS `ventas_meses`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `ventas_meses` (
  `mes` tinyint NOT NULL,
  `anio` tinyint NOT NULL,
  `total_costo` tinyint NOT NULL,
  `total_precio` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `compras_meses`
--

/*!50001 DROP TABLE IF EXISTS `compras_meses`*/;
/*!50001 DROP VIEW IF EXISTS `compras_meses`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `compras_meses` AS select month(`vc`.`fecha`) AS `mes`,year(`vc`.`fecha`) AS `anio`,sum(`vc`.`total_precio`) AS `total_precio` from `compras_cabeceras` `vc` group by month(`vc`.`fecha`),year(`vc`.`fecha`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `inventarios_meses`
--

/*!50001 DROP TABLE IF EXISTS `inventarios_meses`*/;
/*!50001 DROP VIEW IF EXISTS `inventarios_meses`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `inventarios_meses` AS select month(`vc`.`fecha`) AS `mes`,year(`vc`.`fecha`) AS `anio`,sum(`vc`.`total_costo`) AS `total_costo`,sum(`vc`.`total_precio`) AS `total_precio` from `inventarios_cabeceras` `vc` group by month(`vc`.`fecha`),year(`vc`.`fecha`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `ventas_meses`
--

/*!50001 DROP TABLE IF EXISTS `ventas_meses`*/;
/*!50001 DROP VIEW IF EXISTS `ventas_meses`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ventas_meses` AS select month(`vc`.`fecha`) AS `mes`,year(`vc`.`fecha`) AS `anio`,sum(`vc`.`total_costo`) AS `total_costo`,sum(`vc`.`total_precio`) AS `total_precio` from `ventas_cabeceras` `vc` group by month(`vc`.`fecha`),year(`vc`.`fecha`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-13 20:43:17
