-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: indiehead
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
-- Table structure for table `productlist`
--

DROP TABLE IF EXISTS `productlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `productlist` (
  `idproductlist` int(11) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(45) NOT NULL,
  `Price` varchar(45) NOT NULL,
  `Category` int(11) NOT NULL,
  `Artist` int(11) NOT NULL,
  `Picture` varchar(100) NOT NULL,
  PRIMARY KEY (`idproductlist`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productlist`
--

LOCK TABLES `productlist` WRITE;
/*!40000 ALTER TABLE `productlist` DISABLE KEYS */;
INSERT INTO `productlist` VALUES (1,'Wall of Sound Ringer T-shirt','120000',1,1,'1000modsWallOfSound'),(2,'To the Moon Black T-shirt','120000',1,1,'1000modsToTheMoon'),(3,'The Eye T-shirt','120000',1,1,'1000modsTheEye'),(4,'Repeated exposure to...','45000',2,1,'1000modsRepeatedExposureTo...'),(5,'Super Van Vacation ','45000',2,1,'1000modsSuperVanVacation'),(6,'Vultures','45000',2,1,'1000modsVultures'),(7,'Repeated exposure to...','300000',3,1,'1000modsRepeatedExposureTo...'),(8,'Vultures','300000',3,1,'1000modsVultures'),(9,'Super Van Vacation ','300000',3,1,'1000modsSuperVanVacation'),(10,'Pocket Dancer T-Shirt','100000',1,2,'WolfAlicePocketDancer'),(11,'Album T-Shirt','100000',1,2,'WolfAliceAlbumT-Shirt '),(12,'Album Cover 2017 T-Shirt','100000',1,2,'WolfAliceAlbumCover2017'),(13,'My Love Is Cool','40000',2,2,'WolfAliceMyLoveIsCool'),(14,'Visions Of Life','40000',2,2,'WolfAliceVisionsOfALife'),(15,'My Love Is Cool ','300000',3,2,'WolfAliceMyLoveIsCool'),(16,'Visions Of Life','350000',3,2,'WolfAliceVisionsOfALife'),(19,'All My Demons Greeting Me As A Friend CD','174500',2,3,'AuroraAllMyDemonsGreetingMeAsAFriendCD');
/*!40000 ALTER TABLE `productlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-06 22:15:52
