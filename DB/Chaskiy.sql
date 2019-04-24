--antes que nada
SET GLOBAL log_bin_trust_function_creators = 1;

CREATE DATABASE  IF NOT EXISTS `chaskiy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `chaskiy`;
-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 192.168.99.100    Database: chaskiy
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adicional`
--

DROP TABLE IF EXISTS `adicional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `adicional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idHospedaje` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  `tarifa` decimal(8,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`,`idHospedaje`),
  KEY `fk_idHospedaje_idx` (`idHospedaje`),
  CONSTRAINT `fk_idHospedaje` FOREIGN KEY (`idHospedaje`) REFERENCES `hospedaje` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adicional`
--

LOCK TABLES `adicional` WRITE;
/*!40000 ALTER TABLE `adicional` DISABLE KEYS */;
INSERT INTO `adicional` VALUES (4,2,'Cama adicional(prueba)','A','2017-07-16 18:26:54','2017-07-24 04:50:56',0,0,10.00),(5,2,'Paseo Loberia0','I','2017-11-06 19:32:10','2017-11-06 19:32:25',0,0,75.00),(6,2,'Prueba2','A','2018-01-08 17:02:26','2018-01-08 17:02:26',0,0,20.00),(7,2,'Coctail bienvenida','A','2018-01-08 17:02:39','2018-01-08 17:02:39',0,0,20.00),(8,2,'cuna bebe','A','2018-01-08 17:06:35','2018-01-08 17:06:35',0,0,10.00),(9,2,'lool','A','2018-01-08 17:06:49','2018-01-08 17:06:49',0,0,20.00),(10,2,'prueba45','A','2018-01-08 17:06:57','2018-01-08 17:06:57',0,0,20.00),(11,17,'Prueba adicional 4','A','2018-02-09 22:25:35','2018-02-09 22:28:46',0,0,20.75),(12,17,'Prueba Adicional 2','A','2018-02-09 22:26:39','2018-02-09 22:26:39',0,0,30.00),(13,17,'Prueba Adcional 3','I','2018-02-09 22:28:13','2018-02-09 22:28:53',0,0,304.00),(14,2,'Prueba loooles','I','2018-12-05 04:24:06','2018-12-05 04:24:52',2,2,12.50),(15,2,'Lol3','I','2018-12-05 04:25:37','2018-12-05 04:25:53',2,2,24.00);
/*!40000 ALTER TABLE `adicional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adicionalreserva`
--

DROP TABLE IF EXISTS `adicionalreserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `adicionalreserva` (
  `idReserva` int(11) NOT NULL,
  `idAdicional` int(11) NOT NULL,
  `tarifa` decimal(8,2) NOT NULL DEFAULT '0.00',
  `cantidad` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idReserva`,`idAdicional`),
  KEY `fk_reserva_has_adicional_adicional1_idx` (`idAdicional`),
  KEY `fk_reserva_has_adicional_reserva1_idx` (`idReserva`),
  CONSTRAINT `fk_reserva_has_adicional_adicional1` FOREIGN KEY (`idAdicional`) REFERENCES `adicional` (`id`),
  CONSTRAINT `fk_reserva_has_adicional_reserva1` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=2048 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adicionalreserva`
--

LOCK TABLES `adicionalreserva` WRITE;
/*!40000 ALTER TABLE `adicionalreserva` DISABLE KEYS */;
INSERT INTO `adicionalreserva` VALUES (21,4,0.00,1),(23,4,10.00,3),(89,4,10.00,1),(90,4,10.00,1),(106,4,10.00,1),(107,4,10.00,1),(108,4,10.00,1),(112,4,10.00,1),(117,4,10.00,2),(137,6,20.00,1),(137,7,20.00,1),(138,6,20.00,1),(139,6,20.00,1),(140,6,20.00,1),(140,8,10.00,1),(148,8,10.00,1),(154,8,15.00,2),(154,9,25.00,1),(163,11,20.75,2),(164,11,20.75,1),(165,12,30.00,1);
/*!40000 ALTER TABLE `adicionalreserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aerolinea`
--

DROP TABLE IF EXISTS `aerolinea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `aerolinea` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPais` int(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  `prioridad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_aerolinea_pais1_idx` (`idPais`),
  CONSTRAINT `fk_aerolinea_pais1` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=8192 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aerolinea`
--

LOCK TABLES `aerolinea` WRITE;
/*!40000 ALTER TABLE `aerolinea` DISABLE KEYS */;
INSERT INTO `aerolinea` VALUES (4,NULL,'TAME','A','2017-07-16 18:26:55','2017-07-16 18:26:55',0,0,3),(5,NULL,'LATAM','A','2017-07-16 18:26:55','2017-07-16 18:26:55',0,0,1),(6,NULL,'AVIANCA','A','2017-07-16 18:26:55','2017-07-16 18:26:55',0,0,2),(7,NULL,'Por Confirmar','A',NULL,NULL,NULL,NULL,0),(8,NULL,'LANCHA (Sta. Cruz)','A',NULL,NULL,NULL,NULL,4);
/*!40000 ALTER TABLE `aerolinea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cancela`
--

DROP TABLE IF EXISTS `cancela`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cancela` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idReserva` int(11) DEFAULT NULL,
  `motivo` varchar(400) NOT NULL,
  `usuario` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_cancela_idReserva` (`idReserva`),
  CONSTRAINT `FK_cancela_idReserva` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cancela`
--

LOCK TABLES `cancela` WRITE;
/*!40000 ALTER TABLE `cancela` DISABLE KEYS */;
INSERT INTO `cancela` VALUES (1,23,'por motivos personales se pospouso el viaje',0,'2017-07-23 01:09:59'),(2,24,'Se quedaron el vuelo',2,'2017-07-24 04:30:11'),(3,25,'xqsii',2,'2017-07-24 23:59:19'),(23,81,'',2,'2017-09-30 20:49:00'),(24,80,'',2,'2017-09-30 20:49:09'),(25,82,'',2,'2017-09-30 20:49:31'),(26,83,'',2,'2017-09-30 22:15:52'),(27,84,'prueba',3,'2017-10-01 00:45:54'),(28,79,'prueba',3,'2017-10-01 00:46:11'),(29,87,'mmm',2,'2017-10-02 06:29:28'),(30,88,'dxasda',2,'2017-10-02 06:35:34'),(31,86,'wdasda',2,'2017-10-02 06:51:03'),(32,90,'ssss',2,'2017-10-02 22:24:23'),(33,89,'dasdadas',2,'2017-10-02 22:34:44'),(34,91,'adadada',2,'2017-10-02 23:47:26'),(35,93,'Exedido en tiempo',4,'2017-10-04 06:02:32'),(36,107,'Pruebas de sistema',2,'2017-10-12 23:18:23'),(37,108,'Pruebas de sistema',2,'2017-10-12 23:27:57'),(38,112,'Pruebas',2,'2017-10-14 22:37:08'),(39,113,'cancelaaa',2,'2017-10-14 22:41:20'),(40,109,'pruebas de cancelacion',2,'2017-10-16 19:49:22'),(41,116,'cancelacionnn',2,'2017-10-16 19:49:36'),(42,116,'cancelacionnn',2,'2017-10-16 19:49:36'),(43,117,'cancelacion',2,'2017-10-16 19:49:47'),(44,114,'cancelacion',2,'2017-10-16 19:49:59'),(45,115,'cancelacion',2,'2017-10-16 19:50:09'),(46,120,'pruebaa\n',2,'2017-10-16 20:06:27'),(47,124,'prueba',3,'2017-10-18 01:46:47'),(48,123,'prueba',3,'2017-10-18 01:47:05'),(49,127,'prueba\n',3,'2018-01-05 17:02:05'),(50,127,'prueba\n',3,'2018-01-05 17:02:07'),(51,127,'prueba\n',3,'2018-01-05 17:02:11'),(52,127,'prueba\n',3,'2018-01-05 17:02:14'),(53,127,'prueba\n',3,'2018-01-05 17:02:16'),(54,131,'solo se ocupa una sola habitacion',3,'2018-01-07 02:24:43'),(55,131,'solo se ocupa una sola habitacion',3,'2018-01-07 02:24:43'),(56,131,'solo se ocupa una sola habitacion',3,'2018-01-07 02:24:43'),(57,131,'solo se ocupa una sola habitacion',3,'2018-01-07 02:24:47'),(58,135,'pruebas',2,'2018-01-07 19:48:55'),(59,137,'Pruebas',2,'2018-01-08 20:05:44'),(60,136,'Pruebas',2,'2018-01-08 20:06:04'),(61,138,'pruebas',2,'2018-01-08 20:06:40'),(62,139,'Pruebas',2,'2018-01-08 20:09:18'),(63,142,'Pruebas',2,'2018-01-08 22:54:53'),(64,145,'no llego ',3,'2018-01-12 21:28:18'),(65,146,'prueba',3,'2018-01-18 22:57:54'),(66,148,'prueba',3,'2018-01-18 22:58:07'),(67,147,'prueba',3,'2018-01-18 22:58:27'),(68,150,'NO SHOW',3,'2018-01-19 01:48:01'),(69,144,'prueba',3,'2018-01-23 22:38:12'),(70,155,'se va a ingresar con datos del cliente',3,'2018-02-09 13:28:19'),(71,156,'se va aingresar datos de cliente',3,'2018-02-09 13:28:53'),(72,158,'canceladao',3,'2018-02-09 13:29:12'),(73,163,'Sin motivo alguno',0,'2018-02-11 17:21:56'),(74,167,'ok',3,'2018-02-14 16:28:29'),(75,171,'sn',3,'2018-02-17 16:29:36'),(76,173,'ok',3,'2018-02-19 14:40:45'),(77,174,'sn\n',3,'2018-02-20 00:09:03'),(78,177,'sn',3,'2018-02-21 20:25:12'),(79,168,'mal tarifa',3,'2018-02-21 22:28:41'),(80,181,'no esta habitacion',3,'2018-02-24 22:51:57'),(81,180,'datos',3,'2018-02-25 13:00:14'),(82,179,'Buenos días.\nMuchas gracias por su confirmación a la reserva.\n\nLamento comunicarle que por inconvenientes en la programación del viaje no\npodremos acudir a su hotel en esas fechas.\nRuego, por favor, tengan a bien anulat la reserva.\n\nMuchas gracias.\nJuanjo Ortiz',3,'2018-02-27 12:52:41'),(83,203,'cambio de planes ',3,'2018-03-06 20:09:41'),(84,170,'cancelacion de boooking',3,'2018-03-09 14:50:52'),(85,207,'cancelacion de booking',3,'2018-03-09 14:51:14'),(86,216,'sn',3,'2018-03-13 14:57:44'),(87,218,'se cambia a otra habitacion',3,'2018-03-13 17:11:37'),(88,220,'SN',3,'2018-03-14 18:25:11'),(89,209,'SN',3,'2018-03-14 18:25:30'),(90,209,'SN',3,'2018-03-14 18:25:31'),(91,187,'SN',3,'2018-03-14 18:27:09'),(92,222,'cancelo la reserva ',3,'2018-03-19 17:07:59'),(93,227,'cancelación',3,'2018-03-19 23:58:35'),(94,239,'no se presento ',3,'2018-03-29 14:39:48'),(95,240,'CANCELA',3,'2018-03-31 21:44:54'),(96,257,'CANCELACION DE RESERVA ',3,'2018-04-02 00:28:12'),(97,226,'cancelacion de booking',3,'2018-04-04 14:09:14'),(98,264,'cancelación.',3,'2018-04-09 22:55:51'),(99,265,'cancela',3,'2018-04-09 22:59:14'),(100,215,'CANCELO LA SRA.',3,'2018-04-11 14:25:24'),(101,234,'no show',3,'2018-04-24 01:32:15'),(102,235,'no show',3,'2018-04-24 01:36:11'),(103,261,'CANCELACION BOOKING',3,'2018-04-27 02:57:01'),(104,271,'CAN BOOKING\n',3,'2018-04-27 02:59:48'),(105,276,'SN',3,'2018-04-27 03:00:38'),(106,228,'SN',3,'2018-04-27 03:01:39'),(107,286,'cancelacion ',3,'2018-05-20 17:41:44'),(108,262,'cancela en bbooking ',3,'2018-05-25 21:56:22'),(109,262,'cancela en bbooking ',3,'2018-05-25 21:56:39'),(110,297,'MAL RESERVA',3,'2018-06-07 03:07:27'),(111,297,'MAL RESERVA',3,'2018-06-07 03:08:05'),(112,298,'pidieron modiicacion de reserva',3,'2018-06-09 13:10:44'),(113,302,'sn',3,'2018-06-12 10:17:43'),(114,278,'modificacion',3,'2018-06-15 00:34:38'),(115,313,'pruebas',2,'2018-06-18 02:36:12'),(116,314,'pruebas',2,'2018-06-18 02:45:08'),(117,303,'sn\n',3,'2018-06-25 22:14:09'),(118,333,'sn',3,'2018-07-02 23:39:22'),(119,339,'SN',3,'2018-07-07 13:16:46'),(120,337,'SN',3,'2018-07-14 23:47:14'),(121,346,'MODIFICAR EL MAIL ',3,'2018-07-16 00:52:38'),(122,326,'sn',3,'2018-07-19 15:20:33');
/*!40000 ALTER TABLE `cancela` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkin`
--

DROP TABLE IF EXISTS `checkin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `checkin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idReserva` int(11) DEFAULT NULL,
  `detalles` varchar(400) NOT NULL,
  `usuario` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_checkin_idReserva` (`idReserva`),
  CONSTRAINT `FK_checkin_idReserva` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=1820 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkin`
--

LOCK TABLES `checkin` WRITE;
/*!40000 ALTER TABLE `checkin` DISABLE KEYS */;
INSERT INTO `checkin` VALUES (11,63,'Sin novedades',2,'2017-09-26 21:15:03'),(12,64,'desde home',2,'2017-09-26 22:31:40'),(13,66,'prueba saldoo',2,'2017-09-26 22:34:45'),(14,66,'prueba saldoo',2,'2017-09-26 22:34:45'),(15,67,'casadadasd',2,'2017-09-26 22:38:40'),(16,67,'casadadasd',2,'2017-09-26 22:38:40'),(17,67,'casadadasd',2,'2017-09-26 22:38:40'),(18,67,'casadadasd',2,'2017-09-26 22:38:40'),(19,68,'sasdada',2,'2017-09-26 22:40:40'),(20,68,'sasdada',2,'2017-09-26 22:40:40'),(21,110,'ok',3,'2017-10-14 04:10:32'),(22,110,'ok',3,'2017-10-14 04:10:32'),(23,111,'OK',3,'2017-10-14 04:14:51'),(24,111,'OK',3,'2017-10-14 04:14:52'),(25,122,'cleinte',3,'2017-10-17 01:10:00'),(26,125,'no observaciones',2,'2017-11-06 06:21:04'),(27,125,'no observaciones',2,'2017-11-06 06:21:04'),(28,128,'Se alojo sin novedad',2,'2018-01-03 16:16:20'),(29,129,'No se ofreció una habitación matrimonial como solicitaron desde un principio. Se ofreció hab Isabela y una suite Floreana. Dos pa estan en Hab Isabela y la otra en hab Floreana.\n\nPasajeros Ecuatorianos',3,'2018-01-05 18:44:37'),(30,132,'Ofrecer desayuno',3,'2018-01-07 02:30:51'),(31,133,'Pasajeros llegaron sin novedad',3,'2018-01-07 02:41:27'),(32,130,'Pasajeros llegaron sin novedad',3,'2018-01-07 02:49:33'),(33,149,'SIN NOVEDAD',3,'2018-01-18 23:05:24'),(34,149,'SIN NOVEDAD',3,'2018-01-18 23:05:24'),(35,151,'POR COBRAR',3,'2018-01-30 22:14:29'),(36,151,'POR COBRAR',3,'2018-01-30 22:14:30'),(37,152,'ok',3,'2018-02-01 16:34:13'),(38,152,'ok',3,'2018-02-01 16:34:13'),(39,152,'ok',3,'2018-02-01 16:34:13'),(40,164,'cheked in',0,'2018-02-11 17:22:48'),(41,166,'Sin novedad',19,'2018-02-14 00:43:43'),(42,166,'undefined',19,'2018-02-14 00:43:43'),(43,182,'SN',3,'2018-02-26 01:05:55'),(44,182,'undefined',3,'2018-02-26 01:05:56'),(45,184,'S/N',3,'2018-02-26 01:06:29'),(46,184,'undefined',3,'2018-02-26 01:06:30'),(47,185,'OK',3,'2018-02-26 02:04:33'),(48,197,'undefined',3,'2018-03-03 00:08:07'),(49,197,'ssin novedad',3,'2018-03-03 00:08:08'),(50,196,'todos fueron hombres ',3,'2018-03-03 00:08:48'),(51,196,'undefined',3,'2018-03-03 00:08:49'),(52,195,'undefined',3,'2018-03-03 00:09:15'),(53,195,'todos hombres, aumentar camas ',3,'2018-03-03 00:09:15'),(54,157,'sin novedad ',3,'2018-03-03 00:09:34'),(55,157,'undefined',3,'2018-03-03 00:09:35'),(56,198,'todo perfecto',3,'2018-03-05 00:24:01'),(57,213,'TODO SIN NOVEDAD',3,'2018-03-10 23:52:16'),(58,188,'undefined',3,'2018-03-14 04:58:00'),(59,211,'falta pagar ',3,'2018-03-16 01:53:39'),(60,208,'undefined',3,'2018-03-16 20:49:54'),(61,208,'pasajeros de padrino. ',3,'2018-03-16 20:49:56'),(62,206,'undefined',3,'2018-03-16 22:57:31'),(63,206,'falta pagar/ se realizará por medio de deposito a al cuenta ',3,'2018-03-16 22:59:18'),(64,204,'falta pagar ',3,'2018-03-16 23:01:17'),(65,204,'undefined',3,'2018-03-16 23:02:06'),(66,223,'undefined',3,'2018-03-17 18:59:53'),(67,223,'sin novedad,',3,'2018-03-17 18:59:54'),(68,229,'undefined',3,'2018-03-19 00:13:49'),(69,229,'mochileras ',3,'2018-03-19 00:13:49'),(70,230,'undefined',3,'2018-03-19 00:15:49'),(71,230,'sin novedad ',3,'2018-03-19 00:15:50'),(72,200,'sn',3,'2018-03-20 18:01:23'),(73,201,'sn',3,'2018-03-20 18:01:41'),(74,231,'sn',3,'2018-03-20 18:02:09'),(75,202,'sn',3,'2018-03-20 18:04:58'),(76,233,'sn\n',3,'2018-03-24 22:27:58'),(77,241,'sn',3,'2018-03-26 16:30:31'),(78,244,'undefined',3,'2018-03-27 22:36:26'),(79,244,'sn',3,'2018-03-27 22:36:27'),(80,253,'SN',3,'2018-03-31 22:12:47'),(81,242,'SN \n',3,'2018-04-01 17:31:44'),(82,254,'SN',3,'2018-04-04 20:41:01'),(83,254,'undefined',3,'2018-04-04 20:41:01'),(84,255,'undefined',3,'2018-04-04 20:46:31'),(85,255,'SN',3,'2018-04-04 20:46:31'),(86,189,'undefined',3,'2018-04-07 17:57:19'),(87,189,'SN',3,'2018-04-07 17:57:19'),(88,251,'OK',3,'2018-04-10 22:31:25'),(89,217,'SN',3,'2018-04-15 18:33:15'),(90,238,'sn',3,'2018-04-18 00:03:29'),(91,219,'undefined',3,'2018-04-22 01:15:52'),(92,219,'undefined',3,'2018-04-22 01:15:53'),(93,219,'OK',3,'2018-04-22 01:15:54'),(94,193,'SN',3,'2018-04-27 19:17:07'),(95,193,'SN',3,'2018-04-27 19:17:11'),(96,194,'SN',3,'2018-04-27 19:18:01'),(97,268,'SN',3,'2018-04-27 19:22:09'),(98,210,'undefined',3,'2018-04-30 00:17:12'),(99,210,'SN ',3,'2018-04-30 00:17:12'),(100,186,'sn',3,'2018-04-30 20:13:27'),(101,232,'sn',3,'2018-05-01 22:51:32'),(102,281,'Sin novedad',2,'2018-05-04 23:38:49'),(103,275,'sn',3,'2018-05-04 23:42:29'),(104,191,'sn',3,'2018-05-04 23:42:50'),(105,252,'undefined',3,'2018-05-08 23:50:46'),(106,252,'SIN NOVEDAD',3,'2018-05-08 23:50:46'),(107,274,'undefined',3,'2018-05-10 12:25:01'),(108,274,'ok',3,'2018-05-10 12:25:01'),(109,256,'sn ',3,'2018-05-11 00:03:11'),(110,288,'SN',3,'2018-05-18 21:00:08'),(111,287,'SN',3,'2018-05-18 21:00:47'),(112,289,'sn',3,'2018-05-19 19:43:45'),(113,199,'les gusto mucho la habitación ',3,'2018-05-25 15:33:26'),(114,199,'les gusto mucho la habitación ',3,'2018-05-25 15:33:29'),(115,285,'sn',3,'2018-05-28 20:55:31'),(116,285,'undefined',3,'2018-05-28 20:55:31'),(117,291,'sn',3,'2018-06-03 17:09:58'),(118,291,'sn',3,'2018-06-03 17:10:08'),(119,292,'sn',3,'2018-06-03 19:41:07'),(120,290,'SN',3,'2018-06-04 15:51:51'),(121,296,'sn',3,'2018-06-06 14:58:21'),(122,296,'undefined',3,'2018-06-06 14:58:21'),(123,294,'undefined',3,'2018-06-06 17:40:18'),(124,294,'sn',3,'2018-06-06 17:40:19'),(125,192,'SIN NOVEDAD',3,'2018-06-07 22:52:20'),(126,192,'SIN NOVEDAD',3,'2018-06-07 22:52:20'),(127,192,'SIN NOVEDAD',3,'2018-06-07 22:52:22'),(128,272,'SN\n',3,'2018-06-08 17:47:41'),(129,301,'undefined',3,'2018-06-11 21:25:44'),(130,301,'SN',3,'2018-06-11 21:25:44'),(131,299,'sin novedad\n',3,'2018-06-13 22:37:08'),(132,293,'sn',3,'2018-06-16 17:32:27'),(133,306,'SN',3,'2018-06-18 20:56:56'),(134,306,'undefined',3,'2018-06-18 20:56:56'),(135,306,'undefined',3,'2018-06-18 20:57:01'),(136,307,'undefined',3,'2018-06-19 01:56:59'),(137,307,'sn\n',3,'2018-06-19 01:56:59'),(138,323,'undefined',3,'2018-06-27 22:23:13'),(139,323,'sn',3,'2018-06-27 22:23:13'),(140,328,'undefined',3,'2018-06-28 22:41:54'),(141,328,'sn',3,'2018-06-28 22:41:54'),(142,300,'undefined',3,'2018-06-29 23:31:28'),(143,300,'sn',3,'2018-06-29 23:31:28'),(144,329,'SN',3,'2018-06-30 23:19:49'),(145,327,'sn',3,'2018-07-01 22:32:28'),(146,295,'sn',3,'2018-07-02 20:58:49'),(147,258,'SN',3,'2018-07-04 20:08:04'),(148,259,'undefined',2,'2018-07-04 23:35:47'),(149,259,'No abrio la pag, desde Scy',2,'2018-07-04 23:35:47'),(150,340,'undefined',3,'2018-07-07 22:17:59'),(151,340,'SN',3,'2018-07-07 22:17:59'),(152,330,'SN',3,'2018-07-10 18:03:58'),(153,331,'SN',3,'2018-07-12 22:49:14'),(154,305,'SN',3,'2018-07-14 23:45:16'),(155,304,'SN',3,'2018-07-14 23:45:45'),(156,325,'SN',3,'2018-07-19 12:12:03'),(157,349,'undefined',3,'2018-07-26 23:22:51'),(158,349,'sn',3,'2018-07-26 23:22:53'),(159,349,'undefined',3,'2018-07-26 23:22:53'),(160,350,'undefined',3,'2018-07-31 23:44:33'),(161,350,'sn',3,'2018-07-31 23:44:33'),(162,351,'undefined',3,'2018-07-31 23:45:11'),(163,351,'sn',3,'2018-07-31 23:45:11'),(164,362,'sn',3,'2018-08-07 22:30:07'),(165,361,'sn',3,'2018-08-07 22:30:35'),(166,212,'SN',3,'2018-08-10 16:48:15'),(167,356,'SN',3,'2018-08-10 20:30:36'),(168,352,'SN',3,'2018-08-10 20:30:56'),(169,357,'SN',3,'2018-08-10 20:31:34'),(170,365,'sn',3,'2018-08-22 14:49:39'),(171,369,'sn',3,'2018-08-25 01:35:03'),(172,347,'sn',3,'2018-08-29 01:45:57'),(173,370,'sn',3,'2018-08-29 01:46:08'),(174,381,'sn',3,'2018-09-09 15:24:46'),(175,390,'sn',3,'2018-09-09 15:25:02'),(176,382,'sn',3,'2018-09-09 15:26:01'),(177,383,'sn',3,'2018-09-12 21:14:37'),(178,368,'sn',3,'2018-09-12 21:15:49'),(179,377,'SN',3,'2018-09-14 23:06:40'),(180,377,'SN',3,'2018-09-14 23:06:44'),(181,377,'SN',3,'2018-09-14 23:06:44'),(182,377,'SN',3,'2018-09-14 23:06:45'),(183,332,'sn',3,'2018-09-19 13:54:56'),(184,364,'sn',3,'2018-09-19 13:55:11'),(185,391,'sn',3,'2018-09-23 17:39:31'),(186,404,'sn',3,'2018-09-23 17:39:49'),(187,407,'sn',3,'2018-09-28 20:28:19'),(188,410,'sn',3,'2018-09-28 20:29:07'),(189,406,'sn',3,'2018-09-28 20:29:27'),(190,396,'SN',3,'2018-10-04 15:06:23'),(191,409,'SN',3,'2018-10-04 15:06:40'),(192,417,'sn',3,'2018-10-09 16:21:12'),(193,418,'sn',3,'2018-10-12 19:40:48'),(194,413,'sn',3,'2018-10-16 20:01:17'),(195,422,'sn',3,'2018-10-21 18:32:06'),(196,423,'sn',3,'2018-10-22 19:15:29'),(197,437,'sn',3,'2018-10-24 19:27:47'),(198,444,'SALE antes',3,'2018-10-27 22:43:07'),(199,448,'sn',3,'2018-10-28 23:29:58'),(200,385,'sn',3,'2018-10-28 23:35:47'),(201,453,'sn',3,'2018-10-29 23:02:27'),(202,397,'SN',3,'2018-10-30 21:52:25'),(203,442,'SN',3,'2018-10-30 21:52:44'),(204,455,'SN',3,'2018-10-31 14:47:06'),(205,454,'sn',3,'2018-11-02 18:40:09'),(206,457,'sn',3,'2018-11-02 18:40:28'),(207,458,'sn',3,'2018-11-02 18:40:42'),(208,450,'sn',3,'2018-11-02 18:40:58'),(209,438,'sn',3,'2018-11-02 18:58:36'),(210,434,'sn',3,'2018-11-02 18:59:01'),(211,434,'sn',3,'2018-11-02 18:59:02'),(212,433,'SN',3,'2018-11-03 17:44:39'),(213,461,'SN',3,'2018-11-03 17:44:52'),(214,430,'sn',3,'2018-11-03 18:26:42'),(215,460,'SN',3,'2018-11-05 16:08:55'),(216,465,'sn',3,'2018-11-05 21:18:24'),(217,343,'SN',3,'2018-11-06 19:29:15'),(218,435,'SN',3,'2018-11-06 19:29:38'),(219,435,'SN',3,'2018-11-06 19:29:40'),(220,471,'SN',3,'2018-11-06 19:31:59'),(221,431,'SN',3,'2018-11-06 19:32:34'),(222,466,'n',3,'2018-11-08 22:59:29'),(223,485,'sn',3,'2018-11-09 00:29:42'),(224,472,'SN',3,'2018-11-10 12:34:56'),(225,462,'sn',3,'2018-11-12 17:06:29'),(226,452,'sn',3,'2018-11-12 17:06:41'),(227,475,'sn',3,'2018-11-12 17:06:54'),(228,480,'sn',3,'2018-11-13 17:55:41'),(229,486,'SN',3,'2018-11-15 15:41:30'),(230,493,'SN',3,'2018-11-15 15:42:13'),(231,459,'N',3,'2018-11-15 15:42:58'),(232,487,'SN',3,'2018-11-16 23:31:14');
/*!40000 ALTER TABLE `checkin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkout`
--

DROP TABLE IF EXISTS `checkout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `checkout` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idReserva` int(11) DEFAULT NULL,
  `detalles` varchar(400) NOT NULL,
  `usuario` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_checkout_idReserva` (`idReserva`),
  CONSTRAINT `FK_checkout_idReserva` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=1820 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkout`
--

LOCK TABLES `checkout` WRITE;
/*!40000 ALTER TABLE `checkout` DISABLE KEYS */;
INSERT INTO `checkout` VALUES (1,63,'Se fueron antes de tiempo por calamidades familiares',2,'2017-09-26 21:15:53'),(2,64,'desde home',2,'2017-09-26 22:32:27'),(3,66,'Prueba saldo',2,'2017-09-26 22:35:47'),(4,66,'Prueba saldo',2,'2017-09-26 22:35:47'),(5,67,'dasdasdasd',2,'2017-09-26 22:38:51'),(6,67,'dasdasdasd',2,'2017-09-26 22:38:51'),(7,67,'dasdasdasd',2,'2017-09-26 22:38:51'),(8,67,'dasdasdasd',2,'2017-09-26 22:38:51'),(9,68,'kkkkk',2,'2017-09-26 22:53:06'),(10,111,'ok',3,'2017-10-17 00:52:25'),(11,110,'ok',3,'2017-10-17 00:53:11'),(12,122,'ok',3,'2017-10-17 01:16:08'),(13,128,'No se alojo',2,'2018-01-03 16:19:21'),(14,132,'apgo',3,'2018-01-07 02:36:29'),(15,130,'pago',3,'2018-01-12 16:00:07'),(16,133,'no novedad',3,'2018-01-12 16:05:12'),(17,129,'no problema',3,'2018-01-12 19:42:53'),(18,149,'no hay novedad',3,'2018-01-23 22:36:52'),(19,149,'no hay novedad',3,'2018-01-23 22:36:52'),(20,151,'ok',3,'2018-01-31 00:57:27'),(21,151,'ok',3,'2018-01-31 00:57:27'),(22,164,'Sin novedad',0,'2018-02-11 17:34:09'),(23,188,'SN',3,'2018-03-19 14:19:55'),(24,206,'sn',3,'2018-03-22 16:33:03'),(25,223,'sn',3,'2018-03-23 23:21:22'),(26,231,'sn',3,'2018-03-23 23:21:52'),(27,208,'sn',3,'2018-03-23 23:22:24'),(28,229,'sn',3,'2018-03-23 23:22:54'),(29,202,'sn',3,'2018-03-26 16:28:23'),(30,201,'sn',3,'2018-03-26 16:28:36'),(31,200,'sn',3,'2018-03-26 16:29:46'),(32,233,'undefined',3,'2018-03-27 18:01:09'),(33,233,'sn',3,'2018-03-27 18:01:10'),(34,244,'REGRESAN EL 4 DE ABRIL ',3,'2018-03-31 21:43:59'),(35,255,'SN',3,'2018-04-05 17:59:37'),(36,253,'SN',3,'2018-04-05 17:59:50'),(37,242,'undefined',3,'2018-04-06 15:12:41'),(38,242,'sn',3,'2018-04-06 15:12:41'),(39,254,'undefined',3,'2018-04-10 15:22:58'),(40,254,'SN',3,'2018-04-10 15:22:58'),(41,189,'SN',3,'2018-04-10 18:05:53'),(42,251,'undefined',3,'2018-04-17 17:07:10'),(43,217,'undefined',3,'2018-04-17 17:07:32'),(44,217,'sn',3,'2018-04-17 17:07:32'),(45,238,'sn',3,'2018-04-19 22:15:22'),(46,193,'undefined',3,'2018-04-30 00:15:54'),(47,193,'SN',3,'2018-04-30 00:15:54'),(48,194,'undefined',3,'2018-04-30 00:16:18'),(49,194,'SN',3,'2018-04-30 00:16:18'),(50,268,'sn',3,'2018-05-01 20:55:44'),(51,210,'sn',3,'2018-05-01 20:59:34'),(52,281,'nooo',2,'2018-05-04 23:46:53'),(53,191,'undefined',3,'2018-05-08 15:34:08'),(54,256,'SN',3,'2018-05-13 14:41:22'),(55,274,'SN',3,'2018-05-13 14:41:36'),(56,252,'SN',3,'2018-05-13 14:41:50'),(57,290,'undefined',3,'2018-06-07 21:09:34'),(58,290,'sn',3,'2018-06-07 21:09:34'),(59,291,'undefined',3,'2018-06-07 21:09:49'),(60,291,'sn',3,'2018-06-07 21:09:49'),(61,294,'undefined',3,'2018-06-07 21:10:05'),(62,294,'sn',3,'2018-06-07 21:10:06'),(63,258,'undefined',3,'2018-07-06 12:56:44'),(64,258,'SIN NOVEDAD ',3,'2018-07-06 12:56:44'),(65,295,'undefined',3,'2018-07-06 12:57:20'),(66,295,'SN',3,'2018-07-06 12:57:20'),(67,327,'SN',3,'2018-07-07 22:21:57'),(68,327,'undefined',3,'2018-07-07 22:21:57');
/*!40000 ALTER TABLE `checkout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `da_hospedaje`
--

DROP TABLE IF EXISTS `da_hospedaje`;
/*!50001 DROP VIEW IF EXISTS `da_hospedaje`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `da_hospedaje` AS SELECT 
 1 AS `idHospedaje`,
 1 AS `hospedaje`,
 1 AS `correo`,
 1 AS `idPais`,
 1 AS `ciudad`,
 1 AS `direccion`,
 1 AS `idAdmin`,
 1 AS `administrador`,
 1 AS `fb`,
 1 AS `ig`,
 1 AS `tw`,
 1 AS `gp`,
 1 AS `ws`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `formapago`
--

DROP TABLE IF EXISTS `formapago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `formapago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `formaPago` varchar(50) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formapago`
--

LOCK TABLES `formapago` WRITE;
/*!40000 ALTER TABLE `formapago` DISABLE KEYS */;
INSERT INTO `formapago` VALUES (1,'Efectivo','A','2017-07-23 07:09:12'),(2,'Depósito','A','2017-07-23 07:09:12'),(3,'Transferencia','A','2017-07-23 07:09:12'),(4,'Tarjeta de crédito','A','2017-07-23 07:09:12');
/*!40000 ALTER TABLE `formapago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuente`
--

DROP TABLE IF EXISTS `fuente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `fuente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fuente` varchar(100) NOT NULL,
  `estado` char(2) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  `prioridad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuente`
--

LOCK TABLES `fuente` WRITE;
/*!40000 ALTER TABLE `fuente` DISABLE KEYS */;
INSERT INTO `fuente` VALUES (1,'Llamada telefónica','A','2017-10-16 19:35:05','2017-10-16 19:35:05',0,0,2),(2,'Llamada a celular','A','2017-10-16 19:35:32','2017-10-16 19:35:32',0,0,3),(3,'Facebook','A','2017-10-16 19:36:08','2017-10-16 19:36:08',0,0,4),(4,'Instagram','A','2017-10-16 19:36:13','2017-10-16 19:36:13',0,0,6),(5,'Booking','A','2017-10-16 19:36:21','2017-10-16 19:36:21',0,0,0),(6,'Página web','A','2017-10-16 19:36:38','2017-10-16 19:36:38',0,0,7),(7,'Otros','A','2017-10-16 19:36:46','2017-10-16 19:36:46',0,0,8),(8,'Whatsapp','A','2017-10-16 19:43:44','2017-10-16 19:43:44',0,0,1),(9,'Airbnb','A','2018-03-13 04:50:30','2018-03-13 04:50:30',0,0,5);
/*!40000 ALTER TABLE `fuente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitacion`
--

DROP TABLE IF EXISTS `habitacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `habitacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idHospedaje` int(11) NOT NULL,
  `noHabitacion` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  `tarifa` decimal(8,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`,`idHospedaje`),
  UNIQUE KEY `UK_habitacion_id` (`id`),
  KEY `fk_habitacion_hospedaje1_idx` (`idHospedaje`),
  CONSTRAINT `fk_habitacion_hospedaje1` FOREIGN KEY (`idHospedaje`) REFERENCES `hospedaje` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=5461 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitacion`
--

LOCK TABLES `habitacion` WRITE;
/*!40000 ALTER TABLE `habitacion` DISABLE KEYS */;
INSERT INTO `habitacion` VALUES (5,2,1,'pl','I','2017-07-16 19:28:24','2017-07-16 19:28:31',0,0,25.00),(6,2,500,'PLAYA MANN(PRUEBA)','I','2017-07-16 19:33:40','2017-10-02 07:00:17',0,0,25.50),(7,2,501,'LOBERIA(PRUEBA)','A','2017-07-21 04:06:07','2018-01-05 23:02:11',0,0,30.00),(8,2,101,'TIJERETAS','I','2017-07-24 04:55:25','2017-08-02 00:09:41',0,0,35.00),(9,2,102,'PLAYA MANN','I','2017-07-24 04:56:03','2017-08-02 00:09:48',0,0,35.00),(10,2,103,'EL JUNCO','I','2017-07-24 04:56:29','2017-08-02 00:09:53',0,0,50.00),(11,2,201,'OPUNTIA','I','2017-07-24 04:57:59','2017-08-02 00:09:58',0,0,50.00),(12,2,202,'LEÓN DORMIDO','I','2017-07-24 04:59:18','2017-08-02 00:10:04',0,0,80.00),(13,2,201,'Isla Isabela','A','2017-08-02 00:13:12','2018-01-05 14:44:53',0,0,45.00),(14,2,202,'Tijeretas Hill','I','2017-08-02 00:14:21','2017-08-02 00:15:37',0,0,50.00),(15,2,202,'Santa Cruz Island(isabela)','I','2017-08-02 00:15:23','2018-07-05 13:15:42',0,0,45.00),(16,2,203,'Suite Fernandina','A','2017-08-02 00:19:19','2018-07-05 13:18:14',0,0,45.00),(17,2,302,'Suite San Cristóbal','A','2017-08-02 00:20:12','2018-02-01 17:09:52',0,0,90.00),(18,2,301,'Suite Floreana','A','2017-08-02 00:20:42','2018-02-01 17:09:43',0,0,45.00),(19,2,204,'Baltra','I','2017-10-01 01:52:42','2018-01-05 14:56:29',0,0,50.00),(20,2,205,'Seymour','I','2017-10-01 01:53:06','2018-01-05 14:56:30',0,0,50.00),(21,3,1,'Loberia','A','2017-10-03 19:07:19','2017-10-03 19:07:19',0,0,20.00),(22,3,2,'Playa Mann','A','2017-10-03 19:10:48','2017-10-03 19:10:48',0,0,25.00),(23,3,3,'Leon Dormido','A','2017-10-03 19:59:14','2017-10-03 19:59:14',0,0,22.00),(27,2,502,'prueba502','I','2017-11-06 19:30:16','2017-11-06 19:30:41',0,0,20.00),(28,2,503,'prueba503','I','2017-11-06 19:31:08','2017-11-06 19:31:47',0,0,25.00),(29,2,502,'PRUEBAS2','A','2018-01-07 19:49:23','2018-01-07 19:49:23',0,0,20.00),(30,2,503,'Prueba3','A','2018-01-09 03:51:45','2018-01-09 03:51:45',0,0,0.00),(31,2,204,'TRIPLE ESPECIAL','I','2018-02-01 17:15:30','2018-02-26 00:55:53',0,0,0.00),(34,17,1,'Cerro Patricio','A','2018-02-09 23:00:41','2018-02-09 23:01:13',0,0,0.00),(35,17,2,'Prueba 2','I','2018-02-09 23:01:03','2018-02-09 23:01:34',0,0,0.00),(36,17,3,'Cerro Verde','A','2018-02-09 23:01:26','2018-02-09 23:01:26',0,0,0.00),(37,2,401,'carlos','I','2018-02-26 15:52:27','2018-02-26 15:52:52',0,0,0.00),(38,2,204,'Española','A','2018-03-13 13:57:56','2018-07-05 13:16:39',0,0,0.00),(39,2,408,'Flamingo','A','2018-05-04 23:40:58','2018-05-04 23:40:58',0,0,0.00),(40,2,205,'ISLA GENOVESA','A','2018-08-03 16:35:27','2018-08-03 16:35:27',3,3,0.00),(41,2,206,'Jennifer','I','2018-09-26 22:00:40','2018-09-26 22:01:06',3,3,0.00),(42,18,2,'Darwin Suite','A','2018-10-11 18:58:13','2018-10-11 18:58:13',21,21,0.00),(43,2,206,'Santa Cruz.','A','2018-10-21 21:22:15','2018-10-21 21:22:15',3,3,0.00),(44,2,103,'lol1023333','I','2018-12-05 05:45:14','2018-12-05 05:45:38',2,2,0.00);
/*!40000 ALTER TABLE `habitacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospedaje`
--

DROP TABLE IF EXISTS `hospedaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospedaje` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPais` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `direccion` varchar(500) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  `correo` varchar(100) NOT NULL DEFAULT 'soporte@monkeydevs.com',
  PRIMARY KEY (`id`,`idPais`),
  UNIQUE KEY `UK_hospedaje_id` (`id`),
  KEY `fk_hospedaje_pais_idx` (`idPais`),
  CONSTRAINT `fk_hospedaje_pais` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=16384 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospedaje`
--

LOCK TABLES `hospedaje` WRITE;
/*!40000 ALTER TABLE `hospedaje` DISABLE KEYS */;
INSERT INTO `hospedaje` VALUES (2,198,'Casa D Cristhi','Puerto Baquerizo Moreno2','Narciso Olaya y Guido Sanchez','A','2017-07-16 18:26:54','2018-12-05 06:42:21',0,NULL,'casadcristhi@gmail.com'),(3,198,'Lacasete','San Cristobal','Penas altas','I','2017-09-30 23:19:07','2017-09-30 23:19:07',-1,-1,'eliminado@eliminado.com'),(13,198,'Lopez House','Guayaquil','Metropolis 2A Mz 860 V1','I','2017-10-13 18:38:43','2017-10-13 18:38:43',-1,-1,'eliminado@eliminado.com'),(14,198,'Hotel Test','Guayaquil','dsddad','I','2017-11-28 20:24:35','2017-11-28 20:24:35',-1,-1,'eliminado@eliminado.com'),(15,198,'DanielInn','Guayaquil','HOla','I','2018-02-07 00:45:02','2018-02-07 00:45:02',-1,-1,'eliminado@eliminado.com'),(16,385,'Pruebas correo','Guayaquil','Malecon','I','2018-02-09 20:08:45','2018-02-09 20:08:45',-1,-1,'eliminado@eliminado.com'),(17,198,'Pruebas House2','Miami2','Miami Lakes2','A','2018-02-09 20:41:15','2018-02-10 01:04:53',-1,NULL,'thianlopezz@chaskiy.com'),(18,198,'Narviz House','Guayaquil','Centro','A',NULL,NULL,NULL,NULL,'dnarvaez@narviz.com');
/*!40000 ALTER TABLE `hospedaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospedajesocial`
--

DROP TABLE IF EXISTS `hospedajesocial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospedajesocial` (
  `idHospedaje` int(11) NOT NULL,
  `idSocial` int(11) NOT NULL,
  `valor` varchar(100) NOT NULL,
  PRIMARY KEY (`idHospedaje`,`idSocial`),
  KEY `FK_hospedajesocial_idSocial` (`idSocial`),
  CONSTRAINT `FK_hospedajesocial_idHospedaje` FOREIGN KEY (`idHospedaje`) REFERENCES `hospedaje` (`id`),
  CONSTRAINT `FK_hospedajesocial_idSocial` FOREIGN KEY (`idSocial`) REFERENCES `social` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospedajesocial`
--

LOCK TABLES `hospedajesocial` WRITE;
/*!40000 ALTER TABLE `hospedajesocial` DISABLE KEYS */;
INSERT INTO `hospedajesocial` VALUES (2,1,'casadcristhi'),(2,2,'casadcristhi'),(2,3,'casadcristhi'),(2,4,''),(2,5,'casadcristhi.com'),(17,1,'thianlopezz'),(17,2,'thianlopezz'),(17,3,''),(17,4,''),(17,5,'');
/*!40000 ALTER TABLE `hospedajesocial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ivaReserva`
--

DROP TABLE IF EXISTS `ivaReserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ivaReserva` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idReserva` int(11) NOT NULL,
  `valor` decimal(6,2) NOT NULL,
  `porcentaje` decimal(5,2) NOT NULL,
  `iva` decimal(6,2) NOT NULL,
  `estado` char(2) NOT NULL DEFAULT 'NG',
  `total` decimal(6,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ivaReserva_idReserva` (`idReserva`),
  CONSTRAINT `FK_ivaReserva_idReserva` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ivaReserva`
--

LOCK TABLES `ivaReserva` WRITE;
/*!40000 ALTER TABLE `ivaReserva` DISABLE KEYS */;
INSERT INTO `ivaReserva` VALUES (1,500,225.00,12.00,27.00,'NG',252.00),(2,501,225.00,12.00,27.00,'NG',252.00),(3,502,225.00,0.00,0.00,'NG',225.00),(4,503,195.00,12.00,23.40,'NG',218.40),(5,504,200.00,12.00,24.00,'NG',224.00),(6,411,100.00,12.00,12.00,'NG',112.00),(7,505,225.00,0.00,0.00,'NG',225.00),(8,506,100.00,12.00,12.00,'NG',112.00),(9,507,600.00,12.00,72.00,'NG',672.00);
/*!40000 ALTER TABLE `ivaReserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcacion`
--

DROP TABLE IF EXISTS `marcacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `marcacion` (
  `idMarcacion` int(11) NOT NULL AUTO_INCREMENT,
  `idHospedaje` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `feEntrada` datetime NOT NULL,
  `feSalida` datetime DEFAULT NULL,
  `estado` char(2) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`idMarcacion`),
  KEY `FK_marcacion` (`idUsuario`,`idHospedaje`),
  CONSTRAINT `FK_marcacion` FOREIGN KEY (`idUsuario`, `idHospedaje`) REFERENCES `usuario` (`id`, `idhospedaje`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcacion`
--

LOCK TABLES `marcacion` WRITE;
/*!40000 ALTER TABLE `marcacion` DISABLE KEYS */;
INSERT INTO `marcacion` VALUES (10,2,2,'2019-02-04 22:57:28','2019-02-04 22:58:05','A'),(11,2,2,'2019-02-05 23:01:59','2019-02-05 23:02:00','A'),(12,2,2,'2019-02-06 23:03:38','2019-02-06 23:03:39','A'),(13,2,3,'2019-02-05 14:53:53','2019-02-05 14:56:12','A');
/*!40000 ALTER TABLE `marcacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagos`
--

DROP TABLE IF EXISTS `pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pagos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idFormaPago` int(11) NOT NULL,
  `idReserva` int(11) DEFAULT NULL,
  `monto` decimal(8,2) NOT NULL DEFAULT '0.00',
  `descripcion` varchar(300) DEFAULT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `usCreacion` int(11) NOT NULL,
  `feCreacion` datetime NOT NULL,
  `usModificacion` int(11) NOT NULL DEFAULT '0',
  `feModificacion` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_pagos_idReserva` (`idReserva`),
  KEY `FK_pagos_idFormaPago` (`idFormaPago`),
  CONSTRAINT `FK_pagos_idFormaPago` FOREIGN KEY (`idFormaPago`) REFERENCES `formapago` (`id`),
  CONSTRAINT `FK_pagos_idReserva` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagos`
--

LOCK TABLES `pagos` WRITE;
/*!40000 ALTER TABLE `pagos` DISABLE KEYS */;
INSERT INTO `pagos` VALUES (13,2,95,20.00,'','A',4,'2017-10-04 06:20:07',0,'0000-00-00 00:00:00'),(16,1,111,500.00,'','A',3,'2017-10-17 00:51:55',0,'0000-00-00 00:00:00'),(17,1,110,456.00,'','A',3,'2017-10-17 00:52:53',0,'0000-00-00 00:00:00'),(18,1,122,150.00,'','A',3,'2017-10-17 01:15:43',0,'0000-00-00 00:00:00'),(21,1,132,290.00,'','A',3,'2018-01-07 02:35:43',0,'0000-00-00 00:00:00'),(22,1,132,290.00,'','A',3,'2018-01-07 02:35:44',0,'0000-00-00 00:00:00'),(26,1,130,396.26,'','I',3,'2018-01-12 15:58:05',0,'0000-00-00 00:00:00'),(27,1,130,436.26,'','A',3,'2018-01-12 15:59:36',0,'0000-00-00 00:00:00'),(28,1,133,145.42,'','A',3,'2018-01-12 16:05:00',0,'0000-00-00 00:00:00'),(29,1,129,196.16,'','A',3,'2018-01-12 19:42:38',0,'0000-00-00 00:00:00'),(31,2,149,100.00,'','A',3,'2018-01-18 23:07:38',0,'0000-00-00 00:00:00'),(32,1,149,35.45,'','A',3,'2018-01-18 23:07:56',0,'0000-00-00 00:00:00'),(33,1,151,80.00,'','A',3,'2018-01-31 00:57:12',0,'0000-00-00 00:00:00'),(34,1,152,45.00,'','A',3,'2018-02-01 16:33:56',0,'0000-00-00 00:00:00'),(36,2,160,180.00,'','A',3,'2018-02-09 13:39:10',0,'0000-00-00 00:00:00'),(37,2,157,180.00,'','A',3,'2018-02-09 13:40:22',0,'0000-00-00 00:00:00'),(38,1,164,45.00,'','I',19,'2018-02-11 17:32:28',19,'2018-02-11 17:32:28'),(39,1,164,45.75,'','A',19,'2018-02-11 17:33:58',19,'2018-02-11 17:33:58'),(40,1,166,50.00,'','A',19,'2018-02-14 00:43:15',19,'2018-02-14 00:43:15'),(41,1,169,110.00,'','A',3,'2018-02-16 18:49:39',3,'2018-02-16 18:49:39'),(42,1,161,130.00,'','I',3,'2018-02-16 18:50:47',3,'2018-02-16 18:50:47'),(43,1,174,45.00,'','A',3,'2018-02-19 18:32:46',3,'2018-02-19 18:32:46'),(44,1,175,90.00,'','A',3,'2018-02-20 00:10:47',3,'2018-02-20 00:10:47'),(45,1,165,105.00,'','A',19,'2018-02-26 04:49:21',19,'2018-02-26 04:49:21'),(46,1,184,157.24,'','I',3,'2018-02-26 22:47:30',3,'2018-02-26 22:47:30'),(47,1,184,140.40,'','A',3,'2018-02-26 22:48:49',3,'2018-02-26 22:48:49'),(48,1,182,140.40,'','A',3,'2018-02-26 22:50:17',3,'2018-02-26 22:50:17'),(49,1,185,90.00,'','A',3,'2018-02-26 22:53:36',3,'2018-02-26 22:53:36'),(50,1,176,90.00,'','A',3,'2018-02-26 22:54:34',3,'2018-02-26 22:54:34'),(51,3,172,130.95,'','A',3,'2018-02-26 23:29:09',3,'2018-02-26 23:29:09'),(52,1,161,130.00,'','A',3,'2018-02-26 23:30:31',3,'2018-02-26 23:30:31'),(53,1,190,105.00,'','A',3,'2018-02-27 00:49:25',3,'2018-02-27 00:49:25'),(54,1,195,180.00,'','A',3,'2018-03-03 00:06:53',3,'2018-03-03 00:06:53'),(55,1,197,180.00,'','A',3,'2018-03-03 00:20:27',3,'2018-03-03 00:20:27'),(56,1,196,135.00,'','A',3,'2018-03-03 00:21:01',3,'2018-03-03 00:21:01'),(57,1,157,180.00,'','A',3,'2018-03-03 22:30:57',3,'2018-03-03 22:30:57'),(58,1,198,90.00,'','A',3,'2018-03-05 00:23:32',3,'2018-03-05 00:23:32'),(59,1,205,100.00,'','A',3,'2018-03-07 17:10:24',3,'2018-03-07 17:10:24'),(60,1,160,180.00,'','A',3,'2018-03-07 17:43:26',3,'2018-03-07 17:43:26'),(61,1,213,90.00,'','A',3,'2018-03-10 23:51:30',3,'2018-03-10 23:51:30'),(62,1,208,100.00,'','A',3,'2018-03-15 12:58:49',3,'2018-03-15 12:58:49'),(63,1,223,180.00,'','A',3,'2018-03-17 19:00:34',3,'2018-03-17 19:00:34'),(64,1,206,200.00,'','A',3,'2018-03-17 19:01:56',3,'2018-03-17 19:01:56'),(65,1,229,90.00,'','A',3,'2018-03-19 00:14:14',3,'2018-03-19 00:14:14'),(66,1,230,90.00,'','A',3,'2018-03-19 00:16:22',3,'2018-03-19 00:16:22'),(67,4,188,225.00,'','A',3,'2018-03-19 14:19:46',3,'2018-03-19 14:19:46'),(68,1,208,80.00,'','A',3,'2018-03-19 14:53:37',3,'2018-03-19 14:53:37'),(69,1,231,135.00,'','A',3,'2018-03-19 14:56:56',3,'2018-03-19 14:56:56'),(70,1,201,250.00,'','A',3,'2018-03-20 18:00:45',3,'2018-03-20 18:00:45'),(71,1,200,250.00,'','A',3,'2018-03-20 18:01:15',3,'2018-03-20 18:01:15'),(72,1,206,100.00,'','A',3,'2018-03-20 18:06:47',3,'2018-03-20 18:06:47'),(73,1,206,90.00,'','A',3,'2018-03-22 14:07:27',3,'2018-03-22 14:07:27'),(74,1,200,250.00,'','I',3,'2018-03-24 00:26:21',3,'2018-03-24 00:26:21'),(75,1,202,250.00,'','A',3,'2018-03-24 00:27:29',3,'2018-03-24 00:27:29'),(76,1,233,240.00,'','A',3,'2018-03-24 22:28:29',3,'2018-03-24 22:28:29'),(77,1,241,100.00,'','A',3,'2018-03-26 16:32:38',3,'2018-03-26 16:32:38'),(78,1,244,52.00,'','I',3,'2018-03-27 23:01:53',3,'2018-03-27 23:01:53'),(79,1,244,208.00,'','A',3,'2018-03-27 23:03:07',3,'2018-03-27 23:03:07'),(80,1,253,140.00,'','A',3,'2018-03-31 22:12:33',3,'2018-03-31 22:12:33'),(81,1,242,250.00,'','A',3,'2018-04-01 17:32:11',3,'2018-04-01 17:32:11'),(82,1,254,440.00,'','A',3,'2018-04-04 20:44:04',3,'2018-04-04 20:44:04'),(83,1,255,52.00,'','A',3,'2018-04-05 17:59:21',3,'2018-04-05 17:59:21'),(84,2,189,60.00,'','A',3,'2018-04-08 17:05:35',3,'2018-04-08 17:05:35'),(85,1,189,75.00,'','A',3,'2018-04-08 17:05:53',3,'2018-04-08 17:05:53'),(86,2,238,100.00,'','A',3,'2018-04-14 19:46:54',3,'2018-04-14 19:46:54'),(87,1,217,130.00,'','A',3,'2018-04-15 18:34:15',3,'2018-04-15 18:34:15'),(88,1,219,60.00,'','A',3,'2018-04-17 14:53:25',3,'2018-04-17 14:53:25'),(89,3,269,414.00,'','A',3,'2018-04-22 01:22:50',3,'2018-04-22 01:22:50'),(90,2,275,120.00,'','A',3,'2018-04-23 13:14:59',3,'2018-04-23 13:14:59'),(91,1,273,150.00,'','A',3,'2018-04-25 22:54:07',3,'2018-04-25 22:54:07'),(92,1,193,90.00,'','A',3,'2018-04-27 19:18:38',3,'2018-04-27 19:18:38'),(93,1,194,100.00,'','A',3,'2018-04-27 19:20:13',3,'2018-04-27 19:20:13'),(94,1,268,200.00,'','A',3,'2018-04-27 19:44:48',3,'2018-04-27 19:44:48'),(95,1,210,90.00,'','I',3,'2018-05-01 20:58:36',3,'2018-05-01 20:58:36'),(96,1,210,90.00,'','A',3,'2018-05-01 20:58:48',3,'2018-05-01 20:58:48'),(97,1,232,408.00,'','A',3,'2018-05-01 23:20:18',3,'2018-05-01 23:20:18'),(98,2,272,190.00,'','A',3,'2018-05-02 19:47:16',3,'2018-05-02 19:47:16'),(100,1,275,105.00,'','A',3,'2018-05-04 23:41:27',3,'2018-05-04 23:41:27'),(102,1,282,300.00,'','A',3,'2018-05-06 17:51:20',3,'2018-05-06 17:51:20'),(103,1,252,100.00,'','A',3,'2018-05-08 20:12:30',3,'2018-05-08 20:12:30'),(104,1,274,150.00,'','A',3,'2018-05-09 23:33:47',3,'2018-05-09 23:33:47'),(105,1,256,150.00,'','A',3,'2018-05-11 00:01:53',3,'2018-05-11 00:01:53'),(106,1,287,200.00,'','A',3,'2018-05-19 03:17:12',3,'2018-05-19 03:17:12'),(107,1,288,100.00,'','A',3,'2018-05-19 03:18:30',3,'2018-05-19 03:18:30'),(108,1,289,75.00,'','A',3,'2018-05-19 19:44:06',3,'2018-05-19 19:44:06'),(109,1,287,232.00,'','A',3,'2018-05-20 20:14:48',3,'2018-05-20 20:14:48'),(110,2,292,138.00,'','A',3,'2018-05-28 21:03:16',3,'2018-05-28 21:03:16'),(111,1,285,150.00,'','A',3,'2018-05-28 22:32:32',3,'2018-05-28 22:32:32'),(112,1,273,150.00,'','A',3,'2018-06-02 01:15:32',3,'2018-06-02 01:15:32'),(113,1,291,208.00,'','A',3,'2018-06-03 18:36:45',3,'2018-06-03 18:36:45'),(114,1,292,212.00,'','I',3,'2018-06-03 19:42:06',3,'2018-06-03 19:42:06'),(115,1,292,212.00,'','A',3,'2018-06-03 19:44:33',3,'2018-06-03 19:44:33'),(116,1,290,216.00,'','A',3,'2018-06-04 15:48:02',3,'2018-06-04 15:48:02'),(117,1,296,120.00,'','A',3,'2018-06-06 14:59:10',3,'2018-06-06 14:59:10'),(118,1,294,60.00,'','A',3,'2018-06-06 17:42:09',3,'2018-06-06 17:42:09'),(119,1,272,190.00,'','A',3,'2018-06-08 17:33:51',3,'2018-06-08 17:33:51'),(120,1,299,150.00,'','A',3,'2018-06-13 22:37:29',3,'2018-06-13 22:37:29'),(121,1,293,162.00,'','A',3,'2018-06-16 17:33:14',3,'2018-06-16 17:33:14'),(122,3,325,210.00,'','A',3,'2018-06-25 16:52:26',3,'2018-06-25 16:52:26'),(123,1,328,200.00,'','A',3,'2018-06-30 22:42:15',3,'2018-06-30 22:42:15'),(124,1,323,150.00,'','A',3,'2018-06-30 22:45:14',3,'2018-06-30 22:45:14'),(125,1,329,150.00,'','A',3,'2018-06-30 23:23:18',3,'2018-06-30 23:23:18'),(126,1,327,312.00,'','A',3,'2018-07-02 01:23:12',3,'2018-07-02 01:23:12'),(127,3,334,220.00,'','A',3,'2018-07-02 23:41:08',3,'2018-07-02 23:41:08'),(128,1,258,104.00,'','A',3,'2018-07-06 12:56:21',3,'2018-07-06 12:56:21'),(129,1,295,162.00,'','A',3,'2018-07-06 12:57:11',3,'2018-07-06 12:57:11'),(130,1,341,336.00,'','A',3,'2018-07-07 13:55:55',3,'2018-07-07 13:55:55'),(131,1,340,319.50,'','A',3,'2018-07-08 16:21:37',3,'2018-07-08 16:21:37'),(132,3,343,110.00,'','A',3,'2018-07-10 20:25:41',3,'2018-07-10 20:25:41'),(133,1,331,260.00,'','A',3,'2018-07-12 22:48:40',3,'2018-07-12 22:48:40'),(134,1,336,130.00,'','A',3,'2018-07-12 22:51:37',3,'2018-07-12 22:51:37'),(135,1,305,150.00,'','A',3,'2018-07-14 23:45:04',3,'2018-07-14 23:45:04'),(136,1,304,156.00,'','A',3,'2018-07-14 23:45:36',3,'2018-07-14 23:45:36'),(137,4,347,390.00,'','A',3,'2018-07-16 12:14:40',3,'2018-07-16 12:14:40'),(138,1,348,165.00,'','A',3,'2018-07-19 00:53:28',3,'2018-07-19 00:53:28'),(139,1,344,135.00,'','A',3,'2018-07-19 12:11:25',3,'2018-07-19 12:11:25'),(140,4,335,180.00,'','A',3,'2018-07-27 12:48:54',3,'2018-07-27 12:48:54'),(141,1,350,210.00,'','A',3,'2018-07-31 23:44:24',3,'2018-07-31 23:44:24'),(142,1,351,260.00,'','A',3,'2018-07-31 23:45:02',3,'2018-07-31 23:45:02'),(143,1,345,1170.00,'','A',3,'2018-07-31 23:45:39',3,'2018-07-31 23:45:39'),(144,3,352,110.00,'','A',3,'2018-08-03 01:31:20',3,'2018-08-03 01:31:20'),(145,3,352,110.00,'','I',3,'2018-08-03 01:31:24',3,'2018-08-03 01:31:24'),(146,1,352,110.00,'','I',3,'2018-08-03 01:31:44',3,'2018-08-03 01:31:44'),(147,1,352,110.00,'','I',3,'2018-08-03 02:14:58',3,'2018-08-03 02:14:58'),(154,3,357,110.00,'','A',3,'2018-08-04 13:14:44',3,'2018-08-04 13:14:44'),(155,3,357,110.00,'','I',3,'2018-08-04 13:14:55',3,'2018-08-04 13:14:55'),(156,3,357,110.00,'','I',3,'2018-08-04 13:14:59',3,'2018-08-04 13:14:59'),(157,2,356,200.00,'','A',3,'2018-08-04 13:33:56',3,'2018-08-04 13:33:56'),(158,1,355,30.00,'','A',2,'2018-08-04 21:38:22',2,'2018-08-04 21:38:22'),(159,1,355,30.00,'','A',2,'2018-08-04 21:56:24',2,'2018-08-04 21:56:24'),(160,2,355,50.00,'','A',2,'2018-08-04 22:10:34',2,'2018-08-04 22:10:34'),(161,1,370,336.00,'','A',3,'2018-08-23 01:17:09',3,'2018-08-23 01:17:09'),(162,2,372,50.00,'','A',3,'2018-08-29 01:59:08',3,'2018-08-29 01:59:08'),(163,1,377,50.00,'','A',3,'2018-08-29 23:55:34',3,'2018-08-29 23:55:34'),(164,2,381,135.00,'','A',3,'2018-09-07 03:25:01',3,'2018-09-07 03:25:01'),(165,3,381,100.00,'','I',3,'2018-09-08 00:37:48',3,'2018-09-08 00:37:48'),(166,3,389,135.00,'','A',3,'2018-09-08 00:43:03',3,'2018-09-08 00:43:03'),(167,2,390,100.00,'','A',3,'2018-09-08 01:06:16',3,'2018-09-08 01:06:16'),(168,1,368,200.00,'','A',3,'2018-09-10 14:10:51',3,'2018-09-10 14:10:51'),(169,2,377,100.00,'','A',3,'2018-09-12 21:16:42',3,'2018-09-12 21:16:42'),(170,3,403,90.00,'','A',3,'2018-09-18 23:48:33',3,'2018-09-18 23:48:33'),(171,3,404,150.00,'','A',3,'2018-09-19 00:15:18',3,'2018-09-19 00:15:18'),(172,1,332,168.00,'','I',3,'2018-09-19 22:09:23',3,'2018-09-19 22:09:23'),(173,1,332,150.00,'','I',3,'2018-09-19 22:09:58',3,'2018-09-19 22:09:58'),(174,1,332,150.00,'','I',3,'2018-09-19 22:10:32',3,'2018-09-19 22:10:32'),(175,1,332,150.00,'','A',3,'2018-09-19 22:48:19',3,'2018-09-19 22:48:19'),(176,1,364,260.00,'','A',3,'2018-09-19 22:49:01',3,'2018-09-19 22:49:01'),(177,3,408,150.00,'','A',3,'2018-09-25 13:16:18',3,'2018-09-25 13:16:18'),(178,2,407,180.00,'','I',3,'2018-09-26 22:52:32',3,'2018-09-26 22:52:32'),(179,2,410,150.00,'','A',3,'2018-09-26 22:55:51',3,'2018-09-26 22:55:51'),(180,2,407,180.00,'','A',3,'2018-09-26 22:56:17',3,'2018-09-26 22:56:17'),(181,2,406,210.00,'','A',3,'2018-09-26 22:56:59',3,'2018-09-26 22:56:59'),(182,2,412,140.00,'','A',3,'2018-09-28 20:52:35',3,'2018-09-28 20:52:35'),(183,3,408,150.00,'','A',3,'2018-09-29 15:48:25',3,'2018-09-29 15:48:25'),(184,4,396,135.00,'','A',3,'2018-10-05 16:19:10',3,'2018-10-05 16:19:10'),(185,3,415,270.00,'','A',3,'2018-10-05 21:30:34',3,'2018-10-05 21:30:34'),(186,4,414,150.00,'','I',3,'2018-10-05 21:31:51',3,'2018-10-05 21:31:51'),(187,4,414,180.00,'','A',3,'2018-10-05 21:32:13',3,'2018-10-05 21:32:13'),(188,4,417,65.00,'','A',3,'2018-10-09 16:22:27',3,'2018-10-09 16:22:27'),(189,4,417,5.00,'','A',3,'2018-10-09 16:22:44',3,'2018-10-09 16:22:44'),(190,1,418,220.00,'','A',3,'2018-10-12 19:40:34',3,'2018-10-12 19:40:34'),(191,2,419,134.40,'','A',3,'2018-10-13 18:26:47',3,'2018-10-13 18:26:47'),(192,4,413,250.00,'','A',3,'2018-10-21 18:31:28',3,'2018-10-21 18:31:28'),(193,1,422,15120.00,'','I',3,'2018-10-21 20:43:15',3,'2018-10-21 20:43:15'),(194,1,422,52.00,'','A',3,'2018-10-21 20:43:58',3,'2018-10-21 20:43:58'),(195,4,425,150.00,'','A',3,'2018-10-21 21:20:05',3,'2018-10-21 21:20:05'),(196,1,423,50.00,'','A',3,'2018-10-22 19:15:20',3,'2018-10-22 19:15:20'),(197,2,439,100.00,'','A',3,'2018-10-24 22:38:25',3,'2018-10-24 22:38:25'),(198,3,438,246.00,'','A',3,'2018-10-24 22:49:09',3,'2018-10-24 22:49:09'),(199,2,434,50.00,'','A',3,'2018-10-26 15:58:07',3,'2018-10-26 15:58:07'),(200,2,435,50.00,'','A',3,'2018-10-26 15:58:48',3,'2018-10-26 15:58:48'),(201,4,437,180.00,'','I',3,'2018-10-27 22:02:18',3,'2018-10-27 22:02:18'),(202,4,437,150.00,'','A',3,'2018-10-27 22:02:40',3,'2018-10-27 22:02:40'),(203,1,444,180.00,'','A',3,'2018-10-27 22:33:27',3,'2018-10-27 22:33:27'),(204,1,448,96.00,'','A',3,'2018-10-28 23:30:26',3,'2018-10-28 23:30:26'),(205,1,385,291.20,'','A',3,'2018-10-29 22:53:36',3,'2018-10-29 22:53:36'),(206,1,453,60.00,'','A',3,'2018-10-29 23:02:16',3,'2018-10-29 23:02:16'),(207,2,446,200.00,'','A',3,'2018-10-31 02:00:45',3,'2018-10-31 02:00:45'),(208,1,442,120.00,'','A',3,'2018-10-31 14:47:36',3,'2018-10-31 14:47:36'),(209,1,438,154.00,'','A',3,'2018-11-02 18:58:16',3,'2018-11-02 18:58:16'),(210,1,430,50.00,'','A',3,'2018-11-03 18:26:01',3,'2018-11-03 18:26:01'),(211,1,431,100.00,'','A',3,'2018-11-03 18:27:08',3,'2018-11-03 18:27:08'),(212,3,462,180.00,'','A',3,'2018-11-04 01:11:54',3,'2018-11-04 01:11:54'),(213,1,461,50.00,'','A',3,'2018-11-04 20:45:18',3,'2018-11-04 20:45:18'),(214,1,458,30.00,'','A',3,'2018-11-04 21:32:33',3,'2018-11-04 21:32:33'),(215,1,454,50.00,'','A',3,'2018-11-04 21:34:22',3,'2018-11-04 21:34:22'),(216,1,465,90.00,'','A',3,'2018-11-05 21:18:06',3,'2018-11-05 21:18:06'),(217,1,470,90.00,'','A',3,'2018-11-05 21:26:53',3,'2018-11-05 21:26:53'),(218,2,450,225.00,'','A',3,'2018-11-06 19:27:25',3,'2018-11-06 19:27:25'),(219,1,397,180.00,'','A',3,'2018-11-06 19:31:05',3,'2018-11-06 19:31:05'),(220,1,433,45.00,'','A',3,'2018-11-06 19:33:18',3,'2018-11-06 19:33:18'),(221,1,460,135.00,'','A',3,'2018-11-06 19:41:10',3,'2018-11-06 19:41:10'),(222,2,476,152.00,'','A',3,'2018-11-07 21:35:21',3,'2018-11-07 21:35:21'),(223,2,478,120.00,'','A',3,'2018-11-08 01:49:45',3,'2018-11-08 01:49:45'),(224,2,477,110.00,'','A',3,'2018-11-08 01:50:10',3,'2018-11-08 01:50:10'),(225,1,466,65.00,'','A',3,'2018-11-08 22:59:18',3,'2018-11-08 22:59:18'),(226,1,485,60.00,'','A',3,'2018-11-09 00:29:30',3,'2018-11-09 00:29:30'),(227,1,472,100.00,'','A',3,'2018-11-10 13:53:48',3,'2018-11-10 13:53:48'),(228,1,486,180.00,'','A',3,'2018-11-15 15:41:11',3,'2018-11-15 15:41:11'),(229,1,462,140.00,'','A',3,'2018-11-15 15:49:39',3,'2018-11-15 15:49:39');
/*!40000 ALTER TABLE `pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pais` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=395 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=83 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (198,'ECUADOR','A','2017-07-16 18:22:27','2017-07-16 18:22:27',1,1),(199,'AFGHANISTAN','A','2017-07-16 18:22:27','2017-07-16 18:22:27',1,1),(200,'ALBANIA','A','2017-07-16 18:22:27','2017-07-16 18:22:27',1,1),(201,'ALGERIA','A','2017-07-16 18:22:27','2017-07-16 18:22:27',1,1),(202,'ANDORRA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(203,'ANGOLA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(204,'ANTIGUA AND BARBUDA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(205,'ARGENTINA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(206,'ARMENIA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(207,'AUSTRALIA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(208,'AUSTRIA','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(209,'AZERBAIJAN','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(210,'BAHAMAS','A','2017-07-16 18:22:28','2017-07-16 18:22:28',1,1),(211,'BAHRAIN','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(212,'BANGLADESH','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(213,'BARBADOS','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(214,'BELARUS','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(215,'BELGIUM','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(216,'BELIZE','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(217,'BENIN','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(218,'BHUTAN','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(219,'BOLIVIA','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(220,'BOSNIA AND HERZEGOVINA','A','2017-07-16 18:22:29','2017-07-16 18:22:29',1,1),(221,'BOTSWANA','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(222,'BRAZIL','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(223,'BRUNEI','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(224,'BULGARIA','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(225,'BURKINA FASO','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(226,'BURUNDI','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(227,'CABO VERDE','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(228,'CAMBODIA','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(229,'CAMEROON','A','2017-07-16 18:22:30','2017-07-16 18:22:30',1,1),(230,'CANADA','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(231,'CENTRAL AFRICAN REPUBLIC (CAR)','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(232,'CHAD','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(233,'CHILE','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(234,'CHINA','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(235,'COLOMBIA','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(236,'COMOROS','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(237,'DEMOCRATIC REPUBLIC OF THE CONGO','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(238,'REPUBLIC OF THE CONGO','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(239,'COSTA RICA','A','2017-07-16 18:22:31','2017-07-16 18:22:31',1,1),(240,'COTE D\'IVOIRE','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(241,'CROATIA','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(242,'CUBA','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(243,'CYPRUS','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(244,'CZECH REPUBLIC','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(245,'DENMARK','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(246,'DJIBOUTI','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(247,'DOMINICA','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(248,'DOMINICAN REPUBLIC','A','2017-07-16 18:22:32','2017-07-16 18:22:32',1,1),(249,'EGYPT','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(250,'EL SALVADOR','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(251,'EQUATORIAL GUINEA','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(252,'ERITREA','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(253,'ESTONIA','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(254,'ETHIOPIA','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(255,'FIJI','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(256,'FINLAND','A','2017-07-16 18:22:33','2017-07-16 18:22:33',1,1),(257,'FRANCE','A','2017-07-16 18:22:34','2017-07-16 18:22:34',1,1),(258,'GABON','A','2017-07-16 18:22:34','2017-07-16 18:22:34',1,1),(259,'GAMBIA','A','2017-07-16 18:22:34','2017-07-16 18:22:34',1,1),(260,'GEORGIA','A','2017-07-16 18:22:34','2017-07-16 18:22:34',1,1),(261,'GERMANY','A','2017-07-16 18:22:34','2017-07-16 18:22:34',1,1),(262,'GHANA','A','2017-07-16 18:22:34','2017-07-16 18:22:34',1,1),(263,'GREECE','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(264,'GRENADA','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(265,'GUATEMALA','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(266,'GUINEA','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(267,'GUINEA-BISSAU','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(268,'GUYANA','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(269,'HAITI','A','2017-07-16 18:22:35','2017-07-16 18:22:35',1,1),(270,'HONDURAS','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(271,'HUNGARY','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(272,'ICELAND','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(273,'INDIA','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(274,'INDONESIA','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(275,'IRAN','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(276,'IRAQ','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(277,'IRELAND','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(278,'ISRAEL','A','2017-07-16 18:22:36','2017-07-16 18:22:36',1,1),(279,'ITALY','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(280,'JAMAICA','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(281,'JAPAN','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(282,'JORDAN','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(283,'KAZAKHSTAN','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(284,'KENYA','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(285,'KIRIBATI','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(286,'KOSOVO','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(287,'KUWAIT','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(288,'KYRGYZSTAN','A','2017-07-16 18:22:37','2017-07-16 18:22:37',1,1),(289,'LAOS','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(290,'LATVIA','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(291,'LEBANON','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(292,'LESOTHO','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(293,'LIBERIA','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(294,'LIBYA','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(295,'LIECHTENSTEIN','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(296,'LITHUANIA','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(297,'LUXEMBOURG','A','2017-07-16 18:22:38','2017-07-16 18:22:38',1,1),(298,'MACEDONIA','A','2017-07-16 18:22:39','2017-07-16 18:22:39',1,1),(299,'MADAGASCAR','A','2017-07-16 18:22:39','2017-07-16 18:22:39',1,1),(300,'MALAWI','A','2017-07-16 18:22:39','2017-07-16 18:22:39',1,1),(301,'MALAYSIA','A','2017-07-16 18:22:40','2017-07-16 18:22:40',1,1),(302,'MALDIVES','A','2017-07-16 18:22:40','2017-07-16 18:22:40',1,1),(303,'MALI','A','2017-07-16 18:22:40','2017-07-16 18:22:40',1,1),(304,'MALTA','A','2017-07-16 18:22:40','2017-07-16 18:22:40',1,1),(305,'MARSHALL ISLANDS','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(306,'MAURITANIA','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(307,'MAURITIUS','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(308,'MEXICO','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(309,'MICRONESIA','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(310,'MOLDOVA','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(311,'MONACO','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(312,'MONGOLIA','A','2017-07-16 18:22:41','2017-07-16 18:22:41',1,1),(313,'MONTENEGRO','A','2017-07-16 18:22:42','2017-07-16 18:22:42',1,1),(314,'MOROCCO','A','2017-07-16 18:22:42','2017-07-16 18:22:42',1,1),(315,'MOZAMBIQUE','A','2017-07-16 18:22:42','2017-07-16 18:22:42',1,1),(316,'MYANMAR (BURMA)','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(317,'NAMIBIA','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(318,'NAURU','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(319,'NEPAL','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(320,'NETHERLANDS','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(321,'NEW ZEALAND','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(322,'NICARAGUA','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(323,'NIGER','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(324,'NIGERIA','A','2017-07-16 18:22:43','2017-07-16 18:22:43',1,1),(325,'NORTH KOREA','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(326,'NORWAY','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(327,'OMAN','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(328,'PAKISTAN','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(329,'PALAU','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(330,'PALESTINE','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(331,'PANAMA','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(332,'PAPUA NEW GUINEA','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(333,'PARAGUAY','A','2017-07-16 18:22:44','2017-07-16 18:22:44',1,1),(334,'PERU','A','2017-07-16 18:22:45','2017-07-16 18:22:45',1,1),(335,'PHILIPPINES','A','2017-07-16 18:22:45','2017-07-16 18:22:45',1,1),(336,'POLAND','A','2017-07-16 18:22:45','2017-07-16 18:22:45',1,1),(337,'PORTUGAL','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(338,'QATAR','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(339,'ROMANIA','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(340,'RUSSIA','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(341,'RWANDA','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(342,'SAINT KITTS AND NEVIS','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(343,'SAINT LUCIA','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(344,'SAINT VINCENT AND THE GRENADINES','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(345,'SAMOA','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(346,'SAN MARINO','A','2017-07-16 18:22:46','2017-07-16 18:22:46',1,1),(347,'SAO TOME AND PRINCIPE','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(348,'SAUDI ARABIA','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(349,'SENEGAL','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(350,'SERBIA','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(351,'SEYCHELLES','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(352,'SIERRA LEONE','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(353,'SINGAPORE','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(354,'SLOVAKIA','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(355,'SLOVENIA','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(356,'SOLOMON ISLANDS','A','2017-07-16 18:22:47','2017-07-16 18:22:47',1,1),(357,'SOMALIA','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(358,'SOUTH AFRICA','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(359,'SOUTH KOREA','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(360,'SOUTH SUDAN','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(361,'SPAIN','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(362,'SRI LANKA','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(363,'SUDAN','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(364,'SURINAME','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(365,'SWAZILAND','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(366,'SWEDEN','A','2017-07-16 18:22:48','2017-07-16 18:22:48',1,1),(367,'SWITZERLAND','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(368,'SYRIA','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(369,'TAIWAN','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(370,'TAJIKISTAN','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(371,'TANZANIA','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(372,'THAILAND','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(373,'TIMOR-LESTE','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(374,'TOGO','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(375,'TONGA','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(376,'TRINIDAD AND TOBAGO','A','2017-07-16 18:22:49','2017-07-16 18:22:49',1,1),(377,'TUNISIA','A','2017-07-16 18:22:50','2017-07-16 18:22:50',1,1),(378,'TURKEY','A','2017-07-16 18:22:50','2017-07-16 18:22:50',1,1),(379,'TURKMENISTAN','A','2017-07-16 18:22:50','2017-07-16 18:22:50',1,1),(380,'TUVALU','A','2017-07-16 18:22:50','2017-07-16 18:22:50',1,1),(381,'UGANDA','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(382,'UKRAINE','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(383,'UNITED ARAB EMIRATES (UAE)','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(384,'UNITED KINGDOM (UK)','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(385,'UNITED STATES OF AMERICA (USA)','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(386,'URUGUAY','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(387,'UZBEKISTAN','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(388,'VANUATU','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(389,'VATICAN CITY (HOLY SEE)','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(390,'VENEZUELA','A','2017-07-16 18:22:51','2017-07-16 18:22:51',1,1),(391,'VIETNAM','A','2017-07-16 18:22:52','2017-07-16 18:22:52',1,1),(392,'YEMEN','A','2017-07-16 18:22:52','2017-07-16 18:22:52',1,1),(393,'ZAMBIA','A','2017-07-16 18:22:52','2017-07-16 18:22:52',1,1),(394,'ZIMBABWE','A','2017-07-16 18:22:52','2017-07-16 18:22:52',1,1);
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pasajero`
--

DROP TABLE IF EXISTS `pasajero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pasajero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idHospedaje` int(11) NOT NULL,
  `idPais` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `noContacto` varchar(15) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`idHospedaje`,`idPais`,`correo`),
  KEY `fk_pasajero_hospedaje1_idx` (`idHospedaje`),
  KEY `fk_pasajero_pais1_idx` (`idPais`),
  CONSTRAINT `fk_pasajero_hospedaje1` FOREIGN KEY (`idHospedaje`) REFERENCES `hospedaje` (`id`),
  CONSTRAINT `fk_pasajero_pais1` FOREIGN KEY (`idPais`) REFERENCES `pais` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=298 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=5461 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pasajero`
--

LOCK TABLES `pasajero` WRITE;
/*!40000 ALTER TABLE `pasajero` DISABLE KEYS */;
INSERT INTO `pasajero` VALUES (7,2,198,'thianlopezz@gmail.com','Thian Lopez Z','+593 990901765','A','2017-07-17 00:56:17','2018-03-21 04:45:03',0,2),(8,2,198,'carlosldel@hotmail.com','Carlos Lopez','0981400318','A','2017-07-17 01:09:11','2017-07-17 01:09:11',0,0),(9,2,198,'jbkjb','ggjfh','jkkbkj','A','2017-07-25 06:14:06','2017-07-25 06:14:06',2,2),(10,2,198,'kn','b bjb','jkbjk','A','2017-07-25 06:17:30','2017-07-25 06:17:30',2,2),(11,2,198,'krlos_1606@hotmail.com','Carlos Andres López Zambrano','6036155','A','2017-07-26 03:15:39','2017-07-26 03:15:39',2,2),(12,2,198,'danilo19191@hotmail.com','Danilo Enrique Cornejo','000','A','2017-08-02 00:48:08','2017-08-02 00:48:08',2,2),(13,2,198,'herreragrace91@gmail.com','GRACE HERRERA X 2','0','A','2017-09-03 03:12:46','2017-09-03 03:12:46',2,2),(14,2,198,'SDA@GAAS.COM','ccccc','CASCA','A','2017-09-30 20:48:46','2017-09-30 20:48:46',2,2),(17,2,198,'hjvjhv','carlos','0994447300','A','2017-09-30 21:27:12','2017-09-30 21:27:12',2,2),(18,2,198,'casadcristhi@gmail.com','Andres','0994447300','A','2017-10-01 00:45:24','2017-10-01 00:45:24',3,3),(19,2,198,'RESERVA BOOKING','GIANCARLO CARABELLI','0000000','A','2017-10-01 01:59:42','2017-10-01 01:59:42',3,3),(20,3,198,'thianlopezz@gmail.com','Thian Lopez Zambrano','0990901765','A','2017-10-03 19:12:54','2017-10-04 06:15:54',4,4),(23,2,385,'chaskiyqurpa@gmail.com','Prueba Lopez Z','0990901762','A','2017-10-12 22:48:18','2017-10-14 22:42:03',2,2),(24,2,198,'jvasconez28@gmail.com','Julio Vazconez','09999999999','A','2017-11-28 20:30:37','2017-11-28 20:30:37',2,2),(25,2,385,'krlos_1606@hotmail.co','Maria Fuentes','0994447400','A','2018-01-03 16:09:58','2018-01-03 16:09:58',2,2),(26,2,198,'dojeda.326817@guest.booking.com','Daniela Ojeda','0000','A','2018-01-05 17:08:53','2018-01-05 17:08:53',3,3),(27,2,205,'vmayor.375336@guest.booking.com','Victor Manuel Mayorga','000','A','2018-01-05 17:14:23','2018-01-05 17:14:23',3,3),(28,2,365,'raike.413521@guest.booking.com','Chloe Raikes','000','A','2018-01-05 17:22:46','2018-01-05 17:22:46',3,3),(29,2,198,'craike.413521@guest.booking.com','Chloe Raikes','000','A','2018-01-07 02:29:47','2018-01-07 02:29:47',3,3),(30,2,198,'prosse.785468@guest.booking.com','PAU ROSSELL','0000','A','2018-01-07 02:49:05','2018-01-07 02:49:05',3,3),(31,2,198,'villagomez_1999@outlook.com','Karla Villagomez ','0997709285','A','2018-01-12 21:24:52','2018-01-12 21:24:52',3,3),(32,2,198,'danmat_gd@hotmail.com','Daniel Arellano Lam','0958989804','A','2018-01-16 22:48:44','2018-01-16 22:48:44',2,2),(33,2,198,'wlsgpdid288n@naver.com','HYEJIN YANG ','+821099102889','A','2018-01-18 23:04:52','2018-01-18 23:04:52',3,3),(34,2,198,'bgomez.100386@guest.booking.com','Belen Gomez ','+593 98 476 597','A','2018-01-18 23:19:39','2018-01-18 23:19:39',3,3),(35,2,198,'dnlsalazar28@gmail.com','Daniel Salazar','undefined','A','2018-01-30 22:13:54','2018-01-30 22:13:54',3,3),(36,2,198,'yiraho@hotmail.com','Rafael Osorno','0984160660','A','2018-01-30 22:18:33','2018-01-30 22:18:33',3,3),(37,2,198,'karlarendon@gmail.com','Karla Rendon /ALAN AGUILAR','0984662122','A','2018-02-01 17:05:45','2018-02-01 17:05:45',3,3),(38,2,198,'jekita8719@gmail.com','JESICA CEDEÑO','0','A','2018-02-02 00:35:51','2018-02-02 00:35:51',3,3),(39,2,198,'taniadoflo@gmail.com','TANIA DOMINGUEZ','+34 600 741 388','A','2018-02-09 13:38:15','2018-02-09 13:38:15',3,3),(40,2,198,'jcosta.935678@guest.booking.com','Johana Costales','+593 92865669','A','2018-02-09 13:49:03','2018-02-09 13:49:03',3,3),(41,17,198,'thianlopezz@gmail.com','Thian Lopez','123','A','2018-02-11 01:12:51','2018-02-11 01:12:51',0,0),(42,2,198,'ltorre.379463@guest.booking.com','Lucia Torres ','','A','2018-02-14 16:21:01','2018-02-14 16:21:01',3,3),(43,2,198,'jmende.828336@guest.booking.com','Jorge Mendez','0997898744','A','2018-02-14 16:25:38','2018-02-14 16:25:38',3,3),(44,2,198,'kespin.275009@guest.booking.com','Kruskaya Soledad Salazar Espinoza ','+593 99 966 161','A','2018-02-14 16:38:21','2018-02-14 16:38:21',3,3),(45,2,385,'wightac@jmu.edu','Wight','09083364245','A','2018-02-16 17:04:02','2018-02-16 17:04:02',3,3),(46,2,270,'rongoester@gmail.com','Ron Goester','','A','2018-02-19 14:40:20','2018-02-19 14:40:20',3,3),(47,2,205,'ibosci.389699@guest.booking.com','Ignacio Bosciglio','+54 11 5036 957','A','2018-02-21 17:37:24','2018-02-21 17:37:24',3,3),(48,2,198,'mende.828336@guest.booking.com','Jorge Mendez ','0997898744','A','2018-02-21 19:43:54','2018-02-21 19:43:54',3,3),(49,2,198,'jmendez_jsj@hotmail.com','Jorge Mende','0997898744','A','2018-02-21 22:36:37','2018-02-21 22:36:37',3,3),(50,2,198,'jdiaz.827727@guest.booking.com','Juan Ortiz Diaz','+593 9960974526','A','2018-02-23 12:15:48','2018-02-23 12:15:48',3,3),(51,2,198,'promer.472870@guest.booking.com','Patricio Sánchez','+593 99 448 607','A','2018-02-24 22:12:57','2018-02-24 22:12:57',3,3),(52,2,198,'hpared.316696@guest.booking.com','Hugo Paredes ','','A','2018-02-24 22:14:48','2018-02-24 22:14:48',3,3),(53,2,385,'gmqsarnah48qgeag@guest.airbnb.com','William Rich','+1 (781) 652-14','A','2018-02-24 22:51:21','2018-02-24 22:51:21',3,3),(54,2,198,'lilianacarrion.o7@hotmail.ar','Liliana Carrion','0995693225','A','2018-02-25 14:15:20','2018-02-25 14:15:20',3,3),(55,2,198,'mcelleri21@gmail.com','Maria Celleri','0997684941','A','2018-02-26 00:53:38','2018-02-26 00:53:38',3,3),(56,2,198,'william-gmqsarnah48qgeag@guest.airbnb.com','William Rich','+1 (781) 652-14','A','2018-02-26 01:05:07','2018-02-26 01:05:07',3,3),(57,2,198,'chik-y@hotmail.com','Laborde','0999056379','A','2018-02-26 16:17:38','2018-02-26 16:17:38',3,3),(58,2,198,'neti88@tlen.pl','Natalia Bnodadie ','791884254','A','2018-02-27 00:47:51','2018-02-27 00:47:51',3,3),(59,2,198,'cpalac.140871@guest.booking.com','Carlos Palacios','593 98 429 1342','A','2018-03-01 18:50:00','2018-03-01 18:50:00',3,3),(60,2,385,'trober.748741@guest.booking.com','David mccarthy ','+44 7591 587909','A','2018-03-02 17:34:58','2018-03-02 17:34:58',3,3),(61,2,198,'bbalaz.682372@guest.booking.com','Brian Balazs','+593 98 726 237','A','2018-03-03 13:45:42','2018-03-03 13:45:42',3,3),(62,2,205,'jlarra.575586@guest.booking.com','juan pablo larragneguy ','+54 223 456 065','A','2018-03-06 00:38:31','2018-03-06 00:38:31',3,3),(63,2,198,'mriver.777630@guest.booking.com','Manuela Apolinario Rivera ','+593 99 876 317','A','2018-03-07 17:31:42','2018-03-07 17:31:42',3,3),(64,2,198,'kespin.878525@guest.booking.com','Kruskaya Soledad Salazar Espinoza','+593 99 966 161','A','2018-03-08 14:48:54','2018-03-08 14:48:54',3,3),(65,2,198,'fcadena089@gmail.com','Fania Cadena','0','A','2018-03-09 15:18:21','2018-03-09 15:18:21',3,3),(66,2,198,'pmantilla@favoritafc.com','Edmundo Arteaga y Anita Alianza','0','A','2018-03-09 19:27:02','2018-03-09 19:27:02',3,3),(67,2,198,'caitu@gmail.com','Caity Dickson','+1 (925) 413-80','A','2018-03-10 23:46:05','2018-03-10 23:46:05',3,3),(68,2,198,'rgavil.781605@guest.booking.com','Richard Arrieta Gavilanez ','+593 99 068 423','A','2018-03-10 23:51:10','2018-03-10 23:51:10',3,3),(69,2,198,'jsolor.186027@guest.booking.com','JOSE GREGORIO ARTEAGA SOLORZANO','+593 336781962','A','2018-03-11 17:54:49','2018-03-11 17:54:49',3,3),(70,2,198,'vfreir.374555@guest.booking.com','Valentina Freire','+593 98 439 624','A','2018-03-11 21:52:11','2018-03-11 21:52:11',3,3),(71,2,198,'genoliz@yahoo.es','ELIZABETH CHULDE','0999699048','A','2018-03-13 14:34:06','2018-03-13 14:34:06',3,3),(72,2,198,'erevel.156442@guest.booking.com','Elizabeth Genoveva Chulde Revelo','+593 99 969 904','A','2018-03-13 14:45:29','2018-03-13 14:45:29',3,3),(73,2,198,'karenpanchana@hotmail.com','Karen Panchana','0996666161','A','2018-03-14 05:39:47','2018-03-21 01:13:10',3,2),(74,2,198,'mherme.739500@guest.booking.com','Martina Hermenau','+593 99 265 335','A','2018-03-14 17:03:59','2018-03-14 17:03:59',3,3),(75,2,198,'gpared.434256@guest.booking.com','GUSTAVO PAREDES','+593 99 731 445','A','2018-03-14 18:23:23','2018-03-14 18:23:23',3,3),(76,2,198,'ivelas.878004@guest.booking.com','Isabel Velastegui','+593 98 462 715','A','2018-03-18 14:33:06','2018-03-18 14:33:06',3,3),(77,2,222,'cyamad.275278@guest.booking.com','Carlos Yukio Yamada','+55 19 99683 09','A','2018-03-18 15:07:05','2018-03-18 15:07:05',3,3),(78,2,233,'jduran.939347@guest.booking.com','Juan pablo Castillo Durán','+56 9 8790 4036','A','2018-03-18 15:19:44','2018-03-18 15:19:44',3,3),(79,2,198,'piapeamn@bluemn.ch','Pia Crossnikaus','0','A','2018-03-19 00:11:49','2018-03-19 00:11:49',3,3),(80,2,198,'imarti.768770@guest.booking.com','Juan Carlos Martinez','+34605159942','A','2018-03-20 00:28:31','2018-03-20 00:28:31',3,3),(81,2,198,'distribucioneselbaratito@hotmail.com','Rita Campo verde ','0997905452','A','2018-03-21 00:02:17','2018-03-21 00:02:17',3,3),(86,2,200,'thianlopezz@prueba.com','Thian Prueaba','099','I','2018-03-21 04:24:03','2018-03-21 04:24:26',2,2),(87,2,198,'prueba@prueba.com','Senor Prueba24','099','A','2018-03-21 04:40:21','2018-03-21 04:41:26',2,2),(88,2,377,'thianlopezz@lopez.com','undefined','','A','2018-03-21 04:46:23','2018-03-21 04:46:23',2,2),(89,2,198,'adrix8.9_na@hotmail.com','','0979753848','A','2018-03-23 18:28:26','2018-03-23 18:28:26',3,3),(90,2,198,'jcubil.101672@guest.booking.com','','+56 9 5284 2958','A','2018-03-24 23:14:02','2018-03-24 23:14:02',3,3),(91,2,198,'jchoi.641865@guest.booking.com','','+82 1020893506','A','2018-03-25 15:20:32','2018-03-25 15:20:32',3,3),(92,2,198,'mcao.162089@guest.booking.com','','+54 9 11 6608 7','A','2018-03-26 15:13:20','2018-03-26 15:13:20',3,3),(93,2,198,'sareloricalde@hotmail.com','','0995400149','A','2018-03-26 18:08:26','2018-03-26 18:08:26',3,3),(94,2,198,'galapagos_345@booking.com','','0991218543','A','2018-03-27 01:10:58','2018-03-27 01:10:58',3,3),(95,2,234,'wtam.607281@guest.booking.com','','+85265714994 ','A','2018-03-27 16:08:32','2018-03-27 16:08:32',3,3),(96,2,198,'thian@pruebaerror.com','','0990901765','A','2018-03-28 02:53:42','2018-03-28 02:53:42',2,2),(97,2,198,'thian@prueberror2.com','undefined','099','A','2018-03-28 02:59:13','2018-03-28 02:59:13',2,2),(98,2,198,'lopez@prueba.com','undefined','099','A','2018-03-28 03:02:44','2018-03-28 03:02:44',2,2),(99,2,198,'thiaa@prueba.com','undefined','9898','A','2018-03-28 03:04:11','2018-03-28 03:04:11',2,2),(100,2,198,'asda@prueba.com','Thian Lopez','','A','2018-03-28 03:10:53','2018-03-28 03:16:34',2,2),(101,2,198,'thi@prueba2.com','Thian Lopez','09','I','2018-03-28 03:17:16','2018-03-28 03:18:56',2,2),(102,2,198,'tasad@prueba.com','PRueba','','A','2018-03-28 03:33:39','2018-03-28 03:33:39',2,2),(103,2,198,'kmaden.606596@guest.booking.com','Katie Maden ','+44 7756800699','A','2018-03-29 15:09:14','2018-03-29 15:09:14',3,3),(104,2,205,'renataspie@gmail.com','Renata ','0995037525','A','2018-03-30 21:24:52','2018-03-30 21:24:52',3,3),(105,2,198,'dt.derek@gmail.com','Wai Kan Tam / Lok Lam Wong','0','A','2018-03-31 12:55:05','2018-03-31 12:55:05',3,3),(106,2,208,'bjirak.910413@guest.booking.com','Bernhard Jirak ','+43 681 2065780','A','2018-03-31 15:28:03','2018-03-31 15:28:03',3,3),(107,2,198,'gtamay.217551@guest.booking.com','GABRIELA ALEJANDRA TRUJILLO TAMAYO','+593 99 852 211','A','2018-03-31 15:36:35','2018-03-31 15:36:35',3,3),(108,2,361,'nsocco.882390@guest.booking.com','Felix Jimenez ','+34 686723212','A','2018-03-31 16:27:36','2018-03-31 16:27:36',3,3),(109,2,361,'nsocco.511772@guest.booking.com','Nicolas SOCCOL','+34 686723212','A','2018-03-31 16:29:19','2018-03-31 16:29:19',3,3),(110,2,279,'bmalas.679473@guest.booking.com','Benito Malaspina ','+39 388 123 844','A','2018-03-31 18:39:54','2018-03-31 18:39:54',3,3),(111,2,230,'sbaum828209@guest.boooking.com','Sara Baum','+14169951663','A','2018-04-04 22:57:44','2018-04-04 22:57:44',3,3),(112,2,198,'mjaram.849009@guest.booking.com','Myrian Jaramillo ','+593998025953','A','2018-04-04 23:05:36','2018-04-04 23:05:36',3,3),(113,2,198,'sorell.136602@guest.boooking.com','Susana Orellana ','+593992238102','A','2018-04-05 00:16:10','2018-04-05 00:16:10',3,3),(114,2,198,'gbayas.403521@guest.booking.com','Gustavo Bayas','+593 98 407 272','A','2018-04-05 17:43:25','2018-04-05 17:43:25',3,3),(115,2,215,'wmayor.294791@guest.booking.con','William Mayorga ','+32460968573','A','2018-04-06 20:38:14','2018-04-06 20:38:14',3,3),(116,2,198,'vbarci.722515@guest.booking.com','Valeria Barcia','','A','2018-04-10 02:32:48','2018-04-10 02:32:48',3,3),(117,2,198,'clopez.558200@guest.booking.com','Cristhopher Reyes Lopez','+593998410864','A','2018-04-14 23:17:45','2018-04-14 23:17:45',3,3),(118,2,361,'analimaco@booking.com','ANA LIMACO RIVERA','+34606856461','A','2018-04-22 00:40:40','2018-04-22 00:40:40',3,3),(119,2,198,'keylatamayo@booking.com','Keyla Tamayo','+593993057982','A','2018-04-22 00:52:57','2018-04-22 00:52:57',3,3),(120,2,198,'gabnob17@hotmail.com','Marco Gabriel Noboa Villacis','0984092338','A','2018-04-22 00:59:34','2018-04-22 00:59:34',3,3),(121,2,340,'evgeniya@booking.com','EVGENIYA SKOPINA','+79137231155','A','2018-04-22 01:11:41','2018-04-22 01:11:41',3,3),(122,2,198,'luva_sponge92@hotmail.com','Luisa Vanessa Giler Echeverria','0991184020','A','2018-04-22 02:07:17','2018-04-22 02:07:17',3,3),(123,2,198,'juancarlos@booking.com','JUAN CARLOS ESTEVEZ','593980365958','A','2018-04-25 13:56:58','2018-04-25 13:56:58',3,3),(124,2,198,'lenysalguero@booking.com','LENY SALGUERO','','A','2018-04-25 14:02:16','2018-04-25 14:02:16',3,3),(125,2,198,'omar@airbnb.com','OMAR VERGARA','0','A','2018-04-25 23:01:43','2018-04-25 23:01:43',3,3),(126,2,198,'carolina@airbnb.com','CAROLINA BANDERAS','0','A','2018-04-25 23:07:04','2018-04-25 23:07:04',3,3),(127,2,198,'fviter.310276@guest.boooking.com','Fernando Viteri','+593993272357','A','2018-04-30 17:21:25','2018-04-30 17:21:25',3,3),(128,2,198,'doryshouse@yahoo.es','Dorys Romero','0985730725','A','2018-05-04 23:36:27','2018-05-04 23:36:27',2,2),(129,2,198,'lceden.324452@guest.booking.com','Lisetty Cedeño','+593 98 685 608','A','2018-05-06 16:47:32','2018-05-06 16:47:32',3,3),(130,2,198,'mvinan.1182750@guest.boooking.com','Marcela Viñan ','+593993393482','A','2018-05-11 00:07:31','2018-05-11 00:07:31',3,3),(131,2,233,'cmora.846620@guest.booking.com','carolina mora','+56940710859','A','2018-05-12 20:06:44','2018-05-12 20:06:44',3,3),(132,2,198,'ejacom.420528@guest.booking.com','Esteban Jácome ','+593999014572','A','2018-05-14 20:56:30','2018-05-14 20:56:30',3,3),(133,2,198,'astcla.856692@guest.booking.com','Aaron StClair ','+593993674867','A','2018-05-18 02:36:10','2018-05-18 02:36:10',3,3),(134,2,198,'rpaszk.461743@guest.booking.com','Ricky ','00987645382','A','2018-05-18 02:38:16','2018-05-18 02:38:16',3,3),(135,2,198,'gabrielachasifan@gmail.com','Gabriela Chasifan ','0987465839','A','2018-05-19 19:43:31','2018-05-19 19:43:31',3,3),(136,2,261,'p.kuest.145165@guest.booking.com','Philipp Kuesters','+4915753837470','A','2018-05-21 01:52:16','2018-05-21 01:52:16',3,3),(137,2,261,'rkarle.670149@guest.booking.com','Rene Karle','+491637402975','A','2018-05-21 13:47:04','2018-05-21 13:47:04',3,3),(138,2,198,'naticos989@gmail.com','Natali Subía','0995311687','A','2018-05-25 05:28:49','2018-05-25 05:28:49',3,3),(139,2,198,'dpared.557228@guest.booking.com','Diana  Paredes ','+ 593988485420','A','2018-05-30 01:18:42','2018-05-30 01:18:42',3,3),(140,2,198,'mapaulas@hotmail.com','MARIA PAULA SUAREZ','0992771552','A','2018-06-02 18:07:45','2018-06-02 18:07:45',3,3),(141,2,261,'rherwe.146972@guest.booking.com','Robin Herweg','','A','2018-06-04 23:22:59','2018-06-04 23:22:59',3,3),(142,2,198,'sanchezcarrion_63@hotmail.com','Orlando Sanchez','0998926500','A','2018-06-06 14:56:50','2018-06-06 14:56:50',3,3),(143,2,198,'myriam@airbnb.com','MYRIAM DIBBERN','0988221233','A','2018-06-07 03:05:36','2018-06-07 03:05:36',3,3),(144,2,233,'vmena.886022@guest.booking.com','Valeska Malvina Rojas ','+56993338851','A','2018-06-08 13:17:09','2018-06-08 13:17:09',3,3),(145,2,233,'jmorti.124867@guest.booking.com','Jill Mortimer','2035640799','A','2018-06-09 00:37:03','2018-06-09 00:37:03',3,3),(146,2,385,'ckilda.749723@guest.booking.com','Carissa Kildall','+1 562 377 2557','A','2018-06-10 15:38:25','2018-06-10 15:38:25',3,3),(147,2,198,'mcarri.339276@guest.booking.com','Maria Carrillo','+593958872959','A','2018-06-10 21:35:55','2018-06-10 21:35:55',3,3),(148,2,233,'cpinel.220855@guest.booking.com','Charlotte Pinel ','+51970218293','A','2018-06-12 10:21:34','2018-06-12 10:21:34',3,3),(149,2,198,'ptorre.513270@guest.booking.com','Petter Barco Torres ','+593991237053','A','2018-06-12 10:25:55','2018-06-12 10:25:55',3,3),(150,2,198,'carolina@gmail.com','CAROLINA BANDERAS','0','A','2018-06-15 00:24:46','2018-06-15 00:24:46',3,3),(151,2,198,'rdillongallegos@hotmail.com','Renato Dillon','0984563479','A','2018-06-15 00:42:18','2018-06-15 00:42:18',3,3),(152,2,198,'correo@corre.com','Lopez','09909','A','2018-06-18 01:54:14','2018-06-18 01:54:14',2,2),(153,2,198,'lopez@cla.com','Pagina','1231','A','2018-06-18 01:57:33','2018-06-18 01:57:33',2,2),(154,2,198,'loppez@llol.com','Cristhian','0990901765','A','2018-06-18 02:29:17','2018-06-18 02:29:17',-1,-1),(155,2,198,'lopez@looll.com','Cristhian','0990901765','A','2018-06-18 02:33:15','2018-06-18 02:33:15',-1,-1),(156,2,198,'lipez@loolop.com','Cristhian','0990901765','A','2018-06-18 02:34:28','2018-06-18 02:34:28',-1,-1),(157,2,198,'thian@correo.com','Thian','0990901765','A','2018-06-18 02:43:57','2018-06-18 02:43:57',-1,-1),(158,2,198,'thianlopezz@gmail','thian','','A','2018-06-18 04:07:26','2018-06-18 04:07:26',-1,-1),(159,2,198,'sortiz.710106@guest.booking.com','Susana Ortiz ','+593980157845','A','2018-06-18 20:55:02','2018-06-18 20:55:02',3,3),(160,2,261,'mkunze.778473@guest.booking.com','Maximilian Kunze','+491738371306','A','2018-06-23 00:20:06','2018-06-23 00:20:06',3,3),(161,2,198,'allere.932530@guest.booking.com','Andrea Llerena ','+593984524751','A','2018-06-23 00:28:06','2018-06-23 00:28:06',3,3),(162,2,198,'ferchabla@hotmail.com','Mirella Chabla','099 509 7986','A','2018-06-25 02:19:43','2018-06-25 02:19:43',2,2),(163,2,198,'nfrank.199837@guest.booking.com','Nicolas Alvarez Frank','0996509628','A','2018-06-25 13:54:46','2018-06-25 13:54:46',2,2),(164,2,198,'corinna_westphal@web.de','Corinna Westphal ','+491703269938','A','2018-06-25 16:51:45','2018-06-25 16:51:45',3,3),(165,2,365,'mbeine.267150@guest.booking.com','Marc Beiner ','98456874 ','A','2018-06-28 22:40:46','2018-06-28 22:40:46',3,3),(166,2,384,'dwalto.406748@guest.booking.com','Dean Walton','+447849954094','A','2018-06-28 22:51:45','2018-06-28 22:51:45',3,3),(167,2,198,'jespin.848946@guest.booking.com','Jeniffer Ortega Espinoza ','+593 98 661 543','A','2018-06-30 15:56:40','2018-06-30 15:56:40',3,3),(168,2,385,'ddunlo.762796@guest.bookin.com','Derek Dunlop','+1 203 564 0799','A','2018-06-30 17:41:12','2018-06-30 17:41:12',2,2),(169,2,261,'mareike@booking.com','Mareike Groben','4915140540095','A','2018-07-02 20:52:31','2018-07-02 20:52:31',3,3),(170,2,198,'kolall.177171@guest.booking.com','KARINA OLALLA','+593983267315','A','2018-07-02 23:18:34','2018-07-02 23:18:34',3,3),(171,2,198,'kafrodyt@hotmail.com','Karina Olalla','0983267315','A','2018-07-02 23:22:10','2018-07-02 23:22:10',3,3),(172,2,198,'grace@airbnb.com','Grace Carrillo Silva','0996184621','A','2018-07-03 05:10:22','2018-07-03 05:10:22',3,3),(173,2,198,'luisamaria-2888@hotmail.com','LUISA CANON','','A','2018-07-03 23:45:31','2018-07-03 23:45:31',3,3),(174,2,198,'tam@airbnb.com','TAM PIROZZO','+61430393717','A','2018-07-05 12:53:16','2018-07-05 12:53:16',3,3),(175,2,261,'jdanne.672727@guest.booking.com','JULIA DANNER','+491714952455','A','2018-07-05 23:31:52','2018-07-05 23:31:52',3,3),(176,2,198,'gingeraa@hotmail.com','GEAN FRANCO CHIAPELLO','0996242834','A','2018-07-06 12:55:54','2018-07-06 12:55:54',3,3),(177,2,385,'as@booking.com','KISSEL CAROLINA ROMERO ','+151125789782','A','2018-07-07 13:15:41','2018-07-07 13:15:41',3,3),(178,2,198,'ggingeraguirre@hotmail.com','GINGER AGUIRRE','0996242834','A','2018-07-07 13:22:11','2018-07-07 13:22:11',3,3),(179,2,198,'galeducation@hotmail.com','Robert Ramirez','0997069320','A','2018-07-10 15:59:06','2018-07-10 15:59:06',3,3),(180,2,198,'juancasev@yahoo.com','JUAN CARLOS SISALEMA','0984266471','A','2018-07-10 20:24:13','2018-07-10 20:24:13',3,3),(181,2,198,'tampirozo@airbnb.com','TAM PIROZZO','+614303937117','A','2018-07-14 23:52:56','2018-07-14 23:52:56',3,3),(182,2,198,'jdiaz_db@yahoo.com','Jaime Diaz','0998832996','A','2018-07-15 23:23:12','2018-07-15 23:23:12',3,3),(183,2,198,'morelia@booking.com','MORELIA ESTUPIÑAN','0969591401','A','2018-07-16 00:37:43','2018-07-16 00:37:43',3,3),(184,2,198,'morelia.estupinan.2016@gmail.com','Morelia Estupiñan x2','0969591401','A','2018-07-16 00:54:20','2018-07-16 00:54:20',3,3),(185,2,198,'julixi.pa@gmail.com','JULIXI PLAZA','09811048004','A','2018-07-19 00:52:56','2018-09-07 03:29:08',3,3),(186,2,198,'matheuspuero@gmail.com','Ivan Puero','0959756087','A','2018-07-26 23:21:57','2018-07-26 23:21:57',3,3),(187,2,198,'diegoceci@hotmail.com','DIEGO VEGA','0999246187','A','2018-07-29 02:49:46','2018-07-29 02:49:46',3,3),(188,2,198,'dra.alexandraorellanahenriquez@gmail.com','ALEXANDRA ORELLANA','0990975515','A','2018-08-03 01:30:30','2018-08-03 01:30:30',3,3),(189,2,198,'d_estefania_27_@hotmail.com','ESTEFANIA VALDIVIEZO','0983046301','A','2018-08-03 16:41:35','2018-08-03 16:41:35',3,3),(190,2,198,'lenagdllera83@gmail.com',' LENA GONZALES DE LA LLERA','0995110604','A','2018-08-04 13:14:14','2018-08-04 13:14:14',3,3),(191,2,198,'andresmon@booking.om','ANDRES MONTENEGRO','0996326514','A','2018-08-06 22:54:22','2018-08-06 22:54:22',3,3),(192,2,198,'julioorellanna@hotmail.com','JULIO ORELLANA','0991587294','A','2018-08-07 01:03:14','2018-08-07 01:03:14',3,3),(193,2,198,'jame@bookin.gom','JAMES BISHOP','+447929456326','A','2018-08-07 21:48:52','2018-08-07 21:48:52',3,3),(194,2,198,'kristine@booking.com','KRISTINA SIBBLIES','+593992288494','A','2018-08-14 13:51:28','2018-08-14 13:51:28',3,3),(195,2,230,'colby@airbnb.com','COLBY ZUBACK','+34645609523','A','2018-08-14 21:14:19','2018-08-14 21:14:19',3,3),(196,2,198,'ericka@booking.com','ERICKA LEON ESPINOZA','0','A','2018-08-22 15:29:26','2018-08-22 15:29:26',3,3),(197,2,230,'peter@booking.com','PETER GUERCIO','','A','2018-08-22 15:35:46','2018-08-22 15:35:46',3,3),(198,2,385,'elizabeth@airbnb.com','ELIZABETH G','+3479970085','A','2018-08-22 15:47:36','2018-08-22 15:47:36',3,3),(199,2,198,'ben.henriquez@outlook.com','SEGUNDO BENJAMIN HENRIQUEZ DI LORENZO','0983379694','A','2018-08-23 01:16:44','2018-08-23 01:16:44',3,3),(200,2,198,'lunacastro_24@hotmail.com','ERICKA CASTRO SANCHEZ','0978612697','A','2018-08-29 01:58:37','2018-08-29 01:58:37',3,3),(201,2,198,'carlitos_xvg@hotmail.com','Ericka Castro ','0978612697','A','2018-08-29 22:24:19','2018-08-29 22:24:19',3,3),(202,2,198,'oah@booking.ocm','Oahn Tran','2935640799','A','2018-09-05 13:26:58','2018-09-05 13:26:58',3,3),(203,2,198,'jose@booking.com','Jose Luis Laserna','0998337171','A','2018-09-05 13:29:38','2018-09-05 13:29:38',3,3),(204,2,198,'ricardo@booking.com','RICARDO SANTOS','0968751147','A','2018-09-05 13:32:53','2018-09-05 13:32:53',3,3),(205,2,198,'andrearecalde18@hotmail.com','ANDREA RECALDE BYRON FONSECA','09911261117','A','2018-09-05 13:43:31','2018-09-05 13:43:31',3,3),(206,2,198,'edwin@airbnb.com','EDWIN NARVAEZ','593992777687','A','2018-09-07 03:22:04','2018-09-07 03:22:04',3,3),(207,2,198,'jennifervelez.14@hotmail.com','Jennifer Vélez','0979411581','A','2018-09-08 00:32:09','2018-09-08 00:32:09',3,3),(208,2,198,'marthaiess@outlook.com','MAGALI ESPINOZA LUNA','0981395165','A','2018-09-08 01:03:34','2018-09-08 01:03:34',3,3),(209,2,198,'alejanda@airbnb','Alejandra Garcia  Medina','0999181927','A','2018-09-08 18:15:57','2018-09-08 18:15:57',3,3),(210,2,198,'shana@airbnb.com','SHAWNA MC GREW','+14156813544','A','2018-09-08 18:51:52','2018-09-08 18:51:52',3,3),(211,2,366,'fredrik@airbnb.com','FREDRIK VON BEETZEN','+46737392531','A','2018-09-08 19:33:37','2018-09-08 19:33:37',3,3),(212,2,261,'romy@airbnb.com',' ROMY LINDENBERG','+491799744237','A','2018-09-08 19:39:19','2018-09-08 19:39:19',3,3),(213,2,198,'silvia@airbnb.com','SILVIA GLAS','0996242727','A','2018-09-08 19:43:47','2018-09-08 19:43:47',3,3),(214,2,308,'karen@airbnb.com','KAREN MARTINEZ','000000000','A','2018-09-08 19:49:19','2018-09-08 19:49:19',3,3),(215,2,205,'carlos@airbnb.com',' CARLOS GOLIJOW','+5492216036773','A','2018-09-08 19:53:51','2018-09-08 19:53:51',3,3),(217,2,198,'licho_91@hotmail.es','Lisette Enriquez','0988342946','A','2018-09-19 00:14:26','2018-09-19 00:14:26',3,3),(218,2,198,'ronnyfranco@booking.com','Ronny Franco','0960942477','A','2018-09-19 13:47:14','2018-09-19 13:47:14',3,3),(219,2,198,'csc-karito@hotmail.com','Carolina Silva Cepeda','0982249495','A','2018-09-19 21:41:59','2018-09-19 21:41:59',3,3),(220,2,198,'dianita1820@hotmail.es','Diana Abril','0988694896','A','2018-09-23 17:57:41','2018-09-23 17:57:41',3,3),(221,2,384,'peter@airbnb.com','Perfectweek MacKeown','0','A','2018-09-24 00:01:12','2018-09-24 00:01:12',3,3),(222,2,198,'radicalfringe13@hotmail.com','ROMY SANCHEZ','0983436427','A','2018-09-26 23:26:45','2018-09-26 23:26:45',3,3),(223,2,198,'info@cuencabestours.com','ALEXANDRA TINOCO','0993115136','A','2018-09-28 20:51:31','2018-09-28 20:51:31',3,3),(224,2,198,'diego@airbnb.com','Diego Lopez','0','A','2018-09-29 00:17:04','2018-09-29 00:17:04',3,3),(225,2,198,'manolo@airbnb.com','MANOLO ROMERO','0','A','2018-10-04 22:40:44','2018-10-04 22:40:44',3,3),(226,2,198,'niki@airbnb','nikita','0','A','2018-10-08 15:26:49','2018-10-08 15:26:49',3,3),(227,2,198,'esornozac@gmail.com','Emilio sonoza','0994968772','A','2018-10-08 17:04:03','2018-10-08 17:04:03',3,3),(228,2,198,'romeo_sant@hotmail.com','Rodolfo Santos Villavicencio','0967563657','A','2018-10-13 18:26:15','2018-10-13 18:26:15',3,3),(229,2,230,'renee@booking.com','Renee Richard','0','A','2018-10-17 22:29:19','2018-10-17 22:29:19',3,3),(230,2,361,'victoria@booking.com','Victoria Sanchez','+3468307814','A','2018-10-17 22:39:05','2018-10-17 22:39:05',3,3),(231,2,297,'melisa@booking.com','Melissa Joone','0','A','2018-10-19 20:04:26','2018-10-19 20:04:26',3,3),(232,2,198,'franciso@booking.com','Francisco Coronel','0989860489','A','2018-10-19 20:08:36','2018-10-19 20:08:36',3,3),(233,2,230,'david@airbnb.com','David Decker','0','A','2018-10-21 20:52:24','2018-10-21 20:52:24',3,3),(234,2,367,'pierre@booking.com','Pierre-André Maureira','+41787590269','A','2018-10-21 21:13:57','2018-10-21 21:30:31',3,3),(235,2,367,'david@booking.com','David Fleischmann','+41792352016','A','2018-10-21 21:18:46','2018-10-21 21:18:46',3,3),(236,2,198,'arias@fiscalia.gob.ec','Grace Arias','0992819546','A','2018-10-22 00:52:38','2018-10-22 00:52:38',3,3),(237,2,198,'ariasg@fiscalia.gob.ec','Grace Arias','0992819546','A','2018-10-22 00:58:40','2018-10-22 00:58:40',3,3),(238,2,198,'andres@booking.com','Andres Ochoa','0','A','2018-10-22 15:59:02','2018-10-22 15:59:02',3,3),(239,2,198,'nataliharo@hotmail.com','Maribel HARO X2','0988089467','A','2018-10-23 20:42:09','2018-10-23 20:42:09',3,3),(240,2,198,'emoratoral@hotmail.com','ENRIQUE MORA','0998261314','A','2018-10-24 02:51:45','2018-10-24 18:15:19',3,3),(241,2,198,'ivan@booking.com','Ivan andres salazar henk','0991708488','A','2018-10-24 16:18:06','2018-10-24 16:18:06',3,3),(242,2,198,'andresochoa@airbnb.com','Andres Ochoa','0','A','2018-10-24 16:36:23','2018-10-24 16:36:23',3,3),(243,2,198,'jennyeraguirre@booking.com','Jennyfer aguirre','0983756776','A','2018-10-24 18:19:02','2018-10-24 18:19:02',3,3),(244,2,198,'jpguerra6@hotmail.com','Cesar Guerra Argudo','0997925840','A','2018-10-24 22:36:02','2018-10-24 22:36:02',3,3),(245,2,198,'karla@hotmail.com','karla make ecuador','0','A','2018-10-25 00:24:05','2018-10-25 00:24:05',3,3),(246,2,198,'denisse@booking.com','Denisse Almachi','0','A','2018-10-25 20:33:38','2018-10-25 20:33:38',3,3),(247,2,198,'javier.francisco@hotmail.com','Javier Salcedo','0980189034','A','2018-10-25 21:47:35','2018-10-25 21:47:35',3,3),(248,2,207,'robyn@booking.com','Robyn Gunning','0','A','2018-10-27 00:11:50','2018-10-27 00:11:50',3,3),(249,2,198,'galapagoslie@hotmail.com','Joseph agencia','0980027691','A','2018-10-27 00:16:15','2018-10-27 00:16:15',3,3),(250,2,198,'pamela@booking.com','Pamela Rodriguez','0','A','2018-10-27 16:43:40','2018-10-27 16:43:40',3,3),(251,2,385,'carmen@airbnb.com','Carmen&juan','0','A','2018-10-27 16:49:54','2018-10-27 16:49:54',3,3),(252,2,198,'walter@hotmail.com','Walter Eduardo','0','A','2018-10-28 22:29:31','2018-10-28 22:29:31',3,3),(253,2,385,'kayla@booking.com','Kayla Buttress','+12509812052','A','2018-10-28 23:34:47','2018-10-28 23:34:47',3,3),(254,2,198,'carla@booking.com','Carla Pillajo','0','A','2018-10-29 01:30:57','2018-10-29 01:30:57',3,3),(255,2,235,'sebastian@booking.com','Juan Sebastian Morales','0','A','2018-10-29 19:32:43','2018-10-29 19:32:43',3,3),(256,2,361,'alejandro@booking.com','Alejandro Unda Garcia','0','A','2018-10-29 20:19:05','2018-10-29 20:20:06',3,3),(257,2,261,'tina@booking.com','Tina Theesfeld','0','A','2018-10-29 22:52:38','2018-10-29 22:52:38',3,3),(258,2,198,'andrea@booking.com','ANDREA RECALDE BYRON FONSECA','0','A','2018-10-30 00:41:47','2018-10-30 00:41:47',3,3),(259,2,198,'salome_7emz@hotmail.com','Edith Salome Molina','0967791465','A','2018-10-31 22:01:57','2018-10-31 22:01:57',3,3),(260,2,198,'allen@booking.com','Lakeisha Allen','0','A','2018-11-01 01:58:07','2018-11-01 01:58:07',3,3),(261,2,384,'thomas@booking.com','Thomas Van Eker','0','A','2018-11-01 02:05:43','2018-11-01 02:05:43',3,3),(262,2,320,'marjolein@booking.com','Marjolein Felius','0','A','2018-11-01 18:23:55','2018-11-01 18:23:55',3,3),(263,2,198,'jessicamiranda@booking.com','Johanna Maribel Olmos Tufiño','0','A','2018-11-03 18:07:17','2018-11-03 18:16:53',3,3),(264,2,385,'sabrina@booking.com','Sabrina Oudin','0','A','2018-11-03 18:34:00','2018-11-03 18:34:00',3,3),(265,2,207,'kadin@airbnb.com','Kadin Lucas','0','A','2018-11-03 18:50:16','2018-11-03 18:50:16',3,3),(266,2,367,'silvana@booking.com','Silvana Sonder','0','A','2018-11-03 21:19:01','2018-11-03 21:19:01',3,3),(267,2,261,'cris@booking.com','Cris Czerwinski','0','A','2018-11-03 23:16:11','2018-11-03 23:16:11',3,3),(268,2,385,'joseosorio@booking.com','Jose Osorio','0','A','2018-11-04 01:23:02','2018-11-04 01:23:02',3,3),(269,2,261,'heike@booking.com','Heike Scheben','0','A','2018-11-04 18:39:52','2018-11-04 18:39:52',3,3),(270,2,198,'karen@booking.com','Karen Lainez','0986325382','A','2018-11-04 21:52:24','2018-11-04 21:52:24',3,3),(271,2,198,'tatiana@booking.com','Tatiana Tamayo','0982175896','A','2018-11-05 17:00:17','2018-11-05 17:00:17',3,3),(272,2,198,'maria.sarmiento@casagrande.edu.ec','Maria Sarmiento','0984890742','A','2018-11-06 13:20:54','2018-11-06 13:20:54',3,3),(273,2,198,'erika@booking.com','Erika Arosemena','0','A','2018-11-06 21:31:06','2018-11-06 21:31:06',3,3),(274,2,198,'gaby-garces@hotmail.com','Gabriela Garces','0984088504','A','2018-11-07 00:17:42','2018-11-07 00:17:42',3,3),(275,2,261,'marcel@booking.com','Marcel Biedermann','+491727957803','A','2018-11-07 00:21:55','2018-11-07 00:21:55',3,3),(276,2,198,'estefania@booking.com','Estefania Vaca','0988770268','A','2018-11-07 15:10:52','2018-11-07 15:10:52',3,3),(277,2,385,'hernan.portilla@sbcglobal.net','Hernan Portilla','0','A','2018-11-07 21:18:51','2018-11-07 21:18:51',3,3),(278,2,198,'elvis@booking.com','Elvis Delgado','0998856133','A','2018-11-07 21:43:24','2018-11-07 21:43:24',3,3),(279,2,198,'gabriela@booking.com','Gabriela Garces','0','A','2018-11-08 02:47:30','2018-11-08 02:47:30',3,3),(280,2,205,'carolina@booking.com','Carolina Villafane','0','A','2018-11-08 16:51:52','2018-11-12 17:00:25',3,3),(281,2,261,'ricarda@booking.com','Ricarda Wilms','0','A','2018-11-08 21:43:55','2018-11-08 21:43:55',3,3),(282,2,198,'sese.23@booking.com','Señor','0','A','2018-11-09 00:21:39','2018-11-09 00:21:39',3,3),(283,2,320,'friso@booking.com','Friso Resink','0','A','2018-11-09 00:28:59','2018-11-09 00:28:59',3,3),(284,2,198,'luminustravel@gmail.com',' LUMINUS TRAVEL','0995320560','A','2018-11-09 12:34:27','2018-11-09 12:34:27',3,3),(285,2,261,'katja@booking.com','Katja Scheffler','0','A','2018-11-11 02:36:41','2018-11-11 02:36:41',3,3),(286,2,367,'sten@booking.com','Sten Roodenburg','0','A','2018-11-12 15:10:45','2018-11-12 15:10:45',3,3),(287,2,198,'luis_gabc@hotmail.com','Luis Castro','0987294227','A','2018-11-12 20:29:08','2018-11-12 20:30:12',3,3),(288,2,198,'rodolfo@booking.com','Rodolfo Baquerizo','0999612410','A','2018-11-12 22:19:35','2018-11-12 22:19:35',3,3),(289,2,361,'javier@booking.com','Javier Valerdi','','A','2018-11-13 18:10:40','2018-11-13 18:10:40',3,3),(290,2,198,'martin@booking.com','Martin Carpio','0','A','2018-11-14 17:28:52','2018-11-14 17:28:52',3,3),(291,2,359,'kyeongharho@booking.com','Kyeongha Rho','0','A','2018-11-14 17:46:38','2018-11-14 17:46:38',3,3),(292,2,198,'stuart@airbnb','Stuart Perkins','','A','2018-11-15 19:28:04','2018-11-15 19:28:04',3,3),(293,2,198,'paul@booking.com','Paul Peralta','0','A','2018-11-16 15:38:30','2018-11-16 15:38:30',3,3),(294,2,361,'esteban@booking.com','Esteban Gonzalez Rosado','0','A','2018-11-17 18:23:20','2018-11-17 18:23:20',3,3),(295,2,198,'hola@ecudevs.com','Ecudevs','0990901765','I','2018-12-06 00:40:06','2018-12-06 00:41:41',2,2),(296,2,198,'hola@ecudevs.com','Thian','099','A','2018-12-06 00:42:01','2018-12-06 00:42:01',2,2),(297,2,198,'carlosldel90@hotmail.com','Alberto Lopez','09999099999','A','2018-12-27 18:05:39','2018-12-27 18:05:39',2,2);
/*!40000 ALTER TABLE `pasajero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `porhabitacion`
--

DROP TABLE IF EXISTS `porhabitacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `porhabitacion` (
  `idHabitacion` int(11) NOT NULL,
  `idReserva` int(11) NOT NULL,
  `idtarifa` int(11) DEFAULT NULL,
  `feDesde` datetime NOT NULL,
  `feHasta` datetime NOT NULL,
  `tarifa` decimal(8,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`idHabitacion`,`idReserva`),
  KEY `fk_porHabitacion_habitacion1_idx` (`idHabitacion`),
  KEY `fk_porHabitacion_reserva1_idx` (`idReserva`),
  KEY `FK_porhabitacion_idtarifa` (`idtarifa`),
  CONSTRAINT `fk_porHabitacion_habitacion1` FOREIGN KEY (`idHabitacion`) REFERENCES `habitacion` (`id`),
  CONSTRAINT `fk_porHabitacion_reserva1` FOREIGN KEY (`idReserva`) REFERENCES `reserva` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=1638 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `porhabitacion`
--

LOCK TABLES `porhabitacion` WRITE;
/*!40000 ALTER TABLE `porhabitacion` DISABLE KEYS */;
INSERT INTO `porhabitacion` VALUES (7,103,NULL,'2017-10-17 00:00:00','2017-10-21 00:00:00',30.00),(7,104,NULL,'2017-10-14 00:00:00','2017-10-18 00:00:00',30.00),(7,105,NULL,'2017-10-14 00:00:00','2017-10-17 00:00:00',30.00),(7,106,NULL,'2017-10-20 00:00:00','2017-10-24 00:00:00',30.00),(7,107,NULL,'2017-10-14 00:00:00','2017-10-18 00:00:00',30.00),(7,108,NULL,'2017-10-14 00:00:00','2017-10-17 00:00:00',35.00),(7,109,NULL,'2017-10-15 00:00:00','2017-10-19 00:00:00',30.00),(7,112,NULL,'2017-10-21 00:00:00','2017-10-24 00:00:00',30.00),(7,113,NULL,'2017-10-21 00:00:00','2017-10-24 00:00:00',30.00),(7,114,NULL,'2017-10-26 00:00:00','2017-10-29 00:00:00',30.00),(7,115,NULL,'2017-10-30 00:00:00','2017-10-31 00:00:00',30.00),(7,116,NULL,'2017-10-22 00:00:00','2017-10-23 00:00:00',30.00),(7,117,NULL,'2017-10-24 00:00:00','2017-10-25 00:00:00',30.00),(7,118,NULL,'2017-10-20 00:00:00','2017-10-23 00:00:00',30.00),(7,120,NULL,'2017-10-17 00:00:00','2017-10-20 00:00:00',30.00),(7,121,NULL,'2017-10-17 00:00:00','2017-10-20 00:00:00',30.00),(7,125,NULL,'2017-11-06 00:00:00','2017-11-09 00:00:00',30.00),(7,126,NULL,'2017-11-28 00:00:00','2017-11-30 00:00:00',30.00),(7,127,NULL,'2018-01-13 00:00:00','2018-01-14 00:00:00',30.00),(7,128,NULL,'2018-01-03 00:00:00','2018-01-02 00:00:00',30.00),(7,135,NULL,'2018-01-07 00:00:00','2018-01-10 00:00:00',30.00),(7,136,NULL,'2018-01-07 00:00:00','2018-01-11 00:00:00',30.00),(7,137,2,'2018-01-16 00:00:00','2018-01-21 00:00:00',25.00),(7,138,NULL,'2018-01-09 21:07:38','2018-01-24 00:00:00',25.00),(7,139,NULL,'2018-01-09 21:07:58','2018-01-10 00:00:00',25.00),(7,140,2,'2018-01-10 00:00:00','2018-01-13 00:00:00',25.00),(7,142,2,'2018-01-16 00:00:00','2018-01-20 00:00:00',25.00),(7,147,4,'2018-01-16 00:00:00','2018-01-19 00:00:00',45.00),(7,187,13,'2018-03-24 00:00:00','2018-03-24 00:00:00',40.00),(7,220,30,'2018-03-16 00:00:00','2018-03-18 00:00:00',40.00),(7,281,7,'2018-05-04 00:00:00','2018-05-03 00:00:00',55.00),(7,355,64,'2018-08-10 00:00:00','2018-08-11 00:00:00',55.00),(7,503,NULL,'2018-12-11 00:00:00','2018-12-13 00:00:00',0.00),(7,504,NULL,'2018-12-16 00:00:00','2018-12-18 00:00:00',0.00),(7,505,71,'2018-12-27 00:00:00','2018-12-29 00:00:00',75.00),(7,506,0,'2018-12-26 00:00:00','2018-12-28 00:00:00',0.00),(13,110,NULL,'2017-10-13 00:00:00','2017-10-15 00:00:00',57.00),(13,122,NULL,'2017-10-16 00:00:00','2017-10-15 00:00:00',30.00),(13,127,NULL,'2018-01-13 00:00:00','2018-01-14 00:00:00',50.00),(13,128,NULL,'2018-01-03 00:00:00','2018-01-02 00:00:00',50.00),(13,129,NULL,'2018-01-05 00:00:00','2018-01-11 00:00:00',98.08),(13,134,NULL,'2018-01-07 00:00:00','2018-01-09 00:00:00',65.38),(13,146,2,'2018-01-18 00:00:00','2018-01-21 00:00:00',25.00),(13,155,4,'2018-03-06 00:00:00','2018-03-09 00:00:00',45.00),(13,159,8,'2018-02-12 00:00:00','2018-02-12 00:00:00',40.00),(13,160,4,'2018-03-06 00:00:00','2018-03-09 00:00:00',45.00),(13,170,15,'2018-03-17 00:00:00','2018-03-23 00:00:00',65.00),(13,174,4,'2018-02-19 00:00:00','2018-02-19 00:00:00',45.00),(13,175,4,'2018-02-19 00:00:00','2018-02-20 00:00:00',45.00),(13,176,4,'2018-02-21 00:00:00','2018-02-22 00:00:00',45.00),(13,180,4,'2018-02-25 00:00:00','2018-02-27 00:00:00',45.00),(13,182,4,'2018-02-25 00:00:00','2018-02-27 00:00:00',46.80),(13,187,11,'2018-03-24 00:00:00','2018-03-26 00:00:00',40.00),(13,193,4,'2018-04-27 00:00:00','2018-04-28 00:00:00',45.00),(13,195,2,'2018-03-02 00:00:00','2018-03-05 00:00:00',45.00),(13,205,32,'2018-03-11 00:00:00','2018-03-15 00:00:00',20.00),(13,208,2,'2018-03-16 00:00:00','2018-03-22 00:00:00',45.00),(13,210,2,'2018-04-29 00:00:00','2018-04-30 00:00:00',45.00),(13,214,33,'2018-09-04 00:00:00','2018-09-07 00:00:00',46.00),(13,215,33,'2018-04-10 00:00:00','2018-04-12 00:00:00',46.00),(13,224,13,'2018-03-24 00:00:00','2018-03-26 00:00:00',40.00),(13,226,29,'2018-04-13 00:00:00','2018-04-14 00:00:00',50.00),(13,231,4,'2018-03-20 00:00:00','2018-03-22 00:00:00',45.00),(13,232,36,'2018-05-01 00:00:00','2018-05-04 00:00:00',52.00),(13,244,36,'2018-03-27 00:00:00','2018-03-30 00:00:00',52.00),(13,255,36,'2018-04-04 00:00:00','2018-04-04 00:00:00',52.00),(13,258,36,'2018-07-04 00:00:00','2018-07-05 00:00:00',52.00),(13,266,33,'2018-05-10 00:00:00','2018-05-11 00:00:00',46.00),(13,277,2,'2018-05-27 00:00:00','2018-05-30 00:00:00',45.00),(13,286,26,'2018-06-07 00:00:00','2018-06-09 00:00:00',50.00),(13,287,54,'2018-05-18 00:00:00','2018-05-21 00:00:00',54.00),(13,292,56,'2018-06-03 00:00:00','2018-06-07 00:00:00',70.00),(13,297,2,'2018-06-10 00:00:00','2018-06-13 00:00:00',45.00),(13,299,26,'2018-06-13 00:00:00','2018-06-15 00:00:00',50.00),(13,308,58,'2018-06-17 00:00:00','2018-06-19 00:00:00',35.00),(13,324,26,'2018-09-14 00:00:00','2018-09-17 00:00:00',50.00),(13,328,26,'2018-06-28 00:00:00','2018-07-01 00:00:00',50.00),(13,330,26,'2018-07-10 00:00:00','2018-07-14 00:00:00',50.00),(13,332,26,'2018-09-18 00:00:00','2018-09-20 00:00:00',50.00),(13,340,62,'2018-07-07 00:00:00','2018-07-09 00:00:00',54.00),(13,342,59,'2018-07-24 00:00:00','2018-07-26 00:00:00',52.00),(13,343,64,'2018-11-06 00:00:00','2018-11-07 00:00:00',55.00),(13,345,2,'2018-07-29 00:00:00','2018-08-10 00:00:00',45.00),(13,346,64,'2018-08-27 00:00:00','2018-09-01 00:00:00',55.00),(13,363,2,'2018-08-11 00:00:00','2018-08-11 00:00:00',45.00),(13,368,46,'2018-09-12 00:00:00','2018-09-15 00:00:00',50.00),(13,370,70,'2018-08-27 00:00:00','2018-08-31 00:00:00',67.20),(13,381,2,'2018-09-08 00:00:00','2018-09-10 00:00:00',45.00),(13,405,7,'2018-09-21 00:00:00','2018-09-24 00:00:00',55.00),(13,407,12,'2018-09-28 00:00:00','2018-09-30 00:00:00',60.00),(13,412,76,'2019-01-18 00:00:00','2019-01-21 00:00:00',70.00),(13,414,95,'2018-12-29 00:00:00','2018-12-31 00:00:00',60.00),(13,429,80,'2018-11-03 00:00:00','2018-11-03 00:00:00',50.00),(13,430,108,'2018-11-03 00:00:00','2018-11-03 00:00:00',50.00),(13,434,108,'2018-11-02 00:00:00','2018-11-02 00:00:00',50.00),(13,435,108,'2018-11-05 00:00:00','2018-11-05 00:00:00',50.00),(13,442,78,'2018-10-30 00:00:00','2018-10-31 00:00:00',60.00),(13,443,71,'2018-10-25 00:00:00','2018-10-26 00:00:00',75.00),(13,448,105,'2018-10-28 00:00:00','2018-10-29 00:00:00',48.00),(13,467,108,'2019-04-16 00:00:00','2019-04-19 00:00:00',50.00),(13,473,105,'2019-01-02 00:00:00','2019-01-07 00:00:00',48.00),(13,484,108,'2018-11-09 00:00:00','2018-11-10 00:00:00',50.00),(13,486,78,'2018-11-12 00:00:00','2018-11-14 00:00:00',60.00),(13,488,109,'2018-12-04 00:00:00','2018-12-06 00:00:00',30.00),(13,496,95,'2018-11-20 00:00:00','2018-11-24 00:00:00',60.00),(15,111,NULL,'2017-10-13 00:00:00','2017-10-15 00:00:00',50.00),(15,123,NULL,'2017-10-18 00:00:00','2017-10-22 00:00:00',50.00),(15,131,NULL,'2018-01-06 00:00:00','2018-01-07 00:00:00',72.71),(15,144,2,'2018-01-14 00:00:00','2018-01-17 00:00:00',25.00),(15,156,4,'2018-03-06 00:00:00','2018-03-09 00:00:00',45.00),(15,159,8,'2018-02-12 00:00:00','2018-02-12 00:00:00',40.00),(15,173,4,'2018-02-19 00:00:00','2018-02-19 00:00:00',45.00),(15,181,4,'2018-02-25 00:00:00','2018-02-27 00:00:00',46.80),(15,190,24,'2018-02-26 00:00:00','2018-02-28 00:00:00',35.00),(15,196,2,'2018-03-02 00:00:00','2018-03-04 00:00:00',45.00),(15,200,29,'2018-03-20 00:00:00','2018-03-25 00:00:00',50.00),(15,203,24,'2018-03-16 00:00:00','2018-03-17 00:00:00',35.00),(15,211,31,'2018-03-15 00:00:00','2018-03-17 00:00:00',30.00),(15,228,38,'2018-04-24 00:00:00','2018-04-30 00:00:00',29.75),(15,229,4,'2018-03-18 00:00:00','2018-03-22 00:00:00',45.00),(15,259,36,'2018-07-04 00:00:00','2018-07-05 00:00:00',52.00),(15,264,36,'2018-04-10 00:00:00','2018-04-14 00:00:00',52.00),(15,274,25,'2018-05-09 00:00:00','2018-05-12 00:00:00',50.00),(15,311,NULL,'2001-04-02 00:00:00','2000-03-01 00:00:00',0.00),(15,314,NULL,'2018-06-24 00:00:00','2018-06-26 00:00:00',0.00),(15,317,NULL,'2018-06-17 00:00:00','2001-08-01 00:00:00',0.00),(15,320,NULL,'2018-06-19 00:00:00','2018-06-21 00:00:00',0.00),(16,110,NULL,'2017-10-13 00:00:00','2017-10-15 00:00:00',57.00),(16,124,NULL,'2017-10-17 00:00:00','2017-10-18 00:00:00',75.00),(16,131,NULL,'2018-01-06 00:00:00','2018-01-07 00:00:00',0.00),(16,132,NULL,'2018-01-06 00:00:00','2018-01-05 00:00:00',145.00),(16,133,NULL,'2018-01-06 00:00:00','2018-01-11 00:00:00',72.71),(16,158,5,'2018-03-06 00:00:00','2018-03-09 00:00:00',75.00),(16,187,13,'2018-03-25 00:00:00','2018-03-26 00:00:00',40.00),(16,189,2,'2018-04-07 00:00:00','2018-04-09 00:00:00',45.00),(16,197,2,'2018-03-02 00:00:00','2018-03-05 00:00:00',45.00),(16,201,29,'2018-03-20 00:00:00','2018-03-25 00:00:00',50.00),(16,204,30,'2018-03-16 00:00:00','2018-03-17 00:00:00',40.00),(16,212,2,'2018-08-10 00:00:00','2018-08-11 00:00:00',45.00),(16,216,5,'2018-04-14 00:00:00','2018-04-15 00:00:00',65.00),(16,217,5,'2018-04-15 00:00:00','2018-04-16 00:00:00',65.00),(16,218,5,'2018-04-15 00:00:00','2018-04-16 00:00:00',65.00),(16,219,14,'2018-04-21 00:00:00','2018-04-21 00:00:00',60.00),(16,226,36,'2018-04-13 00:00:00','2018-04-14 00:00:00',52.00),(16,232,26,'2018-05-01 00:00:00','2018-05-04 00:00:00',50.00),(16,238,41,'2018-04-17 00:00:00','2018-04-18 00:00:00',50.00),(16,241,26,'2018-03-26 00:00:00','2018-03-27 00:00:00',50.00),(16,242,41,'2018-04-01 00:00:00','2018-04-05 00:00:00',50.00),(16,243,41,'2018-05-15 00:00:00','2018-05-16 00:00:00',50.00),(16,252,26,'2018-05-08 00:00:00','2018-05-12 00:00:00',50.00),(16,256,26,'2018-05-10 00:00:00','2018-05-12 00:00:00',50.00),(16,260,26,'2018-09-07 00:00:00','2018-09-08 00:00:00',50.00),(16,262,26,'2018-06-17 00:00:00','2018-06-23 00:00:00',50.00),(16,265,26,'2018-04-24 00:00:00','2018-04-30 00:00:00',50.00),(16,267,26,'2018-09-22 00:00:00','2018-09-24 00:00:00',50.00),(16,268,26,'2018-04-27 00:00:00','2018-04-30 00:00:00',50.00),(16,288,29,'2018-05-18 00:00:00','2018-05-21 00:00:00',50.00),(16,296,26,'2018-06-06 00:00:00','2018-06-08 00:00:00',50.00),(16,298,2,'2018-06-10 00:00:00','2018-06-13 00:00:00',45.00),(16,301,2,'2018-06-11 00:00:00','2018-06-14 00:00:00',45.00),(16,302,26,'2018-08-25 00:00:00','2018-08-27 00:00:00',50.00),(16,303,26,'2018-08-16 00:00:00','2018-08-22 00:00:00',50.00),(16,305,26,'2018-07-14 00:00:00','2018-07-16 00:00:00',50.00),(16,306,2,'2018-06-18 00:00:00','2018-06-21 00:00:00',45.00),(16,312,NULL,'2001-04-02 00:00:00','2000-03-01 00:00:00',0.00),(16,313,NULL,'2018-06-24 00:00:00','2018-06-30 00:00:00',0.00),(16,315,NULL,'2018-06-24 00:00:00','2018-06-30 00:00:00',0.00),(16,323,26,'2018-06-27 00:00:00','2018-06-29 00:00:00',50.00),(16,329,26,'2018-06-30 00:00:00','2018-07-02 00:00:00',50.00),(16,338,2,'2018-08-02 00:00:00','2018-08-06 00:00:00',45.00),(16,339,26,'2018-07-10 00:00:00','2018-07-12 00:00:00',50.00),(16,340,61,'2018-07-07 00:00:00','2018-07-09 00:00:00',52.50),(16,341,63,'2018-07-10 00:00:00','2018-07-12 00:00:00',56.00),(16,349,65,'2018-07-26 00:00:00','2018-07-28 00:00:00',60.00),(16,354,NULL,'2018-08-22 00:00:00','2018-08-23 00:00:00',0.00),(16,360,NULL,'2018-08-15 00:00:00','2018-08-24 00:00:00',0.00),(16,374,26,'2018-09-14 00:00:00','2018-09-16 00:00:00',50.00),(16,375,26,'2018-09-14 00:00:00','2018-09-16 00:00:00',50.00),(16,377,26,'2018-09-14 00:00:00','2018-09-16 00:00:00',50.00),(16,378,2,'2018-09-20 00:00:00','2018-09-23 00:00:00',45.00),(16,383,26,'2018-09-10 00:00:00','2018-09-12 00:00:00',50.00),(16,415,98,'2018-12-29 00:00:00','2019-01-03 00:00:00',45.00),(16,420,92,'2018-12-04 00:00:00','2018-12-06 00:00:00',52.00),(16,421,103,'2018-12-18 00:00:00','2018-12-20 00:00:00',45.00),(16,436,103,'2018-11-02 00:00:00','2018-11-03 00:00:00',45.00),(16,444,103,'2018-10-27 00:00:00','2018-10-30 00:00:00',45.00),(16,456,110,'2018-11-06 00:00:00','2018-11-08 00:00:00',55.00),(16,457,110,'2018-11-01 00:00:00','2018-11-01 00:00:00',55.00),(16,461,108,'2018-11-03 00:00:00','2018-11-03 00:00:00',50.00),(16,465,103,'2018-11-04 00:00:00','2018-11-05 00:00:00',45.00),(16,474,110,'2018-11-09 00:00:00','2018-11-12 00:00:00',55.00),(16,477,110,'2019-01-06 00:00:00','2019-01-07 00:00:00',55.00),(16,479,103,'2019-03-17 00:00:00','2019-03-20 00:00:00',45.00),(17,130,NULL,'2018-01-06 00:00:00','2018-01-11 00:00:00',72.71),(17,145,2,'2018-01-16 00:00:00','2018-01-18 00:00:00',25.00),(17,149,10,'2018-01-18 00:00:00','2018-01-22 00:00:00',45.15),(17,151,8,'2018-01-30 00:00:00','2018-01-29 00:00:00',40.00),(17,158,6,'2018-03-06 00:00:00','2018-03-09 00:00:00',110.00),(17,160,4,'2018-03-06 00:00:00','2018-03-09 00:00:00',45.00),(17,161,15,'2018-02-16 00:00:00','2018-02-17 00:00:00',65.00),(17,167,7,'2018-02-14 00:00:00','2018-02-15 00:00:00',55.00),(17,169,7,'2018-02-14 00:00:00','2018-02-15 00:00:00',55.00),(17,177,6,'2018-02-21 00:00:00','2018-02-24 00:00:00',110.00),(17,178,21,'2018-02-21 00:00:00','2018-02-24 00:00:00',60.00),(17,179,15,'2018-03-17 00:00:00','2018-03-24 00:00:00',65.00),(17,185,2,'2018-02-25 00:00:00','2018-02-26 00:00:00',45.00),(17,194,26,'2018-04-27 00:00:00','2018-04-28 00:00:00',50.00),(17,198,4,'2018-03-04 00:00:00','2018-03-05 00:00:00',45.00),(17,199,28,'2018-05-25 00:00:00','2018-05-26 00:00:00',54.00),(17,206,5,'2018-03-16 00:00:00','2018-03-21 00:00:00',65.00),(17,207,5,'2018-03-22 00:00:00','2018-03-23 00:00:00',65.00),(17,213,4,'2018-03-10 00:00:00','2018-03-11 00:00:00',45.00),(17,222,5,'2018-03-25 00:00:00','2018-03-31 00:00:00',65.00),(17,227,37,'2018-04-30 00:00:00','2018-05-01 00:00:00',42.50),(17,233,39,'2018-03-24 00:00:00','2018-03-26 00:00:00',80.00),(17,251,43,'2018-04-10 00:00:00','2018-04-16 00:00:00',45.90),(17,253,44,'2018-03-31 00:00:00','2018-04-04 00:00:00',70.00),(17,254,46,'2018-04-04 00:00:00','2018-04-09 00:00:00',50.00),(17,272,2,'2018-06-08 00:00:00','2018-06-11 00:00:00',45.00),(17,273,49,'2018-06-01 00:00:00','2018-06-04 00:00:00',75.00),(17,275,49,'2018-05-04 00:00:00','2018-05-06 00:00:00',75.00),(17,276,50,'2018-05-10 00:00:00','2018-05-12 00:00:00',57.00),(17,282,49,'2018-05-07 00:00:00','2018-05-10 00:00:00',75.00),(17,283,47,'2018-06-26 00:00:00','2018-06-27 00:00:00',57.00),(17,294,57,'2018-06-06 00:00:00','2018-06-06 00:00:00',60.00),(17,318,NULL,'2018-06-17 00:00:00','2001-08-01 00:00:00',0.00),(17,325,NULL,'2018-07-19 00:00:00','2018-07-21 00:00:00',0.00),(17,327,36,'2018-07-01 00:00:00','2018-07-06 00:00:00',52.00),(17,331,57,'2018-07-12 00:00:00','2018-07-15 00:00:00',65.00),(17,345,2,'2018-07-29 00:00:00','2018-08-10 00:00:00',45.00),(17,347,57,'2018-08-27 00:00:00','2018-09-01 00:00:00',65.00),(17,353,NULL,'2018-08-19 00:00:00','2018-08-20 00:00:00',0.00),(17,356,44,'2018-08-11 00:00:00','2018-08-16 00:00:00',70.00),(17,369,22,'2018-08-22 00:00:00','2018-08-24 00:00:00',52.00),(17,372,29,'2018-09-14 00:00:00','2018-09-16 00:00:00',50.00),(17,384,57,'2018-09-11 00:00:00','2018-09-14 00:00:00',65.00),(17,385,85,'2018-10-28 00:00:00','2018-10-31 00:00:00',72.80),(17,389,4,'2018-09-21 00:00:00','2018-09-23 00:00:00',45.00),(17,391,4,'2018-09-22 00:00:00','2018-09-26 00:00:00',45.00),(17,406,44,'2018-09-28 00:00:00','2018-09-30 00:00:00',70.00),(17,411,NULL,'2018-12-21 00:00:00','2018-12-24 00:00:00',0.00),(17,417,94,'2018-10-08 00:00:00','2018-10-08 00:00:00',70.00),(17,419,99,'2019-01-11 00:00:00','2019-01-12 00:00:00',67.20),(17,424,96,'2019-02-03 00:00:00','2019-02-04 00:00:00',65.00),(17,431,101,'2018-11-06 00:00:00','2018-11-07 00:00:00',50.00),(17,437,101,'2018-10-24 00:00:00','2018-10-26 00:00:00',50.00),(17,438,100,'2018-11-02 00:00:00','2018-11-05 00:00:00',60.00),(17,439,100,'2018-11-18 00:00:00','2018-11-21 00:00:00',60.00),(17,440,74,'2018-11-23 00:00:00','2018-11-26 00:00:00',60.00),(17,446,99,'2018-11-27 00:00:00','2018-11-29 00:00:00',67.20),(17,451,100,'2018-12-29 00:00:00','2019-01-01 00:00:00',60.00),(17,454,101,'2018-11-01 00:00:00','2018-11-01 00:00:00',50.00),(17,462,73,'2018-11-11 00:00:00','2018-11-12 00:00:00',65.00),(17,463,101,'2018-12-18 00:00:00','2018-12-18 00:00:00',50.00),(17,466,73,'2018-11-08 00:00:00','2018-11-08 00:00:00',65.00),(17,473,100,'2019-01-04 00:00:00','2019-01-07 00:00:00',60.00),(17,487,100,'2018-11-16 00:00:00','2018-11-16 00:00:00',60.00),(18,110,NULL,'2017-10-13 00:00:00','2017-10-15 00:00:00',57.00),(18,129,NULL,'2018-01-05 00:00:00','2018-01-11 00:00:00',0.00),(18,134,NULL,'2018-01-07 00:00:00','2018-01-09 00:00:00',65.38),(18,150,4,'2018-01-18 00:00:00','2018-01-20 00:00:00',45.00),(18,152,NULL,'2018-02-01 00:00:00','2018-02-02 00:00:00',45.00),(18,157,8,'2018-03-02 00:00:00','2018-03-10 00:00:00',40.00),(18,168,4,'2018-02-21 00:00:00','2018-02-24 00:00:00',45.00),(18,171,4,'2018-02-16 00:00:00','2018-02-18 00:00:00',45.00),(18,172,4,'2018-02-17 00:00:00','2018-02-19 00:00:00',45.00),(18,184,4,'2018-02-25 00:00:00','2018-02-27 00:00:00',46.80),(18,186,2,'2018-04-30 00:00:00','2018-05-03 00:00:00',45.00),(18,188,23,'2018-03-13 00:00:00','2018-03-18 00:00:00',45.00),(18,191,2,'2018-05-04 00:00:00','2018-05-07 00:00:00',45.00),(18,192,2,'2018-06-07 00:00:00','2018-06-10 00:00:00',45.00),(18,202,29,'2018-03-20 00:00:00','2018-03-25 00:00:00',50.00),(18,230,4,'2018-03-18 00:00:00','2018-03-19 00:00:00',45.00),(18,254,45,'2018-04-04 00:00:00','2018-04-09 00:00:00',60.00),(18,257,7,'2018-05-19 00:00:00','2018-05-21 00:00:00',55.00),(18,263,46,'2018-04-12 00:00:00','2018-04-19 00:00:00',50.00),(18,269,33,'2018-04-19 00:00:00','2018-04-27 00:00:00',46.00),(18,270,46,'2018-12-29 00:00:00','2018-12-30 00:00:00',50.00),(18,271,2,'2018-05-10 00:00:00','2018-05-16 00:00:00',45.00),(18,279,2,'2018-06-19 00:00:00','2018-06-21 00:00:00',45.00),(18,285,46,'2018-05-28 00:00:00','2018-05-30 00:00:00',50.00),(18,289,55,'2018-05-19 00:00:00','2018-05-21 00:00:00',25.00),(18,291,36,'2018-06-03 00:00:00','2018-06-06 00:00:00',52.00),(18,300,36,'2018-06-29 00:00:00','2018-07-01 00:00:00',52.00),(18,303,36,'2018-08-16 00:00:00','2018-08-22 00:00:00',52.00),(18,304,36,'2018-07-14 00:00:00','2018-07-16 00:00:00',52.00),(18,307,2,'2018-06-18 00:00:00','2018-06-18 00:00:00',45.00),(18,314,NULL,'2018-06-24 00:00:00','2018-06-26 00:00:00',0.00),(18,326,NULL,'2018-08-02 00:00:00','2018-08-09 00:00:00',0.00),(18,335,2,'2018-07-24 00:00:00','2018-07-27 00:00:00',45.00),(18,339,26,'2018-07-10 00:00:00','2018-07-12 00:00:00',50.00),(18,341,63,'2018-07-10 00:00:00','2018-07-12 00:00:00',56.00),(18,344,2,'2018-07-18 00:00:00','2018-07-20 00:00:00',45.00),(18,351,22,'2018-07-31 00:00:00','2018-08-04 00:00:00',52.00),(18,357,64,'2018-08-10 00:00:00','2018-08-11 00:00:00',55.00),(18,358,NULL,'2018-08-14 00:00:00','2018-08-15 00:00:00',0.00),(18,359,NULL,'2018-08-16 00:00:00','2018-08-19 00:00:00',0.00),(18,362,2,'2018-08-07 00:00:00','2018-08-09 00:00:00',45.00),(18,363,2,'2018-08-12 00:00:00','2018-08-13 00:00:00',45.00),(18,364,59,'2018-09-15 00:00:00','2018-09-19 00:00:00',52.00),(18,371,2,'2018-09-08 00:00:00','2018-09-10 00:00:00',45.00),(18,380,2,'2018-09-08 00:00:00','2018-09-10 00:00:00',45.00),(18,382,36,'2018-09-08 00:00:00','2018-09-10 00:00:00',52.00),(18,386,7,'2018-09-30 00:00:00','2018-10-03 00:00:00',55.00),(18,395,2,'2018-10-02 00:00:00','2018-10-04 00:00:00',45.00),(18,396,2,'2018-10-02 00:00:00','2018-10-04 00:00:00',45.00),(18,397,2,'2018-10-30 00:00:00','2018-11-02 00:00:00',45.00),(18,398,97,'2018-11-17 00:00:00','2018-11-19 00:00:00',50.00),(18,400,2,'2018-12-06 00:00:00','2018-12-08 00:00:00',45.00),(18,401,2,'2018-12-25 00:00:00','2018-12-30 00:00:00',45.00),(18,402,2,'2019-01-18 00:00:00','2019-01-22 00:00:00',45.00),(18,413,97,'2018-10-16 00:00:00','2018-10-20 00:00:00',50.00),(18,422,93,'2018-10-21 00:00:00','2018-10-21 00:00:00',52.00),(18,423,80,'2018-10-22 00:00:00','2018-10-22 00:00:00',50.00),(18,425,97,'2018-12-09 00:00:00','2018-12-11 00:00:00',50.00),(18,427,102,'2019-06-14 00:00:00','2019-06-16 00:00:00',45.00),(18,433,102,'2018-11-03 00:00:00','2018-11-03 00:00:00',45.00),(18,447,97,'2019-01-06 00:00:00','2019-01-10 00:00:00',50.00),(18,460,102,'2018-11-05 00:00:00','2018-11-07 00:00:00',45.00),(18,462,102,'2018-11-11 00:00:00','2018-11-12 00:00:00',45.00),(18,464,97,'2019-04-19 00:00:00','2019-04-23 00:00:00',50.00),(18,470,102,'2018-11-23 00:00:00','2018-11-26 00:00:00',45.00),(18,490,112,'2018-11-13 00:00:00','2018-11-15 00:00:00',35.00),(18,494,102,'2018-11-20 00:00:00','2018-11-22 00:00:00',45.00),(19,111,NULL,'2017-10-13 00:00:00','2017-10-15 00:00:00',50.00),(20,110,NULL,'2017-10-13 00:00:00','2017-10-15 00:00:00',57.00),(29,136,NULL,'2018-01-07 00:00:00','2018-01-11 00:00:00',20.00),(29,137,2,'2018-01-16 00:00:00','2018-01-21 00:00:00',25.00),(29,138,NULL,'2018-01-09 21:08:36','2018-01-24 00:00:00',25.00),(29,139,NULL,'2018-01-09 21:08:51','2018-01-10 00:00:00',25.00),(29,140,2,'2018-01-10 00:00:00','2018-01-13 00:00:00',25.00),(29,148,4,'2018-01-19 00:00:00','2018-01-26 00:00:00',45.00),(29,154,2,'2018-02-15 00:00:00','2018-02-17 00:00:00',45.00),(29,209,2,'2018-03-16 00:00:00','2018-03-17 00:00:00',45.00),(29,221,35,'2018-03-21 00:00:00','2018-03-24 00:00:00',30.00),(29,236,5,'2018-03-27 00:00:00','2018-03-29 00:00:00',65.00),(29,281,4,'2018-05-04 00:00:00','2018-05-03 00:00:00',45.00),(29,310,NULL,'2018-06-18 00:00:00','2018-06-20 00:00:00',0.00),(29,316,2,'2018-06-23 00:00:00','2018-06-24 00:00:00',45.00),(29,501,75,'2018-12-13 00:00:00','2018-12-15 00:00:00',71.00),(29,507,NULL,'2019-01-12 00:00:00','2019-01-15 00:00:00',0.00),(30,143,2,'2018-01-12 00:00:00','2018-01-15 00:00:00',25.00),(30,209,2,'2018-03-16 00:00:00','2018-03-17 00:00:00',45.00),(30,236,23,'2018-03-27 00:00:00','2018-03-29 00:00:00',45.00),(30,237,5,'2018-03-23 00:00:00','2018-03-26 00:00:00',65.00),(30,245,2,'2018-04-06 00:00:00','2018-04-09 00:00:00',45.00),(30,246,2,'2018-04-11 00:00:00','2018-04-14 00:00:00',45.00),(30,247,2,'2018-04-17 00:00:00','2018-04-20 00:00:00',45.00),(30,248,2,'2018-04-22 00:00:00','2018-04-25 00:00:00',45.00),(30,249,2,'2018-04-21 00:00:00','2018-04-21 00:00:00',45.00),(30,250,2,'2018-04-26 00:00:00','2018-04-27 00:00:00',45.00),(30,309,NULL,'2018-06-18 00:00:00','2018-06-20 00:00:00',0.00),(30,321,NULL,'2018-06-23 00:00:00','2018-06-24 00:00:00',0.00),(30,366,23,'2018-08-22 00:00:00','2018-08-25 00:00:00',45.00),(30,379,2,'2018-09-01 00:00:00','2018-09-03 00:00:00',45.00),(30,502,71,'2018-12-16 00:00:00','2018-12-18 00:00:00',75.00),(31,158,5,'2018-03-06 00:00:00','2018-03-09 00:00:00',75.00),(31,183,22,'2018-03-13 00:00:00','2018-03-17 00:00:00',45.00),(34,163,19,'2018-02-10 00:00:00','2018-02-10 00:00:00',25.00),(34,164,19,'2018-02-10 00:00:00','2018-02-10 00:00:00',25.00),(34,165,19,'2018-02-13 00:00:00','2018-02-15 00:00:00',25.00),(36,166,19,'2018-02-13 00:00:00','2018-02-15 00:00:00',25.00),(38,223,35,'2018-03-17 00:00:00','2018-03-22 00:00:00',30.00),(38,225,11,'2018-03-24 00:00:00','2018-03-26 00:00:00',40.00),(38,234,40,'2018-04-22 00:00:00','2018-04-23 00:00:00',45.00),(38,235,40,'2018-04-26 00:00:00','2018-04-26 00:00:00',45.00),(38,239,42,'2018-03-27 00:00:00','2018-04-07 00:00:00',35.00),(38,240,42,'2018-04-19 00:00:00','2018-04-21 00:00:00',35.00),(38,261,42,'2018-06-25 00:00:00','2018-06-28 00:00:00',35.00),(38,272,46,'2018-06-08 00:00:00','2018-06-11 00:00:00',50.00),(38,277,29,'2018-05-27 00:00:00','2018-05-30 00:00:00',50.00),(38,278,51,'2018-06-19 00:00:00','2018-06-21 00:00:00',46.00),(38,280,52,'2018-05-15 00:00:00','2018-05-17 00:00:00',54.00),(38,284,52,'2018-06-26 00:00:00','2018-06-29 00:00:00',54.00),(38,287,52,'2018-05-18 00:00:00','2018-05-21 00:00:00',54.00),(38,290,52,'2018-06-04 00:00:00','2018-06-06 00:00:00',54.00),(38,293,52,'2018-06-16 00:00:00','2018-06-18 00:00:00',54.00),(38,295,52,'2018-07-02 00:00:00','2018-07-05 00:00:00',54.00),(38,319,NULL,'2018-06-19 00:00:00','2001-01-02 00:00:00',0.00),(38,322,52,'2018-07-10 00:00:00','2018-07-13 00:00:00',55.00),(38,324,52,'2018-09-14 00:00:00','2018-09-17 00:00:00',55.00),(38,333,52,'2018-08-03 00:00:00','2018-08-06 00:00:00',55.00),(38,334,52,'2018-08-03 00:00:00','2018-08-06 00:00:00',55.00),(38,336,60,'2018-07-20 00:00:00','2018-07-21 00:00:00',65.00),(38,337,2,'2018-07-16 00:00:00','2018-07-18 00:00:00',45.00),(38,342,58,'2018-07-24 00:00:00','2018-07-26 00:00:00',35.00),(38,348,64,'2018-09-08 00:00:00','2018-09-10 00:00:00',55.00),(38,350,66,'2018-07-31 00:00:00','2018-08-02 00:00:00',70.00),(38,352,64,'2018-08-10 00:00:00','2018-08-11 00:00:00',55.00),(38,361,65,'2018-08-07 00:00:00','2018-08-09 00:00:00',60.00),(38,365,2,'2018-08-21 00:00:00','2018-08-24 00:00:00',45.00),(38,367,34,'2018-09-14 00:00:00','2018-09-17 00:00:00',60.00),(38,373,6,'2018-09-15 00:00:00','2018-09-17 00:00:00',110.00),(38,376,2,'2018-09-16 00:00:00','2018-09-19 00:00:00',45.00),(38,387,NULL,'2018-09-08 00:00:00','2018-09-10 00:00:00',0.00),(38,390,12,'2018-09-08 00:00:00','2018-09-10 00:00:00',60.00),(38,394,35,'2018-10-06 00:00:00','2018-10-09 00:00:00',30.00),(38,399,96,'2018-12-04 00:00:00','2018-12-08 00:00:00',65.00),(38,403,2,'2018-09-21 00:00:00','2018-09-22 00:00:00',45.00),(38,404,46,'2018-09-20 00:00:00','2018-09-22 00:00:00',50.00),(38,408,84,'2018-12-29 00:00:00','2019-01-03 00:00:00',50.00),(38,409,2,'2018-10-03 00:00:00','2018-10-05 00:00:00',45.00),(38,410,84,'2018-09-28 00:00:00','2018-09-30 00:00:00',50.00),(38,412,104,'2019-01-18 00:00:00','2019-01-21 00:00:00',50.00),(38,416,NULL,'2018-10-16 00:00:00','2018-10-16 00:00:00',0.00),(38,418,83,'2018-10-12 00:00:00','2018-10-15 00:00:00',55.00),(38,426,104,'2018-12-14 00:00:00','2018-12-17 00:00:00',50.00),(38,458,109,'2018-11-01 00:00:00','2018-11-01 00:00:00',30.00),(38,462,80,'2018-11-11 00:00:00','2018-11-12 00:00:00',50.00),(38,472,104,'2018-11-09 00:00:00','2018-11-10 00:00:00',50.00),(38,478,82,'2019-01-06 00:00:00','2019-01-07 00:00:00',60.00),(38,480,104,'2018-11-13 00:00:00','2018-11-13 00:00:00',50.00),(38,482,109,'2018-11-27 00:00:00','2018-11-29 00:00:00',30.00),(38,493,109,'2018-11-14 00:00:00','2018-11-16 00:00:00',30.00),(39,507,NULL,'2019-01-12 00:00:00','2019-01-15 00:00:00',0.00),(40,356,67,'2018-08-10 00:00:00','2018-08-10 00:00:00',40.00),(40,388,51,'2018-09-12 00:00:00','2018-09-16 00:00:00',46.00),(40,392,2,'2018-09-22 00:00:00','2018-09-24 00:00:00',45.00),(40,393,2,'2018-09-20 00:00:00','2018-09-22 00:00:00',45.00),(40,395,2,'2018-10-15 00:00:00','2018-10-15 00:00:00',45.00),(40,432,107,'2018-10-26 00:00:00','2018-10-26 00:00:00',45.00),(40,441,107,'2019-03-02 00:00:00','2019-03-04 00:00:00',45.00),(40,445,83,'2018-12-31 00:00:00','2019-01-02 00:00:00',55.00),(40,446,107,'2018-11-25 00:00:00','2018-11-26 00:00:00',45.00),(40,449,71,'2018-11-18 00:00:00','2018-11-21 00:00:00',75.00),(40,450,107,'2018-11-01 00:00:00','2018-11-05 00:00:00',45.00),(40,452,107,'2018-11-10 00:00:00','2018-11-11 00:00:00',45.00),(40,453,109,'2018-10-29 00:00:00','2018-10-30 00:00:00',30.00),(40,455,109,'2018-10-31 00:00:00','2018-10-31 00:00:00',30.00),(40,459,109,'2018-11-14 00:00:00','2018-11-16 00:00:00',30.00),(40,468,109,'2018-11-27 00:00:00','2018-11-29 00:00:00',30.00),(40,469,109,'2018-11-23 00:00:00','2018-11-24 00:00:00',30.00),(40,471,109,'2018-11-06 00:00:00','2018-11-08 00:00:00',30.00),(40,475,109,'2018-11-12 00:00:00','2018-11-13 00:00:00',30.00),(40,483,109,'2019-01-02 00:00:00','2019-01-03 00:00:00',30.00),(40,489,109,'2018-12-21 00:00:00','2018-12-23 00:00:00',30.00),(40,491,109,'2019-01-08 00:00:00','2019-01-11 00:00:00',30.00),(40,492,112,'2019-02-22 00:00:00','2019-02-24 00:00:00',35.00),(40,495,109,'2018-12-28 00:00:00','2018-12-30 00:00:00',30.00),(40,497,98,'2018-12-05 00:00:00','2018-12-06 00:00:00',45.00),(40,498,109,'2018-12-11 00:00:00','2018-12-13 00:00:00',30.00),(40,499,109,'2019-06-23 00:00:00','2019-06-23 00:00:00',30.00),(43,428,106,'2018-12-14 00:00:00','2018-12-17 00:00:00',40.00),(43,438,106,'2018-11-02 00:00:00','2018-11-05 00:00:00',40.00),(43,445,79,'2018-12-31 00:00:00','2019-01-02 00:00:00',55.00),(43,451,106,'2018-12-29 00:00:00','2019-01-01 00:00:00',40.00),(43,476,111,'2018-12-02 00:00:00','2018-12-06 00:00:00',50.40),(43,481,106,'2018-11-09 00:00:00','2018-11-12 00:00:00',40.00),(43,485,109,'2018-11-08 00:00:00','2018-11-09 00:00:00',30.00);
/*!40000 ALTER TABLE `porhabitacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `reserva` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPasajero` int(11) NOT NULL,
  `idHospedaje` int(11) NOT NULL,
  `idFuente` int(11) DEFAULT NULL,
  `idAerolinea` int(11) DEFAULT NULL,
  `adultos` int(11) NOT NULL,
  `ninos` int(11) DEFAULT NULL,
  `notas` varchar(600) DEFAULT NULL,
  `subTotal` decimal(8,2) DEFAULT NULL,
  `total` decimal(8,2) DEFAULT NULL,
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `checkin` bit(1) NOT NULL DEFAULT b'0',
  `usModificacion` int(11) DEFAULT NULL,
  `checkout` bit(1) NOT NULL DEFAULT b'0',
  `token` varchar(500) DEFAULT NULL,
  `estado` char(2) NOT NULL DEFAULT 'Re',
  PRIMARY KEY (`id`,`idPasajero`,`idHospedaje`),
  UNIQUE KEY `UK_reserva_id` (`id`),
  KEY `fk_reserva_aerolinea1_idx` (`idAerolinea`),
  KEY `fk_reserva_cliente1_idx` (`idPasajero`),
  KEY `FK_reserva_idFuente` (`idFuente`),
  CONSTRAINT `FK_reserva_idFuente` FOREIGN KEY (`idFuente`) REFERENCES `fuente` (`id`),
  CONSTRAINT `fk_reserva_aerolinea1` FOREIGN KEY (`idAerolinea`) REFERENCES `aerolinea` (`id`),
  CONSTRAINT `fk_reserva_cliente1` FOREIGN KEY (`idPasajero`) REFERENCES `pasajero` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=508 DEFAULT CHARSET=utf8 AVG_ROW_LENGTH=2340 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
INSERT INTO `reserva` VALUES (18,7,2,NULL,5,2,NULL,'',NULL,0.00,'2017-07-17 00:56:17','2017-07-17 00:56:17',0,_binary '',0,_binary '',NULL,'Co'),(19,8,2,NULL,5,2,NULL,'notaas',NULL,0.00,'2017-07-17 01:09:11','2017-07-17 01:09:11',0,_binary '\0',0,_binary '\0',NULL,'Re'),(20,8,2,NULL,5,2,NULL,'',NULL,0.00,'2017-07-19 01:06:29','2017-07-19 01:06:29',0,_binary '\0',0,_binary '\0',NULL,'Re'),(21,8,2,NULL,4,2,NULL,'sad',NULL,0.00,'2017-07-20 07:05:50','2017-07-20 07:05:50',0,_binary '',0,_binary '',NULL,'Co'),(22,8,2,NULL,4,2,NULL,'',NULL,90.00,'2017-07-21 22:02:57','2017-07-21 22:02:57',0,_binary '',0,_binary '\0',NULL,'Ci'),(23,8,2,NULL,6,2,NULL,'',NULL,105.00,'2017-07-21 22:04:00','2017-07-21 22:04:00',0,_binary '\0',0,_binary '\0',NULL,'Re'),(24,8,2,NULL,4,2,NULL,'',NULL,76.50,'2017-07-24 04:29:43','2017-07-24 04:29:43',2,_binary '\0',2,_binary '\0',NULL,'Re'),(25,8,2,NULL,4,2,NULL,'',NULL,102.00,'2017-07-24 22:59:41','2017-07-24 22:59:41',2,_binary '',2,_binary '',NULL,'Co'),(26,9,2,NULL,4,1,NULL,'',NULL,120.00,'2017-07-25 06:14:06','2017-07-25 06:14:06',2,_binary '\0',2,_binary '\0',NULL,'Re'),(27,10,2,NULL,4,1,NULL,'',NULL,76.50,'2017-07-25 06:17:30','2017-07-25 06:17:30',2,_binary '\0',2,_binary '\0',NULL,'Re'),(28,11,2,NULL,4,2,NULL,'',NULL,140.00,'2017-07-26 03:15:39','2017-07-26 03:15:39',2,_binary '',2,_binary '',NULL,'Co'),(29,12,2,NULL,4,2,NULL,'PONER CAMA ADICIONAL A LA HABITACION, NECESITAN CAMAS SEPARADAS.\n\n-EXISTE PAGO VIA DEPOSITO BANCARIO POR $150 DOLARES, EL RESTO  COBRAR A SU ARRIBO.\n\nfecha de llegada martes 15 de agostos del 2017 hora 10h30  vuelo EQ195',NULL,300.00,'2017-08-02 00:48:08','2017-08-02 00:48:08',2,_binary '',2,_binary '\0',NULL,'Ci'),(35,13,2,NULL,6,2,NULL,'LLEGA EN AVIANCA 12: 30 PM',NULL,90.00,'2017-09-03 03:12:46','2017-09-03 03:12:46',2,_binary '\0',2,_binary '\0',NULL,''),(50,7,2,NULL,5,2,NULL,'PRUEBA',NULL,127.50,'2017-09-19 22:55:34','2017-09-19 23:41:52',2,_binary '\0',2,_binary '\0',NULL,'Co'),(63,7,2,NULL,5,2,NULL,'',NULL,76.50,'2017-09-26 21:14:31','2017-09-26 21:15:53',2,_binary '\0',2,_binary '\0',NULL,'Co'),(64,7,2,NULL,6,2,NULL,'',NULL,102.00,'2017-09-26 21:53:08','2017-09-26 22:32:27',2,_binary '\0',2,_binary '\0',NULL,'Co'),(66,7,2,NULL,4,2,NULL,'',NULL,102.00,'2017-09-26 22:34:11','2017-09-26 22:35:47',2,_binary '\0',2,_binary '\0',NULL,'Co'),(67,8,2,NULL,5,2,NULL,'',NULL,76.50,'2017-09-26 22:38:13','2017-09-26 22:38:51',2,_binary '\0',2,_binary '\0',NULL,'Co'),(68,7,2,NULL,4,2,NULL,'sdada',NULL,102.00,'2017-09-26 22:40:29','2017-09-26 22:53:06',2,_binary '\0',2,_binary '\0',NULL,'Co'),(79,13,2,NULL,5,1,NULL,'',NULL,76.50,'2017-09-30 20:37:20','2017-09-30 20:37:20',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(80,13,2,NULL,4,2,NULL,'',NULL,90.00,'2017-09-30 20:40:15','2017-09-30 20:40:15',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(81,14,2,NULL,4,2,NULL,'',NULL,90.00,'2017-09-30 20:48:46','2017-09-30 20:48:46',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(82,7,2,NULL,4,2,NULL,'',NULL,210.00,'2017-09-30 20:49:22','2017-09-30 20:49:22',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(83,17,2,NULL,5,1,NULL,'',NULL,150.00,'2017-09-30 21:27:12','2017-09-30 21:27:12',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(84,18,2,NULL,5,1,NULL,'',NULL,350.00,'2017-10-01 00:45:24','2017-10-01 00:45:24',3,_binary '\0',3,_binary '\0',NULL,'Ca'),(85,19,2,NULL,6,10,NULL,'RESERVA BOOKING, PERSONAS PERUANAS, NO OLVIDAR DESAYUNO.\nEQUIPAR HABITACIONES CON TV, SE HABILITAN SEYMOUR Y BALTRA, OJO CLIENTES GENIOUS.\nPREGUNTAR DATOS DE VUELO EN QUE LLEGAN APRA OFRECER TRANSFER',NULL,650.40,'2017-10-01 01:59:42','2017-10-01 01:59:42',3,_binary '\0',3,_binary '\0',NULL,'Re'),(86,7,2,NULL,4,2,NULL,'',NULL,153.00,'2017-10-02 06:27:01','2017-10-02 06:27:01',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(87,7,2,NULL,4,2,NULL,'',NULL,120.00,'2017-10-02 06:28:34','2017-10-02 06:28:34',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(88,7,2,NULL,4,2,NULL,'',NULL,120.00,'2017-10-02 06:29:46','2017-10-02 06:29:46',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(89,7,2,NULL,4,4,NULL,'asdadsa',NULL,160.00,'2017-10-02 06:35:55','2017-10-02 06:35:55',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(90,7,2,NULL,5,2,NULL,'dasdadasdas',NULL,190.00,'2017-10-02 22:20:28','2017-10-02 22:20:28',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(91,7,2,NULL,4,2,NULL,'lAaaa',NULL,120.00,'2017-10-02 22:36:45','2017-10-02 22:36:45',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(92,7,2,NULL,4,2,NULL,'adadas',NULL,120.00,'2017-10-02 23:52:16','2017-10-02 23:52:16',2,_binary '\0',2,_binary '\0',NULL,'Re'),(93,20,3,NULL,4,2,NULL,'',NULL,80.00,'2017-10-03 19:12:54','2017-10-04 06:00:57',4,_binary '\0',4,_binary '\0',NULL,'Ca'),(94,20,3,NULL,4,2,NULL,'',NULL,80.00,'2017-10-04 06:04:23','2017-10-04 06:11:11',4,_binary '\0',4,_binary '\0',NULL,'Ca'),(95,20,3,NULL,4,2,NULL,'',NULL,80.00,'2017-10-04 06:16:11','2017-10-04 06:16:11',4,_binary '\0',4,_binary '\0',NULL,'Re'),(96,20,3,NULL,4,2,NULL,'',NULL,125.00,'2017-10-04 07:58:39','2017-10-04 07:58:39',4,_binary '\0',4,_binary '\0',NULL,'Re'),(97,20,3,NULL,4,2,NULL,'',NULL,88.00,'2017-10-04 08:15:05','2017-10-04 08:15:05',4,_binary '\0',4,_binary '\0',NULL,'Re'),(101,18,2,NULL,4,3,NULL,'',NULL,200.00,'2017-10-07 06:02:03','2017-10-07 06:02:03',3,_binary '\0',3,_binary '\0',NULL,'Re'),(102,18,2,NULL,5,1,NULL,'',NULL,60.00,'2017-10-08 05:41:58','2017-10-08 05:41:58',3,_binary '\0',3,_binary '\0',NULL,'Pr'),(103,23,2,NULL,7,2,NULL,'Noo wway',NULL,150.00,'2017-10-12 22:48:18','2017-10-12 22:57:01',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(104,23,2,NULL,7,2,NULL,'',NULL,150.00,'2017-10-12 22:57:49','2017-10-12 23:06:37',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(105,23,2,NULL,7,2,NULL,'waaay',NULL,120.00,'2017-10-12 23:06:55','2017-10-12 23:10:42',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(106,23,2,NULL,5,2,NULL,'',NULL,160.00,'2017-10-12 23:07:32','2017-10-12 23:10:45',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(107,23,2,NULL,5,2,NULL,'2dasdas',NULL,160.00,'2017-10-12 23:15:26','2017-10-12 23:15:26',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(108,23,2,NULL,7,2,NULL,'',NULL,150.00,'2017-10-12 23:22:23','2017-10-12 23:22:47',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(109,23,2,NULL,7,2,NULL,'',NULL,150.00,'2017-10-12 23:42:57','2017-10-12 23:42:57',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(110,18,2,NULL,7,8,NULL,'GRUPO REGATA PERUANA',NULL,456.00,'2017-10-14 04:10:00','2017-10-17 00:53:11',3,_binary '\0',3,_binary '\0',NULL,'Co'),(111,18,2,NULL,6,3,NULL,'FAMILIA CELLERI, RECOMENDADOS MAMI CHILE',NULL,500.00,'2017-10-14 04:14:32','2017-10-17 00:52:25',3,_binary '\0',3,_binary '\0',NULL,'Co'),(112,23,2,NULL,5,3,NULL,'',NULL,130.00,'2017-10-14 21:54:01','2017-10-14 21:54:01',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(113,23,2,NULL,7,2,NULL,'',NULL,120.00,'2017-10-14 22:37:32','2017-10-14 22:37:32',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(114,23,2,NULL,5,2,NULL,'',NULL,120.00,'2017-10-14 22:38:53','2017-10-14 22:38:53',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(115,23,2,NULL,7,2,NULL,'',NULL,60.00,'2017-10-14 22:39:18','2017-10-14 22:39:18',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(116,23,2,NULL,5,2,NULL,'',NULL,60.00,'2017-10-14 22:42:49','2017-10-14 22:42:49',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(117,23,2,NULL,7,2,NULL,'',NULL,80.00,'2017-10-14 22:48:12','2017-10-14 22:48:12',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(118,23,2,NULL,7,2,NULL,'loool',NULL,120.00,'2017-10-16 19:57:11','2017-10-16 20:02:53',2,_binary '\0',2,_binary '\0','38443bf296123ea1ae9befde7dc2438a','Ca'),(120,23,2,1,5,2,NULL,'asda',NULL,120.00,'2017-10-16 20:05:12','2017-10-16 20:05:12',2,_binary '\0',2,_binary '\0','1c2660f0253d3ffd309d4b9a71a769d4','Ca'),(121,23,2,8,7,2,NULL,'',NULL,120.00,'2017-10-16 20:15:40','2017-10-16 20:15:40',2,_binary '\0',2,_binary '\0','7e6cd1d6e0b710c6286b92c8c26a27a7','Re'),(122,18,2,7,7,1,NULL,'',NULL,150.00,'2017-10-17 01:09:15','2017-10-17 01:16:08',3,_binary '\0',3,_binary '\0','451e915cf589f966b963eb51d7eaf7c1','Co'),(123,11,2,7,7,1,NULL,'',NULL,250.00,'2017-10-18 01:35:13','2017-10-18 01:35:13',3,_binary '\0',3,_binary '\0','945a522ebb0f55a7a14a953d1bf819ab','Ca'),(124,11,2,1,7,2,NULL,'',NULL,150.00,'2017-10-18 01:45:52','2017-10-18 01:45:52',3,_binary '\0',3,_binary '\0','10cae22a9aedca3cac4f50177593dafe','Ca'),(125,7,2,1,7,2,NULL,'',NULL,120.00,'2017-11-06 06:19:57','2017-11-06 06:21:04',2,_binary '\0',2,_binary '\0','2748fe163073e42bc342625625f3dca3','Ci'),(126,24,2,8,5,2,NULL,'',NULL,90.00,'2017-11-28 20:30:37','2017-11-28 20:30:37',2,_binary '\0',2,_binary '\0','151a2e8effacdf598fe29c9841e69f9b','Re'),(127,25,2,1,5,5,NULL,'',NULL,160.00,'2018-01-03 16:09:58','2018-01-03 16:09:58',2,_binary '\0',2,_binary '\0','d45b548095ad59d30f21f7bc4286103e','Ca'),(128,11,2,1,5,5,NULL,'',NULL,160.00,'2018-01-03 16:12:53','2018-01-03 16:19:21',2,_binary '\0',2,_binary '\0','12c1f4dfa1ac90f506714a994d1ba5a0','Co'),(129,26,2,5,7,3,NULL,'Pasajeros de Boking, se quedan noches del  5 y 6. check out domingo 7, no tiene desayuno, ofrecer tranfer in / out.',NULL,196.16,'2018-01-05 17:08:53','2018-01-12 19:42:53',3,_binary '\0',3,_binary '\0','fc5a779ff078d8de36059aa5002a4750','Co'),(130,27,2,5,8,3,NULL,'Pasajeros llegan por lancha. Ofrecer desayuno diario. ',NULL,436.26,'2018-01-05 17:14:23','2018-01-12 16:00:07',3,_binary '\0',3,_binary '\0','aac87726c97ec177e910875e42a170e7','Co'),(131,28,2,5,7,3,NULL,'Approximate time of arrival: between 12:00 and 13:00 \nCan you provide vegan food i.e at breakfast? thank you\n\nOjo. con esta informacion',NULL,145.42,'2018-01-05 17:22:46','2018-01-05 17:22:46',3,_binary '\0',3,_binary '\0','a762b6d0ea06fea0ae8dcd546c13ff3c','Ca'),(132,29,2,5,7,3,NULL,'Approximate time of arrival: between 12:00 and 13:00 \nCan you provide vegan food i.e at breakfast? thank you\n\nPax son Veganas: n o huevos, no leche',NULL,0.00,'2018-01-07 02:29:47','2018-01-07 02:36:29',3,_binary '\0',3,_binary '\0','075351813340b3be812c6c783c5f9d09','Co'),(133,29,2,5,7,3,NULL,'Approximate time of arrival: between 12:00 and 13:00 \nCan you provide vegan food i.e at breakfast? thank you',NULL,145.42,'2018-01-07 02:41:05','2018-01-12 16:05:12',3,_binary '\0',3,_binary '\0','1eae1da8d7e0e387ee88c1e4ec9e006f','Co'),(134,30,2,5,7,4,NULL,'Approximate time of arrival: between 09:00 and 10:00',NULL,392.28,'2018-01-07 02:49:05','2018-01-07 02:49:05',3,_binary '\0',3,_binary '\0','49c589be5a50b33b3a17788fb95ac7e9','Re'),(135,7,2,1,5,2,NULL,'',NULL,120.00,'2018-01-07 19:37:42','2018-01-07 19:37:42',2,_binary '\0',2,_binary '\0','5db54a9f595d20f1530ed625280a6c17','Ca'),(136,7,2,8,5,5,NULL,'',NULL,250.00,'2018-01-07 19:50:42','2018-01-07 19:50:42',2,_binary '\0',2,_binary '\0','14cf9d4898408b7313bd469302055dd8','Ca'),(137,7,2,2,5,2,NULL,'Arrival time unknow',NULL,340.00,'2018-01-08 17:54:56','2018-01-08 17:54:56',2,_binary '\0',2,_binary '\0','0176bc798b4f2db91a866396639d22f3','Ca'),(138,7,2,1,6,3,NULL,'noo',NULL,220.00,'2018-01-08 19:55:51','2018-01-08 19:55:51',2,_binary '\0',2,_binary '\0','f5786c3e3c8246717a871646105b18cb','Ca'),(139,7,2,8,5,3,NULL,'',NULL,270.00,'2018-01-08 20:08:03','2018-01-08 20:08:03',2,_binary '\0',2,_binary '\0','08c3b499a686e7f7f3f81487c4167d75','Ca'),(140,7,2,2,5,2,NULL,'',NULL,230.00,'2018-01-08 20:12:09','2018-01-08 20:12:09',2,_binary '\0',2,_binary '\0','9cdf898ee9ce9d8c1c31ecaadfb762ef','Re'),(142,7,2,8,5,2,NULL,'',NULL,125.00,'2018-01-08 22:28:39','2018-01-08 22:28:39',2,_binary '\0',2,_binary '\0','f815ddeebe427c83c17df0857a7f70c5','Ca'),(143,7,2,1,5,2,NULL,'Pruebas gcloud',NULL,100.00,'2018-01-12 05:00:59','2018-01-12 05:00:59',2,_binary '\0',2,_binary '\0','b16fe86688c2f41c770dcec0a0f96c52','Re'),(144,11,2,2,5,1,NULL,'',NULL,100.00,'2018-01-12 16:09:40','2018-01-12 16:09:40',3,_binary '\0',3,_binary '\0','0fa3ac946254aa1c63d64047349c91c4','Ca'),(145,31,2,8,4,1,NULL,'vuelo de 11: 00  a  12 :00 de la mañana .\nalérgica al polvo.',NULL,75.00,'2018-01-12 21:24:52','2018-01-12 21:24:52',3,_binary '\0',3,_binary '\0','6a9c356e3ccbb6685cb78c474e7555c4','Ca'),(146,31,2,8,4,2,NULL,'hora de vuelo 11:00 a 12:00 de la mañana ',NULL,100.00,'2018-01-12 21:37:27','2018-01-12 21:37:27',3,_binary '\0',3,_binary '\0','809ba5b05f1377b69d04cd7c08dbdf67','Ca'),(147,7,2,1,5,2,NULL,'',NULL,180.00,'2018-01-15 17:02:26','2018-01-15 17:02:26',2,_binary '\0',2,_binary '\0','68d8799725c8bb1d886df645b68fdaf0','Ca'),(148,32,2,2,6,2,NULL,'',NULL,370.00,'2018-01-16 22:48:44','2018-01-16 22:48:44',2,_binary '\0',2,_binary '\0','4139bc3720c77320ea8957a9e10ddfc8','Ca'),(149,33,2,5,8,2,NULL,'',NULL,135.45,'2018-01-18 23:04:52','2018-01-23 22:36:52',3,_binary '\0',3,_binary '\0','d9cdce7da9f9edcdb7bb747646ee5359','Co'),(150,34,2,5,8,2,NULL,'SIN NOVEDAD ',NULL,135.00,'2018-01-18 23:19:39','2018-01-18 23:19:39',3,_binary '\0',3,_binary '\0','d0592766ee5f779bb734abb0afa8ca14','Ca'),(151,35,2,7,5,2,NULL,'',NULL,80.00,'2018-01-30 22:13:54','2018-01-31 00:57:27',3,_binary '\0',3,_binary '\0','aa80f9b50fcac6c8f8f7bc00233f59b6','Co'),(152,36,2,5,8,2,NULL,'Huesped llego sin novedad. salen mañana a las a las 11 am (se permite), tener listo tranfer out.',NULL,45.00,'2018-01-30 22:18:33','2018-02-01 16:34:13',3,_binary '\0',3,_binary '\0','89c5d1746a2682275ecc0e4a28766767','Ci'),(154,7,2,2,8,2,NULL,'lol',NULL,190.00,'2018-02-01 05:33:02','2018-02-01 05:33:02',2,_binary '\0',2,_binary '\0','c13530d03a7dcc96433ef16e6c7119c2','Re'),(155,18,2,8,7,1,NULL,'TANIA X2 / SONIA/RESERVA PAPÁ: se pidio inormacion de vuelo y correo electronico. ',NULL,180.00,'2018-02-01 16:52:16','2018-02-01 16:52:16',3,_binary '\0',3,_binary '\0','fb6cae62b45ddc8262821679a78590cb','Ca'),(156,18,2,8,7,2,NULL,'ALFONSO X2 / RESERVA PAPÁ / SONIA: SE SOLICITO MAIL E INFO DE VUELO',NULL,180.00,'2018-02-01 16:54:43','2018-02-01 16:54:43',3,_binary '\0',3,_binary '\0','f4df028a8ee20c3ddfee3aac6334bb26','Ca'),(157,37,2,2,7,2,NULL,'MANTENER HABITACION / SE ENVIO FOTOS AL HUESPED / NO MOVER DE HABITACION / EXISTE YA UN PAGO DE 50% DOLARES',NULL,360.00,'2018-02-01 17:05:45','2018-03-03 00:09:35',3,_binary '\0',3,_binary '\0','31630f72e3deff8607e9e88ed273e9d8','Ci'),(158,18,2,7,7,10,NULL,'GRUPO DE GISELA CRIOLLO, UNIVERSIDAD AGRONOMA DE GUAYAQUIL, UBICAR A LOS VARONES EN SUITE SAN CRISTOBAL/ EN HABITACION 203 VAN 3 MUJERES Y 204 EL RESTO DE VARONES. ',NULL,1040.00,'2018-02-01 17:20:46','2018-02-01 17:20:46',3,_binary '\0',3,_binary '\0','76474c5a74c38de0df8f1f1868e94dfe','Ca'),(159,38,2,8,8,4,NULL,'DOS PAREJAS/ POR UNA SOLA NOCHE / ARRIBO LANCHA DE LA MAÑANA / RESERVA PAPÁ/ CONTACTAR: 0982861716',NULL,80.00,'2018-02-02 00:35:51','2018-02-02 00:35:51',3,_binary '\0',3,_binary '\0','efb6c3cfadbfd690ad8bf3132376c48d','Re'),(160,39,2,7,7,4,NULL,'TANIA DOMINGUEZ/ALFONSO MOLINA/ VICTOR CHANO/ TIENEN 50% PAGO / ESPAÑOLS TODOS / HORA DE LLEGADA VUELO 13:00/ESTAR PENDIENTE',NULL,360.00,'2018-02-09 13:38:15','2018-02-09 13:38:15',3,_binary '\0',3,_binary '\0','d6759cd63e9e7d939158910838727e01','Re'),(161,40,2,5,7,3,NULL,'3 PASAJEROS DE BOOKING / ALISTAR SUITE GRANDE PARA 3 PERSONAS EN CAMAS INDIVIDUALES./ NO MOVER RESERVA',NULL,130.00,'2018-02-09 13:49:03','2018-02-09 13:49:03',3,_binary '\0',3,_binary '\0','1fd80b9663513b169bd66a7fd9301f3e','Re'),(162,41,17,3,5,1,NULL,'notas',NULL,116.50,'2018-02-11 01:12:51','2018-02-11 01:12:51',0,_binary '\0',0,_binary '\0','ed95dcbb62f522ca51ff3d10d59dcf59','Re'),(163,41,17,3,5,1,NULL,'notas',NULL,116.50,'2018-02-11 01:13:44','2018-02-11 01:13:44',0,_binary '\0',0,_binary '\0','aa3239ff157072fa29dc92f17573d51f','Ca'),(164,41,17,8,5,2,NULL,'adas',NULL,145.75,'2018-02-11 01:19:03','2018-02-11 17:34:09',0,_binary '\0',0,_binary '\0','05809975b4bc45e4233187237799055c','Co'),(165,41,17,3,6,2,NULL,'loolaa',NULL,105.00,'2018-02-11 01:23:59','2018-02-11 01:23:59',0,_binary '\0',0,_binary '\0','653d236d17fcd5d81f360ff90dc36c25','Re'),(166,41,17,8,5,2,NULL,'',NULL,75.00,'2018-02-14 00:34:11','2018-02-14 00:43:43',19,_binary '\0',19,_binary '\0','dadba9083a1a92af4f33609a8e520e19','Ci'),(167,42,2,5,5,4,NULL,'sin novedad ',NULL,110.00,'2018-02-14 16:21:01','2018-02-14 16:21:01',3,_binary '\0',3,_binary '\0','4e7aec4418b9fb5ba68dde04f78db143','Ca'),(168,43,2,5,6,2,NULL,'confirmar aerolínea y hora de llagada. ultima hora llegaron con dos niños. se les ubicó en la suite grande con un valor de 90 la noche ',NULL,180.00,'2018-02-14 16:25:38','2018-02-14 16:25:38',3,_binary '\0',3,_binary '\0','966d95fa73303a24e674e265ee0c1231','Ca'),(169,42,2,5,5,4,NULL,'SND',NULL,110.00,'2018-02-14 16:32:54','2018-02-14 16:32:54',3,_binary '\0',3,_binary '\0','4a4f6d9633f9d2086ecc673f72db36e1','Re'),(170,44,2,5,7,3,NULL,'confirmar hora de llegada ',NULL,455.00,'2018-02-14 16:38:21','2018-02-14 16:38:21',3,_binary '\0',3,_binary '\0','56fb01baeb66a398c7e6922a6b8ace84','Ca'),(171,45,2,7,7,2,NULL,'SN',NULL,135.00,'2018-02-16 17:04:02','2018-02-16 17:04:02',3,_binary '\0',3,_binary '\0','fd13ec54b8ae4dd252c8eae1950d6285','Ca'),(172,45,2,7,7,2,NULL,'',NULL,135.00,'2018-02-17 16:31:46','2018-02-17 16:31:46',3,_binary '\0',3,_binary '\0','d59a32ce7dfd1e9b0232ceef8a6c1673','Re'),(173,46,2,5,8,2,NULL,'llegada el 18 de febrero.  dos noches ',NULL,45.00,'2018-02-19 14:40:20','2018-02-19 14:40:20',3,_binary '\0',3,_binary '\0','185c73eccbeb988cdc4643e27e741952','Ca'),(174,46,2,5,8,2,NULL,'llegada el 18 de febrero. dos ',NULL,45.00,'2018-02-19 14:42:33','2018-02-19 14:42:33',3,_binary '\0',3,_binary '\0','2b3df2ba79f76e4953f8660f33743d34','Ca'),(175,46,2,5,8,2,NULL,'',NULL,90.00,'2018-02-20 00:10:20','2018-02-20 00:10:20',3,_binary '\0',3,_binary '\0','579a54c2d5599a4fef39cf08d7c30cf0','Re'),(176,47,2,5,8,2,NULL,'',NULL,90.00,'2018-02-21 17:37:24','2018-02-21 17:37:24',3,_binary '\0',3,_binary '\0','4fbd06ba0ad3c79bb0fdcda5242d84e5','Re'),(177,48,2,5,6,4,NULL,'',NULL,440.00,'2018-02-21 19:43:54','2018-02-21 19:43:54',3,_binary '\0',3,_binary '\0','53b25c646d791a5052db280587c64aec','Ca'),(178,49,2,5,6,4,NULL,'',NULL,240.00,'2018-02-21 22:36:37','2018-02-21 22:36:37',3,_binary '\0',3,_binary '\0','29e8022afe9aa39af40510cae6edbcc8','Re'),(179,50,2,5,7,3,NULL,'Viajo por trabajo y quizá utilice la tarjeta de crédito de la empresa.\n\n\nApproximate time of arrival: between 10:00 and 11:00 \nThis guest is interested in your airport shuttle service and would like to get more information from you.\n\nPREPARAR SUITE GRANDE, HACER TRIPLE',NULL,520.00,'2018-02-23 12:15:48','2018-02-23 12:15:48',3,_binary '\0',3,_binary '\0','b7a5fc7f84e206462e581f61991f1e3a','Ca'),(180,51,2,5,8,1,NULL,'',NULL,135.00,'2018-02-24 22:12:57','2018-02-24 22:12:57',3,_binary '\0',3,_binary '\0','cec8d18675961a61707694edbceacb2f','Ca'),(181,52,2,5,8,1,NULL,'',NULL,140.40,'2018-02-24 22:14:48','2018-02-24 22:14:48',3,_binary '\0',3,_binary '\0','994d91b1631e5323cfe62ae5586e7fa8','Ca'),(182,51,2,5,8,1,NULL,'Approximate time of arrival: between 10:00 and 11:00 \nFactura a nombre de: \nPatricio Sánchez Romero \nDirección: Quito \nRUC:  1707720262001 \nTelf.  0994486074 \nSu disponibilidad de desayunos... veo no se incluye en el servicio para incluirlo en la factura de ser el caso',NULL,140.40,'2018-02-24 22:37:56','2018-02-26 01:05:56',3,_binary '\0',3,_binary '\0','213662582bfd6c19cdc66088fefdc06d','Ci'),(183,53,2,7,7,2,NULL,'',NULL,225.00,'2018-02-24 22:51:21','2018-02-24 22:51:21',3,_binary '\0',3,_binary '\0','ac8f2b623e7a4cffed92c6887722eefc','Re'),(184,52,2,5,8,1,NULL,'Viajo por trabajo y quizá utilice la tarjeta de crédito de la empresa.\n\n\nApproximate time of arrival: between 09:00 and 10:00\n\n',NULL,140.40,'2018-02-24 22:52:56','2018-02-26 01:06:30',3,_binary '\0',3,_binary '\0','e8efe02de233348a4154746546bcd2ea','Ci'),(185,54,2,8,5,2,NULL,'',NULL,90.00,'2018-02-25 14:15:20','2018-02-26 02:04:33',3,_binary '\0',3,_binary '\0','31a831b64fc53f6cf85b69fe1ecffe08','Ci'),(186,18,2,7,7,2,NULL,'Justyna Wieczorek RESERVA DE AIRBNB\n',NULL,180.00,'2018-02-25 14:30:09','2018-04-30 20:13:27',3,_binary '\0',3,_binary '\0','8b84cbc3b76d7f85877c3c3279b45529','Ci'),(187,55,2,7,7,4,NULL,'YOLANDA CELLERI 4 pax. Estar pendiente al arribo, ofrecer transfer in',NULL,240.00,'2018-02-26 00:53:38','2018-02-26 00:53:38',3,_binary '\0',3,_binary '\0','5811827f64fd8f55b956727f8ddb47e6','Ca'),(188,56,2,7,7,2,NULL,'hora de llegada a las 13:10 \nHello - this booking is for a mother and 20-year old daughter who are visiting a friend who is studying in San Cristobal.  \nno cobrar ojo, pago directo a tarjeta',NULL,225.00,'2018-02-26 01:05:07','2018-03-19 14:19:55',3,_binary '\0',3,_binary '\0','d03111367cdd1a676588a48e018f3b44','Co'),(189,57,2,8,7,4,NULL,'ANA LABORDE\nPASAJEROS ADULTOS 2 Y 2 NIÑPS PREPARAR 203, GHACER RECARGA TV, EXISTE PAGO DE 60 DEPOSITO, COBRAR 75',NULL,135.00,'2018-02-26 16:17:38','2018-04-10 18:05:53',3,_binary '\0',3,_binary '\0','feff950922d8d8ffd306615cb52adfcf','Co'),(190,58,2,7,8,2,NULL,'son de Polonia ',NULL,105.00,'2018-02-27 00:47:51','2018-02-27 00:47:51',3,_binary '\0',3,_binary '\0','9dca7e3e32fd3e4ac5cf02f37975f3e0','Re'),(191,18,2,7,7,2,NULL,'\nLuis Rodriguez x2\n+1 (585) 414-9940\nHola me llamo Luis, voy con mi enamorada que es de Guayaquil a visitar Galapagos unos días.\n\nNo mover habitaccion, no cobrar , pago se hace directo a tarjeta AIRBNB',NULL,180.00,'2018-02-27 12:33:47','2018-05-08 15:34:08',3,_binary '\0',3,_binary '\0','762d4ef00c69fbd06b36f6650eab7f0a','Co'),(192,11,2,7,7,2,NULL,'RESERVA AIRBNB (NO COBRAR) PAGO DIRECTO A TARJETA \n\nHola somos Gabriela y Edgar nos gustaria alojarnos en esta casa ya que nos parece muy linda por las fotos. Gracias',NULL,180.00,'2018-03-01 03:29:47','2018-06-07 22:52:22',3,_binary '\0',3,_binary '\0','93a70ed1c2d41f413d8c2a47c21e1bbe','Ci'),(193,59,2,5,7,2,NULL,'Approximate time of arrival: between 13:00 and 14:00.  estar pendiente \nalistar habitación, ver recarga tv.\n \n',NULL,90.00,'2018-03-01 18:50:00','2018-04-30 00:15:54',3,_binary '\0',3,_binary '\0','c101b8699edf2567fe73b42c0807fbc5','Co'),(194,59,2,5,7,2,NULL,' Nombre de la pasajera Maria Andre Sanchez Sarmiento\nApproximate time of arrival: between 13:00.\n and 14:00.\nasegurarse en que vuelo viene. \ny coger exactamente los datos de la Sra. a su llegada. tener hecha la recarga del tv.',NULL,100.00,'2018-03-02 14:39:07','2018-04-30 00:16:18',3,_binary '\0',3,_binary '\0','f8b09401df1aabf08e4921930376e81f','Co'),(195,60,2,5,8,2,NULL,'llegan 6 personas en diferentes habitacion: 201, 202, 203. la reserva lo hicieron mediante una sola persona. \n',NULL,180.00,'2018-03-02 17:34:58','2018-03-03 00:09:15',3,_binary '\0',3,_binary '\0','6ba7112738492a0dea7e6c3085bc77cb','Ci'),(196,60,2,5,8,2,NULL,'',NULL,135.00,'2018-03-02 17:36:20','2018-03-03 00:08:49',3,_binary '\0',3,_binary '\0','7a2e439a338bac882337a4ce20a13d2f','Ci'),(197,60,2,5,8,2,NULL,'',NULL,180.00,'2018-03-02 17:41:57','2018-03-03 00:08:08',3,_binary '\0',3,_binary '\0','cd2bfd229b20774ac4a4c85b87757105','Ci'),(198,61,2,5,7,2,NULL,'DAR SUITE GRANDE, LA PEQUEÑA ESTA OCUPADA. CONTACTAR CON EL HUESPEDE PARA PEDIRLE DATOS DE ARRIBO',NULL,90.00,'2018-03-03 13:45:42','2018-03-05 00:24:01',3,_binary '\0',3,_binary '\0','aeb2e7895f41bd61712d8263e71870b2','Ci'),(199,18,2,7,7,2,NULL,'sephy-xtc8g0u3vhpqe078@guest.airbnb.com\ntel: +1 (410) 262-2616\ntener listo habitación, tv.',NULL,108.00,'2018-03-03 20:22:23','2018-05-25 15:33:29',3,_binary '\0',3,_binary '\0','91978d0c245edcfdde25a4b84bc7c488','Ci'),(200,62,2,5,7,2,NULL,'preparar habitación, contactar para saber la hora   de su llegada. ',NULL,250.00,'2018-03-06 00:38:31','2018-03-26 16:29:46',3,_binary '\0',3,_binary '\0','2810d6f7c6df3c2f2b5df02b2a538bf7','Co'),(201,62,2,5,7,2,NULL,'RECARGA TV, PREPARAR HABITACIÓN, ESTAR PEDIENTE DE LA LLEGADA .leonardo javier Ane',NULL,250.00,'2018-03-06 00:42:22','2018-03-26 16:28:36',3,_binary '\0',3,_binary '\0','1aae0648817e596e3c56d884085be4d4','Co'),(202,62,2,5,7,2,NULL,'RECARGA TV, PREPARAR HABITACIÓN, REALIZZAR CHECK IN. marcelo andres mondo',NULL,250.00,'2018-03-06 00:50:19','2018-03-26 16:28:23',3,_binary '\0',3,_binary '\0','0f25b53a76760f9586ce6d3faca3bf29','Co'),(203,18,2,7,7,1,NULL,'RESERVA CAPTADA POR MADRINA, TENER LISTA LA HABITACIÓN,  PREGUNTAR HORA DE LLEGADA ',NULL,70.00,'2018-03-06 18:19:51','2018-03-06 18:19:51',3,_binary '\0',3,_binary '\0','5605298a7e2cd5a917f7a63d475a5082','Ca'),(204,18,2,7,7,3,NULL,'\nReserva captada por Madrina. UNA PAREJA CON UNA NIÑA DE 10 AÑOS. RECARGA TV, PREPARAR HABITACIÓN Y ESTAR PENDIENTE DE LA HORA DE LLEGADA  ',NULL,80.00,'2018-03-06 18:27:30','2018-03-16 23:02:06',3,_binary '\0',3,_binary '\0','c9bb1180903c816e36c58e9ccbbda94f','Ci'),(205,37,2,2,7,1,NULL,'tener lista la habitación. ',NULL,100.00,'2018-03-07 17:09:52','2018-03-07 17:09:52',3,_binary '\0',3,_binary '\0','bf377502ab9706bf7ec368f731554ef6','Re'),(206,63,2,5,7,3,NULL,'HORA DE LLEGADA  13 HORAS. ALISTAR KING ROOM  Y UNA A PARTE . ESTAR PENDIENTE RECARGA TV. ',NULL,390.00,'2018-03-07 17:31:42','2018-03-22 16:33:03',3,_binary '\0',3,_binary '\0','915edb699dfb62cde6cab1550fadf27d','Co'),(207,64,2,5,8,3,NULL,'Approximate time of arrival: between 16:00 and 17:00.',NULL,130.00,'2018-03-08 14:48:54','2018-03-08 14:48:54',3,_binary '\0',3,_binary '\0','5d12ad88e1f07841d0d29de6f7ca12e1','Ca'),(208,65,2,1,4,2,NULL,'LLEGADA 10:20 AM. PREPARAR HABITACIÓN.  DIA MARTES RETORNO A LAS 11:15',NULL,180.00,'2018-03-09 15:18:21','2018-03-23 23:22:24',3,_binary '\0',3,_binary '\0','859ea7c4742a59c536a8bb8d553cee9b','Co'),(209,11,2,8,4,2,NULL,'captado',NULL,180.00,'2018-03-09 17:47:33','2018-03-09 17:48:35',3,_binary '\0',3,_binary '\0','02edf5891263d3249f44d1f04a79b015','Ca'),(210,66,2,1,5,2,NULL,'HABITACION MATRIMONIAL, LLEGA 13:10, RESERVA DE PAPÁ. PAPÁ OFRECIO PASEO CONSULTAR PROGRAMA CON EL.',NULL,90.00,'2018-03-09 19:27:02','2018-05-01 20:59:34',3,_binary '\0',3,_binary '\0','6832ce759ccd899270b35e771a198ca9','Co'),(211,18,2,2,8,1,NULL,'',NULL,90.00,'2018-03-09 19:40:01','2018-03-16 01:53:39',3,_binary '\0',3,_binary '\0','7ad41a5f7daafe2782d47160a836be8e','Ci'),(212,67,2,7,7,2,NULL,'RESERVA AIRBNB NO COBRAR \nHola! We are travelling to the Galapagos for our honeymoon and your place looks perfect :).\nayer a las 22:35',NULL,90.00,'2018-03-10 23:46:05','2018-08-10 16:48:15',3,_binary '\0',3,_binary '\0','80114360fac4297f9efa5d34d90d6a6b','Ci'),(213,68,2,5,5,2,NULL,'reserva ultima hora, ya pagaron',NULL,90.00,'2018-03-10 23:51:10','2018-03-10 23:52:16',3,_binary '\0',3,_binary '\0','db63c45a2062fdea58284ed8617ed3ea','Ci'),(214,69,2,5,7,2,NULL,'TENER LISTA HABITACIÓN. ',NULL,184.00,'2018-03-11 17:54:49','2018-09-05 12:32:36',3,_binary '\0',3,_binary '\0','fe75879bee3988850a69a0949bbfcf15','Ca'),(215,70,2,5,7,2,NULL,'PREPARAR HABITACIÓN, Y ESTAR PENDIENTE DE LA HORA DE LLEGADA ',NULL,138.00,'2018-03-11 21:52:11','2018-03-11 21:52:11',3,_binary '\0',3,_binary '\0','7c625adc04bf1b7bd4a32cdbe07199d9','Ca'),(216,71,2,5,4,3,NULL,'HIJA VIAJA CON SU MAMA Y SU HERMANA, TENER PREPARADA HABITACION CON 3 CAMAS SEPARADAS, REVISAR TODO.\n\nSE QUEDAN NOCHES DEL 15 Y 16 Y SE VUELVEN A HOSPEDAR LA NOCHE DEL 21',NULL,130.00,'2018-03-13 14:34:06','2018-03-13 14:34:06',3,_binary '\0',3,_binary '\0','24e53461b17b4d2c35ab68f9f12db6a7','Ca'),(217,72,2,5,4,3,NULL,'mail: genoliz@yahoo.es\nMAMA CON DOS HIJAS.\nREGRESAN EL 21, ESTAR PENDIENTE\n',NULL,130.00,'2018-03-13 14:45:29','2018-04-17 17:07:32',3,_binary '\0',3,_binary '\0','74847ca7d2eec9c52ff1efb955e79a9e','Co'),(218,71,2,5,4,3,NULL,'HIJA VIAJA CON SU MAMA Y SU HERMANA, TENER PREPARADA HABITACION CON 3 CAMAS SEPARADAS, REVISAR TODO. SE QUEDAN NOCHES DEL 15 Y 16 Y SE VUELVEN A HOSPEDAR LA NOCHE DEL 21',NULL,130.00,'2018-03-13 14:58:52','2018-03-13 14:58:52',3,_binary '\0',3,_binary '\0','09a12866f3b94acfe824019c1d22f406','Ca'),(219,71,2,5,8,3,NULL,'HIJA VIAJA CON SU MAMA Y SU HERMANA, TENER PREPARADA HABITACION CON 3 CAMAS SEPARADAS, REVISAR TODO. SE QUEDAN NOCHES DEL 15 Y 16 Y SE VUELVEN A HOSPEDAR LA NOCHE DEL 21',NULL,60.00,'2018-03-13 14:59:42','2018-04-22 01:15:54',3,_binary '\0',3,_binary '\0','2aea30f3609ef474c159b773d729bc07','Ci'),(220,73,2,5,5,1,NULL,'familiar de juanita perez, no mover reserva, prepara habitacion',NULL,120.00,'2018-03-14 05:39:47','2018-03-14 05:39:47',3,_binary '\0',3,_binary '\0','5e8f953a65940d28f38d7092fd874fc9','Ca'),(221,73,2,8,6,1,NULL,'familiar',NULL,120.00,'2018-03-14 05:54:30','2018-03-14 05:54:30',3,_binary '\0',3,_binary '\0','f8a2759e591a4044d8699fd8a1b376c7','Re'),(222,74,2,5,7,3,NULL,'Approximate time of arrival: between 14:00 and 15:00.ALISTAR HABITACIÓN, RECARGA TV, ',NULL,455.00,'2018-03-14 17:03:59','2018-03-14 17:03:59',3,_binary '\0',3,_binary '\0','9a773896090ffcdc9c72eb3d35e2863c','Ca'),(223,75,2,5,7,1,NULL,'TENER LISTA HABITACIÓN , Y ESTAR PENDIENTE LA HORA DE LLEGADA ',NULL,180.00,'2018-03-14 18:23:23','2018-03-23 23:21:22',3,_binary '\0',3,_binary '\0','0c614661e774ab18b47406469a09151b','Co'),(224,55,2,8,8,4,NULL,' ESTAR PENDIENTE A LA LLEGADA POR LA MAÑANA A LAS 9:00 AM. ALISTAR HABITACIÓN\nofrecer transfer in ',NULL,120.00,'2018-03-14 22:52:25','2018-03-14 22:52:25',3,_binary '\0',3,_binary '\0','7e50a6a300c4184c868b5e1efef872a4','Re'),(225,55,2,8,8,4,NULL,'estar pendiente la llegada en la mañana 9:00am \ntener lista habitación. ofrecer el transfer in.  HABLAR CON LOS PASAJEROS QUE LA SIGUIENTE NOCHE SE LOS PASARA A LA HABITACIÓN 203',NULL,120.00,'2018-03-14 22:54:35','2018-03-14 22:54:35',3,_binary '\0',3,_binary '\0','a36a217a54f0702ec187345e0ecda7ce','Re'),(226,76,2,5,7,4,NULL,'Ecuatorianos todos, contactar con huesped para TRANSFER IN',NULL,204.00,'2018-03-18 14:33:06','2018-03-18 14:33:06',3,_binary '\0',3,_binary '\0','1f476d76a5961649fe5969304666fc79','Ca'),(227,77,2,5,7,2,NULL,'Approximate time of arrival: between 12:00 and 13:00 \nThis guest is interested in your airport shuttle service and would like to get more information from you.\n\nCONTACTAR PARA OFRECER TRANSFER IN',NULL,85.00,'2018-03-18 15:07:05','2018-03-18 15:07:05',3,_binary '\0',3,_binary '\0','ba3144ce5a3f02fa8d11d5f658f5c783','Ca'),(228,78,2,5,7,1,NULL,'Es primera vez que voy así que sería de gran ayuda información turística de como recorrer los lugares más hermosos de las islas a un precio accesible, también recomendaciones de lugares para ir a comer. La idea es que sea una experiencia inolvidable.\n\nEl desayuno está incluido en el precio de la habitación.',NULL,208.25,'2018-03-18 15:19:44','2018-03-18 15:19:44',3,_binary '\0',3,_binary '\0','f740cbf8511744ddd9a169d3f70c37b8','Ca'),(229,79,2,1,7,3,NULL,'',NULL,90.00,'2018-03-19 00:11:49','2018-03-23 23:22:54',3,_binary '\0',3,_binary '\0','f7b15ce43a31e10195768913532c35ea','Co'),(230,79,2,1,7,3,NULL,'mochileras ',NULL,90.00,'2018-03-19 00:13:01','2018-03-19 00:15:50',3,_binary '\0',3,_binary '\0','2c8cfa653d7c077e6c01389fcfa5b299','Ci'),(231,79,2,1,7,3,NULL,'',NULL,135.00,'2018-03-19 14:56:30','2018-03-23 23:21:52',3,_binary '\0',3,_binary '\0','f866bc187b9df67f4846943c8937fabf','Co'),(232,80,2,5,7,4,NULL,'TENER LISTA HABITACIONES, RECARGA TV. VER HORA DE LLEGADA ',NULL,408.00,'2018-03-20 00:28:31','2018-05-01 22:51:32',3,_binary '\0',3,_binary '\0','a2b0a90c9e7a96ee571bc37627285de5','Ci'),(233,18,2,8,8,4,NULL,'cambio Maria Celleri, preparar habitación, recarga tv. ofrecer transfer.\nestar pendiente  llegada en la mañana 9:00 am ',NULL,240.00,'2018-03-20 15:00:38','2018-03-27 18:01:10',3,_binary '\0',3,_binary '\0','ddaf98bcef3eed793e9615462b257dde','Co'),(234,81,2,8,7,3,NULL,' DOS ADULTOS Y UN NIÑO \nALISTAR UNA CAMA ADICIONAL. PENDIENTE HORA DE LLEGADA ',NULL,90.00,'2018-03-21 00:02:17','2018-03-21 00:02:17',3,_binary '\0',3,_binary '\0','b2d0671235e4a113f3f20826faaf0887','Ca'),(235,81,2,8,7,3,NULL,'DOS ADULTOS Y UN NIÑO, PREPARAR  CAMA, TENER LISTA . REGRESAN ',NULL,45.00,'2018-03-21 00:04:43','2018-03-21 00:04:43',3,_binary '\0',3,_binary '\0','5c3b36f8de89cb86aa9f492681617c94','Ca'),(236,7,2,1,5,5,NULL,'pruebas aceptacion',NULL,330.00,'2018-03-21 03:10:57','2018-03-21 03:10:57',2,_binary '\0',2,_binary '\0','60778489fa01486095bd7812b78e35b3','Re'),(237,88,2,5,5,2,NULL,'',NULL,260.00,'2018-03-21 04:46:23','2018-03-21 04:46:23',2,_binary '\0',2,_binary '\0','994698fbbe1365285677bc4f492614b0','Re'),(238,89,2,8,4,2,NULL,'pendiente hora de llegada. Ofrecer transfer in. \ntener lista habitación, recarga tv. \npara la fecha del 30 /31 de marzo  realizará la transferencia del 50 % de la reserva.\nADRIANA NARANJO \n',NULL,100.00,'2018-03-23 18:28:26','2018-04-19 22:15:22',3,_binary '\0',3,_binary '\0','ea29ecb2860dabb7d7801aea7977ed7f','Co'),(239,90,2,5,7,1,NULL,'Preparar habitación, preguntar hora de llegada \n',NULL,420.00,'2018-03-24 23:14:02','2018-03-24 23:14:02',3,_binary '\0',3,_binary '\0','30b3802d56550acd1638e3e0581f68fe','Ca'),(240,91,2,5,7,1,NULL,'TENER LISTA HABITTACION, PONERSE EN CONTACTO PARA ESTAR PENDIENTE LA HORA DE LLAGADA \nJaeho Choi (GENIUS)',NULL,105.00,'2018-03-25 15:20:32','2018-03-25 15:20:32',3,_binary '\0',3,_binary '\0','aa4cc12393430ee246e9212c86d7e6b6','Ca'),(241,92,2,5,7,2,NULL,'alistar habitacion ',NULL,100.00,'2018-03-26 15:13:20','2018-03-26 16:30:31',3,_binary '\0',3,_binary '\0','4039af80962bc867386da26e5bd36c2f','Ci'),(242,93,2,1,4,2,NULL,'preparar habitación, estar pendiente hora de llegada.\nofrecer transer in.\nSANTIAGO RICALDE \n',NULL,250.00,'2018-03-26 18:08:26','2018-04-06 15:12:41',3,_binary '\0',3,_binary '\0','9c841a5b997cd60465d30c5e7c516fb3','Co'),(243,94,2,5,7,2,NULL,'contactar para offrecer el transfer tener lista habitacion. recarga tv.\nGABRIELA ZALUDA',NULL,100.00,'2018-03-27 01:10:58','2018-03-27 01:10:58',3,_binary '\0',3,_binary '\0','c78b30375990d857f9a3ce7fd628b120','Re'),(244,95,2,5,7,2,NULL,'preparar habitacion. ofrecer transfer ',NULL,208.00,'2018-03-27 16:08:32','2018-03-31 21:43:59',3,_binary '\0',3,_binary '\0','5a914421a9d0f24ac2a0f2ac111a2aee','Co'),(245,96,2,5,5,2,NULL,'asdada',NULL,180.00,'2018-03-28 02:53:42','2018-03-28 02:53:42',2,_binary '\0',2,_binary '\0','48cb107a3317e4e5d529a519bb450bad','Re'),(246,97,2,8,5,2,NULL,'asdads',NULL,180.00,'2018-03-28 02:59:13','2018-03-28 02:59:13',2,_binary '\0',2,_binary '\0','1e0dec339fa35982a4fe5f3a743ad275','Re'),(247,98,2,5,5,2,NULL,'sdasdasda',NULL,180.00,'2018-03-28 03:02:44','2018-03-28 03:02:44',2,_binary '\0',2,_binary '\0','9513fda0b9012add108679445c5bce5d','Re'),(248,99,2,2,5,2,NULL,'dasda',NULL,180.00,'2018-03-28 03:04:11','2018-03-28 03:04:11',2,_binary '\0',2,_binary '\0','05664892d86b1084340f505074a6d364','Re'),(249,100,2,8,7,2,NULL,'adsad',NULL,45.00,'2018-03-28 03:10:53','2018-03-28 03:10:53',2,_binary '\0',2,_binary '\0','6875682022357558e9e93f96e5c16b4d','Re'),(250,102,2,5,7,2,NULL,'fasda',NULL,90.00,'2018-03-28 03:33:39','2018-03-28 03:33:39',2,_binary '\0',2,_binary '\0','21c022a3d74a68fcaa0e11ead27058c8','Re'),(251,18,2,9,7,2,NULL,'Jean Pino Rodriguez.  estar pendiente hora de llegada. tener lista la habitación. \ncontacto: +593 9 8987 5033',NULL,321.30,'2018-03-28 23:52:13','2018-04-17 17:07:10',3,_binary '\0',3,_binary '\0','5591fc059beb95da5864265775eaefb9','Co'),(252,103,2,5,7,2,NULL,'Katie Maden \nPreparar habitación, contactar para hora de llegada. recarga tv \nofrecer el transfer',NULL,100.00,'2018-03-29 15:09:14','2018-05-13 14:41:50',3,_binary '\0',3,_binary '\0','74f81af4c8e01f9f93506b9ad03051be','Co'),(253,18,2,1,8,5,NULL,'4 adultos, 1 niño\ncama king, y dos de 11/2. \ntransfer in  VERONICA CASTRO',NULL,140.00,'2018-03-29 17:00:04','2018-04-05 17:59:50',3,_binary '\0',3,_binary '\0','7aa482220eaae0994cb70145af5e7833','Co'),(254,104,2,1,7,4,NULL,'Contactar para hora de llegada. tener lista habitaciones, recarga tv, \ntransfer in. ',NULL,440.00,'2018-03-30 21:24:52','2018-04-10 15:22:58',3,_binary '\0',3,_binary '\0','3f9811b9d2cc55dcb7fabfc883354099','Co'),(255,105,2,5,8,2,NULL,'Pasajeros ya se hospedaron en la 201, no mover la habitacion, tienen maletas en custodia, estar pendiente 4 de abril retornan de Santa Cruz.',NULL,52.00,'2018-03-31 12:55:05','2018-04-05 17:59:37',3,_binary '\0',3,_binary '\0','b7c246bdac1588e343a4b22ecde3c38a','Co'),(256,106,2,5,7,2,NULL,'Bernhard Jirak \npreparar habitación, recarga tv. \ntransfer in.  \ncontactar para confirmar hora de llegada ',NULL,150.00,'2018-03-31 15:28:03','2018-05-13 14:41:22',3,_binary '\0',3,_binary '\0','730c00643100baae42f5272fb7e7266b','Co'),(257,107,2,5,7,2,NULL,'preparar habitacion,contactar para hora de llegada. \nrecarga tv ',NULL,165.00,'2018-03-31 15:36:35','2018-03-31 15:36:35',3,_binary '\0',3,_binary '\0','a9d061cabe7cbb5ccbed6bb973f6fea2','Ca'),(258,108,2,5,7,2,NULL,'alistar habitacion \ncontactar para hacer el transfer \nFelix Jimenez ',NULL,104.00,'2018-03-31 16:27:36','2018-07-06 12:56:44',3,_binary '\0',3,_binary '\0','50204e6355bb82d4f875b3681afb0a24','Co'),(259,109,2,5,7,2,NULL,'alista habitacion, \ncontactar para offrecer transfer .\nNicolas SOCCOL',NULL,104.00,'2018-03-31 16:29:19','2018-07-04 23:35:47',3,_binary '\0',2,_binary '\0','f32c863dd2673c1aefd931cb2105da53','Ci'),(260,110,2,5,7,2,NULL,'PERSONAS GENIUS.\nCONTACTAR PARA ESTAR EN LA HORA DE LLEGADA, TRANSFFER IN.\nALSTAR HABITACION \nRECARGA TV. ',NULL,100.00,'2018-03-31 18:39:54','2018-08-14 14:04:33',3,_binary '\0',3,_binary '\0','c39ffbd7d82900bcc35ec8384863ba3d','Ca'),(261,111,2,5,7,1,NULL,'APROXIMATE TIME OF ARRIVAL : BETWEEN 13:00 AND 14:00. PREPARAR HABITACION. \nOFRECER EL TRANSFER ',NULL,140.00,'2018-04-04 22:57:44','2018-04-04 22:57:44',3,_binary '\0',3,_binary '\0','fa9d2e0bf95734a7dc3d988c32bb5dca','Ca'),(262,112,2,5,7,2,NULL,'contactar para hora de llegada, \ntener lista habitación, recarga tv, ',NULL,350.00,'2018-04-04 23:05:36','2018-04-04 23:05:36',3,_binary '\0',3,_binary '\0','fcb39b48005d407968524bfcd4a59082','Ca'),(263,18,2,9,7,2,NULL,'CARLOS AIRBNB  ECUADOR( GUAYAQUIL).\nPENDIENTE NUMERO DE CELULAR, HORA DE LLEGADA, \nPREPARAR HABITACION, RECARGA TV.\n',NULL,400.00,'2018-04-05 00:08:37','2018-04-05 14:14:01',3,_binary '\0',3,_binary '\0','bb8393572ebc90ecb62f824910f6db44','Ca'),(264,113,2,5,7,2,NULL,'CONTACTAR PARA HORA DE LLEGADA, \n OFRECER  TRANSFER, TENER LISTA HABITACIÓN.  ',NULL,260.00,'2018-04-05 00:16:10','2018-04-05 00:16:10',3,_binary '\0',3,_binary '\0','da8ce20712eecacd91dc4d0f96163e0f','Ca'),(265,114,2,5,7,2,NULL,'contactar para estar pendiente hora de llegada.\ntener lista habitación. recarga tv.',NULL,350.00,'2018-04-05 17:43:25','2018-04-05 17:43:25',3,_binary '\0',3,_binary '\0','8a572bde55539ed35c050f424febe5d0','Ca'),(266,18,2,9,7,2,NULL,'Chandler Brown y esposa (ESTADOS UNIDOS)\nchandler-3ptz14upzdsnjjzm@guest.airbnb.com\ncell: +1 (972) 837-6581\n. ALISTAR HABITACIÓN. ESTAR PENDIENTE HORA DE LLEGADA. \n\n',NULL,92.00,'2018-04-05 17:52:04','2018-04-05 17:52:04',3,_binary '\0',3,_binary '\0','d085e59dfe7649ee0371cbe9dfd8967a','Re'),(267,115,2,5,7,2,NULL,'contactar para hora de llegada. \ntener lista habitación, recarga tv. ',NULL,150.00,'2018-04-06 20:38:14','2018-08-14 14:03:02',3,_binary '\0',3,_binary '\0','a31e472bab0448e3b6b5b5bb30066108','Ca'),(268,116,2,5,7,2,NULL,'preparar habitación, contactar para hora de llegada \nApproximate time of arrival: between 12:00 and 13:00 \nBED PREFERENCE:Standard King Room: 2 singles\nHola! queríamos saber si tenían bicicletas que nos presten, somos 2 guayaquilenas y por lo que vemos estan a un par de cuadritas del muelle. \nGracias! \nEl desayuno esta incluido?\n',NULL,200.00,'2018-04-10 02:32:48','2018-05-01 20:55:44',3,_binary '\0',3,_binary '\0','a510711a2c431ca531fbffcd20bc677c','Co'),(269,18,2,9,7,2,NULL,'CARLOS NOEL.\ncarlos-qgxayxj9vxd6au2r@guest.airbnb.com\nCELL: +593 9 9938 6423 (CONTACTAR PARA HORA DE LLEGADA)\n',NULL,414.00,'2018-04-10 16:09:08','2018-04-10 16:09:08',3,_binary '\0',3,_binary '\0','b8573601f285c4600dc793c44cd99511','Re'),(270,117,2,5,7,2,NULL,'Persona (GENIUS)\nIdioma de preferecia Ingles.\nApproimate tome of Arrival: between 10:00 and 11:00 am\npreparar habitación. Recarga TV.\n',NULL,100.00,'2018-04-14 23:17:45','2018-09-08 19:45:48',3,_binary '\0',3,_binary '\0','a8a2fcf8eb273b4ddba54458449da508','Ca'),(271,118,2,5,7,2,NULL,'PENDIENTE DEL ARRIBO, PREGUNTAR A QUE HORA LLEGAN, NO SE HA OFRECIDO TRANSFER IN (OPCIONAL). SE PIDIO TRANSFERENCIA DEL 50%,  PENDIENTE A SU RESPUESTA EN BOOKING',NULL,315.00,'2018-04-22 00:40:40','2018-04-22 00:40:40',3,_binary '\0',3,_binary '\0','8cf5a062d91e9a67189215adac8bdaaf','Ca'),(272,119,2,5,7,5,NULL,'HUBO UN CHIQUE DE RESERVAS, DE UN INICIO PIDIERON SUITE FLOREANA Y ESPAÑOLA, SE VA A DAR SUITE SAN CRISTOBAL Y SUITE ESPAÑOLA, SE PIDIO 50% DE PAGO, ESTAR PENDIENTE. HORA DE LLEGADA 9:20 AM',NULL,380.00,'2018-04-22 00:52:57','2018-06-08 17:47:41',3,_binary '\0',3,_binary '\0','e5bd2d8c7ce50a0ecf300de1cbadd96e','Ci'),(273,120,2,1,4,4,NULL,'FAMILIA DE 4 PAX, ALISTAR SUITE SAN CRISTOBAL DE LA SIG FORMA: CAMA QUEEN MAS 2 CAMAS INDIVIDUALES.',NULL,300.00,'2018-04-22 00:59:34','2018-04-22 00:59:34',3,_binary '\0',3,_binary '\0','06013eab9293b2b4a90f4203e8a2caa0','Re'),(274,121,2,5,8,2,NULL,'2 PAX VIENEN POR SANTA CRUZ, LANCHA DE LA MAÑANA, CONTACTAR CON LOS HUESPEDES, CANCELAN A SU ARRIBO  OJO ES GENIUS, HAY QUE OFRECERLES EL TRANSFER IN Y OUT',NULL,150.00,'2018-04-22 01:11:41','2018-05-13 14:41:36',3,_binary '\0',3,_binary '\0','c5850891dd40f542ebfbefa8cbb6086a','Co'),(275,122,2,8,7,5,NULL,'2 adultos 1 persona adulta mayor 1 niña de 7 años y una bebé',NULL,225.00,'2018-04-22 02:07:17','2018-05-04 23:42:29',3,_binary '\0',3,_binary '\0','c10cc5b50093dd47ebb6da633e64bd56','Ci'),(276,123,2,5,7,2,NULL,'JUAN CARLOS ESTEVEZ\nALISTAR SUITE San cristobal, se solicito el 50% estar pendientes. OJO ES CLIENTE GENIUOS, IR A VERLO AL AEROPUERTO.',NULL,171.00,'2018-04-25 13:56:58','2018-04-25 13:56:58',3,_binary '\0',3,_binary '\0','0089b18a2f92afca2bb3c48870503848','Ca'),(277,124,2,5,7,5,NULL,'LENY SALGUERO.\n5 ADULTOS, ALISTAR ISABELA(SALEN GANANDO CON LA SUITE QUE HAY) Y ESPAÑOLA(3 CAMAS).\nNO S EHA SOLICITADO PAGO DE 50% YA QUE ES TRANSFERENCIA INTERNACIONAL AUN SE ESTA PROGRAMANDO NUESTRO SISTEMA DE PAGOS EN LINEA',NULL,380.00,'2018-04-25 14:02:16','2018-04-25 14:02:16',3,_binary '\0',3,_binary '\0','c64070cfbc2a26c9b44334e56279f859','Re'),(278,125,2,9,7,1,NULL,'PASAJERO DE AIRBNB, , ALISTAR ESPAÑOLA. OJO ES UN SOLO ADULTO. ESPERAR A LLEGADO, NO COBRAR, PAGO SE REALIZA YA VIA TRANSFERENCIA.',NULL,138.00,'2018-04-25 23:01:43','2018-04-25 23:01:43',3,_binary '\0',3,_binary '\0','68f3ff5e80d72c6d0b9163bba0aee323','Ca'),(279,126,2,9,7,1,NULL,'UNA PASAJERA, CAROLINA BANDERA, HUESPED DE AIRBNB, PREGUNTAR ARRIBO PARA TRANSFER IN.',NULL,135.00,'2018-04-25 23:07:04','2018-04-25 23:07:04',3,_binary '\0',3,_binary '\0','36486e6f7cf2b8e5165cc80f3f53fadc','Re'),(280,127,2,5,7,3,NULL,'dos adultos y un niño de 6 años.\npreparar habitación.',NULL,162.00,'2018-04-30 17:21:25','2018-04-30 17:21:25',3,_binary '\0',3,_binary '\0','85985b3b4e1d93d36827017d8ec6dafc','Re'),(281,128,2,8,6,5,NULL,'Vienen 2 niños',NULL,500.00,'2018-05-04 23:36:27','2018-05-04 23:46:53',2,_binary '\0',2,_binary '\0','c9b2317b2ad6de89883cba0599c9585b','Co'),(282,122,2,8,7,5,NULL,'',NULL,300.00,'2018-05-05 01:48:01','2018-05-05 01:48:01',3,_binary '\0',3,_binary '\0','7a05a02ce850b7feb2455f8752661e84','Re'),(283,129,2,5,7,2,NULL,'alistar habitación\nrecarga tv\ncontactar para hora de llegada',NULL,114.00,'2018-05-06 16:47:32','2018-05-06 16:47:32',3,_binary '\0',3,_binary '\0','3fc7d04dd3677c4deedf9c62c8958263','Re'),(284,130,2,5,7,3,NULL,'con un niño de 6 años \ntener lista habitación. y estar pendiente la hora de llegada ',NULL,216.00,'2018-05-11 00:07:31','2018-05-11 00:07:31',3,_binary '\0',3,_binary '\0','63010a1369dca94b367e17ad39559793','Re'),(285,131,2,5,7,1,NULL,'PERSONA GENUIS\nContactar para hora de llegada, ofrecer transfer in \ntener lista la habitación.',NULL,150.00,'2018-05-12 20:06:44','2018-05-28 20:55:31',3,_binary '\0',3,_binary '\0','b46fd6203e5a4c21e1908bdab8e60d93','Ci'),(286,132,2,5,7,2,NULL,'PERSONA GENIUS \nAQUELLA PERSONA PIDIO LA HABITACIÓN SUITE PEQUEÑA , PERO DEBIDO A QUE ESTA OCUPADA PARA TALES FECHAS, LE ASIGNE ESTA HABITACIÓN. (NO TIENE COCINA PERO ES UNA DE NUESTRAS MEJORES HABITACIONES).CONTACTAR PARA LA HORA DE LLEGADA, OFRECER TRANSER. ',NULL,150.00,'2018-05-14 20:56:30','2018-05-14 20:56:30',3,_binary '\0',3,_binary '\0','5a32477c893ffe64dabfa513ac6ed6b8','Ca'),(287,133,2,9,7,5,NULL,'un niño de 1 año ',NULL,432.00,'2018-05-18 02:36:10','2018-05-18 21:00:47',3,_binary '\0',3,_binary '\0','d81708536b32d656b0e32d23788b5e39','Ci'),(288,134,2,5,5,2,NULL,'persona Genius ',NULL,200.00,'2018-05-18 02:38:16','2018-05-18 21:00:08',3,_binary '\0',3,_binary '\0','ee76ed0e663c9c63dcae1548d956ba85','Ci'),(289,135,2,7,5,1,NULL,'mochilera\nestar pendiente, confirmara para una noche mas de estadía el dia viernes, que regresa de santa cruz ',NULL,75.00,'2018-05-19 19:43:31','2018-05-19 19:43:45',3,_binary '\0',3,_binary '\0','af3fa0ef051d39af7ade294487c0d192','Ci'),(290,136,2,5,7,3,NULL,'PERSONAS GENIUS\ncontactar para la hora de llegada, ofrecer transfer in , tener lista la habitación .',NULL,216.00,'2018-05-21 01:52:16','2018-06-07 21:09:34',3,_binary '\0',3,_binary '\0','593f7e91605e19707713558f668783a2','Co'),(291,137,2,5,7,2,NULL,'PERSONA GENIUS\nAPPROXIMATE TIME OF ARRIVAL: BETWEEN 10:00 AND 11:00\nTENER LISTA LA HABITACION, RECARGA TV, \nOFRECER TRANSFER IN ',NULL,208.00,'2018-05-21 13:47:04','2018-06-07 21:09:49',3,_binary '\0',3,_binary '\0','f64ce5bd1872764ed0a2bd3a85da98ae','Co'),(292,138,2,8,7,3,NULL,'CONTACTAR PARA LA HORA DE LLEGADA, PREPARAR HABITACIÓN \nEXISTE UN DEPOSITO DE 138 DOLARES ',NULL,350.00,'2018-05-25 05:28:49','2018-06-03 19:41:07',3,_binary '\0',3,_binary '\0','dbe750a51bbaec57d81b88d63b043122','Ci'),(293,139,2,5,7,3,NULL,'2 adultos y un niiño de 8 años \nCONTACTAR PARA LA HORA DE LLEGADA.\nTENER LISTA LA HABITACIÓN .\n',NULL,162.00,'2018-05-30 01:18:42','2018-06-16 17:32:27',3,_binary '\0',3,_binary '\0','8b1a7c5254f598267f97414b1c3fae6f','Ci'),(294,140,2,1,7,2,NULL,'PASAJEROS LLEGAN DE UN CRUCERO, VAN A PERMANECER UNA NOCHE, UNA PAREJA CON UNA BEBÉ. QUEDARON EN CONFIRMAR HORA DE LLEGADA ESTAR PENDIENTE. ALISTAR SUITE SAN CRISTOBAL',NULL,60.00,'2018-06-02 18:07:45','2018-06-07 21:10:06',3,_binary '\0',3,_binary '\0','a7cd5ea59719c0a1f460a5384499e385','Co'),(295,141,2,5,7,3,NULL,'PERSONA GENIUS \nLLEGA POR LANCHA EN LA TARDE , ESTAR PENDIENTE.\nRECARGA TV.  ',NULL,162.00,'2018-06-04 23:22:59','2018-07-06 12:57:20',3,_binary '\0',3,_binary '\0','d57438627ba2f3475f0e1c8ea3c711f3','Co'),(296,142,2,7,7,2,NULL,'deposito de 120 dolares \n',NULL,150.00,'2018-06-06 14:56:50','2018-06-06 14:58:21',3,_binary '\0',3,_binary '\0','c5f4723f20c07748a779119e3092a9bc','Ci'),(297,143,2,9,7,2,NULL,'PASAJEROS LLEGAN AL HOTEL, NO OFRECER TRANSFER IN / SOLO OFRECER TRANSFER OUT.\n\nPAGO SE HACE DIRECTO NO COBRAR',NULL,180.00,'2018-06-07 03:05:36','2018-06-07 03:05:36',3,_binary '\0',3,_binary '\0','330f7410cc0ff31988a626ada7ba335e','Ca'),(298,143,2,9,7,2,NULL,'PAGO SE HACE DIRECTO NO COBRAR,PASAJEROS DE AIRBNB',NULL,180.00,'2018-06-07 03:12:41','2018-06-07 03:12:41',3,_binary '\0',3,_binary '\0','9cef583c92ce0e2887607e78278dd7bf','Ca'),(299,144,2,5,7,2,NULL,'CONTACTAR PARA LA HORA DE LLEGADA.\nHUBO UN CHOQUE DE RESERVA PARA LA HABITACIÓN FERNANDINA POR LO TANTO SE LE ASIGNARA LA HABT. ISABELA ',NULL,150.00,'2018-06-08 13:17:09','2018-06-13 22:37:08',3,_binary '\0',3,_binary '\0','86cf9a9a375405be05527b9f81f58a58','Ci'),(300,145,2,5,7,1,NULL,'contactar para hora de llega.\nrecarga Tv',NULL,156.00,'2018-06-09 00:37:03','2018-06-29 23:31:28',3,_binary '\0',3,_binary '\0','b80061cff50cccb2050fe688df38e6e0','Ci'),(301,143,2,9,7,2,NULL,'pago directo airbnb, solicitaron cambios de fechas, ya se acepto en sistema de airbnb.',NULL,180.00,'2018-06-09 13:13:04','2018-06-11 21:25:44',3,_binary '\0',3,_binary '\0','0728663a9ef3d959e0875cbd02df5fd3','Ci'),(302,146,2,5,7,2,NULL,'CONTACTAR PARA LA HORA DE LLEGADA.\nESTAR PENDIENTE LA RECARGA TV. ',NULL,150.00,'2018-06-10 15:38:25','2018-06-10 15:38:25',3,_binary '\0',3,_binary '\0','bfa1253b657e03f7d180b73ce459a0e9','Ca'),(303,147,2,5,7,4,NULL,'3 ADULTOS Y UN NIÑO DE 10 AÑOS \nPERSONA GENIUS. \nCONTACTAR PARA LA HORA DE LLEGADA.\nOFRECER TRANSFER IN.\nPENDIENTE SUITE PEQUEÑA LA RECARGA.',NULL,714.00,'2018-06-10 21:35:55','2018-06-10 21:35:55',3,_binary '\0',3,_binary '\0','c24580948505808f648f46658b2ce703','Ca'),(304,148,2,5,7,2,NULL,'CONTACTAR HORA DE LLLEGADA.\nRECARGA TV\nOFRECER TRANSFER IN ',NULL,156.00,'2018-06-12 10:21:34','2018-07-14 23:45:45',3,_binary '\0',3,_binary '\0','e52f27dc8d8f9e8ea763cf08916d6255','Ci'),(305,149,2,5,7,2,NULL,'PERSONA GENUIS: VIAJA POR CUESTIONES DE TRABAJO\nLLEGADA DE 9:00 AM 10:00 AM \n',NULL,150.00,'2018-06-12 10:25:55','2018-07-14 23:45:16',3,_binary '\0',3,_binary '\0','60e5ddfe92b47644d9ef3cfa9f7ffb8b','Ci'),(306,125,2,9,7,2,NULL,'se modifico reserva, llega 18 estar pendiente',NULL,180.00,'2018-06-13 17:07:58','2018-06-18 20:57:01',3,_binary '\0',3,_binary '\0','9d34c7999cb887a725fb4e6b61e99c8d','Ci'),(307,150,2,9,7,1,NULL,'COBRAR NOCHE ADICIONAL EN EFFECTIVO SOLO 1 NOCHE',NULL,45.00,'2018-06-15 00:24:46','2018-06-19 01:56:59',3,_binary '\0',3,_binary '\0','46161c1d2bf08d4db41f90ca578a56c0','Ci'),(308,151,2,1,7,1,NULL,'PASAJERO SE QUEDA 3 NOCHES, POSIBLE CLIENTE',NULL,105.00,'2018-06-15 00:42:18','2018-06-15 00:42:18',3,_binary '\0',3,_binary '\0','bfc4af16dfb20bd0cea35c7b9af0ad11','Re'),(309,152,2,6,5,2,NULL,'Note',NULL,140.00,'2018-06-18 01:54:14','2018-06-18 01:54:14',2,_binary '\0',2,_binary '\0','fa8eb9021413cbfe25f569cef33311a4','Re'),(310,153,2,6,5,2,NULL,'nota',NULL,150.00,'2018-06-18 01:57:33','2018-06-18 01:57:33',2,_binary '\0',2,_binary '\0','2144b4ee7e799fd4a6c04d52ead7f18b','Re'),(311,154,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,52.00,'2018-06-18 02:29:17','2018-06-18 02:29:17',-1,_binary '\0',-1,_binary '\0','56ab2e9bc030073a52ec54ef703d6bed','Re'),(312,155,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,50.00,'2018-06-18 02:33:15','2018-06-18 02:33:15',-1,_binary '\0',-1,_binary '\0','712fc5a98dc19535b9fb93ac1de26642','Re'),(313,156,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,50.00,'2018-06-18 02:34:28','2018-06-18 02:34:28',-1,_binary '\0',-1,_binary '\0','cb5f27938376037036a25c70d9af2124','Ca'),(314,157,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,104.00,'2018-06-18 02:43:57','2018-06-18 02:43:57',-1,_binary '\0',-1,_binary '\0','9b7935b1ef9070fad131c230e8e8556c','Ca'),(315,7,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,50.00,'2018-06-18 03:19:38','2018-06-18 04:07:54',-1,_binary '\0',2,_binary '\0','00e99a5e35daf37a575d15b6e27a819c','Ca'),(316,7,2,8,5,2,NULL,'Lool',NULL,90.00,'2018-06-18 03:48:22','2018-06-18 03:48:22',2,_binary '\0',2,_binary '\0','6625ebd00df5d1e6087ebb9f71332d27','Re'),(317,158,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,60.00,'2018-06-18 04:07:26','2018-06-18 04:07:26',-1,_binary '\0',-1,_binary '\0','2cd030efbdf461c5d35417673f62254a','Pr'),(318,7,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,60.00,'2018-06-18 04:10:05','2018-06-18 04:10:05',-1,_binary '\0',-1,_binary '\0','33f4ff80b7b7989965fdeba50f3044a5','Pr'),(319,7,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,50.00,'2018-06-18 04:13:04','2018-06-18 04:13:04',-1,_binary '\0',-1,_binary '\0','a8a7d386fef427729cbcbed823aeb5e1','Pr'),(320,7,2,6,7,2,NULL,'Reserva desde pagina web, no olvidar modificar país.',NULL,52.00,'2018-06-18 04:15:46','2018-06-18 04:15:46',-1,_binary '\0',-1,_binary '\0','27a4ee7c7526ea1d26c2d3c8bda830bd','Pr'),(321,7,2,8,5,2,NULL,'Lopez',NULL,52.00,'2018-06-18 05:27:58','2018-06-18 05:27:58',2,_binary '\0',2,_binary '\0','357d4e7cfc61f0e25191aae94e136134','Re'),(322,159,2,5,7,3,NULL,'3 ADULTOS.\nEL VUELO LLEGA APROXIMADAMANTE ENTRE 01:00 Y 02:00 \n',NULL,220.00,'2018-06-18 20:55:02','2018-06-18 20:55:02',3,_binary '\0',3,_binary '\0','efbd5cc27f530cf8316033682451de6d','Re'),(323,160,2,5,7,2,NULL,'PERSONA GENIUS\napproximate time of arrival : between 9:00 am  and 10:00 am \nEstar pendiente ofrecer tansfer  in y ademas revisar que este hecha la recarga del tv cable ',NULL,150.00,'2018-06-23 00:20:06','2018-06-27 22:23:13',3,_binary '\0',3,_binary '\0','4ff8d06c2b95fb82fe8deab9a9a8a8f3','Ci'),(324,161,2,5,7,5,NULL,'Approximate time of arrival :between 12:00pm and 13:00 pm \nestar pendiente de la hora de su llegada , tener las habitaciones listas. \nademas REVISAR TV CABLE.',NULL,420.00,'2018-06-23 00:28:06','2018-08-22 15:10:09',3,_binary '\0',3,_binary '\0','d28aaaf92afec4ef80053bf5c571445c','Ca'),(325,162,2,7,7,4,NULL,'2 adultos y 2 niños, contactar para ofrecer pick up llegan en lancha desde ssnta cruz, recomendacion Patty house, ya se encuentra el pago hecho por el total 100%, ojo no cobrar existe transferencia bancaria. Estr pendiente',NULL,210.00,'2018-06-25 02:19:43','2018-07-19 12:12:03',2,_binary '\0',3,_binary '\0','079d3b95439299bae4dd8aa5a6543d00','Ci'),(326,163,2,5,7,4,NULL,'',NULL,400.00,'2018-06-25 13:54:46','2018-06-25 13:54:46',2,_binary '\0',2,_binary '\0','7474233f5ad0562cee88a34863dd6c2b','Ca'),(327,164,2,6,8,1,NULL,'CORINA LLEGA EN LANCHA, ESTAR PENDIENTE PARA PICK UP AL MUELLE, CONTACTAR CON ELLA VIA MAIL O WHATSAPP +491703269938\nSE VA ACEPTAR EL PAGO EN EFECTIVO EN SU ARRIBO',NULL,312.00,'2018-06-25 16:51:45','2018-07-07 22:21:57',3,_binary '\0',3,_binary '\0','d8f8161b5f1b0a6337e61836e0063360','Co'),(328,165,2,5,7,1,NULL,'',NULL,200.00,'2018-06-28 22:40:46','2018-06-28 22:41:54',3,_binary '\0',3,_binary '\0','9e1c43d847caf356d66cfac15d79b19b','Ci'),(329,166,2,5,7,2,NULL,'CONTACTAR PARA HORA DE LLEGADA.\nRECARGA TV . ',NULL,150.00,'2018-06-28 22:51:45','2018-06-30 23:19:49',3,_binary '\0',3,_binary '\0','d2b5b94c7491f79ebb7621be00a91a9c','Ci'),(330,167,2,5,7,2,NULL,'CONTACTAR PARA LA HORA DE LLEGADA.\nESTAR PENDIENTE , TENER LISTA LA HABITACIÓN',NULL,250.00,'2018-06-30 15:56:40','2018-07-10 18:03:58',3,_binary '\0',3,_binary '\0','2e76d73a8364af14ab8acaa033608c75','Ci'),(331,168,2,5,7,2,NULL,'Arrival time 03 - 04 PM',NULL,260.00,'2018-06-30 17:41:12','2018-07-12 22:49:14',2,_binary '\0',3,_binary '\0','9a8da739aa4106dee8acf1415934b249','Ci'),(332,169,2,5,7,2,0,'arribo 10: 20 estar pendiente. Se esta en contacto mediante mensajes en BOOKING',NULL,150.00,'2018-07-02 20:52:31','2018-09-24 15:49:42',3,_binary '\0',3,_binary '\0','61548cfa9206fa1558bee27cf264ad4b','Co'),(333,170,2,5,7,3,NULL,'TIME OF ARRIVAL: 12:00 PM AND 13:00',NULL,220.00,'2018-07-02 23:18:34','2018-07-02 23:18:34',3,_binary '\0',3,_binary '\0','e93694138f6bccb2aee963e650f446a4','Ca'),(334,171,2,5,5,3,NULL,'total 3 pasajero (un matrimonio y un niño) llega por LATAM estimado de arribo  12:15 - pasajeros salen por el aeropuerto de San Cristobal, pendiente al transfer out',NULL,220.00,'2018-07-02 23:22:10','2018-07-02 23:22:10',3,_binary '\0',3,_binary '\0','32902fed7c9da8946796a2902464daf4','Re'),(335,172,2,9,5,2,NULL,'viajan en LATAM aprox. 13:00, dos adultos, no cobrar PAGO Airbnb',NULL,180.00,'2018-07-03 05:10:22','2018-07-03 05:10:22',3,_binary '\0',3,_binary '\0','c948feac8c7c1aa2aad7273531d7119b','Re'),(336,173,2,8,7,3,NULL,'HIJA CON SUS PADRES (3)\nCONTACTAR PARA LA HORA DE LLEGADA.\nTENER LISTA LA HABITACIÓN, RECARGA TV.\nOJO MI PADRINO SE ENCARGA DE REALIZAR LES EL TOUR,  ',NULL,130.00,'2018-07-03 23:45:31','2018-07-03 23:45:31',3,_binary '\0',3,_binary '\0','470f1ccf72865e29e5457aa2820c7f47','Re'),(337,174,2,9,8,3,NULL,'TAM Y ADAM LLEGAN EN FERRY, SE PUEDE CONTACTAR CON ELLOS PARA SABER EN QUÉ HORARIO.',NULL,135.00,'2018-07-05 12:53:16','2018-07-05 12:53:16',3,_binary '\0',3,_binary '\0','284d4f327cbf82fb7a80d95b8422310b','Ca'),(338,175,2,5,7,2,NULL,'ESTAMOS EN CONTACTO CON ELLA VIA WP, ELLA INDICA QUE VAN A VENIR DESDE ISABELA A SAN CRISTOBAL. SI ES ASI LLEGAN EN LANCHA DE LA TARDE, ESTAR PENDIENTE A JULIA',NULL,225.00,'2018-07-05 23:31:52','2018-08-02 23:34:21',3,_binary '\0',3,_binary '\0','0e14676f5938a71c66b40197275ec357','Ca'),(339,176,2,5,7,4,NULL,'RESERVA HECHA POR GINGER AGUIRRE PARA EL SEÑOR GIAN FRANCO CHIAPELLO. ECUATORIAN.\nTOTAL 4PAX EN 2 HABITACIONES.',NULL,300.00,'2018-07-06 12:55:54','2018-07-06 12:55:54',3,_binary '\0',3,_binary '\0','111d1be7f3e648be8a87fdbd3316fd2c','Ca'),(340,177,2,5,8,4,NULL,'PASAJEROS LLEGAN HOY EN LANCHA DE LA TARDE, ESTAR PENDIENTES PARA TRANSER IN. SE CAMBIO RESERVA PORQUE  HUESPEDES PERDIERON EL FERRY DESDE SANTA CRUZ',NULL,319.50,'2018-07-07 13:15:41','2018-07-07 22:17:59',3,_binary '\0',3,_binary '\0','fd314d41c2ddd4e2909d50d7572b3a8a','Ci'),(341,178,2,5,7,4,NULL,'SE PIDIO INO DE ARRIBO, ESTAR PENDIENTE. PASAJEROS YA PAGARON EL 100% OJO NO COBRAR.',NULL,336.00,'2018-07-07 13:22:11','2018-07-07 13:22:11',3,_binary '\0',3,_binary '\0','40be2443e350c60e53b2ba6fa3780caa','Re'),(342,179,2,1,7,3,NULL,'POSIBLE RESERVA',NULL,261.00,'2018-07-10 15:59:06','2018-07-10 15:59:06',3,_binary '\0',3,_binary '\0','feb23a2fedb51ff12119bf29b98687e3','Pr'),(343,180,2,1,7,2,NULL,'PASAJERO YA REALIZO EL PAGO',NULL,110.00,'2018-07-10 20:24:13','2018-11-08 12:51:16',3,_binary '\0',3,_binary '\0','3b04cfd74f351e0277ee5d7a9f52a629','Co'),(344,181,2,9,8,2,NULL,'Se hizo cambios de fechas, el pago se hace directamente no cobrar, estar pendiente la hora de llegada desde Santa Cruz, ellos van a comunicar en que itinerario hacen su arribo.',NULL,135.00,'2018-07-14 23:52:56','2018-07-14 23:52:56',3,_binary '\0',3,_binary '\0','344eca9d0744c3563dbbaf3de36a3472','Re'),(345,182,2,1,7,5,NULL,'ya hicieron el pago, estar pendietnte mediante WHATSAPP',NULL,1170.00,'2018-07-15 23:23:12','2018-07-15 23:23:12',3,_binary '\0',3,_binary '\0','3a1c3a6c2180d34141309df811207b0c','Re'),(346,183,2,5,7,2,NULL,'sra viene con su mamá, escogio ISABELA ya que a la mamá se le dificulta subida de escaleras a 3er piso',NULL,330.00,'2018-07-16 00:37:43','2018-07-16 00:37:43',3,_binary '\0',3,_binary '\0','30288b7bada8786c3d8c4f65c6cbbcf0','Ca'),(347,184,2,1,6,2,NULL,'sra viene con su mamá, escogio ISABELA ya que a la mamá se le dificulta subida de escaleras a 3er piso. LLEGA EN AVIANCA OJO TRANSFER IN',NULL,390.00,'2018-07-16 00:54:20','2018-08-29 01:45:56',3,_binary '\0',3,_binary '\0','197c9e289c15198a3aaaf5ba1f3a160b','Ci'),(348,185,2,5,7,4,0,'OJO COBRAR 80 DOLARES, EXISTE UN DEPOSITO DE 100 DOLARES, SE OFRECIO TARIFA DE 60 DOLARES LA NOCHE, DAR HABITACION ESPA;OLA, LA HABITACION DEBE ESTAR CON 2 CAMAS MATRIMONIALES OJO',NULL,165.00,'2018-07-19 00:52:56','2018-09-08 01:00:52',3,_binary '\0',3,_binary '\0','fb2c04d92b9ed3c51b22ea822fedc1d7','Ca'),(349,186,2,7,8,2,NULL,'salen el domingo por la mañana lancha de Sta Cruz. ',NULL,180.00,'2018-07-26 23:21:57','2018-07-26 23:22:53',3,_binary '\0',3,_binary '\0','824bb8bf03bb9ae519bf81988b895a2e','Ci'),(350,187,2,5,7,5,NULL,'pasajero hizo abono de 100 dolares, en los proximos dias hará el resto.',NULL,210.00,'2018-07-29 02:49:46','2018-07-31 23:44:33',3,_binary '\0',3,_binary '\0','9bf76ceeebb018bcb997796c49c75254','Ci'),(351,18,2,9,7,2,NULL,'Sofia Abedrabbo \n pasajera de AIRBNB.\nviene con su niño de 7 años.\nCel: +593 9 8760 0260 ( contactar para hora de llegada). No  Cobrar , CHEQUEAR  RECARGA TV CABLE, \n',NULL,260.00,'2018-07-29 16:55:53','2018-07-31 23:45:11',3,_binary '\0',3,_binary '\0','4ec058c4d670dd7e2c07efe32c790365','Ci'),(352,188,2,1,5,2,1,'Recomendación de Julio Orellana.\n\nHermana de Julio Orellana viene con su esposo y su hija. Pendientes al TRANSFER IN.',NULL,110.00,'2018-08-03 01:30:30','2018-08-10 20:30:56',3,_binary '\0',3,_binary '\0','f917569e49800d3fdb0415158adcfe5f','Ci'),(353,7,2,6,7,2,0,'Reserva desde pagina web, no olvidar modificar país.',NULL,60.00,'2018-08-03 07:00:42','2018-08-03 07:01:36',-1,_binary '\0',2,_binary '\0','66887a6badcc8431652df7a828d97622','Ca'),(354,7,2,6,7,2,0,'Reserva desde pagina web, no olvidar modificar país.',NULL,50.00,'2018-08-03 07:22:35','2018-08-03 07:22:58',-1,_binary '\0',2,_binary '\0','77c378176917d43934fa08f0518fa4bd','Ca'),(355,7,2,8,5,2,1,'',NULL,110.00,'2018-08-03 16:28:17','2018-08-03 16:28:17',2,_binary '\0',2,_binary '\0','b669d2846ddd2e860d673defe0cf4fca','Re'),(356,189,2,3,7,2,1,'va a hacer transerencia, estar mpendiente para TRANSER IN. PAREJA CON 1 NIÑO',NULL,460.00,'2018-08-03 16:41:35','2018-08-10 20:30:36',3,_binary '\0',3,_binary '\0','eefe3a13a28d5cf2b9204e755ecf9794','Ci'),(357,190,2,7,7,1,1,'RECOMENDACION DE ALEXANDRA ORELLANA, SON AMIGAS, EL MISMO DIA LLEGAN ELLAS. LAS 2 YA EFECTUARON PAGOS POR TOTALIDAD',NULL,110.00,'2018-08-04 13:14:14','2018-08-10 20:31:34',3,_binary '\0',3,_binary '\0','c6a097606d0c317d640b1994fb43141e','Ci'),(358,18,2,6,7,1,0,'Reserva desde pagina web, no olvidar modificar país.',NULL,52.00,'2018-08-04 13:36:18','2018-08-06 22:55:45',-1,_binary '\0',3,_binary '\0','b03b7bdc0e92eeb745fdfcda7bd130f6','Ca'),(359,18,2,6,7,1,0,'Reserva desde pagina web, no olvidar modificar país.',NULL,52.00,'2018-08-05 01:58:50','2018-08-06 22:55:53',-1,_binary '\0',3,_binary '\0','56b24307b4112d507e9dc1898914e4d8','Ca'),(360,18,2,6,7,2,0,'Reserva desde pagina web, no olvidar modificar país.',NULL,50.00,'2018-08-05 12:55:38','2018-08-06 22:56:02',-1,_binary '\0',3,_binary '\0','49e7ecef5762a1fc01ce539cff0ca535','Ca'),(361,191,2,5,7,3,0,'A ESPERA DE INFO DE VUELO',NULL,180.00,'2018-08-06 22:54:22','2018-08-07 22:30:35',3,_binary '\0',3,_binary '\0','a7863905fbc3cc87098a16dadf2c74ea','Ci'),(362,192,2,7,5,2,0,'JULIO ORELLANA',NULL,135.00,'2018-08-07 01:03:14','2018-08-07 22:30:07',3,_binary '\0',3,_binary '\0','136d5c39ddac5861e53cece3fe6bc28d','Ci'),(363,193,2,5,7,2,0,'OJO, VER EL PAGO TOTAL A PAGAR EN BOOKING, SE HOSPEDAN PRIMERO EN ISABELA Y  LUEGO PASAN A FLOREANA',NULL,135.00,'2018-08-07 21:48:52','2018-08-12 00:54:37',3,_binary '\0',3,_binary '\0','2393073f2bf8444d4441a6ffd6f97db5','Ca'),(364,194,2,5,8,2,0,'KRISTINA ESTA EN CONTACTO IA MENSAJERIA DE BOOKING, QUEDO EN AVISAR SI TOMAN LA LANCHA EN LA TARDE O EN LA MAÑANA',NULL,260.00,'2018-08-14 13:51:28','2018-09-20 15:32:52',3,_binary '\0',3,_binary '\0','f7c9bf1d1575e6a092019f1204d27d1b','Co'),(365,195,2,9,7,2,0,'2 PAX OFRECER OPCIONES DE TOUR EN LA ISLA. NO COBRAR',NULL,180.00,'2018-08-14 21:14:19','2018-08-22 14:49:39',3,_binary '\0',3,_binary '\0','23cca2cca2816d517b66e583cfec7622','Ci'),(366,7,2,7,7,1,0,'',NULL,180.00,'2018-08-22 08:37:30','2018-08-22 08:37:30',2,_binary '\0',2,_binary '\0','9fb8e41dd367313897f9da3749e13def','Re'),(367,196,2,5,7,2,1,'ESTAR ATENTO AL PAGO, SE ENVIO U¿INORMACION, ESPERAR INFO DE ARRIBO PARA TRANSFFER IN',NULL,240.00,'2018-08-22 15:29:26','2018-08-29 01:54:47',3,_binary '\0',3,_binary '\0','27f6ad21a358f9def75c654020144d08','Ca'),(368,197,2,5,7,2,0,'2 PASAJEROS, llegan en lancha, listos para pick up.',NULL,200.00,'2018-08-22 15:35:46','2018-09-14 23:08:44',3,_binary '\0',3,_binary '\0','640c13094023f07021f5e60289d0e92c','Co'),(369,198,2,9,7,2,0,'DAR INFORMACION DE LAS TIENDAS CERCAS OFRECER LOS ANDES',NULL,156.00,'2018-08-22 15:47:36','2018-08-25 01:35:03',3,_binary '\0',3,_binary '\0','8470f27b38b598bdbd4c2b92b5085b91','Ci'),(370,199,2,2,6,2,0,'PASAJERO LLEGA DE LUNA DE MIEL CON LA ESPOSA, ESTAR PENDIENTE A ARRIBO',NULL,336.00,'2018-08-23 01:16:44','2018-09-08 00:45:49',3,_binary '\0',3,_binary '\0','f2e5a266fab55afc02c995523b018778','Co'),(371,185,2,8,7,1,1,'SE OFRECIO 40 DOLARES POR NOCHE, EN TOTAL SON 3 NOCHES COBRAR 120 DOLARES, SE ESPERA PAGO IN DE MES, ES AMIGA DE JULIXI, LA AMIGA VIENE CON SU NIÑA, SE OFRECIO LA SUITE FLOREANA',NULL,135.00,'2018-08-23 23:40:27','2018-09-05 13:22:24',3,_binary '\0',3,_binary '\0','24a85f58ec37e90708e2fad5c06470bb','Ca'),(372,200,2,8,7,2,0,'depositó 50 ya, el viernes deposita los 100 dolares faltantes, esar pendiente a info de arribo.',NULL,150.00,'2018-08-29 01:58:37','2018-08-29 22:21:15',3,_binary '\0',3,_binary '\0','1681eb4f13a9917f70261869de83a92a','Ca'),(373,18,2,4,6,2,2,'',NULL,330.00,'2018-08-29 22:07:29','2018-08-29 22:09:11',3,_binary '\0',3,_binary '\0','de73c3bef375e20450c1c829d7c97735','Ca'),(374,200,2,8,7,2,0,'CONFIRMAR TRANSER DE ARRIBO CON LA SEÑORITA',NULL,150.00,'2018-08-29 22:15:20','2018-08-29 22:21:38',3,_binary '\0',3,_binary '\0','23b25441c7c5cad66f76b6082a8a73b7','Ca'),(375,201,2,8,7,2,0,'cambiar a ISABELA ',NULL,150.00,'2018-08-29 22:24:19','2018-08-29 23:52:19',3,_binary '\0',3,_binary '\0','591895d2f2cc4742fcd052a0432a150f','Ca'),(376,11,2,8,7,2,2,'asda',NULL,180.00,'2018-08-29 22:26:04','2018-08-30 00:11:25',3,_binary '\0',3,_binary '\0','c952f40638a3f358246242bb980af224','Ca'),(377,201,2,8,7,2,0,'LLEGA EN LATAM, HORA APROXIMADA DE LLEGADA 12:12 ; ERICKA Y CARLOS. OJO NO COBRAR, HOSPEDARLOS DIRECTAMENTE LUEGO DE SU CHECK IN.',NULL,150.00,'2018-08-29 23:55:05','2018-09-16 16:13:44',3,_binary '\0',3,_binary '\0','c7a755fcc6e6c91f12a8b9c286924f50','Co'),(378,18,2,8,6,2,0,'qwa',NULL,180.00,'2018-08-29 23:56:10','2018-08-30 00:11:41',3,_binary '\0',3,_binary '\0','9e73331b7779723069c409614e7bab08','Ca'),(379,7,2,8,7,2,0,'',NULL,135.00,'2018-08-30 13:36:46','2018-08-30 13:36:46',2,_binary '\0',2,_binary '\0','f7832daa1b7a61c8840e85cbd0442d1c','Re'),(380,185,2,8,7,3,0,'SE OFRECIO 40 DOLARES POR NOCHE, EN TOTAL SON 3 NOCHES COBRAR 120 DOLARES, SE ESPERA PAGO IN DE MES, ES AMIGA DE JULIXI, LA AMIGA VIENE CON SU NIÑA, SE OFRECIO LA SUITE FLOREANA',NULL,135.00,'2018-09-05 13:23:20','2018-09-05 13:23:41',3,_binary '\0',3,_binary '\0','84e43ab147809eab35a936d97e3a6d51','Ca'),(381,185,2,8,7,3,0,'A JULIXI, SE LE VA A DAR SUITE ISABELA DE CORTESIA, EN LA HABITACION VAN A IR 3 PERSONAS ADULTAS. OJO YA EXISTE PAGO POR ESTA HABITACION',NULL,135.00,'2018-09-05 13:24:30','2018-09-12 21:14:24',3,_binary '\0',3,_binary '\0','e45c2330811ff1a5d4d2419e4961ad29','Co'),(382,202,2,5,7,2,0,'estar pendiente',NULL,156.00,'2018-09-05 13:26:58','2018-09-12 21:15:01',3,_binary '\0',3,_binary '\0','8e57e702a9eb9635bbcb07b93b22d07e','Co'),(383,203,2,5,7,2,0,'estar pendiente',NULL,150.00,'2018-09-05 13:29:38','2018-09-13 15:45:14',3,_binary '\0',3,_binary '\0','f125b153a72bcd2537f19708072a08dd','Co'),(384,204,2,5,7,3,0,'estar pendiente',NULL,260.00,'2018-09-05 13:32:53','2018-09-05 13:40:15',3,_binary '\0',3,_binary '\0','18a8e79f91da775401546195f1f24707','Ca'),(385,205,2,8,7,3,0,'estar pendiente una familia de 4. 2 niños y 2 adultos. FAMILIA CAMBIO SU RESERVA YA QUE SE QUEDARON DEL VUELO, YA EXISTE PAGO POR EL TOTAL OJO NO COBRAR, SE MANTIENE CONTACTO VIA WP',NULL,291.20,'2018-09-05 13:43:31','2018-10-28 23:35:47',3,_binary '\0',3,_binary '\0','91fabda9ce7c9774a6353a83ece932e9','Ci'),(386,206,2,9,7,2,0,'SE PIDIO INFO DE ARRIBO AL HUESPED, ESTAR PENDIENTE, HAY CONTACTO CON EL MEDIANTE AIRBNB',NULL,220.00,'2018-09-07 03:22:04','2018-09-08 18:45:47',3,_binary '\0',3,_binary '\0','60584118d5d2710147185ed4e4e2d790','Ca'),(387,185,2,5,7,2,0,'SON 2 PAX, NO COBRAR YA EXISTE PAGO',NULL,160.00,'2018-09-07 03:23:54','2018-09-08 01:05:20',3,_binary '\0',3,_binary '\0','d2ff44ae20ce898ce682cd1b5b6543f8','Ca'),(388,207,2,2,7,2,0,'JENNIFER LLEGA CON SU PAREJA DE LUNA DE MIEL, ESTAR PENDIENTE A SU ARRIO PARA OFRECER TRANSFER IN, SE MANTIEN CONTACTO POR WP,',NULL,230.00,'2018-09-08 00:32:09','2018-09-08 00:36:52',3,_binary '\0',3,_binary '\0','f355ad03da3220b0710aad71c465c1e7','Ca'),(389,18,2,1,5,2,0,'señor deposito 50%, ofrecer transfer in',NULL,135.00,'2018-09-08 00:42:01','2018-09-08 00:44:21',3,_binary '\0',3,_binary '\0','7b231cd96e78ccf0a66c67ef7b322ab7','Ca'),(390,208,2,7,7,4,0,'OJO COBRAR 80 DOLARES, EXISTE UN DEPOSITO DE 100 DOLARES, SE OFRECIO TARIFA DE 60 DOLARES LA NOCHE, DAR HABITACION ESPA;OLA, LA HABITACION DEBE ESTAR CON 2 CAMAS MATRIMONIALES OJO',NULL,180.00,'2018-09-08 01:03:34','2018-09-12 21:14:46',3,_binary '\0',3,_binary '\0','e649d447b059fcfebbf2a93aa670a5f4','Co'),(391,209,2,9,4,2,0,'estar pendiente para ofrecer transfer in. Llega aproximadamente 10;20 vuelo TAME.\nOJO No cobrar. Reserva Airbnb',NULL,225.00,'2018-09-08 18:15:57','2018-09-30 12:31:13',3,_binary '\0',3,_binary '\0','7da0e13c9f4afd0937246490ea4df1af','Co'),(392,18,2,8,4,6,0,'uih',NULL,135.00,'2018-09-08 18:17:36','2018-09-08 18:19:04',3,_binary '\0',3,_binary '\0','2056c335f2ccc929438e4e705d129c50','Ca'),(393,18,2,1,6,8,0,'gh',NULL,135.00,'2018-09-08 18:19:53','2018-09-08 18:20:34',3,_binary '\0',3,_binary '\0','d3900d52818837824aecb599c4f881e1','Ca'),(394,207,2,9,7,1,0,'Estar pendiente del transfer in. Llega a las 10:20. OJO no cobrar.',NULL,120.00,'2018-09-08 18:40:10','2018-09-08 18:54:17',3,_binary '\0',3,_binary '\0','01a0e22964f71e359fc8d8b11a00eafc','Ca'),(395,210,2,9,7,2,0,'ESTAR PENDIENTE DE TRANSFER IN. LLEGA A LAS 10:20 AM. OJO NO COBRAR',NULL,180.00,'2018-09-08 18:51:52','2018-09-08 19:23:11',3,_binary '\0',3,_binary '\0','9071b99107ccd69e473d26413f5cf8f4','Ca'),(396,210,2,9,7,2,0,'ESTAR PENDIENTE DE TRANSFER IN. LLEGA A LAS 10:20 AM. OJO NO COBRAR',NULL,135.00,'2018-09-08 19:24:04','2018-10-05 16:19:54',3,_binary '\0',3,_binary '\0','64324ecbf6fbb6bc101dc5d1ad5c69a8','Co'),(397,206,2,9,7,2,0,'SE ENVIO MENSAJE PARA TRANSFER IN, AUN NO RESPONDE, ESTAR PENDIENTE. OJO NO COBRAR.',NULL,180.00,'2018-09-08 19:27:10','2018-11-06 19:31:27',3,_binary '\0',3,_binary '\0','0d5b75199b6aca7baaa0868479bfcbc9','Co'),(398,211,2,9,4,2,0,'ESTAR PENDIENTE DE TRANSFER IN, A LAS 10:20 AM VUELO TAME. OJO NO COBRAR',NULL,150.00,'2018-09-08 19:33:37','2018-09-08 19:33:37',3,_binary '\0',3,_binary '\0','748994dce48767b1ee712452f9f0e244','Re'),(399,212,2,9,8,2,0,'ESTAR PENDIENTE DE TRANSFER IN, SE MANTIENE CONTACTO POR AIRBNB. NO COBRAR. CAMBIO LA FECHA DE PORQUE LA AEROLINEA CAMBIO LA FECHA DE SALIDA',NULL,325.00,'2018-09-08 19:39:19','2018-09-08 19:39:19',3,_binary '\0',3,_binary '\0','9c757f1216c2bcb85ddbe76ec51855fb','Re'),(400,213,2,9,7,2,0,'ESTAR PENDIENTE DE TRANSFER IN, NO COBRAR.',NULL,135.00,'2018-09-08 19:43:47','2018-09-08 19:43:47',3,_binary '\0',3,_binary '\0','7ea6020523b7b091afb44c133bb9700d','Re'),(401,214,2,9,6,2,0,'ESTAR PENDIENTE DE TRANSFER IN, SE MANTIENE CONTACTO EN AIRBNB. OJO NO COBRAR',NULL,270.00,'2018-09-08 19:49:19','2018-09-08 19:49:19',3,_binary '\0',3,_binary '\0','aecfedd7bb9678532f33ac776c477455','Re'),(402,215,2,9,7,2,0,'ESTAR PENDIENTE DE TRANSFER IN. NO COBRAR.',NULL,225.00,'2018-09-08 19:53:51','2018-09-08 19:53:51',3,_binary '\0',3,_binary '\0','6760e46e5420d1587f22c8892a7dce6d','Re'),(403,18,2,1,6,2,0,'hjgh',NULL,90.00,'2018-09-18 23:48:08','2018-09-18 23:59:08',3,_binary '\0',3,_binary '\0','b44b5e79a7cfbd5780eadbad824c5420','Ca'),(404,217,2,8,4,2,1,'Ya esta hecho el pago, no cobrar nada. Estar pendiente de  la llegada de los pasajeros. Llegan a las 10:20.',NULL,150.00,'2018-09-19 00:14:26','2018-09-23 17:40:25',3,_binary '\0',3,_binary '\0','b4f0e77b6e4d45b3979eaaef566278c2','Co'),(405,218,2,5,7,2,0,'A ESPERA DE CNFIRMACION DEL VUELO DE ARRIBO, ESTAR PENDIENTE, SE TIENE CONTACTO POT WP.\nOJO, DAR HABITACION ISABELA\nPENDIENTE AL TRANSFER IN',NULL,220.00,'2018-09-19 13:47:14','2018-09-23 17:38:33',3,_binary '\0',3,_binary '\0','3814bc8558211d3edf0573afc51f94e8','Ca'),(406,219,2,1,7,3,1,'Estar pendiente de la hora de llegada para el transfer in. Solo ha depositado 100 dolares americanos de 390.',NULL,210.00,'2018-09-19 21:41:59','2018-09-28 20:29:27',3,_binary '\0',3,_binary '\0','4b67e066f10a6e3b9344e32e033a06ef','Ci'),(407,219,2,1,7,4,0,'estar pendiente  de la hora de llegada del transfer in. solo ha depositado 100 de 390. se mantiene contacto por wsp',NULL,180.00,'2018-09-19 21:46:04','2018-09-28 20:28:19',3,_binary '\0',3,_binary '\0','2cdbf1a1449f91950ccf78f1009ed40a','Ci'),(408,220,2,8,5,2,0,'pagado todo. Se mantiene contacto por wps. llegan a las 10:40 en latam',NULL,300.00,'2018-09-23 17:57:41','2018-09-23 17:57:41',3,_binary '\0',3,_binary '\0','63c78300d843a9dbc518e52f9ddafe86','Re'),(409,221,2,9,7,2,0,'no cobrar, estar pendiente del vuelo. se mantiene contacto por airbnb',NULL,135.00,'2018-09-24 00:01:12','2018-10-08 15:04:18',3,_binary '\0',3,_binary '\0','4cccf2ec8f24f24379a48a9a871082ac','Co'),(410,219,2,2,7,2,1,'ESTAR PENDIENTE DEL VUELO. FALTA 10 DOLARES',NULL,150.00,'2018-09-26 22:49:58','2018-09-28 20:29:07',3,_binary '\0',3,_binary '\0','560462c20a386f65c9971b26b7e41cbe','Ci'),(411,222,2,5,7,2,1,'ESTAR PENDIENTE DE  DE VUELO PARA EL TRANSFER, OJO NO COBRAR.SE MANTIENE CONTACTO POR WS',NULL,112.00,'2018-09-26 23:26:45','2018-09-26 23:26:45',3,_binary '\0',3,_binary '\0','cf510658df8be4ca1a950dd6ab3d7400','Re'),(412,223,2,2,7,2,2,'pago el 50% 140 del total. se mantiene contacto por wsp',NULL,480.00,'2018-09-28 20:51:31','2018-09-28 20:51:31',3,_binary '\0',3,_binary '\0','77af099194f36d24b227357801247804','Re'),(413,224,2,9,7,2,0,'estar pendiente del vuelo. no cobrar. transfer in, pendiente',NULL,250.00,'2018-09-29 00:17:04','2018-10-21 18:31:39',3,_binary '\0',3,_binary '\0','0b2e55d44de6199053fd37ffddee4857','Co'),(414,225,2,9,7,2,0,'50X3 NOCHES. SE MANTIENE CONTACTO POR AIRBNB.\nLLEGA EN LATAM, 10,30.',NULL,180.00,'2018-10-04 22:40:44','2018-10-25 00:06:03',3,_binary '\0',3,_binary '\0','1a6fb3a32a445b5b2ffba6af69f271f2','Ca'),(415,220,2,8,5,2,0,'LLEGAN A LAS 10:40 EN LATAM. FORMA DE PAGO 50, 50%. SE MANTIENE CONTACTO POR WSP.',NULL,270.00,'2018-10-05 16:35:04','2018-10-05 16:35:04',3,_binary '\0',3,_binary '\0','2a49121f40c6b074b12d1e10d05ee525','Re'),(416,87,2,6,7,1,0,'Reserva desde pagina web, no olvidar modificar país.',NULL,60.00,'2018-10-05 17:24:26','2018-10-05 17:24:26',-1,_binary '\0',-1,_binary '\0','feee003e85496f6d4fbf8f2258fc1347','Pr'),(417,226,2,9,8,3,0,'sn',NULL,70.00,'2018-10-08 15:26:49','2018-10-09 16:22:54',3,_binary '\0',3,_binary '\0','43af3738ca28a9b723599eb792ac31e4','Co'),(418,227,2,2,5,2,0,'cobrar cuando llega. llegan a las 12:15',NULL,220.00,'2018-10-08 17:04:03','2018-10-16 20:01:01',3,_binary '\0',3,_binary '\0','8cc61706f6b6041dca36565e108c469b','Co'),(419,228,2,8,7,2,0,'estar pendiente del dia de llegada para tranfer ',NULL,134.40,'2018-10-13 18:26:15','2018-10-13 18:26:15',3,_binary '\0',3,_binary '\0','a5e382ab071ea49ba537c3494bcb4640','Re'),(420,229,2,5,7,2,0,'estar pendiente del vuelo y de cobrar a la llegada',NULL,156.00,'2018-10-17 22:29:19','2018-10-17 22:29:19',3,_binary '\0',3,_binary '\0','e1257cc428bf4fb7afc7d4200b1f7c1b','Re'),(421,230,2,5,7,2,0,'estar pendiente del transfer a las 113:05. cobrar a la llegada.\n151,20. Genius',NULL,135.00,'2018-10-17 22:39:05','2018-10-17 22:39:05',3,_binary '\0',3,_binary '\0','995d9c4cac4e9e1138693be23e6e50cd','Re'),(422,231,2,5,6,2,0,'ya estan hospedados',NULL,52.00,'2018-10-19 20:04:26','2018-10-22 12:51:50',3,_binary '\0',3,_binary '\0','7458c44e06eb5d668f683d62effb5fe7','Co'),(423,232,2,5,7,2,0,'llega en la mañana',NULL,50.00,'2018-10-19 20:08:36','2018-10-27 22:03:09',3,_binary '\0',3,_binary '\0','2a6839b37096dba0910669acdf7832c2','Co'),(424,215,2,9,7,2,0,'CARLOS NO COBRAR. ESTAR PENDIENTE DEL VUELO DE LLEGADA.',NULL,130.00,'2018-10-20 15:50:17','2018-10-20 15:50:17',3,_binary '\0',3,_binary '\0','560a40610b4ddd6e7c0f45bc9db20524','Re'),(425,233,2,9,6,2,0,'Llega en avianca a las 8:25, estar pendiente del transfer. ',NULL,150.00,'2018-10-21 20:52:24','2018-10-21 20:52:24',3,_binary '\0',3,_binary '\0','0660148813e88ded034ac9b369d497fe','Re'),(426,234,2,5,7,2,1,'aun no paga, posible pago a la llegada, estar pendiente del transfer. se mantiene contacto por booking o ws',NULL,200.00,'2018-10-21 21:13:57','2018-10-21 21:13:57',3,_binary '\0',3,_binary '\0','4aa371f8ec408abe9c10885c6bd26616','Re'),(427,235,2,5,7,2,0,'aun no paga posible pago a la llegada. estar pendiente del transfer. se mantiene contacto por las dos vias',NULL,135.00,'2018-10-21 21:18:46','2018-10-21 21:18:46',3,_binary '\0',3,_binary '\0','5aababce575d8459336e7f157ef7dbd5','Re'),(428,234,2,5,7,1,1,'posible pago a la llegada. estar pendiente de la llegada',NULL,160.00,'2018-10-21 21:32:05','2018-10-21 21:32:05',3,_binary '\0',3,_binary '\0','2c286daf6a69e99662fd02776678a479','Re'),(429,236,2,1,7,2,0,'Se pidió info. Solo va a estar una noche. 2 pax, no se garantiza disponibilidad ya que pidió hacer el pago a su arribo, se le comunicó que nuestros precios no incluyen impuestos',NULL,50.00,'2018-10-22 00:52:38','2018-10-22 00:56:25',3,_binary '\0',3,_binary '\0','2eb4e3fc6f0242a8a544903389b9cd8e','Ca'),(430,237,2,1,7,2,0,'llegan a las 11 en avianca. cobrar 1150 en efectivo.Se pidió info. Solo va a estar una noche. 2 pax, no se garantiza disponibilidad ya que pidió hacer el pago a su arribo, se le comunicó que nuestros precios no incluyen impuestos',NULL,50.00,'2018-10-22 00:58:40','2018-11-06 19:30:27',3,_binary '\0',3,_binary '\0','3a054b97f3f7ed91dc376e23ef1f9d41','Co'),(431,236,2,1,6,2,0,'paga en el hotel, se cambio a la habitacion san cristobal por fechas ocupadas en isabela.',NULL,100.00,'2018-10-22 14:54:29','2018-11-08 13:55:47',3,_binary '\0',3,_binary '\0','48cebf70e77a51c2e8578f888bf73b1d','Co'),(432,238,2,5,7,2,0,'paga a la llegada. estar pendiente del tranfer, se mantiene contacto por booking',NULL,45.00,'2018-10-22 15:59:02','2018-10-22 23:39:09',3,_binary '\0',3,_binary '\0','ab60264cea386000c8b4dd8f1ba63ed8','Ca'),(433,239,2,5,5,3,0,'HIZO PAGO MEDIANTE DEPOSITO BANCARIO. SOLO SE QUEDA UNA NOCHE, DEJAR LISTA FLOREANA Y PENDIENTE A ARRIBO (TRANSFER), EN CASO DE QUE SAN CRISTOBAL ESTE LIBRE PARA ESE DIA DARLE LA HABITACION.',NULL,45.00,'2018-10-23 20:42:09','2018-11-06 19:33:29',3,_binary '\0',3,_binary '\0','16fa474acbea33da1abcbd882b238e8e','Co'),(434,240,2,2,5,2,0,'llega a las 12 en latan ya esta todo pagado.',NULL,50.00,'2018-10-24 02:51:45','2018-11-05 21:20:53',3,_binary '\0',3,_binary '\0','190ebd8d55c5199ae7294b97563fe0f8','Co'),(435,240,2,1,7,2,0,'ojo arribo desde SANTA CRUZ, DAR suite isabela. tiene cafetera, nevera, traslado para desayuno',NULL,50.00,'2018-10-24 02:57:11','2018-11-06 20:18:17',3,_binary '\0',3,_binary '\0','2bb5436213e730445f2554292de5a896','Co'),(436,241,2,5,7,2,0,'100,80. AUN NO REALIZA DEPOSITO. ESTAR PENDIENTE',NULL,90.00,'2018-10-24 16:18:06','2018-11-03 17:07:22',3,_binary '\0',3,_binary '\0','383ce68cfd08413a637aaad130fd949d','Ca'),(437,242,2,9,6,2,0,'pagaron por floreana. estan en san cristobal',NULL,150.00,'2018-10-24 16:36:23','2018-10-27 22:02:48',3,_binary '\0',3,_binary '\0','f3fae2169a4b943db7076c6062a52ee7','Co'),(438,243,2,5,7,3,0,'estar pendiente de deposito, y del traslado.',NULL,400.00,'2018-10-24 18:19:02','2018-11-06 19:28:08',3,_binary '\0',3,_binary '\0','4f9f2ab56638b80e757b2ab79ee131e3','Co'),(439,244,2,1,7,3,1,'pago parcial de 100 dolares, estar pendiente del dia de arribo  para el transfer.',NULL,240.00,'2018-10-24 22:36:02','2018-10-24 22:36:02',3,_binary '\0',3,_binary '\0','c739b33b3469aa530edac8bc1a3f9d08','Re'),(440,245,2,6,7,2,0,'pagado. estar en contacto para el traslado.',NULL,240.00,'2018-10-25 00:24:05','2018-10-25 00:24:05',3,_binary '\0',3,_binary '\0','3e2925dd5256edb8c6949516dd7178fe','Re'),(441,246,2,5,7,3,0,'PAGA EN QUINCENA DE  NOVIEMBRE. TOTAL 181,44',NULL,135.00,'2018-10-25 20:33:38','2018-11-03 22:09:48',3,_binary '\0',3,_binary '\0','e7c4a6e917519cd4b4990b6818579e48','Ca'),(442,247,2,2,5,2,0,'paga cuando llega. 115 cobrar. estar pendiente del vuelo. el señor pidió información acerca de las actividades turísticas cuando llegue. llega en LATAM  llega a las 10',NULL,120.00,'2018-10-25 21:47:35','2018-10-30 21:52:44',3,_binary '\0',3,_binary '\0','e77631708cda779612cd15ce2ff7b4de','Ci'),(443,207,2,8,7,2,1,'sa',NULL,150.00,'2018-10-25 21:49:11','2018-10-25 21:54:17',3,_binary '\0',3,_binary '\0','554b50c59a71517d9deff043ed306483','Ca'),(444,248,2,5,8,2,0,'llega a las 4 pm. cobrar 201.60.',NULL,180.00,'2018-10-27 00:11:50','2018-10-30 18:43:10',3,_binary '\0',3,_binary '\0','e3a8cc313ef6cc5c1af8b1b9965da37a','Co'),(445,249,2,2,7,2,0,'solo bloqueo. confirma el martes',NULL,330.00,'2018-10-27 00:16:15','2018-10-31 21:07:42',3,_binary '\0',3,_binary '\0','48c2b1c96130d3ea6ad63f2ff21e987e','Ca'),(446,250,2,5,7,3,2,'se le da genovessa los dos dias primeros, poner una cama adicional. el lunes hace el deposito del 50%. estar pendiente para el transfer. se mantiene contacto por ws. PAGO 200 FALTA 164',NULL,291.60,'2018-10-27 16:43:40','2018-10-27 16:43:40',3,_binary '\0',3,_binary '\0','2e3fcbc3ff0d6a5b4fe6eeb0f09e3bd3','Re'),(447,251,2,9,7,2,0,'no cobrar, pareja pidio informacion sobre sitios turisticos. estar pendiente del transfer.',NULL,250.00,'2018-10-27 16:49:54','2018-10-27 16:49:54',3,_binary '\0',3,_binary '\0','65755bb53e5bcf88219ce2a5a7d51b99','Re'),(448,252,2,7,8,2,1,'pago 60 por 2 noches. salen en la mañana',NULL,96.00,'2018-10-28 22:29:31','2018-10-30 21:59:13',3,_binary '\0',3,_binary '\0','5d97967fb10a0baf8b91354a8c33f27e','Co'),(449,253,2,5,7,3,0,'paga cuando llega 134,40. estar pendiente del trasladado.',NULL,300.00,'2018-10-28 23:34:47','2018-10-28 23:34:47',3,_binary '\0',3,_binary '\0','82048f6e4266e072a41ca6216eabf787','Re'),(450,254,2,5,7,2,0,'cobrar cuando llegue. estar pendiente para el servicio de transfer. 168 cobrar',NULL,225.00,'2018-10-29 01:30:57','2018-11-06 19:27:40',3,_binary '\0',3,_binary '\0','a1b4543ca5f7b145c8af208f4539394a','Co'),(451,255,2,5,7,1,0,'SE MANTIENE CONTACTO POR WP. ESTAR PENDIENTE DE LA LLEGADA.\n403,20 valor total',NULL,400.00,'2018-10-29 19:32:43','2018-10-29 19:32:43',3,_binary '\0',3,_binary '\0','3d8afd96ffbecdb71054d2eda5ca7fd7','Re'),(452,256,2,5,7,2,0,'genius. paga cuando llegue , es de españa. estar pendiente del transfer. cobrar 67,20\n\nENVIO SOLICITUD DE CHECK IN A ENTRE LAS 9 Y 10 AM',NULL,90.00,'2018-10-29 20:19:05','2018-11-15 15:46:34',3,_binary '\0',3,_binary '\0','4336edd014023196311afcf48fbc202e','Co'),(453,257,2,5,8,2,0,'pago 67,20. ',NULL,60.00,'2018-10-29 22:52:38','2018-10-29 23:02:27',3,_binary '\0',3,_binary '\0','9a0cc592adf7a91d107b841b39059697','Ci'),(454,258,2,5,6,2,0,'',NULL,50.00,'2018-10-30 00:41:47','2018-11-04 21:47:44',3,_binary '\0',3,_binary '\0','172d438e30e93b316bf5140735364a40','Co'),(455,257,2,7,8,2,0,'cobrar una noche mas',NULL,30.00,'2018-10-30 23:45:24','2018-10-31 14:47:06',3,_binary '\0',3,_binary '\0','ac09c3fb2ff5ba5da84fd204a92ddb6a','Ci'),(456,259,2,2,7,2,0,'1 de noviembre hace transferencia mas pago de transporte a puerto  chino. estar pendiente para el  transfer. 165+40',NULL,165.00,'2018-10-31 22:01:57','2018-11-05 16:27:44',3,_binary '\0',3,_binary '\0','64255a8f50d23973ad0b6381e345b438','Ca'),(457,260,2,5,7,1,0,'estar pendiente mañana para el transfer, cobrar 50,40',NULL,55.00,'2018-11-01 01:58:07','2018-11-04 20:46:12',3,_binary '\0',3,_binary '\0','d4c9e4004b39b51f3c06b52133006099','Co'),(458,257,2,5,7,2,0,'ya pagaron',NULL,30.00,'2018-11-01 02:00:01','2018-11-04 21:33:39',3,_binary '\0',3,_binary '\0','dec4839754fd4657be1c721e99b836b2','Co'),(459,261,2,5,7,2,0,'cobrar cuando llega,100,80',NULL,90.00,'2018-11-01 02:05:43','2018-11-15 15:42:58',3,_binary '\0',3,_binary '\0','4810c116a635345ec5043fd169eaf087','Ci'),(460,262,2,5,7,2,0,'cobrar cuando llegue 151,20. estar pendiente del transfer',NULL,135.00,'2018-11-01 18:23:55','2018-11-08 13:55:27',3,_binary '\0',3,_binary '\0','755666cbb708d5459c4cb78a745aa18a','Co'),(461,247,2,8,6,2,0,'estaban en isabela, solicitaron noches adicoinales.',NULL,50.00,'2018-11-02 01:12:49','2018-11-04 20:45:54',3,_binary '\0',3,_binary '\0','76f7c586322ade22d2aaa53ece369b73','Co'),(462,263,2,5,7,7,1,'estar pendiente del pago son 358,40. estar pendiente del arribo, se mantiene contacto por booking.\nespañola:marcelo, ethan, jesica.\nfloreana: johanna olmos, hector abad.\nsan cristobal: rosa olmos, Gabriel tobar, maria tufiño',NULL,320.00,'2018-11-03 18:07:17','2018-11-15 15:49:55',3,_binary '\0',3,_binary '\0','c30d7718bc24d5b3d672e261442f6d5d','Co'),(463,264,2,5,7,2,0,'llega en crucero, estar pendiente ese dia para el trasnfer y preguntarle la hora exacta. cobrar 56.00',NULL,50.00,'2018-11-03 18:34:00','2018-11-03 18:34:00',3,_binary '\0',3,_binary '\0','ff5ef430ec0f4af4ee631f7c70641bc3','Re'),(464,265,2,9,7,2,0,'no cobrar. pendiente para el transfer.',NULL,250.00,'2018-11-03 18:50:16','2018-11-03 18:50:16',3,_binary '\0',3,_binary '\0','9c63376b78a632693f26ca99fd0f66a0','Re'),(465,266,2,5,7,2,0,'cobrar 100,80. estar pendiente del transfer',NULL,90.00,'2018-11-03 21:19:01','2018-11-06 20:18:41',3,_binary '\0',3,_binary '\0','570e9ee9941eaf971d8eb48d953496e8','Co'),(466,267,2,5,7,2,0,'cobrar 72,80. estar pendiente del transer.',NULL,65.00,'2018-11-03 23:16:11','2018-11-09 12:27:19',3,_binary '\0',3,_binary '\0','790a16d70c0393ee17609c3d203bd741','Co'),(467,268,2,5,7,2,0,'estar pendiente para el traslado, cobrar 224.',NULL,200.00,'2018-11-04 01:23:02','2018-11-08 23:25:37',3,_binary '\0',3,_binary '\0','8eb7ee848ae4635b2f4d6b5bbcecca88','Ca'),(468,269,2,5,7,2,0,'100,80 estar pendiente del tranfers y que responda en booking.',NULL,90.00,'2018-11-04 18:39:52','2018-11-04 18:39:52',3,_binary '\0',3,_binary '\0','64701d5d27a74754271f71f5c4fed5cf','Re'),(469,270,2,5,7,2,0,'cobrar 67,20. estar pendiente se mantene contacto por booking',NULL,60.00,'2018-11-04 21:52:24','2018-11-07 15:13:32',3,_binary '\0',3,_binary '\0','88ba0b2198bdf0158127b0cb47c9a3aa','Ca'),(470,271,2,5,7,2,0,'realizo transferencia de 100,80 falta un total de 100,80. llega en Latan a las 12',NULL,180.00,'2018-11-05 17:00:17','2018-11-05 17:00:17',3,_binary '\0',3,_binary '\0','95961460602217eb74d8c52aaf57e92f','Re'),(471,266,2,5,7,2,0,'ya estan en fernandina, cobrar 100,80.',NULL,90.00,'2018-11-05 21:15:51','2018-11-09 12:26:53',3,_binary '\0',3,_binary '\0','3ee972d47248fd2b85fcb59ee61bd72b','Co'),(472,272,2,8,7,3,0,'SEÑORITA VA A CANCELAR RESERVA EN BOOKING.COM. HIZO LA RESERVA DIRECTA. EL PAGO ES A SU ARRIBO EN EECTIVO. COBRAR IMPUESTO',NULL,100.00,'2018-11-06 13:20:54','2018-11-15 15:47:15',3,_binary '\0',3,_binary '\0','543dc77dfcbe53b2488faa3ca0c2f084','Co'),(473,273,2,5,7,5,0,'estar pendiente del pago, el tour, se le ofrecio tour.',NULL,528.00,'2018-11-06 21:31:06','2018-11-06 21:31:06',3,_binary '\0',3,_binary '\0','1368edf4f09439abb02a642360817246','Re'),(474,274,2,2,6,2,0,'hace pago el jueves, estar pendiente para el transfer, llega a ls 12:12. fernandina individual',NULL,220.00,'2018-11-07 00:17:42','2018-11-08 02:33:38',3,_binary '\0',3,_binary '\0','cb5b1532dca6ca47f0ad4f98c141e1bf','Ca'),(475,275,2,5,7,2,0,'cobrar 67,20. estar pendiente para el transfer',NULL,60.00,'2018-11-07 00:21:55','2018-11-12 17:06:54',3,_binary '\0',3,_binary '\0','8e8d253adc67c4ffa1abdf801f95e98e','Ci'),(476,276,2,5,7,2,0,'252, estar pendiente de todo. deposito 152 falta de pagar 152 individual camas',NULL,252.00,'2018-11-07 15:10:52','2018-11-07 15:10:52',3,_binary '\0',3,_binary '\0','eba8cf8795c3f7a548156c975009b19f','Re'),(477,277,2,1,7,2,0,'va a pagar entre 7 y 8, estar pendiente del transer, se les ofrecio tour el dia de llegada confirma, 210 mas equipos de snorkel. tijeretas el dia de llegada y parte alta el siguiente dia.',NULL,110.00,'2018-11-07 21:18:51','2018-11-07 21:18:51',3,_binary '\0',3,_binary '\0','5d1d61b1cb73e56b08e6fb699f742da7','Re'),(478,277,2,1,7,3,0,'estar pendiene de transfer.',NULL,120.00,'2018-11-07 21:21:19','2018-11-07 21:21:19',3,_binary '\0',3,_binary '\0','f8b0b628151853043e5e3e9f17b87239','Re'),(479,278,2,5,7,2,0,'201,60 total',NULL,180.00,'2018-11-07 21:43:24','2018-11-07 21:43:24',3,_binary '\0',3,_binary '\0','e3b7b5a915861c99d7381cd9046d28a0','Re'),(480,261,2,8,7,2,0,'cobrar 140,80',NULL,50.00,'2018-11-08 02:40:42','2018-11-13 17:55:41',3,_binary '\0',3,_binary '\0','b27a79cb43ec9898c26bb6d1f3788340','Ci'),(481,279,2,5,7,2,0,'201,60',NULL,160.00,'2018-11-08 02:47:30','2018-11-08 03:10:30',3,_binary '\0',3,_binary '\0','61a98b706a6c1bef04f2e0e28ef0f7e3','Ca'),(482,280,2,5,7,2,0,'reservo genovesa, por error en la plataforma se cambia a española por el mismo precio reservado en booking la otra habitacion. estar pendiente del pago y traslado.117,60 valor total',NULL,90.00,'2018-11-08 16:51:52','2018-11-12 15:07:57',3,_binary '\0',3,_binary '\0','31db961bb4b740b91bb21143c31d9bae','Ca'),(483,281,2,5,7,2,0,'cobrar 78,40. estar pendiente de todo se mantiene contacto por booking. Genius',NULL,60.00,'2018-11-08 21:43:55','2018-11-08 21:43:55',3,_binary '\0',3,_binary '\0','d8f173082c881cfd092412097217d052','Re'),(484,282,2,7,7,2,0,'mañana confirma se le dio el numero de don carlos.',NULL,100.00,'2018-11-09 00:21:39','2018-11-10 02:53:57',3,_binary '\0',3,_binary '\0','e7429043c72443870c56e5c3f87cf83a','Ca'),(485,283,2,5,7,2,0,'ya se hospedaron.',NULL,60.00,'2018-11-09 00:28:59','2018-11-15 15:44:16',3,_binary '\0',3,_binary '\0','30211b11a5bcf89645ecdd0930e9d423','Co'),(486,284,2,7,6,2,1,'ALFREDO ALAVA\nRESERVA DE LUMINUS TRAVEL (VERO MORA)\nESTAR ATENTO PARA EL TRANSFER, PASAJEROS HACEN PAGO EN EFFECTIVO EL DIA DE SU ARRIBO',NULL,180.00,'2018-11-09 12:34:27','2018-11-15 15:50:19',3,_binary '\0',3,_binary '\0','a434000c99b4f782b435809a33bda132','Co'),(487,285,2,5,7,3,1,'72,80',NULL,60.00,'2018-11-11 02:36:41','2018-11-16 23:31:14',3,_binary '\0',3,_binary '\0','4cdc8509571286565aafbe355022c112','Ci'),(488,286,2,5,7,2,0,'117,60 cobrar. estar pendiente de todo se mantendra contacto por booking. pasajero Genius, paga por genovessa, por eeror de sistema se cambia a isabela.',NULL,90.00,'2018-11-12 15:10:45','2018-11-12 15:10:45',3,_binary '\0',3,_binary '\0','9814e04e5a88ab31ff373b7bce59d339','Re'),(489,280,2,5,7,2,0,'117,60 estar pendiente de todo. Genius. llega en ferry de santa cruz',NULL,90.00,'2018-11-12 17:00:26','2018-11-12 17:00:26',3,_binary '\0',3,_binary '\0','9d30e3c6b98f271b91c642104a5db7ed','Re'),(490,287,2,2,7,1,0,'Llega mañana y paga a la llegada.',NULL,105.00,'2018-11-12 20:29:08','2018-11-14 17:37:05',3,_binary '\0',3,_binary '\0','54c98a8d0e3fe890ca0982e93409c3a9','Ca'),(491,288,2,5,7,2,0,'estar pendiente de todo pago total 156,80',NULL,120.00,'2018-11-12 22:19:35','2018-11-12 22:19:35',3,_binary '\0',3,_binary '\0','565b00bfc778847ed91195287c817798','Re'),(492,289,2,9,5,2,0,'117,60 xxxxuuu',NULL,105.00,'2018-11-13 18:10:40','2018-11-13 18:10:40',3,_binary '\0',2,_binary '\0','ec622a6783ea29d4d223c42994ddd333','Re'),(493,275,2,7,5,2,0,'pagan 30 por tres noches son 90 en genovesa',NULL,90.00,'2018-11-13 20:00:58','2018-11-15 15:42:13',3,_binary '\0',3,_binary '\0','3da6d22d112dce1cb83d39aa5d23396d','Ci'),(494,290,2,5,7,2,0,'151,20 estar pendiente de todo',NULL,135.00,'2018-11-14 17:28:52','2018-11-14 17:28:52',3,_binary '\0',3,_binary '\0','dede36de10049373fa411be129025a31','Re'),(495,291,2,5,7,2,0,'coreanos, 117,60  estar pendiente de todo.',NULL,90.00,'2018-11-14 17:46:38','2018-11-14 17:46:38',3,_binary '\0',3,_binary '\0','9cfcf7cfa928fff060a088feafc0ddeb','Re'),(496,292,2,9,7,1,0,'no cobrar, se mantendra contacto por airbnb',NULL,300.00,'2018-11-15 19:28:04','2018-11-15 19:28:04',3,_binary '\0',3,_binary '\0','4248cd0dfe2dff4e0a4f89704e262f57','Re'),(497,292,2,9,7,1,0,'no cobrar, estar pendiente del transfer',NULL,90.00,'2018-11-15 20:27:39','2018-11-15 20:27:39',3,_binary '\0',3,_binary '\0','6ad10396b3b50e3c37256b9fb435151b','Re'),(498,293,2,5,7,2,0,'117,60 llega en latam, pidio que le prestemos secadora de cabello. pendientes para entregar.',NULL,90.00,'2018-11-16 15:38:30','2018-11-16 15:38:30',3,_binary '\0',3,_binary '\0','661f328f693fc3b292ec3f0003092614','Re'),(499,294,2,5,7,2,0,'39,20. Estar pendiente de todo se mantendra contacto por booking.',NULL,30.00,'2018-11-17 18:23:20','2018-11-17 18:23:20',3,_binary '\0',3,_binary '\0','444a1b729afd893e502ce8123ee90af6','Re'),(500,7,2,5,5,2,1,NULL,NULL,252.00,'2018-12-07 04:30:24','2018-12-07 04:30:24',2,_binary '\0',2,_binary '\0',NULL,'Re'),(501,7,2,5,5,2,1,NULL,NULL,252.00,'2018-12-07 04:35:55','2018-12-07 04:35:55',2,_binary '\0',2,_binary '\0',NULL,'Re'),(502,7,2,5,7,2,1,'',NULL,225.00,'2018-12-07 04:40:33','2018-12-07 04:40:33',2,_binary '\0',2,_binary '\0',NULL,'Re'),(503,7,2,5,7,2,1,'',NULL,218.40,'2018-12-07 04:53:03','2018-12-07 04:53:03',2,_binary '\0',2,_binary '\0',NULL,'Re'),(504,7,2,8,7,2,1,NULL,NULL,224.00,'2018-12-07 05:24:43','2018-12-07 05:24:43',2,_binary '\0',2,_binary '\0',NULL,'Re'),(505,7,2,5,7,2,1,'',225.00,225.00,'2018-12-10 03:53:45','2018-12-10 04:15:43',2,_binary '\0',2,_binary '\0',NULL,'Ca'),(506,7,2,5,7,2,1,'',100.00,112.00,'2018-12-10 04:16:54','2018-12-10 04:16:54',2,_binary '\0',2,_binary '\0',NULL,'Re'),(507,297,2,5,6,4,1,'',600.00,672.00,'2018-12-27 18:05:39','2018-12-27 18:05:39',2,_binary '\0',2,_binary '\0',NULL,'Re');
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `us` varchar(3) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`us`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'SAD','super_admin','A','2017-09-30 17:31:44','2017-09-30 17:31:44',0,0),(2,'AD','admin','A','2017-09-30 17:31:44','2017-09-30 17:31:44',0,0),(3,'REC','recepcionista','A','2017-09-30 17:31:44','2017-09-30 17:31:44',0,0);
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roltransaccion`
--

DROP TABLE IF EXISTS `roltransaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roltransaccion` (
  `idTransaccion` int(11) NOT NULL,
  `idRol` int(11) NOT NULL,
  PRIMARY KEY (`idTransaccion`,`idRol`),
  KEY `fk_transaccion_has_rol_rol1_idx` (`idRol`),
  KEY `fk_transaccion_has_rol_transaccion1_idx` (`idTransaccion`),
  CONSTRAINT `fk_transaccion_has_rol_rol1` FOREIGN KEY (`idRol`) REFERENCES `rol` (`id`),
  CONSTRAINT `fk_transaccion_has_rol_transaccion1` FOREIGN KEY (`idTransaccion`) REFERENCES `transaccion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roltransaccion`
--

LOCK TABLES `roltransaccion` WRITE;
/*!40000 ALTER TABLE `roltransaccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `roltransaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social`
--

DROP TABLE IF EXISTS `social`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `social` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `url` varchar(300) NOT NULL,
  `icon` varchar(30) DEFAULT NULL,
  `estado` char(2) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social`
--

LOCK TABLES `social` WRITE;
/*!40000 ALTER TABLE `social` DISABLE KEYS */;
INSERT INTO `social` VALUES (1,'Facebook','https://www.facebook.com/','fa fa-facebook','A','2017-10-11 23:03:31','2017-10-11 23:03:31',0,0),(2,'Instagram','https://www.instagram.com/','fa fa-instagram','A','2017-10-11 23:03:31','2017-10-11 23:03:31',0,0),(3,'Twitter','https://twitter.com/','fa fa-twitter','A','2017-10-11 23:03:31','2017-10-11 23:03:31',0,0),(4,'Google Plus','https://plus.google.com/','fa fa-google-plus','A',NULL,NULL,NULL,NULL),(5,'Página Web','','fa fa-laptop','A',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `social` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarifa`
--

DROP TABLE IF EXISTS `tarifa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tarifa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idHospedaje` int(11) NOT NULL,
  `idtipo` int(11) DEFAULT NULL,
  `descripcion` varchar(100) NOT NULL,
  `valor` decimal(8,2) NOT NULL DEFAULT '0.00',
  `estado` char(2) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_tarifa_idtipo` (`idtipo`),
  CONSTRAINT `FK_tarifa_idtipo` FOREIGN KEY (`idtipo`) REFERENCES `tipotarifa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarifa`
--

LOCK TABLES `tarifa` WRITE;
/*!40000 ALTER TABLE `tarifa` DISABLE KEYS */;
INSERT INTO `tarifa` VALUES (1,2,1,'Simple',20.00,'I','2018-01-05 23:49:57','2018-01-06 00:08:30',2,2),(2,2,1,'Doble ',45.00,'I','2018-01-05 23:51:16','2018-09-26 22:03:24',2,3),(3,2,1,'Simple',30.00,'I','2018-01-06 00:50:29','2018-01-06 00:50:57',0,0),(4,2,1,'Matrimonial booking',45.00,'I','2018-01-13 22:07:01','2018-09-26 22:03:28',0,3),(5,2,1,'Triple',65.00,'I','2018-01-13 22:07:40','2018-09-26 22:07:59',0,3),(6,2,1,'Suite 5 pax',110.00,'I','2018-01-13 22:07:58','2018-09-26 22:08:10',0,3),(7,2,1,'Suite 2 pax',55.00,'I','2018-01-13 22:08:19','2018-09-26 22:22:02',0,3),(8,2,2,'Matrimonial',40.00,'I','2018-01-13 22:14:52','2018-09-26 22:22:08',0,3),(9,2,3,'Matrimonial',40.00,'I','2018-01-13 22:15:11','2018-02-02 02:46:20',0,0),(10,2,1,'BOOKING DOBLE',45.15,'I','2018-01-18 23:01:51','2018-02-02 02:45:20',0,0),(11,2,2,'Doble Intermedia',40.00,'I','2018-02-02 02:46:09','2018-09-26 22:22:17',0,3),(12,2,2,'Triple',60.00,'I','2018-02-02 02:46:54','2018-09-26 22:22:22',0,3),(13,2,3,'DOBLE/MATRIMONIAL',40.00,'I','2018-02-02 02:50:35','2018-09-26 22:22:26',0,3),(14,2,3,'Triple',60.00,'I','2018-02-02 02:51:07','2018-09-26 22:23:13',0,3),(15,2,1,'BOOKING TRIPLE',65.00,'I','2018-02-09 13:45:50','2018-09-26 22:23:21',0,3),(19,17,1,'Simple',25.00,'A','2018-02-10 03:24:04','2018-02-10 03:25:13',0,0),(20,17,3,'Simple inter',20.00,'I','2018-02-10 03:24:48','2018-02-10 03:25:23',0,0),(21,2,2,'booking especial 4 pax suite',60.00,'I','2018-02-21 22:32:18','2018-09-26 22:23:29',0,3),(22,2,1,'mini suite AIR BNB',52.00,'I','2018-02-24 22:43:47','2018-09-26 22:23:34',0,3),(23,2,1,'TARIFA AIR BNB',45.00,'I','2018-02-26 00:57:58','2018-09-26 22:23:38',0,3),(24,2,2,'matrimonial minimo',35.00,'I','2018-02-27 00:40:36','2018-09-26 22:23:44',0,3),(25,2,2,'NUEVA BOOKING KING SIZE BED',50.00,'I','2018-03-02 13:41:35','2018-09-26 22:23:51',0,3),(26,2,1,'King room booking',50.00,'I','2018-03-02 14:32:56','2018-09-26 22:23:56',0,3),(27,2,1,'DOBLE BOOKING',45.65,'I','2018-03-02 17:27:21','2018-09-26 22:24:02',0,3),(28,2,1,'king room airbnb',54.00,'I','2018-03-03 20:18:36','2018-09-26 22:24:10',0,3),(29,2,1,'matrimonial standard booking',50.00,'I','2018-03-06 00:32:15','2018-09-26 22:24:16',0,3),(30,2,3,'king room/ personal ',40.00,'I','2018-03-06 18:23:52','2018-09-26 22:24:34',0,3),(31,2,2,'matrimonial especial ',30.00,'I','2018-03-07 00:37:07','2018-03-11 17:50:55',0,0),(32,2,2,'matrimonial especial /una persona ',20.00,'I','2018-03-07 16:44:12','2018-03-11 17:50:49',0,0),(33,2,1,'matrimonial standard booking ',46.00,'I','2018-03-11 17:51:48','2018-09-26 22:24:55',0,3),(34,2,1,'TRIPLE',60.00,'I','2018-03-13 14:56:23','2018-09-26 22:24:59',0,3),(35,2,1,'1 pax',30.00,'I','2018-03-14 05:50:47','2018-09-26 22:25:06',0,3),(36,2,1,'BOOKING 52',52.00,'I','2018-03-18 14:29:20','2018-09-26 22:25:10',0,3),(37,2,2,'TARIFFA 42.50',42.50,'I','2018-03-18 15:03:11','2018-09-26 22:25:28',0,3),(38,2,2,'TARIFA 29.75',29.75,'I','2018-03-18 15:14:24','2018-09-26 22:25:37',0,3),(39,2,3,'celleri ',80.00,'I','2018-03-20 14:58:13','2018-04-30 17:17:37',0,0),(40,2,1,'habit. económica ',45.00,'I','2018-03-20 23:56:58','2018-09-26 22:25:46',0,3),(41,2,1,'doble económica ',50.00,'I','2018-03-23 18:23:38','2018-09-26 22:26:02',0,3),(42,2,1,'habit.económica 2 pax ',35.00,'I','2018-03-24 23:08:59','2018-09-26 22:26:07',0,3),(43,2,1,'airbnb JEAN PINO',45.90,'I','2018-03-28 23:49:11','2018-04-30 17:17:28',0,0),(44,2,3,'sta cruz. suite grande ',70.00,'I','2018-03-29 16:58:13','2018-09-26 22:26:11',0,3),(45,2,1,'suite  grande 2 pax',60.00,'I','2018-03-30 21:20:01','2018-04-17 20:01:52',0,0),(46,2,1,'mini suite 2 pax ',50.00,'I','2018-03-30 21:20:53','2018-09-26 22:26:17',0,3),(47,2,1,'SUITE SAN CRISTOBAL ',57.00,'I','2018-04-17 18:48:21','2018-09-26 22:26:23',0,3),(48,2,1,'UNA PERSONA SUITE GRANDE',28.00,'I','2018-04-17 20:00:55','2018-09-26 22:26:30',0,3),(49,2,1,'SUITE ESPECIAL 75',75.00,'I','2018-04-22 00:55:33','2018-09-26 22:26:46',0,3),(50,2,1,'BOOKING  57',57.00,'I','2018-04-25 13:53:35','2018-09-26 22:26:51',0,3),(51,2,1,'46 AIRBNB',46.00,'I','2018-04-25 22:58:34','2018-09-26 22:26:55',0,3),(52,2,1,'matrimonial + 1 adicional',55.00,'I','2018-04-30 17:18:26','2018-09-26 22:27:02',0,3),(53,2,3,'Prueba',40.00,'I','2018-05-04 23:42:33','2018-09-26 22:27:08',0,3),(54,2,1,'nueva Isabela ',54.00,'I','2018-05-18 01:15:03','2018-09-26 22:27:13',0,3),(55,2,1,'mini suite 1 persona',25.00,'I','2018-05-19 19:40:44','2018-09-26 22:27:26',0,3),(56,2,1,'isabela 3 adultos ',70.00,'I','2018-05-25 03:24:45','2018-09-26 22:27:30',0,3),(57,2,1,'SUITE 65',65.00,'I','2018-06-02 18:04:53','2018-09-26 22:27:43',0,3),(58,2,1,'especial 35',35.00,'I','2018-06-15 00:29:18','2018-09-26 22:27:51',0,3),(59,2,1,'53 DOLARES WEB PAGE',52.00,'I','2018-06-25 16:46:08','2018-09-26 22:27:57',0,3),(60,2,1,'HABIT.ESPAÑOLA',65.00,'I','2018-07-03 23:38:04','2018-09-26 22:28:14',0,3),(61,2,1,'52.50 BOOKING',52.50,'I','2018-07-07 13:11:57','2018-09-26 22:28:22',0,3),(62,2,1,'54 BOOKING',54.00,'I','2018-07-07 13:12:17','2018-09-26 22:28:26',0,3),(63,2,1,'56 IVA',56.00,'I','2018-07-07 13:19:32','2018-09-26 22:28:31',0,3),(64,2,1,'55',55.00,'I','2018-07-10 20:22:36','2018-09-26 22:28:37',0,3),(65,2,1,'fernandina ',60.00,'I','2018-07-26 23:19:00','2018-09-26 22:28:42',0,3),(66,2,1,'especial',70.00,'I','2018-07-29 02:47:18','2018-09-26 22:28:48',0,3),(67,2,1,'40',40.00,'I','2018-08-03 16:37:20','2018-09-26 22:28:51',3,3),(68,2,2,'53',45.00,'I','2018-08-14 13:48:20','2018-09-26 22:29:00',3,3),(69,2,1,'53',53.00,'I','2018-08-14 13:48:44','2018-09-26 22:29:05',3,3),(70,2,1,'67.2',67.20,'I','2018-08-23 01:13:32','2018-09-26 22:29:08',3,3),(71,2,1,'$75 SAN CRISTOBAL 3 PAX ',75.00,'A','2018-09-26 22:06:40','2018-09-26 22:06:40',3,3),(72,2,2,'$70 SAN CRISTOBAL 3PAX',70.00,'A','2018-09-26 22:07:37','2018-09-26 22:07:37',3,3),(73,2,1,'$65 SAN CRISTOBAL 2PAX',65.00,'A','2018-09-26 22:32:51','2018-09-26 22:32:51',3,3),(74,2,2,'$60 SAN CRISTOBAL 2PAX',60.00,'A','2018-09-26 22:33:23','2018-09-26 22:33:23',3,3),(75,2,1,'$75 ISABELA 3PAX',75.00,'A','2018-09-26 22:34:19','2018-09-26 22:34:19',3,3),(76,2,2,'$70 ISABELA 3PAX',70.00,'A','2018-09-26 22:34:58','2018-09-26 22:34:58',3,3),(77,2,1,'$65 ISABELA 2PAX',65.00,'A','2018-09-26 22:35:32','2018-09-26 22:35:32',3,3),(78,2,2,'$60 ISABELA 2PAX',60.00,'A','2018-09-26 22:36:00','2018-09-26 22:36:00',3,3),(79,2,1,'$55 FLOREANA 2PAX',55.00,'A','2018-09-26 22:37:00','2018-09-26 22:37:00',3,3),(80,2,2,'$50 FLOREANA 2PAX',50.00,'A','2018-09-26 22:37:23','2018-09-26 22:37:23',3,3),(81,2,1,'$65 ESPAÑOLA 3PAX',65.00,'A','2018-09-26 22:38:16','2018-09-26 22:38:16',3,3),(82,2,2,'$60 ESPAÑOLA 3PAX',60.00,'A','2018-09-26 22:38:38','2018-09-26 22:38:38',3,3),(83,2,1,'$55 ESPAÑOLA 2 PAX',55.00,'A','2018-09-26 22:39:11','2018-09-26 22:39:11',3,3),(84,2,2,'$50 ESPAÑOLA 2PAX',50.00,'A','2018-09-26 22:39:35','2018-09-26 22:39:35',3,3),(85,2,1,'72,80 SAN CRISTOBAL BOOKING ',72.80,'A','2018-09-26 23:03:43','2018-09-26 23:06:07',3,3),(86,2,1,'$70 BKG SAN CRISTOBAL 3PAX',70.00,'A','2018-09-28 00:44:26','2018-09-28 00:44:26',3,3),(87,2,1,'$60 BKG  ISABELA 2PAX',60.00,'A','2018-09-28 00:46:38','2018-09-28 00:46:38',3,3),(88,2,1,'$65 BKG ESPAÑOLA 3PAX',65.00,'I','2018-09-28 00:47:28','2018-09-28 00:59:31',3,3),(89,2,1,'$65 BKG ESPAÑOLA 3PAX',65.00,'I','2018-09-28 00:47:43','2018-09-28 00:56:26',3,3),(90,2,1,'$65 BKG ESPAÑOLA 3PAX',65.00,'I','2018-09-28 00:54:10','2018-09-28 00:54:44',3,3),(91,2,1,'$65 BKG ESPAÑOLA 3PAX',65.00,'A','2018-09-28 01:00:05','2018-09-28 01:00:05',3,3),(92,2,1,'$52 BKG FERNANDINA 2PAX',52.00,'A','2018-09-28 01:00:50','2018-09-28 01:00:50',3,3),(93,2,1,'$52 BKG FLOREANA 2PAX',52.00,'A','2018-09-28 01:01:19','2018-09-28 01:01:19',3,3),(94,2,1,'$70 AIRBNB SAN CRISTOBAL 3PAX',70.00,'A','2018-09-28 01:02:10','2018-09-28 01:02:10',3,3),(95,2,1,'$60 AIRBNB ISABELA 2 PAX',60.00,'A','2018-09-28 01:02:49','2018-09-28 01:02:49',3,3),(96,2,1,'$65 AIRBNB ESPAÑOLA 3PAX',65.00,'A','2018-09-28 01:03:38','2018-09-28 01:03:38',3,3),(97,2,1,'$50 AIRBNB FLOREANA 2PAX',50.00,'A','2018-09-28 01:04:22','2018-09-28 01:04:22',3,3),(98,2,3,'$ 45 PROMOCION FERNANDINA 2PAX',45.00,'A','2018-10-05 16:30:32','2018-10-05 16:30:32',3,3),(99,2,3,'67,20 san cristobal mas iva',67.20,'A','2018-10-13 18:22:19','2018-10-13 18:23:35',3,3),(100,2,3,'PROMO! San Cristobal x3 $60',60.00,'A','2018-10-20 00:28:35','2018-10-20 00:28:35',3,3),(101,2,3,'PROMO! San Cristobal x2 $50',50.00,'A','2018-10-20 00:29:29','2018-10-20 00:29:29',3,3),(102,2,3,'PROMO! Floreana x2 $45',45.00,'A','2018-10-20 00:30:12','2018-10-20 00:30:12',3,3),(103,2,3,'PROMO! Fernandina  $45',45.00,'A','2018-10-20 00:30:55','2018-10-20 00:30:55',3,3),(104,2,3,'PROMO! Española x2 $50',50.00,'A','2018-10-20 00:31:39','2018-10-20 00:31:39',3,3),(105,2,3,'PROMO! Isabela x2 $48',48.00,'A','2018-10-20 21:53:47','2018-10-20 21:54:12',3,3),(106,2,3,'PROMO! Santa Cruz x2 $40',40.00,'A','2018-10-21 21:24:02','2018-10-21 21:24:02',3,3),(107,2,3,'PROMO! Genovessa x2 $45',45.00,'A','2018-10-22 15:54:48','2018-10-22 15:54:48',3,3),(108,2,3,'PROMO! Isabela x2 $50',50.00,'A','2018-10-24 18:12:24','2018-10-24 18:12:24',3,3),(109,2,3,'PROMO! Genovessa x2 $30',30.00,'A','2018-10-29 22:46:40','2018-10-29 22:46:40',3,3),(110,2,1,'Fernandina matrimonial $55',55.00,'A','2018-10-31 19:45:15','2018-10-31 19:45:15',3,3),(111,2,1,'santa cruz',50.40,'A','2018-11-07 22:43:42','2018-11-07 22:43:42',3,3),(112,2,2,'Individual Mini Suite Floreana',35.00,'A','2018-11-12 20:18:16','2018-11-12 20:18:16',3,3),(113,2,1,'100 tarifa 100',100.00,'A','2018-12-10 03:44:57','2018-12-10 03:44:57',2,2);
/*!40000 ALTER TABLE `tarifa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipotarifa`
--

DROP TABLE IF EXISTS `tipotarifa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipotarifa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(200) NOT NULL,
  `estado` char(2) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipotarifa`
--

LOCK TABLES `tipotarifa` WRITE;
/*!40000 ALTER TABLE `tipotarifa` DISABLE KEYS */;
INSERT INTO `tipotarifa` VALUES (1,'Rack','A','2018-01-13 22:12:48','2018-01-13 22:12:48',0,0),(2,'Intermedia','A','2018-01-13 22:12:48','2018-01-13 22:12:48',0,0),(3,'Grupo','A','2018-01-13 22:14:21','2018-01-13 22:14:21',0,0);
/*!40000 ALTER TABLE `tipotarifa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaccion`
--

DROP TABLE IF EXISTS `transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaccion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccion`
--

LOCK TABLES `transaccion` WRITE;
/*!40000 ALTER TABLE `transaccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `idHospedaje` int(11) DEFAULT NULL,
  `nombre` varchar(200) NOT NULL,
  `password` varchar(600) NOT NULL,
  `tokenRegistro` varchar(500) DEFAULT NULL,
  `tokenRecupera` varchar(500) DEFAULT NULL,
  `estado` char(1) NOT NULL DEFAULT 'A',
  `feCreacion` datetime DEFAULT NULL,
  `feModificacion` datetime DEFAULT NULL,
  `usCreacion` int(11) DEFAULT NULL,
  `usModificacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`correo`),
  UNIQUE KEY `correo_UNIQUE` (`correo`),
  UNIQUE KEY `usuario_UNIQUE` (`usuario`),
  UNIQUE KEY `UK_usuario` (`id`,`idHospedaje`),
  KEY `fk_usuario_hospedaje1_idx` (`idHospedaje`),
  CONSTRAINT `fk_usuario_hospedaje1` FOREIGN KEY (`idHospedaje`) REFERENCES `hospedaje` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'thianlopezz@gmail.com','thianlopezz@gmail.com',2,'Cristhian Lopez Zambrano','5f4dcc3b5aa765d61d8327deb882cf99',NULL,NULL,'A','2017-07-16 18:26:54','2017-07-16 18:26:54',0,0),(3,'casadcristhi@gmail.com','casadcristhi@gmail.com',2,'Andres Lopez Zambrano','5f4dcc3b5aa765d61d8327deb882cf99',NULL,NULL,'A','2017-07-19 02:16:27','2017-07-19 02:16:27',0,0),(19,'thianlopezz@chaskiy.com','thianlopezz@chaskiy.com',17,'Thian Lopez2','5f4dcc3b5aa765d61d8327deb882cf99','a599356bb43d2feda7c3f051fbcf1392',NULL,'A','2018-02-09 20:41:15','2018-02-09 20:41:15',-1,-1),(20,'karlivilla99@gmail.com','karlivilla99@gmail.com',2,'Karla Villagomez','5f4dcc3b5aa765d61d8327deb882cf99',NULL,NULL,'A','2018-04-30 19:04:04','2018-04-30 19:04:04',0,0),(21,'dnarvaez@narviz.com','dnarvaez@narviz.com',18,'Diego Narvaez','5f4dcc3b5aa765d61d8327deb882cf99',NULL,NULL,'A',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariorol`
--

DROP TABLE IF EXISTS `usuariorol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuariorol` (
  `idRol` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idRol`,`idUsuario`),
  KEY `fk_rol_has_usuario_rol1_idx` (`idRol`),
  KEY `fk_rol_has_usuario_usuario1_idx` (`idUsuario`),
  CONSTRAINT `fk_rol_has_usuario_rol1` FOREIGN KEY (`idRol`) REFERENCES `rol` (`id`),
  CONSTRAINT `fk_rol_has_usuario_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariorol`
--

LOCK TABLES `usuariorol` WRITE;
/*!40000 ALTER TABLE `usuariorol` DISABLE KEYS */;
INSERT INTO `usuariorol` VALUES (2,3),(2,19),(2,20),(2,21),(3,2);
/*!40000 ALTER TABLE `usuariorol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vpago`
--

DROP TABLE IF EXISTS `vpago`;
/*!50001 DROP VIEW IF EXISTS `vpago`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `vpago` AS SELECT 
 1 AS `idPago`,
 1 AS `idForma`,
 1 AS `formaPago`,
 1 AS `idReserva`,
 1 AS `idHospedaje`,
 1 AS `monto`,
 1 AS `usuario`,
 1 AS `feCreacion`,
 1 AS `feCreacionFormat`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vpasajero`
--

DROP TABLE IF EXISTS `vpasajero`;
/*!50001 DROP VIEW IF EXISTS `vpasajero`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `vpasajero` AS SELECT 
 1 AS `idPasajero`,
 1 AS `idHospedaje`,
 1 AS `hospedaje`,
 1 AS `idPais`,
 1 AS `pais`,
 1 AS `nombre`,
 1 AS `pasajero`,
 1 AS `correo`,
 1 AS `noContacto`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'chaskiy'
--
/*!50003 DROP FUNCTION IF EXISTS `getFechas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `getFechas`(_idReserva INT) RETURNS varchar(23) CHARSET utf8
BEGIN







  







  DECLARE _feDesde VARCHAR(10);







  DECLARE _feHasta VARCHAR(10);















  DECLARE _fecha VARCHAR(23) DEFAULT '';















  SELECT DATE_FORMAT(MIN(feDesde), '%d/%m/%Y') INTO _feDesde FROM porhabitacion WHERE idReserva = _idReserva;







  SELECT DATE_FORMAT(MAX(DATE_ADD(feHasta, INTERVAL 1 DAY)), '%d/%m/%Y') INTO _feHasta FROM porhabitacion WHERE idReserva = _idReserva;















  SELECT CONCAT(_feDesde, CONCAT(' - ', _feHasta)) INTO _fecha;







RETURN _fecha;







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getHabitaciones` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `getHabitaciones`(_idReserva INT) RETURNS varchar(500) CHARSET utf8
BEGIN







  







  DECLARE habitaciones varchar(500) DEFAULT '';







  







  SELECT (







  SELECT GROUP_CONCAT(CONCAT(a.nombre,CONCAT(' (', a.noHabitacion),')') SEPARATOR ', ')







    FROM habitacion a inner join porhabitacion b on a.id = b.idHabitacion 







    WHERE b.idReserva = _idReserva) INTO habitaciones;















RETURN habitaciones;







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getSaldo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `getSaldo`(_idReserva INT) RETURNS int(11)
BEGIN















  DECLARE _saldo INT DEFAULT 0;















  SELECT (SELECT total FROM reserva WHERE id = _idReserva) - IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = _idReserva AND estado = 'A'), 0)







    INTO _saldo;







RETURN _saldo;







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `SPLIT_STR` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `SPLIT_STR`(







  x VARCHAR(16383),







  delim VARCHAR(12),







  pos INT







  







) RETURNS mediumtext CHARSET utf8
RETURN REPLACE(SUBSTRING(SUBSTRING_INDEX(x, delim, pos),







       LENGTH(SUBSTRING_INDEX(x, delim, pos -1)) + 1),







       delim, '') ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ad_adicional` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `ad_adicional`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idAdicional INT;

  DECLARE _idHospedaje INT;

  DECLARE _adicional VARCHAR(100);

  DECLARE _tarifa DECIMAL(8,2);

  DECLARE _idUsuario INT;

  

  SET _accion		  	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idAdicional	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idAdicional'));

  SET	_idHospedaje	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET _adicional	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.adicional'));

  SET	_tarifa		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.tarifa'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN	

    

    SELECT id idAdicional, descripcion adicional, tarifa tarifa, 1 cantidad FROM adicional

      WHERE estado = 'A'

    AND idHospedaje = _idHospedaje;

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO adicional (idHospedaje, descripcion, tarifa, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_idHospedaje, _adicional, _tarifa, NOW(), NOW(), _idUsuario, _idUsuario);      



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN    



    UPDATE adicional SET descripcion = _adicional, tarifa = _tarifa, feModificacion = NOW(), usModificacion = _idUsuario

        WHERE id = _idAdicional;  



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'D' THEN          



    UPDATE adicional SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idAdicional;

    

    SELECT 'Registro eliminado' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cat_aerolinea` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `cat_aerolinea`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idAerolinea INT;

  DECLARE _idHospedaje INT;

  DECLARE _nombre VARCHAR(100);  

  

  DECLARE _idUsuario INT;

  

  SET _accion		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idAerolinea		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idAerolinea'));

  SET	_idHospedaje		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET _nombre	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.nombre'));

  

  SET	_idUsuario		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT id idAerolinea, nombre aerolinea

      FROM aerolinea

      WHERE estado = 'A'

      ORDER BY prioridad;

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO aerolinea (nombre, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_nombre, NOW(), NOW(), _idUsuario, _idUsuario);



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN

    

    UPDATE aerolinea SET nombre = _nombre, feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idAerolinea;     

    

    SELECT 'Registro guardado' mensaje; 

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE aerolinea SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idAerolinea;



    SELECT 'Registro eliminado' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cat_formapago` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `cat_formapago`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion char(2);

  DECLARE _idforma int;

  DECLARE _forma varchar(50);

  

  SET _accion		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idForma		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idForma'));

  SET _forma	    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.forma'));

  

--   SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT id idForma, formapago forma FROM formapago WHERE estado = 'A';

  END IF;

  

  IF _accion = 'I' THEN



    INSERT INTO formaPago (formaPago, feCreacion)

      VALUES(_forma, NOW());



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN   

    

    UPDATE formaPago SET formaPago = _forma

      WHERE id = _idForma;



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE formaPago SET estado = 'I'

      WHERE id = _idForma;

    

    SELECT 'Registro eliminado' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cat_fuente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `cat_fuente`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idFuente INT;

  DECLARE _fuente VARCHAR(100);

  

  DECLARE _idUsuario INT;

  

  SET _accion		  	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idFuente		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idFuente'));

  SET _fuente	      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.fuente'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT id idFuente, fuente fuente FROM fuente

      WHERE estado = 'A'

      ORDER BY prioridad;

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO fuente (fuente, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_fuente, NOW(), NOW(), _idUsuario, _idUsuario);



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN



    UPDATE fuente SET fuente = _fuente, feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idFuente;



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE fuente SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idFuente;

    

    SELECT 'Registro eliminado' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cat_pais` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `cat_pais`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion char(2);

  DECLARE _idPais int;

  DECLARE _nombre varchar(100);

  

  DECLARE _idUsuario int;

  

  SET _accion		  	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idPais		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idPais'));

  SET _nombre	      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.nombre'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT id idPais, nombre pais FROM pais WHERE estado = 'A';

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO pais (nombre, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_nombre, NOW(), NOW(), _idUsuario, _idUsuario);

    

    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN

    

    UPDATE pais SET nombre = _nombre, feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idPais;

    

    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE pais SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idPais;

    

    SELECT 'Registro eliminado' mensaje;

  END IF;   

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cat_social` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `cat_social`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idSocial INT;

  DECLARE _nombre VARCHAR(100);

  DECLARE _url VARCHAR(300);

  DECLARE _icon VARCHAR(30);

  

  DECLARE _idUsuario INT;

  

  SET _accion		  	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET _idSocial		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idSocial'));

  SET _nombre	      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.nombre'));

  SET _url	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.url'));

  SET _icon	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.icon'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT id idSocial, nombre social, url url, icon icon FROM social WHERE estado = 'A';

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO social (nombre, url, icon, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_nombre, _url, _icon, NOW(), NOW(), _idUsuario, _idUsuario);



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN

    

    UPDATE social SET nombre = _nombre, icon = _icon, url = _url, feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idSocial;

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE social SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idSocial;



    SELECT 'Registro eliminado' mensaje;

  END IF;  

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `hab_disponibles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `hab_disponibles`(IN _feIni VARCHAR(10), IN _feFin VARCHAR(10), _idHospedaje INT)
BEGIN

  

  SELECT ha.id idHabitacion, ha.noHabitacion, ha.nombre habitacion FROM habitacion ha WHERE ha.estado = 'A' AND ha.idhospedaje = _idHospedaje AND ha.id

    NOT IN

    (

      SELECT DISTINCT ph.idHabitacion from porhabitacion ph

        INNER JOIN habitacion ha on ha.id = ph.idHabitacion

        INNER JOIN reserva re ON re.id = ph.idReserva

        WHERE

        (

          feDesde BETWEEN str_to_date(_feIni, '%d/%m/%Y') AND str_to_date(_feFin, '%d/%m/%Y')

          OR feHasta BETWEEN str_to_date(_feIni, '%d/%m/%Y') AND str_to_date(_feFin, '%d/%m/%Y')

        )

      AND re.estado <> 'Ca'

    )

    ORDER BY ha.noHabitacion ASC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `hab_habitacion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `hab_habitacion`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idHabitacion INT;

  DECLARE _idHospedaje INT;

  DECLARE _noHabitacion INT;

  DECLARE _tarifa DECIMAL(8,2);

  DECLARE _habitacion VARCHAR(100);

  

  DECLARE _idUsuario int;

  

  SET _accion		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idHabitacion		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHabitacion'));

  SET	_idHospedaje		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET	_noHabitacion		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.noHabitacion'));

  SET	_tarifa		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.tarifa'));

  SET _habitacion	    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.habitacion'));

  

  SET	_idUsuario		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT ha.id idHabitacion, ha.noHabitacion, ha.nombre habitacion, ho.id idHospedaje, ho.nombre hospedaje, ha.tarifa tarifa, pa.id idPais, pa.nombre pais

      FROM habitacion ha

      INNER JOIN hospedaje ho on ha.idHospedaje = ho.id

      INNER JOIN pais pa on ho.idPais = pa.id

      WHERE ha.idHospedaje = _idHospedaje

      AND ha.estado = 'A'

      ORDER BY ha.noHabitacion ASC;

    END IF;

  

  IF _accion = 'I' THEN

    

    IF NOT EXISTS(SELECT 1 FROM habitacion WHERE nohabitacion = _noHabitacion AND idHospedaje = _idHospedaje AND estado = 'A') THEN

    

      INSERT INTO habitacion (noHabitacion, idHospedaje, nombre, tarifa, feCreacion, feModificacion, usCreacion, usModificacion)

        VALUES(_noHabitacion, _idHospedaje, _habitacion, 0, NOW(), NOW(), _idUsuario, _idUsuario);

  

      SELECT 'Registro guardado' mensaje;

    ELSE

    

      SELECT 20 err, 'El número de habitación no puede repetirse' mensaje;

    END IF;   

  END IF;

  

  IF _accion = 'U' THEN

    

    IF NOT EXISTS(SELECT 1 FROM habitacion WHERE nohabitacion = _noHabitacion AND idHospedaje = _idHospedaje AND estado = 'A' AND id <> _idHabitacion) THEN

    

      UPDATE habitacion SET noHabitacion = _noHabitacion, nombre = _habitacion, tarifa = 0, feModificacion = NOW(), usModificacion = _idUsuario

        WHERE id = _idHabitacion;

  

      SELECT 'Registro guardado' mensaje;

    ELSE

      

      SELECT 20 err, 'El número de habitación no puede repetirse' mensaje;

    END IF;

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE habitacion SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idHabitacion;



    SELECT 'Registro eliminado' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ho_hospedaje` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `ho_hospedaje`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idPais INT;

  DECLARE _idHospedaje INT;

  DECLARE _hospedaje VARCHAR(150);

  DECLARE _ciudad VARCHAR(50);

  DECLARE _direccion VARCHAR(500);

  DECLARE _correo VARCHAR(500);

  DECLARE _nombre VARCHAR(200);

  

  DECLARE _idUsuario INT;

  DECLARE _usuario int;

  

  set _accion	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  set	_idPais		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idPais'));

  set	_idHospedaje		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  set	_usuario		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.usuario'));

  set _hospedaje	    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.hospedaje'));

  set _ciudad	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.ciudad'));

  set _direccion	    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.direccion'));

  set _correo	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.correo'));

  set _nombre	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.nombre'));

  

  IF _accion = 'C' THEN

    

    SELECT dh.*, dh.idAdmin usuario, dh.administrador nombre FROM da_hospedaje dh

      WHERE dh.idHospedaje = _idHospedaje;

    

    SELECT hs.idHospedaje, hs.idSocial, hs.valor valor

      FROM hospedajesocial hs

      INNER JOIN social so on so.id = hs.idSocial

      WHERE hs.idHospedaje = _idHospedaje

      AND so.estado = 'A';

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO pais (nombre, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_nombre, NOW(), NOW(), _idUsuario, _idUsuario);



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN

    

    UPDATE hospedaje SET nombre = _hospedaje, idPais = _idPais, ciudad = _ciudad, direccion = _direccion, feModificacion = NOW(), usModificacion = _idusuario

      WHERE id = _idHospedaje;

    

    SET _idUsuario = (SELECT us.id FROM usuario us INNER JOIN usuariorol ur ON us.id = ur.idUsuario WHERE us.idHospedaje = _idHospedaje AND ur.idRol = 2 LIMIT 1);

    

    UPDATE usuario SET nombre = _nombre

      WHERE id = _idUsuario;

    

    DELETE FROM hospedajesocial where idHospedaje = _idHospedaje;



    INSERT INTO hospedajesocial (idHospedaje, idSocial, valor) 

    SELECT _idHospedaje, so.idSocial, IFNULL(so.valor, '')

     FROM

      JSON_TABLE(JSON_EXTRACT(jsonParams,'$.redes'), "$[*]"

        COLUMNS(

          idSocial INT PATH "$.idSocial",

          valor VARCHAR(100) PATH "$.valor"

        )

    ) so;

    

    SELECT 'Registro guardado' mensaje;



  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE pais SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idPais;



    SELECT 'Registro eliminado' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ma_marcacion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `ma_marcacion`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  

  DECLARE _idMarcacion INT;

  DECLARE _idHospedaje INT;

  DECLARE _idUsuario INT;

  DECLARE _feEntrada DATETIME;

  DECLARE _feSalida DATETIME;



  SET _accion = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  

  SET _idMarcacion = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idMarcacion'));

  SET _idHospedaje = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET _idUsuario = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  SET _feEntrada = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feEntrada'));

  SET _feSalida = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feSalida'));



  IF _accion = 'C' THEN



    SELECT * FROM marcacion WHERE idHospedaje = _idHospedaje;

  ELSEIF _idMarcacion IS NULL THEN



    INSERT INTO marcacion (idHospedaje, idUsuario, feEntrada)

      VALUES (_idHospedaje, _idUsuario, _feEntrada);

    SELECT 'Entrada marcada exitosamente.' mensaje;

  ELSEIF _idMarcacion IS NOT NULL THEN



    UPDATE marcacion set feSalida = _feSalida WHERE idMarcacion = _idMarcacion;

    SELECT 'Salida marcada exitosamente.' mensaje;

  ELSE

    SELECT 'No se envió la acción.' mensaje, 404 error;

  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pa_pasajero` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `pa_pasajero`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idPasajero INT;

  DECLARE _idHospedaje INT;

  DECLARE _idPais INT;

  DECLARE _nombre VARCHAR(100);

  DECLARE _correo VARCHAR(100);

  DECLARE _noContacto VARCHAR(15);

  

  DECLARE _idUsuario INT;

  

  SET _accion		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idPasajero		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idPasajero'));

  SET	_idHospedaje		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET	_idPais		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idPais'));

  SET _nombre	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.pasajero'));

  SET _correo	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.correo'));

  SET _noContacto	    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.noContacto'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT * FROM vpasajero

        WHERE estado =  'A' AND idHospedaje = _idHospedaje;

  END IF;

  

  IF _accion = 'C1' THEN  /*Get by correo (ident)*/

    

    SELECT * FROM vpasajero

        WHERE estado = 'A' AND idHospedaje = _idHospedaje AND correo = _correo;

  END IF;

  

  IF _accion = 'I' THEN

    

    IF NOT EXISTS(SELECT 1 FROM pasajero WHERE correo = _correo AND idHospedaje = _idHospedaje AND estado = 'A') THEN

    

      INSERT INTO pasajero (idHospedaje, idPais, nombre, correo, noContacto, feCreacion, feModificacion, usCreacion, usModificacion)

        VALUES(_idHospedaje, _idPais, _nombre, _correo, _noContacto, NOW(), NOW(), _idUsuario, _idUsuario);



      SELECT 'Registro guardado' mensaje;

    ELSE

      

      SELECT 20 err, 'Correo ya ingresado' mensaje;

    END IF;   

  END IF;

  

  IF _accion = 'U' THEN

    

    IF NOT EXISTS(SELECT 1 FROM pasajero WHERE correo = _correo AND idHospedaje = _idHospedaje AND estado = 'A' AND id <> _idPasajero) THEN

    

      UPDATE pasajero SET idPais = _idPais, correo = _correo, nombre = _nombre, noContacto = _noContacto, feModificacion = NOW(), usModificacion = _idUsuario

        WHERE id = _idPasajero;



      SELECT 'Registro guardado' mensaje;

    ELSE

      

      SELECT 20 err, 'Correo ya ingresado' mensaje;

    END IF;   

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE pasajero SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idPasajero;



    SELECT 'Registro eliminado' mensaje;

  END IF;  

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `pg_pago` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `pg_pago`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idPago INT;

  DECLARE _monto DECIMAL(8,2);

  DECLARE _nota VARCHAR(300);

  DECLARE _idReserva INT;

  DECLARE _idForma INT;

  

  DECLARE _idUsuario INT;

  

  DECLARE _idHospedaje INT;

  

  DECLARE _feDesde DATETIME;

  DECLARE _feHasta DATETIME;

  

  SET _accion		  	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idPago		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idPago'));

  SET	_monto		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.monto'));

  SET _nota	        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.nota'));

  SET	_idReserva		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idReserva'));

  SET	_idForma		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idForma'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  SET	_idHospedaje	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  

  SET _feDesde   		= CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feDesde')) AS DATE);

  SET _feHasta   		= CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feHasta')) AS DATE);

  

  IF _accion = 'C' THEN  /*Consulta Especifica*/



    SELECT * FROM vpago

      WHERE estado = 'A'

      AND idReserva = _idReserva;

  END IF;

  

  IF _accion = 'C1' THEN  /*Consulta por fecha*/



    SELECT * FROM vpago

      WHERE CAST(feCreacion AS DATE) >= _feDesde

      AND CAST(feCreacion AS DATE) <= _feHasta

      AND idHospedaje = _idHospedaje

      AND estado = 'A';

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO pagos (idReserva, monto, descripcion, idFormaPago, usCreacion, feCreacion, usModificacion, feModificacion)

      VALUES(_idReserva, _monto, _nota, _idForma, _idUsuario, NOW(), _idUsuario, NOW());      



      SELECT @@insert_id INTO _idPago;

      

      SELECT 'Pago registrado con éxito' mensaje, re.id idReserva, pa.nombre pasajero, pa.correo,

        re.token,

        _monto monto,

        (SELECT formaPago FROM formapago WHERE id = _idForma) formaPago,

        NOW() fechaPago,

        dh.idhospedaje idHospedaje,

        dh.hospedaje,

        dh.correo correoHospedaje,

        dh.direccion,

        dh.fb, dh.ig, dh.tw, dh.gp

      FROM reserva re

        INNER JOIN pasajero pa ON re.idPasajero = pa.id

        INNER JOIN da_hospedaje dh ON dh.idhospedaje = re.idHospedaje

      WHERE re.id = _idReserva;

    END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE pagos SET estado = 'I'

      WHERE id = _idPago;

    

    SELECT 'Pago eliminado con éxito' mensaje;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reg_activa` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `reg_activa`(IN token varchar(500))
BEGIN







  DECLARE _idUsuario int default 0;  







  SELECT id INTO _idUsuario FROM usuario where tokenRegistro = token;







  IF _idusuario = 0 THEN    







    SELECT 51 err, 'Usuario no existe' mensaje;



  ELSE







    IF (SELECT estado FROM usuario WHERE id = _idUsuario) = 'A' THEN     







      SELECT 52 err, 'Usuario ya ha sido activado' mensaje;







    ELSEIF (SELECT estado FROM usuario WHERE id = _idUsuario) = 'C' THEN







      UPDATE usuario SET estado = 'A' WHERE id = _idUsuario;







      SELECT 'Usuario activado correctamente' mensaje;



    ELSE







      SELECT 53 err, 'Usuario se encuentra inactivo' mensaje;



    END IF;



  END IF;  







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reg_isRegister` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `reg_isRegister`(IN _usuario varchar(200))
BEGIN







  DECLARE _idUsuario INT DEFAULT 0;







    SELECT us.id INTO _idUsuario 



      FROM usuario us



    WHERE us.correo = _usuario;







    IF _idsuario <> 0 THEN







      SELECT 40 err, 'Usuario ya registrado' mensaje;



    ELSE







      SELECT 'Usuario válido' mensaje;



    END IF;   







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reg_password` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `reg_password`(IN xmlParam varchar(10000))
BEGIN







    DECLARE _idUsuario int;



    DECLARE _pass varchar(600);



    DECLARE _pass0 varchar(600);







	  SET	_idUsuario		  = (SELECT IF(ExtractValue(xmlParam, '//params/@idUsuario')='',0, ExtractValue(xmlParam, '//params/@idUsuario')));



    set _pass	          = ExtractValue(xmlParam, '//params/@pass');



    set _pass0          = ExtractValue(xmlParam, '//params/@pass0');







    IF (SELECT COUNT(*) FROM usuario WHERE id = _idUsuario AND password = _pass) = 0 THEN







      SELECT 42 err, 'La contraseña anterior es incorrecta' mensaje;



    ELSE







      START TRANSACTION;







      UPDATE usuario set password = _pass0 WHERE id = _idUsuario; 







      SELECT 'Contraseña actualizada exitosamente' mensaje;



      COMMIT;



    END IF;







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reg_recupera` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `reg_recupera`(IN xmlParam varchar(10000))
BEGIN







    DECLARE _accion VARCHAR(2);



    DECLARE _correo VARCHAR(500);



    DECLARE _token VARCHAR(500);



    DECLARE _pass VARCHAR(600);







    DECLARE _idUsuario INT DEFAULT 0;







    SET _accion	= ExtractValue(xmlParam, '//params/@accion');



    SET _correo	= ExtractValue(xmlParam, '//params/@correo');



    SET _token	= ExtractValue(xmlParam, '//params/@token');



    SET _pass	  = ExtractValue(xmlParam, '//params/@pass');







    IF _accion = 'R' THEN







      IF (SELECT COUNT(*) FROM usuario WHERE usuario = _correo AND tokenRecupera is not null) > 0 THEN







        SELECT 44 err, 'Usuario ya en proceso de recuperación de contraseña' mensaje;



      ELSE







        IF (SELECT COUNT(*) FROM usuario WHERE correo = _correo AND estado = 'A') = 0 THEN    







          SELECT 45 err, 'Usuario no asociado a una cuenta o usuario inactivo' mensaje;



        ELSE    







          START TRANSACTION;      







          UPDATE usuario SET tokenRecupera = _token WHERE correo = _correo;    







          IF (SELECT ROW_COUNT()) = 1 THEN                       







            SELECT 'Registro exitoso' mensaje, idHospedaje idhospedaje, nombre nombre



            FROM usuario



            WHERE usuario = _correo;



            COMMIT;                 



          ELSE    







            SELECT 46 err, 'No se pudo completar el registro' mensaje; 



          END IF; 







        END IF;



      END IF;



    END IF;







    IF _accion = 'R0' THEN







      SELECT id INTO _idUsuario 



      FROM usuario 



      WHERE tokenRecupera = _token;







      IF _idUsuario <> 0 THEN







        START TRANSACTION;  







        UPDATE usuario SET password = _pass, tokenRecupera = NULL 



        WHERE tokenRecupera = _token;  







        IF (SELECT ROW_COUNT()) = 1 THEN  



          



          SELECT 'Contraseña actualizada exitosamente' mensaje;          



            COMMIT;



          ELSE   







            SELECT 46 err, 'No se pudo completar la actualización' mensaje; 



        END IF;



        ELSE







          SELECT 48 err, 'No existe token o token expirado' mensaje; 



      END IF;



    END IF;   







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `reg_registro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `reg_registro`(IN xmlParam varchar(10000))
BEGIN







    DECLARE _idHospedaje INT;



    DECLARE _idPais INT;



    DECLARE _hospedaje VARCHAR(150);



    DECLARE _ciudad VARCHAR(50);



    DECLARE _direccion VARCHAR(500);







    DECLARE _correo VARCHAR(500);



    DECLARE _nombre VARCHAR(200);



    DECLARE _pass VARCHAR(600);    







    DECLARE _token VARCHAR(500);    







    DECLARE _idUsuario INT;







	  SET	_idPais		      = (SELECT IF(ExtractValue(xmlParam, '//params/@idPais')='',0, ExtractValue(xmlParam, '//params/@idPais')));



    SET _hospedaje	    = ExtractValue(xmlParam, '//params/@hospedaje');



    SET _ciudad	        = ExtractValue(xmlParam, '//params/@ciudad');



    SET _direccion	    = ExtractValue(xmlParam, '//params/@direccion');







    SET _correo	        = ExtractValue(xmlParam, '//params/@correo');



    SET _nombre	        = ExtractValue(xmlParam, '//params/@nombre');



    SET _pass	          = ExtractValue(xmlParam, '//params/@pass');  







    SET _token	= ExtractValue(xmlParam, '//params/@token');







    SELECT us.id INTO _idUsuario 



    FROM usuario us



      WHERE us.correo = _correo;







    IF _idUsuario <> 0 THEN







      SELECT 40 err, 'Usuario ya registrado' mensaje;



    ELSE







      START TRANSACTION;  







      INSERT INTO hospedaje(idPais, nombre, ciudad, direccion, feCreacion, feModificacion, usCreacion, usModificacion, correo) 



              VALUES(_idPais, _hospedaje, _ciudad, _direccion, NOW(), NOW(), -1, -1, _correo);      







      SELECT @@IDENTITY 



        INTO _idhospedaje;  







      INSERT INTO usuario(usuario, correo, idHospedaje, nombre, password, estado, tokenRegistro, feCreacion, feModificacion, usCreacion, usModificacion)



              VALUES(_correo, _correo, _idHospedaje, _nombre, _pass, 'C', _token, NOW(), NOW(), -1, -1);







      SELECT @@IDENTITY 



        INTO _idusuario;







      INSERT INTO usuariorol(idRol, idUsuario)values(2, _idusuario);



      



      SELECT 'Registro exitoso' mensaje, _idHospedaje idHospedaje;



        COMMIT;



    END IF;    







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `res_cambiaEstado` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `res_cambiaEstado`(IN jsonParams JSON)
BEGIN

  

  DECLARE _estado CHAR(2);

  DECLARE _idReserva INT;

  DECLARE _detalleEstado VARCHAR(400);

  DECLARE _feHasta DATETIME;



  DECLARE _idUsuario INT;



  DECLARE _esMismoDia INT;



  DECLARE _totalPagado DOUBLE;



  DECLARE _total DOUBLE;

  

  

  SET _estado		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.estado'));

  SET _idReserva		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idReserva'));

  SET _detalleEstado	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.detalleEstado'));

  SET _feHasta	      = CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feHasta')) AS DATE);



  SET _idUsuario		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));



--   PARA VERIFCAR SI ESTA SALIENDO EL MISMO DIA QUE SE ESPERA O ESTA SALIENDO ANTES



  SET _esMismoDia		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.esMismoDia'));

  

  UPDATE reserva SET estado = _estado, feModificacion = NOW(), usModificacion = _idUsuario

    WHERE id = _idReserva;

  

  --   CHECK OUT

  IF _estado = 'Co' THEN

  -- VERIFICAMOS SI TIENE SALDO PENDIENTE

    SELECT IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = _idReserva AND estado = 'A'), 0) 

      INTO _totalPagado;

    

    SELECT total INTO _total

      FROM reserva WHERE id = _idReserva;

    

    IF _total > _totalPagado THEN

      SELECT 999 err, 'No se puede realizar el check out debido a que se tiene un saldo pendiente.' mensaje;

      ELSE

      

      IF _esMimoDia = 0 THEN

        

        UPDATE porhabitacion

          SET feHasta = _feHasta

          WHERE idReserva = _idReserva;

        END IF;        



        INSERT INTO checkout (idReserva, detalles, usuario, fecha)

          VALUES(_idReserva, _detalleEstado, _idUsuario, NOW());

        

        SELECT 'Check out exitoso' mensaje;

      END IF;



--     CHECK OUT

    ELSEIF _estado = 'Ci' THEN

    

      INSERT INTO checkin (idReserva, detalles, usuario, fecha)

        VALUES(_idReserva, _detalleEstado, _idUsuario, NOW());

      SELECT 'Check in exitoso' mensaje;    



--     CANCELAR



    ELSEIF _estado = 'Ca' THEN

      SELECT 'Reserva cancelada con éxito' mensaje;

--     CONFIRMAR

    ELSEIF _estado = 'Re' THEN

      SELECT 'Reserva confirmada con éxito' mensaje;

  END IF;



--       IF _estado <> 'Pr' THEN        



-- 



--         SELECT 'Mantenimiento exitoso' mensaje;



--       ELSE



--         



--         SELECT



--         'Mantenimiento exitoso' mensaje,



--         _pasajero pasajero,



--         _idReserva idReserva,



--         _adultos adultos,



--         _ninos ninos,



--         _total total,



--         (SELECT getHabitaciones(_idreserva)) habitaciones,



--         (SELECT getFechas(_idreserva)) fechas,



--         _correo destinatario,



--         (SELECT token FROM reserva WHERE id = _idreserva) tokenReserva,



--         dh.* 



--         FROM da_hospedaje dh



--           WHERE dh.idHospedaje = _idHospedaje;



--         END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `res_camposIndividuales` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `res_camposIndividuales`(IN jsonParams JSON)
BEGIN

  

  DECLARE _idReserva INT;  

  DECLARE _idAerolinea INT;

  DECLARE _idFuente INT;

  DECLARE _notas VARCHAR(600);



  DECLARE _idUsuario INT;



  SET _idReserva = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idReserva'));

  SET _idAerolinea = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idAerolinea'));

  SET _idFuente = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idFuente'));

  SET _notas = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.notas'));



  SET _idUsuario = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));



  IF _idAerolinea IS NOT NULL THEN

    

    UPDATE reserva SET idAerolinea = _idAerolinea, usModificacion = _idUsuario WHERE id = _idReserva;

    SELECT 'Aerolínea modificada correctamente' mensaje;

  ELSEIF _idFuente IS NOT NULL THEN



    UPDATE reserva SET idFuente = _idFuente, usModificacion = _idUsuario WHERE id = _idReserva;

    SELECT 'Fuente modificada correctamente' mensaje;

  ELSEIF _notas IS NOT NULL THEN



    UPDATE reserva SET notas = _notas, usModificacion = _idUsuario WHERE id = _idReserva;

    SELECT 'Notas modificadas correctamente' mensaje;

  END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `res_confirma` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `res_confirma`(IN _idReserva INT)
BEGIN  







  DECLARE _idHospedaje INT;  







  IF (SELECT estado FROM reserva WHERE id = _idReserva) = 'Pr' THEN







    SELECT idHospedaje INTO _idHospedaje



      FROM reserva WHERE id = _idReserva;    







    START TRANSACTION;







    UPDATE reserva SET estado = 'Re' WHERE id = _idReserva;



    COMMIT;    







    SELECT



      'Mantenimiento exitoso' mensaje,



      pa.nombre pasajero,



      re.id idReserva,



      re.noPersonas noPersonas,



      re.total total,



      (SELECT getHabitaciones(_idReserva)) habitaciones,



      (SELECT getFechas(_idReserva)) fechas,



      pa.correo destinatario,



      dh.* 



      FROM da_hospedaje dh



      INNER JOIN reserva re ON dh.idHospedaje = re.idHospedaje



      INNER JOIN pasajero pa ON pa.id = re.idPasajero



      WHERE re.id = _idReserva;



    ELSE







    SELECT 76 err, 'La proforma se encuentra caducada' mensaje;



  END IF;







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `res_exte` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `res_exte`(IN _idReserva INT, IN _token VARCHAR(500))
BEGIN  







    DECLARE _idPasajero INT;



    DECLARE _idHospedaje INT;







  IF (SELECT count(*) FROM reserva WHERE id = _idReserva AND token = _token) = 0 THEN







    SELECT 78 err, 'No existe reserva con los datos proporcionados' mensaje;



    ELSE	  







      SELECT idPasajero INTO _idPasajero



        FROM reserva



        WHERE id = _idReserva;  		  







      SELECT idHospedaje INTO _idHospedaje



        FROM reserva



        WHERE id = _idreserva;  







      SELECT re.id idReserva, re.adultos, re.ninos, re.idAerolinea idAerolinea, ae.nombre aerolinea, re.notas notas, 



              re.estado estado,



              IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = re.id AND estado = 'A'), 0) totalPagado,



  --               if(re.checkin, true, false) checkin, if(re.checkout, true, false) checkout,



              DATE_FORMAT(re.feCreacion,'%d/%m/%Y') feCreacion, DATE_FORMAT(re.feModificacion,'%d/%m/%Y') feModificacion,



              IFNULL(usc.usuario, '') usCreacion, IFNULL(usm.usuario, '') usModificacion



      FROM reserva re



      LEFT JOIN aerolinea ae on re.idAerolinea = ae.id



      LEFT JOIN usuario usc on usc.id = re.usCreacion



      LEFT JOIN usuario usm on usm.id = re.usModificacion



        WHERE re.id = _idReserva;  







      SELECT pa.id idPasajero, pa.nombre pasajero, pa.idPais, ps.nombre pais, pa.correo correo, pa.noContacto



        FROM pasajero pa



        INNER JOIN pais ps ON ps.id = pa.idPais



        WHERE pa.id = _idPasajero;  







      SELECT ar.idAdicional, ad.descripcion adicional, ar.tarifa tarifa, ar.cantidad cantidad



      FROM adicionalreserva ar



      INNER JOIN adicional ad ON ad.id = ar.idAdicional



        WHERE ar.idReserva = _idReserva;  







--  DEBO AUMENTAR UN DIA A LA FECHA HASTA DEBIDO A QUE LA FECHA QUE SE GUARDA SON FECHAS POR NOCHE



--       DATE_ADD(ph.feHasta, INTERVAL 1 DAY)



      SELECT ph.idHabitacion, ha.nombre habitacion, ph.tarifa tarifa,



              DATE_FORMAT(ph.feDesde, '%d/%m/%Y') feDesde, DATE_FORMAT(DATE_ADD(ph.feHasta, INTERVAL 1 DAY), '%d/%m/%Y') feHasta



      FROM porhabitacion ph



      INNER JOIN habitacion ha on ha.id = ph.idHabitacion



        WHERE ph.idReserva = _idReserva



      ORDER BY feDesde ASC;  







      SELECT * FROM da_hospedaje WHERE idHospedaje = _idHospedaje;        







      SELECT hs.idHospedaje, hs.idSocial, hs.valor valor



        FROM hospedajesocial hs



        INNER JOIN social so on so.id = hs.idSocial



      WHERE hs.idhospedaje = _idHospedaje



      AND so.estado = 'A';



    END IF;







END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `res_reserva` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `res_reserva`(IN jsonParams JSON)
BEGIN 



  DECLARE _accion CHAR(2); 

  DECLARE _idReserva INT;  

  DECLARE _idPasajero INT;

  DECLARE _idHospedaje INT;

  DECLARE _idFuente INT;

  DECLARE _idAerolinea INT;

  DECLARE _adultos INT;

  DECLARE _ninos INT;

  DECLARE _notas VARCHAR(600);

  DECLARE _subTotal DECIMAL(8,2);

  DECLARE _total DECIMAL(8,2);

  DECLARE _token VARCHAR(500);

  DECLARE _estado VARCHAR(2); 



--   PARA FILTROS POR FECHA -> SE DEBE PASAR A UN SP SOLO

  DECLARE _feDesde DATETIME;

  DECLARE _feHasta DATETIME;  



  DECLARE _idHabitacion VARCHAR(300);

  DECLARE _idAdicional VARCHAR(300);  



--   PASAJERO

  DECLARE _idPais INT;

  DECLARE _identificacion VARCHAR(20);

  DECLARE _pasajero VARCHAR(100);

  DECLARE _correo VARCHAR(100);

  DECLARE _noContacto VARCHAR(15);



-- IVA

  DECLARE _ivaValor DECIMAL(6, 2);

  DECLARE _ivaPorcentaje DECIMAL(5, 2);

  DECLARE _ivaIva DECIMAL(6, 2);

  DECLARE _ivaTotal DECIMAL(6, 2);

  

  DECLARE _idUsuario INT;

  DECLARE _detalleEstado VARCHAR(300);  



--   EXTRACCION DE DATOS

  SET _accion		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET _idReserva		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idReserva'));

  SET	_idPasajero		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idPasajero'));

  SET _idHospedaje		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET	_idFuente		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idFuente'));

  SET	_idAerolinea		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idAerolinea'));

  SET	_adultos		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.adultos'));

  SET	_ninos		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.ninos'));

  SET _notas		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.notas'));

  SET	_total		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.total'));

  SET	_subTotal		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.subTotal'));

  SET _estado		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.estado'));



  SET _detalleEstado  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.detalleEstado'));

  SET _token          = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.token'));



--   RANGO DE FECHAS

  SET _feDesde   		  = CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feDesde')) AS DATE);

  SET _feHasta   		  = CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feHasta')) AS DATE);



--   DATOS DE PASAJERO

  SET	_idPais		        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.pasajero.idPais'));

  SET _pasajero		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.pasajero.pasajero'));

  SET _correo		        = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.pasajero.correo'));

  SET _noContacto		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.pasajero.noContacto'));



--   IVA

  SET _ivaValor		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.iva.valor'));

  SET _ivaPorcentaje	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.iva.porcentaje'));

  SET _ivaIva		      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.iva.iva'));

  SET _ivaTotal		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.iva.total'));



  SET	_idUsuario		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));  



  SET _correo = LOWER(TRIM(_correo));	  



  IF _accion = 'C' THEN



    SELECT ph.idReserva, ph.idHabitacion, DATE_FORMAT(ph.feDesde,'%d/%m/%Y') feDesde, DATE_FORMAT(ph.feHasta,'%d/%m/%Y') feHasta,

      pa.nombre pasajero, ph.tarifa tarifa,

      re.estado estado

      FROM porhabitacion ph 

      INNER JOIN habitacion ha on ha.id = ph.idHabitacion

      INNER JOIN reserva re on re.id = ph.idReserva

      INNER JOIN pasajero pa on pa.id = re.idPasajero

      WHERE re.idHospedaje = _idHospedaje

        AND (ph.feDesde >= _feDesde AND ph.feDesde <= _feHasta

        OR ph.fehasta >= _feDesde AND ph.fehasta <= _feHasta)

        AND re.estado in ('Re', 'Pr', 'Ci', 'Co');

    END IF;	



    IF _accion = 'C1' THEN  /*Consulta especifica*/    



      SELECT idPasajero INTO _idPasajero

      FROM reserva re

        WHERE re.id = _idReserva;



      SELECT re.id idReserva, re.adultos, re.ninos, re.idAerolinea, ae.nombre aerolinea, fu.id idFuente, fu.fuente fuente, re.notas notas, 

            re.estado estado,

            re.subTotal,

            re.total,

            IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = re.id AND estado = 'A'), 0) totalPagado,

            DATE_FORMAT(re.feCreacion,'%d/%m/%Y') feCreacion, DATE_FORMAT(re.feModificacion,'%d/%m/%Y') feModificacion,

            IFNULL(usc.usuario, '') usCreacion, IFNULL(usm.usuario, '') usModificacion

      FROM reserva re

      LEFT JOIN aerolinea ae on re.idAerolinea = ae.id

      LEFT JOIN fuente fu on fu.id = re.idFuente

      LEFT JOIN usuario usc on usc.id = re.usCreacion

      LEFT JOIN usuario usm on usm.id = re.usModificacion

        WHERE re.id = _idReserva;



      SELECT pa.id idPasajero, pa.nombre pasajero, pa.nombre, pa.idPais, ps.nombre pais, pa.correo correo, pa.noContacto

      FROM pasajero pa

      INNER JOIN pais ps ON ps.id = pa.idPais

        WHERE pa.id = _idPasajero;



      SELECT ar.idAdicional idAdicional, ad.descripcion adicional, ar.tarifa tarifa, ar.cantidad cantidad

      FROM adicionalreserva ar

      INNER JOIN adicional ad ON ad.id = ar.idAdicional

        WHERE ar.idReserva = _idReserva;



      SELECT ph.idHabitacion idHabitacion, ha.nombre habitacion, ph.tarifa tarifa,

      IFNULL(ta.descripcion, '-') tarifaDetalle, IFNULL(ta.id, 0) idTarifa,

      DATE_FORMAT(ph.feDesde, '%d/%m/%Y') feDesde, DATE_FORMAT(ph.feHasta, '%d/%m/%Y') feHasta

      FROM porhabitacion ph

      INNER JOIN habitacion ha on ha.id = ph.idHabitacion

      LEFT JOIN tarifa ta on ta.id = ph.idtarifa

        WHERE ph.idReserva = _idReserva

      ORDER BY feDesde ASC;



      SELECT * FROM ivaReserva WHERE idReserva = _idReserva;

    END IF;



    IF _accion = 'C2' THEN



      SELECT re.id idReserva, re.notas, re.adultos, re.ninos, pa.nombre pasajero, pa.correo correo, pa.noContacto, ifNull(ae.nombre, '-') aerolinea,

      (SELECT feDesde FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) feDesde,

      (SELECT feHasta FROM porhabitacion WHERE idReserva = re.id ORDER BY feHasta DESC LIMIT 1) feHasta,

      (SELECT getHabitaciones(re.id)) habitaciones,

      (SELECT GROUP_CONCAT(descripcion SEPARATOR ', ') FROM adicional c INNER JOIN adicionalreserva d on c.id = d.idAdicional WHERE d.idReserva = re.id) adicionales,

      re.estado estado,

      total total,

      IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = re.id AND estado = 'A'), 0) totalPagado,

      re.feModificacion,

      us.usuario usuario

      FROM reserva re

      INNER JOIN pasajero pa ON pa.id = re.idPasajero

      INNER JOIN usuario us ON us.id = re.usModificacion

      LEFT JOIN aerolinea ae ON ae.id = re.idAerolinea

        WHERE re.idHospedaje = _idHospedaje

      ORDER BY re.feModificacion DESC

      LIMIT 5;

    END IF;



    IF _accion = 'C3' THEN /*LLegadas x fecha*/



      SELECT re.id idReserva, re.notas, re.adultos, re.ninos, pa.nombre pasajero, pa.correo correo, pa.noContacto, ifNull(ae.nombre, '-') aerolinea,

      (SELECT feDesde FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) feDesde,

      (SELECT DATE_ADD(feHasta, INTERVAL 1 DAY) FROM porhabitacion WHERE idReserva = re.id ORDER BY feHasta DESC LIMIT 1) feHasta,

      (SELECT getHabitaciones(re.id))  habitaciones,

      (SELECT GROUP_CONCAT(descripcion SEPARATOR ', ') FROM adicional c INNER JOIN adicionalreserva d ON c.id = d.idAdicional where d.idReserva = re.id) adicionales,

      re.estado estado,

      total total,

      IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = re.id AND estado = 'A'), 0) totalPagado,

      re.feModificacion femodificacion,

      us.usuario usuario

      FROM reserva re

      INNER JOIN pasajero pa ON pa.id = re.idPasajero

      INNER JOIN usuario us on us.id = re.usModificacion

      LEFT JOIN aerolinea ae ON ae.id = re.idAerolinea

        WHERE (

          (SELECT feDesde FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) = _feDesde

        )

        AND pa.idHospedaje = _idHospedaje

        AND re.estado not in ('Pr', 'Ca');

    END IF;



    IF _accion = 'C4' THEN /*Salidas x fecha*/



      SELECT re.id idReserva, re.notas, re.adultos, re.ninos, pa.nombre pasajero, pa.correo correo, pa.noContacto, IFNULL(ae.nombre, '-') aerolinea,

      (SELECT feDesde FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) feDesde,

      (SELECT DATE_ADD(feHasta, INTERVAL 1 DAY) FROM porhabitacion WHERE idReserva = re.id ORDER BY feHasta DESC LIMIT 1) feHasta,

      (SELECT getHabitaciones(re.id))  habitaciones,

      (SELECT GROUP_CONCAT(descripcion SEPARATOR ', ') FROM adicional c INNER JOIN adicionalreserva d on c.id = d.idAdicional WHERE d.idReserva = re.id) adicionales,

      re.estado estado,

      total total,

      IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = re.id AND estado = 'A'), 0) totalPagado,

      re.feModificacion femodificacion,

      us.usuario usuario

      FROM reserva re

      INNER JOIN pasajero pa ON pa.id = re.idPasajero

      INNER JOIN usuario us ON us.id = re.usModificacion

      LEFT JOIN aerolinea ae ON ae.id = re.idAerolinea

        WHERE (SELECT feHasta FROM porhabitacion WHERE idReserva = re.id ORDER BY feHasta DESC LIMIT 1) = _feHasta

        AND pa.idHospedaje = _idHospedaje

        AND re.estado not in ('Pr', 'Ca');

    END IF;



    IF _accion = 'C5' THEN /*Estancias x fecha*/



    SELECT re.id idReserva, re.notas, re.adultos, re.ninos, pa.nombre pasajero, pa.correo correo, pa.noContacto, ifNull(ae.nombre, '-') aerolinea,

    (SELECT feDesde FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) feDesde,

    (SELECT DATE_ADD(feHasta, INTERVAL 1 DAY) FROM porhabitacion WHERE idReserva = re.id ORDER BY feHasta DESC LIMIT 1) feHasta,

    (SELECT getHabitaciones(re.id))  habitaciones,

    (SELECT GROUP_CONCAT(descripcion SEPARATOR ', ') FROM adicional c INNER JOIN adicionalreserva d on c.id = d.idAdicional WHERE d.idReserva = re.id) adicionales,

    re.estado estado,

    total total,

    IFNULL((SELECT SUM(monto) FROM pagos WHERE idReserva = re.id AND estado = 'A'), 0) totalPagado,

    re.feModificacion,

    us.usuario usuario

    FROM reserva re

    INNER JOIN pasajero pa ON pa.id = re.idPasajero

    INNER JOIN usuario us ON us.id = re.usModificacion

    LEFT JOIN aerolinea ae ON ae.id = re.idAerolinea

      WHERE (

         (SELECT feDesde FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde DESC LIMIT 1) < _feDesde

         AND (SELECT feHasta FROM porhabitacion WHERE idReserva = re.id ORDER BY feHasta DESC LIMIT 1) >= _feHasta

        )

      AND pa.idHospedaje = _idHospedaje

      AND re.estado in ('Ci', 'Co');

  END IF;  



  IF _accion = 'I' THEN    



    IF _correo <> '' THEN      



      SELECT id INTO _idPasajero

        FROM pasajero 

        WHERE correo = _correo 

        AND idHospedaje = _idHospedaje

        AND estado = 'A';

    END IF;    



    IF _idpasajero IS NULL THEN     



      INSERT INTO pasajero (idHospedaje, idPais, nombre, correo, noContacto, feCreacion, feModificacion, usCreacion, usModificacion)

        VALUES(_idHospedaje, _idPais, _pasajero, _correo, _noContacto, NOW(), NOW(), _idUsuario, _idUsuario);      



      SELECT @@IDENTITY INTO _idPasajero;

    END IF;    



    INSERT INTO reserva(idHospedaje, idPasajero, adultos, ninos, notas, subTotal, total, idAerolinea, idFuente, token, estado, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_idHospedaje, _idPasajero, _adultos, _ninos, _notas, _subTotal, _total, _idAerolinea, _idFuente, _token, _estado, NOW(), NOW(), _idUsuario, _idUsuario);



    SELECT @@IDENTITY INTO _idReserva;



--     INSERT IVA

    INSERT INTO ivaReserva (idReserva, valor, porcentaje, iva, total)

      VALUES(_idReserva, _ivaValor, _ivaPorcentaje, _ivaIva, _ivaTotal);



--     INSERT MUCHAS HABITACIONES

    INSERT INTO porhabitacion (idReserva, idHabitacion, idtarifa, tarifa, feDesde, feHasta)

    SELECT _idReserva, ha.idHabitacion, ha.idTarifa, ha.tarifa, ha.feDesde, ha.fehasta

     FROM

      JSON_TABLE(JSON_EXTRACT(jsonParams,'$.habitaciones'), "$[*]"

        COLUMNS(

          idHabitacion INT PATH "$.idHabitacion",

          idTarifa INT PATH "$.idTarifa",

          tarifa DECIMAL(8, 2) PATH "$.tarifa",          

          feDesde DATETIME PATH "$.feDesde",

          feHasta DATETIME PATH "$.feHasta"

        )

    ) ha;



--     INSERT MUCHOS ADICIONALES

    INSERT INTO adicionalreserva (idReserva, idAdicional, tarifa, cantidad) 

    SELECT _idReserva, ad.idAdicional, ad.tarifa, ad.cantidad

     FROM

      JSON_TABLE(JSON_EXTRACT(jsonParams,'$.adicionales'), "$[*]"

        COLUMNS(

          idAdicional INT PATH "$.idAdicional",

          tarifa DECIMAL(8, 2) PATH "$.tarifa",  

          cantidad DATETIME PATH "$.cantidad"

        )

    ) ad;



      SELECT

      'Mantenimiento exitoso' mensaje,

      _pasajero pasajero,

      _idReserva idReserva,

      _adultos adultos,

      _ninos ninos,

      _total total,

      (SELECT getHabitaciones(_idReserva)) habitaciones,

      (SELECT getFechas(_idReserva)) fechas,

      _correo destinatario,

      _token token,

      dh.* 

      FROM da_hospedaje dh

        WHERE dh.idHospedaje = _idHospedaje;

    END IF;



    IF _accion = 'U' THEN



      UPDATE reserva 

        SET adultos = _adultos, ninos = _ninos, notas = _notas, subTotal = _subTotal, total = _total, idAerolinea = _idAerolinea, idFuente = _idFuente

        WHERE id = _idReserva;



-- PARA MANEJAR LOS LEGACY

      IF (SELECT COUNT(*) FROM ivaReserva WHERE idReserva = _idReserva) > 0 THEN

-- SI YA TIENE REGISTRO DE IVA ACTUALIZA

        UPDATE ivaReserva SET valor = _ivaValor, porcentaje = _ivaPorcentaje, iva = _ivaIva, total = _ivaTotal

          WHERE idReserva = _idReserva;

      ELSE        

--         CASO CONTRARIO INSERTA PARA LOS LEGACY

        INSERT INTO ivaReserva (idReserva, valor, porcentaje, iva, total)

          VALUES(_idReserva, _ivaValor, _ivaPorcentaje, _ivaIva, _ivaTotal);

      END IF;



      DELETE FROM porhabitacion

        WHERE idReserva = _idReserva;



--     INSERT MUCHAS HABITACIONES

    INSERT INTO porhabitacion (idReserva, idHabitacion, idtarifa, tarifa, feDesde, feHasta)

    SELECT _idReserva, ha.idHabitacion, ha.idTarifa, ha.tarifa, ha.feDesde, ha.fehasta

     FROM

      JSON_TABLE(JSON_EXTRACT(jsonParams,'$.habitaciones'), "$[*]"

        COLUMNS(

          idHabitacion INT PATH "$.idHabitacion",

          idTarifa INT PATH "$.idTarifa",

          tarifa DECIMAL(8, 2) PATH "$.tarifa",          

          feDesde DATETIME PATH "$.feDesde",

          feHasta DATETIME PATH "$.feHasta"

        )

    ) ha;



      DELETE FROM adicionalreserva

        WHERE idReserva = _idReserva;



--     INSERT MUCHOS ADICIONALES

    INSERT INTO adicionalreserva (idReserva, idAdicional, tarifa, cantidad) 

    SELECT _idReserva, ad.idAdicional, ad.tarifa, ad.cantidad

     FROM

      JSON_TABLE(JSON_EXTRACT(jsonParams,'$.adicionales'), "$[*]"

        COLUMNS(

          idAdicional INT PATH "$.idAdicional",

          tarifa DECIMAL(8, 2) PATH "$.tarifa",  

          cantidad DATETIME PATH "$.cantidad"

        )

    ) ad;



      SELECT

      'Mantenimiento exitoso' mensaje,

      _pasajero pasajero,

      _idReserva idReserva,

      _adultos adultos,

      _ninos ninos,

      _total total,

      (SELECT getHabitaciones(_idReserva)) habitaciones,

      (SELECT getFechas(_idReserva)) fechas,

      _correo destinatario,

      (SELECT token FROM reserva WHERE id = _idReserva) token,

      dh.*

      FROM da_hospedaje dh

        WHERE dh.idHospedaje = _idHospedaje;

    END IF;



    IF _accion = 'D' THEN     



      UPDATE reserva

        SET estado = 'Ca'

        WHERE id = _idReserva;



      INSERT INTO cancela (idReserva, motivo, usuario, fecha)

        VALUES(_idReserva, _detalleEstado, _idUsuario, NOW());



      SELECT

      'Mantenimiento exitoso' mensaje,

      _pasajero pasajero,

      _idReserva idReserva,

      _adultos adultos,

      _ninos ninos,

      _total total,

      (SELECT getHabitaciones(_idReserva)) habitaciones,

      (SELECT getFechas(_idReserva)) fechas,

      _correo destinatario,

      _detalleEstado motivo,

      (SELECT token FROM reserva WHERE id = _idReserva) token,

      dh.* 

      FROM da_hospedaje dh

        WHERE dh.idHospedaje = _idHospedaje;

    END IF;



    IF _accion = 'Es' THEN



      UPDATE reserva 

        SET estado = _estado,

            feModificacion = NOW(),

            usModificacion = _idUsuario

        WHERE id = _idReserva;



      IF _estado = 'Co' THEN



        UPDATE porhabitacion

          SET feHasta = _feHasta

          WHERE idReserva = _idReserva;        



        INSERT INTO checkout (idReserva, detalles, usuario, fecha)

          VALUES(_idReserva, _detalleEstado, _idUsuario, NOW());



        ELSEIF _estado = 'Ci' THEN        



          INSERT INTO checkin (idReserva, detalles, usuario, fecha)

            VALUES(_idReserva, _detalleEstado, _idUsuario, NOW());

        END IF;



      IF _estado <> 'Pr' THEN        



        SELECT 'Mantenimiento exitoso' mensaje;

      ELSE                



        SELECT

        'Mantenimiento exitoso' mensaje,

        _pasajero pasajero,

        _idReserva idReserva,

        _adultos adultos,

        _ninos ninos,

        _total total,

        (SELECT getHabitaciones(_idReserva)) habitaciones,

        (SELECT getFechas(_idReserva)) fechas,

        _correo destinatario,

        (SELECT token FROM reserva WHERE id = _idReserva) tokenReserva,

        dh.* 

        FROM da_hospedaje dh

          WHERE dh.idHospedaje = _idHospedaje;

        END IF;



      SELECT 'Mantenimiento exitoso' mensaje;

    END IF;    

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `seg_login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `seg_login`(IN _usuario VARCHAR(100), IN _password VARCHAR(600))
BEGIN



  DECLARE _idUsuario INT DEFAULT 0;



  SELECT us.id INTO _idUsuario 

  FROM usuario us

  INNER JOIN hospedaje ho ON ho.id = us.idHospedaje

    WHERE (us.usuario = _usuario OR us.correo = _usuario) 

    AND us.password = _password 

    AND us.estado = 'A'

    AND ho.estado = 'A';



  IF _idUsuario <> 0 THEN



      SELECT us.id idUsuario, us.usuario usuario, us.nombre nombre, us.correo correo, us.idHospedaje idHospedaje, ho.nombre hospedaje,

        ro.id idRol, ro.us rol, ro.nombre nombreRol

      FROM usuario us

      INNER JOIN hospedaje ho ON us.idHospedaje = ho.id

      INNER JOIN usuariorol ur ON ur.idUsuario = us.id

      INNER JOIN rol ro ON ro.id = ur.idRol

        WHERE (usuario = _usuario OR us.correo = _usuario) AND password = _password

        AND us.estado = 'A';

    ELSE



      SELECT 10 err, 'Usuario o contraseña incorrecta' mensaje;

    END IF;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `st_statistic` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `st_statistic`(IN jsonParams JSON)
BEGIN  



  DECLARE _accion CHAR(2);

  DECLARE _feDesde DATETIME;

  DECLARE _feHasta DATETIME;

  DECLARE _idUsuario INT;

  DECLARE _idHospedaje INT;  



  SET _accion		  	  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET _feDesde   		  = CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feDesde')) AS DATE);

  SET _feHasta   		  = CAST(JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.feHasta')) AS DATE);

  SET	_idHospedaje		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));  



  IF _accion = 'C1' THEN /*INGRESOS POR MES*/    



    SELECT SUM(MONTO) monto, MONTH(pa.feCreacion) mes, YEAR(pa.feCreacion) anio FROM pagos pa

      INNER JOIN reserva re ON re.id = pa.idReserva

      WHERE CAST(pa.feCreacion AS DATE) >= _feDesde AND CAST(pa.feCreacion AS DATE) <= _feHasta

      AND re.idHospedaje = _idHospedaje

      AND pa.estado = 'A'

      GROUP BY YEAR(pa.feCreacion), MONTH(pa.feCreacion)

      ORDER BY anio, mes;

    ELSEIF _accion = 'C2' THEN /*OCUPACION POR MES*/

-- SUM(DATEDIFF(feLimite(CAST(ph.feHasta AS DATE), _feHasta), CAST(ph.feDesde AS DATE)) + 1) ocupacion

    SELECT ph.*

      FROM porhabitacion ph

      INNER JOIN habitacion ha ON ha.id = ph.idHabitacion

      INNER JOIN reserva re ON re.id = ph.idReserva

      WHERE (ph.feDesde >= _feDesde AND ph.feDesde <= _feHasta

            OR ph.fehasta >= _feDesde AND ph.fehasta <= _feHasta)

      AND ha.estado = 'A'

      AND re.estado in ('Re', 'Ci', 'Co')

      AND re.idHospedaje = _idHospedaje

      ORDER BY ph.feDesde ASC;

    ELSEIF _accion = 'C3' THEN



    SELECT 0 idFuente, 'No definido' fuente

      UNION

    SELECT id idFuente, fuente FROM fuente WHERE estado = 'A';

    

    SELECT COUNT(*) valor, IFNULL(fu.id, 0) idFuente,

      (SELECT MONTH(feDesde) FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) mes,

      (SELECT YEAR(feDesde) FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) anio 

        FROM reserva re

      LEFT JOIN fuente fu ON re.idFuente = fu.id

      RIGHT OUTER JOIN porhabitacion ph ON ph.idReserva = re.id

      WHERE re.estado in ('Re', 'Ci', 'Co')

      AND re.idHospedaje = _idHospedaje

      GROUP BY idFuente, mes, anio;



    SELECT COUNT(*) valor,

      (SELECT MONTH(feDesde) FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) mes,

      (SELECT YEAR(feDesde) FROM porhabitacion WHERE idReserva = re.id ORDER BY feDesde ASC LIMIT 1) anio 

        FROM reserva re

      LEFT JOIN fuente fu ON re.idFuente = fu.id

      RIGHT OUTER JOIN porhabitacion ph ON ph.idReserva = re.id

      WHERE re.estado in ('Re', 'Ci', 'Co')

      AND re.idHospedaje = _idHospedaje

      GROUP BY mes, anio;

  END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ta_tarifa` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `ta_tarifa`(IN jsonParams JSON)
BEGIN

  

  DECLARE _accion CHAR(2);

  DECLARE _idTipo INT;

  DECLARE _idTarifa INT;

  DECLARE _idHospedaje INT;

  DECLARE _tarifa VARCHAR(100);

  DECLARE _valor DECIMAL(8,2);

  

  DECLARE _idUsuario int;

  

  SET _accion		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.accion'));

  SET	_idTipo		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idTipo'));

  SET	_idTarifa		  = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idTarifa'));

  SET	_idHospedaje	= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idHospedaje'));

  SET _tarifa	      = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.tarifa'));

  SET	_valor		    = JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.valor'));

  

  SET	_idUsuario		= JSON_UNQUOTE(JSON_EXTRACT(jsonParams,'$.idUsuario'));

  

  IF _accion = 'C' THEN

    

    SELECT t.id idTarifa, t.idtipo idTipo, t.descripcion tarifa, tt.descripcion tipoTarifa, valor

      FROM tarifa t

      INNER JOIN tipotarifa tt ON t.idtipo = tt.id

      WHERE t.estado = 'A' AND idhospedaje = _idHospedaje;

  END IF;

  

  IF _accion = 'C1' THEN



    SELECT id idTipo, descripcion tipoTarifa FROM tipotarifa WHERE estado = 'A';    



    SELECT t.id idTarifa, t.idtipo idTipo, t.descripcion tarifa, tt.descripcion tipoTarifa, valor

      FROM tarifa t

      INNER JOIN tipotarifa tt ON t.idtipo = tt.id

      WHERE t.estado = 'A' AND idHospedaje = _idHospedaje;

  END IF;

  

  IF _accion = 'I' THEN

    

    INSERT INTO tarifa (idtipo, idHospedaje, descripcion, valor, feCreacion, feModificacion, usCreacion, usModificacion)

      VALUES(_idTipo, _idHospedaje, _tarifa, _valor, NOW(), NOW(), _idUsuario, _idUsuario);



    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'U' THEN

    

    UPDATE tarifa SET idtipo = _idTipo, descripcion = _tarifa, valor = _valor, feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idTarifa;

    

    SELECT 'Registro guardado' mensaje;

  END IF;

  

  IF _accion = 'D' THEN

    

    UPDATE tarifa SET estado = 'I', feModificacion = NOW(), usModificacion = _idUsuario

      WHERE id = _idTarifa;



    SELECT 'Registro eliminado' mensaje;

  END IF;    

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ta_tipos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `ta_tipos`()
BEGIN

  

  SELECT id idTipo, descripcion tipoTarifa

    FROM tipotarifa

    WHERE estado = 'A';

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `da_hospedaje`
--

/*!50001 DROP VIEW IF EXISTS `da_hospedaje`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `da_hospedaje` AS select `ho`.`id` AS `idHospedaje`,`ho`.`nombre` AS `hospedaje`,`ho`.`correo` AS `correo`,`ho`.`idPais` AS `idPais`,`ho`.`ciudad` AS `ciudad`,`ho`.`direccion` AS `direccion`,`us`.`id` AS `idAdmin`,`us`.`nombre` AS `administrador`,ifnull((select `hospedajesocial`.`valor` from `hospedajesocial` where ((`hospedajesocial`.`idHospedaje` = `ho`.`id`) and (`hospedajesocial`.`idSocial` = 1))),'') AS `fb`,ifnull((select `hospedajesocial`.`valor` from `hospedajesocial` where ((`hospedajesocial`.`idHospedaje` = `ho`.`id`) and (`hospedajesocial`.`idSocial` = 2))),'') AS `ig`,ifnull((select `hospedajesocial`.`valor` from `hospedajesocial` where ((`hospedajesocial`.`idHospedaje` = `ho`.`id`) and (`hospedajesocial`.`idSocial` = 3))),'') AS `tw`,ifnull((select `hospedajesocial`.`valor` from `hospedajesocial` where ((`hospedajesocial`.`idHospedaje` = `ho`.`id`) and (`hospedajesocial`.`idSocial` = 4))),'') AS `gp`,ifnull((select `hospedajesocial`.`valor` from `hospedajesocial` where ((`hospedajesocial`.`idHospedaje` = `ho`.`id`) and (`hospedajesocial`.`idSocial` = 5))),'') AS `ws` from (((`hospedaje` `ho` join `usuario` `us` on((`ho`.`id` = `us`.`idHospedaje`))) join `usuariorol` `ur` on((`us`.`id` = `ur`.`idUsuario`))) join `rol` `ro` on((`ro`.`id` = `ur`.`idRol`))) where (`ro`.`us` = 'ad') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vpago`
--

/*!50001 DROP VIEW IF EXISTS `vpago`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vpago` AS select `pg`.`id` AS `idPago`,`pg`.`idFormaPago` AS `idForma`,`fp`.`formaPago` AS `formaPago`,`pg`.`idReserva` AS `idReserva`,`re`.`idHospedaje` AS `idHospedaje`,`pg`.`monto` AS `monto`,ifnull(`us`.`nombre`,'') AS `usuario`,`pg`.`feCreacion` AS `feCreacion`,date_format(`pg`.`feCreacion`,'%d/%m/%Y') AS `feCreacionFormat`,`pg`.`estado` AS `estado` from (((`pagos` `pg` join `formapago` `fp` on((`fp`.`id` = `pg`.`idFormaPago`))) left join `usuario` `us` on((`us`.`id` = `pg`.`usCreacion`))) join `reserva` `re` on((`re`.`id` = `pg`.`idReserva`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vpasajero`
--

/*!50001 DROP VIEW IF EXISTS `vpasajero`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vpasajero` AS select `pa`.`id` AS `idPasajero`,`ho`.`id` AS `idHospedaje`,`ho`.`nombre` AS `hospedaje`,`ps`.`id` AS `idPais`,`ps`.`nombre` AS `pais`,`pa`.`nombre` AS `nombre`,`pa`.`nombre` AS `pasajero`,`pa`.`correo` AS `correo`,`pa`.`noContacto` AS `noContacto`,`pa`.`estado` AS `estado` from ((`pasajero` `pa` join `hospedaje` `ho` on((`pa`.`idHospedaje` = `ho`.`id`))) join `pais` `ps` on((`pa`.`idPais` = `ps`.`id`))) */;
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

-- Dump completed on 2019-04-23 21:01:04
