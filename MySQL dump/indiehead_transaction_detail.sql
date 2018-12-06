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
-- Table structure for table `transaction_detail`
--

DROP TABLE IF EXISTS `transaction_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaction_detail` (
  `idtransaction_detail` int(11) NOT NULL AUTO_INCREMENT,
  `idtransaction` int(11) NOT NULL,
  `ProductName` varchar(45) NOT NULL,
  `Price` int(11) NOT NULL,
  `Picture` varchar(45) NOT NULL,
  `Amount` int(11) NOT NULL,
  PRIMARY KEY (`idtransaction_detail`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_detail`
--

LOCK TABLES `transaction_detail` WRITE;
/*!40000 ALTER TABLE `transaction_detail` DISABLE KEYS */;
INSERT INTO `transaction_detail` VALUES (26,25,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',2),(27,30,'Album Cover 2017 T-Shirt',100000,'WolfAliceAlbumCover2017',1),(28,31,'All My Demons Greeting Me As A Friend CD',174500,'AuroraAllMyDemonsGreetingMeAsAFriendCD',1),(30,32,'Vultures',45000,'1000modsVultures',3),(31,32,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',2),(32,33,'Album T-Shirt',100000,'WolfAliceAlbumT-Shirt ',2),(34,33,'My Love Is Cool',40000,'WolfAliceMyLoveIsCool',1),(35,34,'Repeated exposure to...',45000,'1000modsRepeatedExposureTo...',1),(36,35,'Vultures',300000,'1000modsVultures',2),(42,37,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',1),(49,39,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',1),(61,44,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',1),(62,46,'The Eye T-shirt',120000,'1000modsTheEye',1),(63,48,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',1),(64,50,'Super Van Vacation ',300000,'1000modsSuperVanVacation',1),(65,52,'Super Van Vacation ',45000,'1000modsSuperVanVacation',1),(66,54,'Album Cover 2017 T-Shirt',100000,'WolfAliceAlbumCover2017',1),(67,55,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',1),(68,57,'Album Cover 2017 T-Shirt',100000,'WolfAliceAlbumCover2017',1),(69,58,'Album Cover 2017 T-Shirt',100000,'WolfAliceAlbumCover2017',1),(70,60,'Vultures',300000,'1000modsVultures',1),(71,61,'Album Cover 2017 T-Shirt',100000,'WolfAliceAlbumCover2017',1),(72,63,'Wall of Sound Ringer T-shirt',120000,'1000modsWallOfSound',1),(73,65,'Vultures',300000,'1000modsVultures',1),(74,66,'To the Moon Black T-shirt',120000,'1000modsToTheMoon',1),(75,68,'Vultures',300000,'1000modsVultures',1),(76,70,'Vultures',300000,'1000modsVultures',1);
/*!40000 ALTER TABLE `transaction_detail` ENABLE KEYS */;
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
