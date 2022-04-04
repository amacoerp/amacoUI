-- MySQL dump 10.13  Distrib 5.7.37, for Linux (x86_64)
--
-- Host: localhost    Database: amaco
-- ------------------------------------------------------
-- Server version	5.7.37-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_categories`
--

DROP TABLE IF EXISTS `account_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `delete_status` tinyint(4) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_categories`
--

LOCK TABLES `account_categories` WRITE;
/*!40000 ALTER TABLE `account_categories` DISABLE KEYS */;
INSERT INTO `account_categories` VALUES (5,2,'Purchase',NULL,NULL,NULL,0000),(6,2,'Deliver Charge',NULL,NULL,NULL,0000),(7,2,'Miscellaneous',NULL,NULL,NULL,0000),(8,7,'Fine Paid',NULL,NULL,NULL,0000),(9,7,'Food',NULL,NULL,NULL,0000),(10,7,'Breakdown',NULL,NULL,NULL,0000),(18,17,'VAT',NULL,'2021-03-09 13:50:13','2021-03-09 13:50:13',0000),(19,17,'GOSI',NULL,'2021-03-09 13:50:22','2021-03-09 13:50:22',0000),(20,17,'ZAKAT',NULL,'2021-03-09 13:50:30','2021-03-09 13:50:30',0000),(21,1,'Ikama Renewal',NULL,'2021-03-10 07:07:18','2021-03-10 07:07:18',0000),(22,1,'Health Insurance',NULL,'2021-03-10 07:11:57','2021-03-10 07:11:57',0000),(23,NULL,'Operational Expenses',NULL,'2021-07-31 16:50:52','2021-07-31 16:50:52',0000),(24,23,'Salary',NULL,'2021-07-31 16:52:07','2021-07-31 16:52:07',0000),(25,NULL,'Governmental Expenses',NULL,'2021-07-31 16:53:06','2021-07-31 16:53:06',0000),(27,25,'VAT',NULL,'2021-07-31 17:06:55','2021-07-31 17:06:55',0000),(29,25,'Zakat',NULL,'2021-07-31 17:07:46','2021-07-31 17:07:46',0000),(30,25,'Iqama Renewal',NULL,'2021-07-31 17:08:14','2021-07-31 17:08:14',0000),(31,25,'Exit Re-Entry',NULL,'2021-07-31 17:08:31','2021-07-31 17:08:31',0000),(32,NULL,'Business Expenses',NULL,'2021-08-01 01:35:31','2021-08-01 01:35:31',0000),(33,32,'Material Purchase',NULL,'2021-08-01 01:35:59','2021-08-01 01:35:59',0000),(34,23,'Vehicle Service',NULL,'2021-08-01 01:36:24','2021-08-01 01:36:24',0000),(35,32,'Delivery Expenses',NULL,'2021-08-01 01:36:56','2021-08-01 01:36:56',0000),(38,23,'Stationary',NULL,'2021-08-01 01:38:11','2021-08-01 01:38:11',0000),(39,NULL,'Marketing Expenses',NULL,'2021-08-01 01:41:26','2021-08-01 01:41:26',0000),(40,39,'Site Visit Expenses',NULL,'2021-08-01 01:42:27','2021-08-01 01:42:27',0000),(41,39,'Direct Marketing',NULL,'2021-08-01 01:43:50','2021-08-01 01:43:50',0000),(42,39,'Indirect Marketing',NULL,'2021-08-01 01:44:04','2021-08-01 01:44:04',0000),(43,34,'Oil Change',NULL,'2021-08-21 13:09:22','2021-08-21 13:09:22',0000),(44,34,'Repair',NULL,'2021-08-21 13:09:32','2021-08-21 13:09:32',0000),(45,34,'Tire Change',NULL,'2021-08-21 13:09:44','2021-08-21 13:09:44',0000),(46,34,'MVPI',NULL,'2021-08-21 13:10:05','2021-08-21 13:10:05',0000),(47,34,'Vehicle Insurance',NULL,'2021-08-21 13:10:22','2021-08-21 13:10:22',0000),(48,NULL,'Asset',NULL,'2021-08-21 13:15:47','2021-08-21 13:15:47',0000),(49,48,'Machinaries',NULL,'2021-08-21 13:16:03','2021-08-21 13:16:03',0000),(50,48,'Furnitures',NULL,'2021-08-21 13:16:17','2021-08-21 13:16:17',0000),(51,48,'Electronics',NULL,'2021-08-22 18:11:46','2021-08-22 18:11:46',0000),(52,32,'Packaging Expense',NULL,'2021-08-22 18:13:50','2021-08-22 18:13:50',0000),(54,34,'Vehicle Wash',NULL,'2021-09-02 14:53:52','2021-09-02 14:53:52',0000),(55,25,'GOSI',NULL,'2021-09-02 14:56:53','2021-09-02 14:56:53',0000),(58,23,'Phone Recharge',NULL,'2021-09-04 11:34:34','2021-09-04 11:34:34',0000),(59,34,'Fuel',NULL,'2021-09-07 07:55:43','2021-09-07 07:55:43',0000);
/*!40000 ALTER TABLE `account_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advance_payments`
--

DROP TABLE IF EXISTS `advance_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advance_payments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `payment_account_id` bigint(20) unsigned DEFAULT NULL,
  `amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `received_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `narration` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_mode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `received_by` bigint(191) DEFAULT NULL,
  `expense_id` bigint(20) DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `ref_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advance_payments`
--

LOCK TABLES `advance_payments` WRITE;
/*!40000 ALTER TABLE `advance_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `advance_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `analyses`
--

DROP TABLE IF EXISTS `analyses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `analyses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `brand_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `analyses`
--

LOCK TABLES `analyses` WRITE;
/*!40000 ALTER TABLE `analyses` DISABLE KEYS */;
/*!40000 ALTER TABLE `analyses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `delete` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `categories_parent_id_foreign` (`parent_id`),
  CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `column_data`
--

DROP TABLE IF EXISTS `column_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `column_data` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `expense_id` bigint(20) unsigned DEFAULT NULL,
  `column_id` bigint(20) unsigned DEFAULT NULL,
  `value` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `column_data`
--

LOCK TABLES `column_data` WRITE;
/*!40000 ALTER TABLE `column_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `column_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `columns`
--

DROP TABLE IF EXISTS `columns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `columns` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `account_category_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `columns`
--

LOCK TABLES `columns` WRITE;
/*!40000 ALTER TABLE `columns` DISABLE KEYS */;
INSERT INTO `columns` VALUES (1,21,'Renewal Date','2021-07-01 04:16:52','2021-07-01 04:16:52','date'),(2,21,'About','2021-07-01 04:16:52','2021-07-01 04:16:52','text');
/*!40000 ALTER TABLE `columns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cr_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fax` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `po_box` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img3` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `arabic_name` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Amaco Arabia Contracting Company','sales@amaco.com.sa','2055003404','8899667788','+966 13 363 2387','www.amaco.com.sa','7452','Jubail 31951 Kingdom Of Saudi Arabia','310398615200003','company/amaco-logo.png','company/logo_default.png',NULL,'2021-12-08 10:37:37','2022-01-19 12:52:04','شركة أماكو العربية للمقاولات');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_banks`
--

DROP TABLE IF EXISTS `company_banks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_banks` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ac_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iban_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_banks`
--

LOCK TABLES `company_banks` WRITE;
/*!40000 ALTER TABLE `company_banks` DISABLE KEYS */;
INSERT INTO `company_banks` VALUES (2,'Saudi National Bank','6000000242200','SA3610000006000000242200',NULL,NULL,'2021-08-04 11:48:32','2021-11-08 09:37:15');
/*!40000 ALTER TABLE `company_banks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `fname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobno` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `landline` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `prefix` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `delete` int(11) DEFAULT '0',
  `mext` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lext` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,1,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:32:36','2021-08-31 02:32:36',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(2,2,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:34:33','2021-08-31 02:34:33',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(3,3,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:36:15','2021-08-31 02:36:15',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(4,4,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:37:59','2021-08-31 02:37:59',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(5,5,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:38:56','2021-08-31 02:38:56',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(6,6,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:39:26','2021-08-31 02:39:26',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(7,7,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:41:30','2021-08-31 02:41:30',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(8,8,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:42:59','2021-08-31 02:42:59',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(9,9,' ',' ',' ',NULL,NULL,NULL,' ','2021-08-31 02:43:33','2021-08-31 02:43:33',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(10,10,' ',' ',' ',NULL,NULL,NULL,' ','2021-10-05 07:12:29','2021-10-05 07:12:29','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(11,11,' ',' ',' ',NULL,NULL,NULL,' ','2021-10-05 07:15:02','2021-10-05 07:15:02','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(17,10,'Humoud B.','Al Humoud','Specialist I CM-Raw Materials',NULL,'966133591372','h.alhumoud@tasnee.com','P. O. Box 35579 Al-Jubail Industrial City 31961 Saudi Arabia','2021-10-12 10:04:03','2021-10-12 10:04:03','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(18,11,'Mohammed','Essa','Mechanical Engineer','966593625212',NULL,'messa@arcangroup.com','Al Khobar Saudi Arabia','2021-10-13 13:00:17','2021-10-13 13:00:17','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(20,13,'AHMED','HAMED','GENERAL MANAGER','966566495665',NULL,'ahamed@midadholdings.com','KHOBAR','2021-10-19 05:43:23','2021-10-19 05:43:23','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(21,14,'ABC',' ',' ',NULL,NULL,NULL,' ','2021-11-04 07:02:17','2021-11-04 07:02:17','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(22,15,'Abcd',' ',' ',NULL,NULL,NULL,' ','2021-11-04 11:39:33','2021-11-04 11:39:33','Ms',NULL,NULL,0,NULL,NULL,NULL,NULL),(23,16,'Khalifah',' ','Manager','966546296144',NULL,'aalkhalifah@alshayeb.sa','Dammam/Khobar','2021-11-08 08:16:22','2021-11-08 08:16:22','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(24,17,'Muhammad Bilal',' ','Procurement & Logistics Representative','966564718960','966(13)840 9308','bilal.sips@sinopec.com','SINOPEC Office Building - Eurovillage Compound\n\nP.O Box 32159  Al-Khobar 31952','2021-11-10 10:10:46','2021-11-10 10:10:46','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(25,18,'Muhammad Bilal',' ','Proc & Logistics Representative',NULL,NULL,NULL,'SINOPEC Office Building - Eurovillage Compound , PO Box 32159','2021-11-10 13:55:21','2021-11-10 13:55:21','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(26,19,'Muhammad Bilal',' ',' ','966564718960','966 13840 9308','bilal.sips@sinopec.com','SINOPEC Office Building - Eurovillage Compound\n\nP.O Box 32159  Al-Khobar 31952','2021-11-14 07:56:32','2021-11-14 07:56:32','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(27,20,'MOHAMMED',' ',' ',NULL,NULL,NULL,' ','2021-11-16 21:58:40','2021-11-16 21:58:40','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(28,21,'Mohammed',' ',' ',NULL,NULL,NULL,' ','2021-11-16 22:04:01','2021-11-16 22:04:01','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(29,22,'Mohammed',' ',' ',NULL,NULL,NULL,' ','2021-11-16 22:07:27','2021-11-16 22:07:27','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(30,23,'MOHAMMED',' ',' ',NULL,NULL,NULL,' ','2021-11-16 22:09:57','2021-11-16 22:09:57','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(31,24,'Ahmed Baatyour',' ','Head Of Contracting & Procurement (TSD)','966505336220','966135955023','abaatyour@niti.edu.sa','National Industrial Training Institute\n\nSaudi Arabia , Al Ahsa , Airport Road , Admin Building, AG177 Box 550, Al-Ahsa 31982,','2021-11-17 07:33:51','2021-11-17 07:33:51','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(32,25,'Ahmed Baatyour',' ','Head Of C&P (TSD)','966505336220','96613595502','abaatyour@niti.edu.sa','National Industrial Training Institute\nSaudi Arabia , Al Ahsa , Airport Road , Admin Building, AG177 Box 550, Al-Ahsa 31982,','2021-11-17 07:42:14','2021-11-17 07:42:14','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(33,26,'Omar Nawaz',' ','Proc Draftsman','966583572916',NULL,NULL,'Dammam KSA','2021-11-30 13:08:52','2021-11-30 13:08:52','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(34,27,'Jose B. Coballes, Jr.','Coballes, Jr.','Mechanical Engineer','966536613471','966114164111-1301','jcoballes@rtcc.com.sa','Al-Ma\'athar St., Al-Rashid Tower, Riyadh, Kingdom Of Saudi Arabia,','2021-12-16 07:46:40','2021-12-16 07:46:40','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(35,28,'Fawaz Alghamdi',' ','Production Engineer','966537772222',NULL,'f.ghamdi@maadaniyah.com','P.O. Box 7594 Dammam 31472, Saudi Arabia','2021-12-19 16:21:59','2021-12-19 16:21:59','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(36,29,'Eman','AL Fayez','Account Manager','96655066989','966138346737','eman@catco.com.sa','Kingdom Of Saudi Arabia\nP.O. Box 2784 Dammam 32416','2021-12-19 20:56:46','2021-12-19 20:56:46','Ms',NULL,NULL,0,NULL,NULL,NULL,NULL),(37,30,'Mohamed Ali Hasaan',' ','Project Procurement Manager','966533938013',NULL,'mohamed.hasaan@petrojet.com.eg','AL Khobar , KSA','2021-12-20 20:53:28','2021-12-20 20:53:28','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(38,31,' ',' ',' ',NULL,NULL,NULL,' ','2021-12-27 08:23:25','2021-12-27 08:23:25',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(39,32,' ',' ',' ',NULL,NULL,NULL,' ','2021-12-27 08:40:17','2021-12-27 08:40:17',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(40,25,'JOAQUIN','FERNANDEZ','Procurement','502032229',NULL,'jFernandezkk@niti.edu.sa','Room G-177, Admin Building, P.O. Box 550, Al Hasa 31982, Saudi Arabia','2022-01-02 19:35:57','2022-03-29 14:04:18','Mr',7,1,0,NULL,NULL,'966',NULL),(41,25,'Joaquin','Fernandez','Contracting Group','966502032229',NULL,'jfernandezkk@niti.edu.sa','Room G-177, NITI , AL AHSA','2022-01-03 02:23:33','2022-01-03 02:23:33','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(44,33,'Mohammed Irfan Rasool',NULL,'Procurement Head','966506791090',NULL,'procurement.1@pipewellservices.com',NULL,'2022-01-03 10:38:56','2022-01-03 10:38:56','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(45,33,'dfdsgfdsgf',NULL,NULL,NULL,NULL,NULL,NULL,'2022-01-03 10:49:01','2022-01-03 10:49:01','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(46,34,'Syed Ali Basha',NULL,'Operations Manager','966506417906',NULL,'syed.basha@fsf-furniture.com',NULL,'2022-01-05 08:35:04','2022-01-05 09:00:31','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(47,10,'Mohammad','H Al Sharif','Specialist I, CM - Raw Material','133599484',NULL,'mh.sharif@tasnee.com','P. O. Box 35579 Al-Jubail Industrial City 31961 Saudi Arabia','2022-01-10 04:21:32','2022-01-10 08:04:25','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(48,1,'tester',NULL,NULL,NULL,NULL,NULL,NULL,'2022-01-10 06:58:57','2022-01-10 06:58:57','Mr',NULL,NULL,0,NULL,NULL,NULL,NULL),(49,35,'Sowmya Krishna',' ',' ',NULL,NULL,NULL,' ','2022-01-10 07:45:32','2022-01-10 07:45:32','Ms',NULL,NULL,0,NULL,NULL,NULL,NULL),(50,35,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-01-10 12:41:42','2022-01-10 12:41:42',NULL,NULL,NULL,0,NULL,NULL,NULL,NULL),(51,36,'Siddiq',' ','Purchaser','966565185789',NULL,'siddiq@globeps.com',' ','2022-01-10 13:38:09','2022-01-10 13:38:09','Mr',0,1,0,NULL,NULL,NULL,NULL),(52,37,'Steve Diebold',' ',' ',NULL,'9662694279731','steve@acmcseals.com','International Sales Office, Michigan','2022-01-16 06:34:42','2022-01-16 06:34:42','Mr',7,1,0,NULL,NULL,NULL,NULL),(53,38,'ANIL AMACO',' ',' ',NULL,NULL,NULL,' ','2022-01-16 14:53:18','2022-01-16 14:53:18','Mr',7,1,0,NULL,NULL,NULL,NULL),(54,39,'Zahid','Wasi','Procurement',NULL,'966133429351','wasiz@marafiq.com.sa',' ','2022-01-16 15:04:22','2022-01-16 15:04:22','Mr',7,1,0,NULL,NULL,NULL,NULL),(55,40,'Eman','AlFayez','Purchaser','966550669897',NULL,'eman@catco.com.sa',' ','2022-01-17 14:55:10','2022-01-17 14:55:10','Ms',7,1,0,NULL,NULL,NULL,NULL),(56,41,'Ashfaq',' ',' ','966592896873',NULL,NULL,' ','2022-01-17 15:23:14','2022-01-17 15:23:14','Mr',7,1,0,NULL,NULL,NULL,NULL),(57,42,'Mohammed','','',NULL,NULL,NULL,'','2022-01-24 13:40:02','2022-01-24 13:40:02','Mr',7,1,0,NULL,NULL,NULL,NULL),(58,43,'Nikhil M','','Sales Executive','966590627573',NULL,'sales@sevenstarsteels.com','','2022-01-26 06:05:41','2022-01-26 06:05:41','Mr',7,1,0,NULL,NULL,NULL,NULL),(59,44,'ARJON M. MACASIEB','','PROCUREMENT CIVIL ENGINEER',NULL,NULL,'amacasieb@rtcc.com.sa','','2022-02-02 04:12:54','2022-02-02 04:12:54','Mr',7,1,0,NULL,NULL,NULL,NULL),(60,45,'','','',NULL,NULL,NULL,'','2022-02-22 09:05:38','2022-02-22 09:05:38',NULL,7,1,0,NULL,NULL,NULL,NULL),(61,46,'Mohammed','Bahlal','Projects','966563088811',NULL,NULL,'Shaybah Facilities','2022-02-23 05:26:22','2022-02-23 05:26:22','Mr',9,1,0,NULL,NULL,NULL,NULL),(62,46,'Mohammad Bahlal',NULL,NULL,'563088811',NULL,NULL,NULL,'2022-02-23 05:29:42','2022-02-23 05:29:42','Mr',9,1,0,NULL,NULL,NULL,NULL),(63,1,'Burkay','Dolen','procurement officer','966503807517',NULL,'burkay.dolen@baytur.com.sa','Al Khobar','2022-02-23 15:55:37','2022-02-23 15:55:37',NULL,25,1,0,NULL,NULL,NULL,NULL),(64,47,'MUHAMMAD','ALI','Admin / Logistic Coordinator','555738580',NULL,'m.khadar@tecnimontarabia.com','APOC PP Project, Al Jubail – KSA.','2022-03-08 13:24:52','2022-03-28 07:01:59','Mr',7,1,0,NULL,NULL,'966',NULL),(65,48,'Hussam','','','966555821721',NULL,'dragonpowerdm@hotmail.com','4827 KING SAUD ROAD, AL MAZRUIYAH DIST., UNIT NO. 109, DAMMAM 32414 - 6748','2022-03-08 13:52:01','2022-03-08 13:52:01','Mr',7,3,0,NULL,NULL,NULL,NULL),(66,49,NULL,NULL,NULL,'966536030540',NULL,NULL,NULL,'2022-03-08 13:53:48','2022-03-08 13:58:03','Mr',7,3,0,NULL,NULL,NULL,NULL),(67,50,'Taj','','Procurement',NULL,NULL,'psj@saudicatering.net','Khobar , KSA','2022-03-14 12:49:01','2022-03-14 12:49:01','Mr',9,1,0,NULL,NULL,NULL,NULL),(68,51,'LI TAO','','Procurement Dept.','966582767509',NULL,'litao@tiejun.com.cn','','2022-03-14 13:16:19','2022-03-14 13:16:19','Mr',7,1,0,NULL,NULL,NULL,NULL),(69,52,'Anil','','','966568584585',NULL,NULL,'','2022-03-15 13:56:31','2022-03-15 13:56:31','Mr',7,1,0,NULL,NULL,NULL,NULL),(70,53,'MOHAMED','AZAR','Procurement Department','9660570447826','9660138121221','Mohammed.1.azaruddin@clarious.com','Po Box 13441 Dammam 31493','2022-03-20 09:22:45','2022-03-20 09:22:45',NULL,25,1,0,NULL,NULL,NULL,NULL),(71,54,'Azar','MOHAMMED','Procurement Department','966570447826',NULL,'mohammed.1.azaruddin@clarios.com','PO Box 13441, Dammam 31493, Saudi Arabia','2022-03-20 10:00:04','2022-03-20 10:00:04','Mr',7,1,0,NULL,NULL,NULL,NULL),(72,47,'ARNON','REYES','Construction HSE Engineer','557433759',NULL,'A.Reyes@tecnimontarabia.com','APOC PP Plant Project - KSA','2022-03-20 10:10:57','2022-03-20 12:01:42','Mr',7,1,0,NULL,NULL,NULL,NULL),(73,27,'ABDUL','KHADEER','Civil Procurement Division','966508165616','96614164111','akhadeer@rtcc.com.sa',NULL,'2022-03-21 10:18:34','2022-03-21 10:23:47','Mr',7,1,0,NULL,NULL,NULL,NULL),(74,55,'Khalid Iqbal','','Tech Supervisor','966550501458',NULL,'khalid.iqbal@kanoo.com','','2022-03-22 08:30:21','2022-03-22 08:30:21','Mr',7,1,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_note_details`
--

DROP TABLE IF EXISTS `delivery_note_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery_note_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `delivery_note_id` bigint(20) unsigned DEFAULT NULL,
  `product_id` bigint(20) unsigned DEFAULT NULL,
  `delivered_quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `total_qty` bigint(20) DEFAULT NULL,
  `delivering_qty` bigint(20) DEFAULT NULL,
  `quote_detail_id` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_descriptions` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_of_measure` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_detail_id` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_note_details`
--

LOCK TABLES `delivery_note_details` WRITE;
/*!40000 ALTER TABLE `delivery_note_details` DISABLE KEYS */;
INSERT INTO `delivery_note_details` VALUES (1,1,92,'8','2022-02-11 12:37:08','2022-02-11 12:37:08',8,NULL,NULL,NULL,'EA','32'),(2,1,93,'6','2022-02-11 12:37:08','2022-02-11 12:37:08',6,NULL,NULL,NULL,'EA','33'),(3,1,94,'4','2022-02-11 12:37:08','2022-02-11 12:37:08',4,NULL,NULL,NULL,'EA','34'),(4,1,95,'5','2022-02-11 12:37:08','2022-02-11 12:37:08',5,NULL,NULL,NULL,'EA','35'),(5,1,96,'2','2022-02-11 12:37:08','2022-02-11 12:37:08',2,NULL,NULL,NULL,'BX','36'),(6,2,0,'3','2022-03-06 07:15:48','2022-03-06 07:15:48',3,NULL,'393','Reach type forklift','PER DAY',NULL),(7,2,0,'1','2022-03-06 07:15:48','2022-03-06 07:15:48',1,NULL,'394','Mobilization and Demobilization','EA',NULL),(8,3,116,'5000','2022-03-08 14:10:01','2022-03-08 14:10:01',5000,NULL,NULL,NULL,'EA','42'),(9,3,117,'2000','2022-03-08 14:10:01','2022-03-08 14:10:01',2000,NULL,NULL,NULL,'EA','43'),(10,4,118,'20','2022-03-09 10:24:52','2022-03-09 10:24:52',20,NULL,NULL,NULL,'EA','45'),(11,4,119,'20','2022-03-09 10:24:52','2022-03-09 10:24:52',20,NULL,NULL,NULL,'EA','46'),(12,4,120,'10','2022-03-09 10:24:52','2022-03-09 10:24:52',10,NULL,NULL,NULL,'EA','47'),(13,4,121,'2','2022-03-09 10:24:52','2022-03-09 10:24:52',2,NULL,NULL,NULL,'KG','48'),(14,4,122,'2','2022-03-09 10:24:52','2022-03-09 10:24:52',2,NULL,NULL,NULL,'ROLLS','49'),(15,4,123,'2','2022-03-09 10:24:52','2022-03-09 10:24:52',2,NULL,NULL,NULL,'EA','50'),(16,5,0,'1','2022-03-23 06:20:17','2022-03-23 06:20:17',1,NULL,'441','Project Site Sign Board PVC Type \nSafety Banners Signages\n\nDimensions: 5 x 3 Mtr','EA',NULL),(17,6,0,'3','2022-03-23 06:25:20','2022-03-23 06:25:20',3,NULL,'439','Roll-up banner\nDimensions:\n2.2 x 1.2 Mtrs','EA',NULL),(18,7,0,'1','2022-03-23 06:31:22','2022-03-23 06:31:22',1,NULL,'448',NULL,'EA',NULL),(19,8,0,'1','2022-03-23 06:34:52','2022-03-23 06:34:52',1,NULL,'450','PVC Banner \n15 x 3 mtrs','EA',NULL),(20,9,0,'70','2022-03-28 06:43:12','2022-03-28 06:43:12',70,NULL,'503','Office filing racks','EA',NULL),(21,10,0,'2','2022-03-28 07:02:32','2022-03-28 07:02:32',2,NULL,'501','PVC Banner','EA',NULL),(22,11,NULL,'1500','2022-03-29 14:13:15','2022-03-29 14:13:15',1500,NULL,'510','Grinding disk 4\"','EA',NULL),(23,11,NULL,'500','2022-03-29 14:13:15','2022-03-29 14:13:15',500,NULL,'511','Welding Electrode E7018 , 2.5 mm','KG',NULL),(24,11,NULL,'100','2022-03-29 14:13:15','2022-03-29 14:13:15',100,NULL,'512','Welding Electrode E6010, 3.2mm','KG',NULL),(25,11,NULL,'1150','2022-03-29 14:13:15','2022-03-29 14:13:15',1150,NULL,'513','Cutting Disc 4\" Dia x 3/32\"','EA',NULL),(26,11,NULL,'35','2022-03-29 14:13:15','2022-03-29 14:13:15',35,NULL,'514','Welding Chipping hammers','EA',NULL),(27,11,NULL,'1000','2022-03-29 14:13:15','2022-03-29 14:13:15',1000,NULL,'515','Cutting Disc 4\" Dia x 1/8 \"','EA',NULL);
/*!40000 ALTER TABLE `delivery_note_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_notes`
--

DROP TABLE IF EXISTS `delivery_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery_notes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotation_id` bigint(20) unsigned DEFAULT NULL,
  `delivery_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `po_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `invoice_id` bigint(20) DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `delevered_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prepared_by` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_notes`
--

LOCK TABLES `delivery_notes` WRITE;
/*!40000 ALTER TABLE `delivery_notes` DISABLE KEYS */;
INSERT INTO `delivery_notes` VALUES (1,NULL,'AMC-DLV-22-0001','649',NULL,'2022-02-11 12:37:08','2022-02-11 12:37:08',20,1,7,NULL,NULL),(2,135,'AMC-DLV-22-0002','768',NULL,'2022-03-06 07:15:48','2022-03-06 07:15:48',NULL,1,7,NULL,NULL),(3,NULL,'AMC-DLV-22-0003',NULL,NULL,'2022-03-08 14:10:01','2022-03-08 14:10:01',23,3,7,NULL,NULL),(4,NULL,'AMC-DLV-22-0004','672',NULL,'2022-03-09 10:24:52','2022-03-09 10:24:52',25,1,7,NULL,NULL),(5,156,'AMC-DLV-22-0005','156',NULL,'2022-03-23 06:20:17','2022-03-23 06:20:17',NULL,1,7,NULL,NULL),(6,154,'AMC-DLV-22-0006','154',NULL,'2022-03-23 06:25:20','2022-03-23 06:25:20',NULL,1,7,NULL,NULL),(7,159,'AMC-DLV-22-0007',NULL,NULL,'2022-03-23 06:31:22','2022-03-23 06:31:22',NULL,1,7,NULL,NULL),(8,161,'AMC-DLV-22-0008',NULL,NULL,'2022-03-23 06:34:52','2022-03-23 06:34:52',NULL,1,7,NULL,NULL),(9,169,'AMC-DLV-22-0009',NULL,NULL,'2022-03-28 06:43:12','2022-03-28 06:43:12',NULL,1,7,NULL,NULL),(10,168,'AMC-DLV-22-0010',NULL,NULL,'2022-03-28 07:02:32','2022-03-28 07:02:32',NULL,1,7,NULL,NULL),(11,170,'AMC-DLV-22-0011','693',NULL,'2022-03-29 14:13:15','2022-03-29 14:13:15',NULL,1,7,NULL,NULL);
/*!40000 ALTER TABLE `delivery_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `division_id` bigint(20) unsigned NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `designations`
--

DROP TABLE IF EXISTS `designations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `designations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `designations`
--

LOCK TABLES `designations` WRITE;
/*!40000 ALTER TABLE `designations` DISABLE KEYS */;
INSERT INTO `designations` VALUES (1,'7','Danish Mohammed','Operations Manager','2022-02-05 06:43:14','2022-02-05 06:43:14'),(2,'8','Mohammed Asif','General Manager','2022-02-05 06:45:18','2022-02-05 06:45:18'),(7,'9','Abbas Ahamed Shazli','Business Development Manager','2022-02-05 06:48:16','2022-02-05 06:48:16'),(8,'13','Salman Mohammed B K','Sales Executive','2022-02-05 06:49:36','2022-02-05 06:49:36'),(9,'19','Imran Moinuddin Shaikh','Machine Operator','2022-02-05 06:50:12','2022-02-05 06:50:12'),(10,'25','Ansif','Procurement Manager','2022-02-05 06:50:47','2022-02-05 06:50:47'),(11,'27','Shabbir','Sales Coordinator','2022-02-05 06:51:42','2022-02-05 06:51:42');
/*!40000 ALTER TABLE `designations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `divisions`
--

DROP TABLE IF EXISTS `divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `divisions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `opening_bal` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_arabic` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cr_no` bigint(20) DEFAULT NULL,
  `vat_no` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `divisions`
--

LOCK TABLES `divisions` WRITE;
/*!40000 ALTER TABLE `divisions` DISABLE KEYS */;
INSERT INTO `divisions` VALUES (1,'Trading Division',NULL,'2022-02-18 06:16:15','0','Amaco Arabia Contracting Company','شركة أماكو العربية للمقاولات',2055003404,310398615200003),(2,'Manufacturing',NULL,'2021-08-12 07:03:18','0',NULL,NULL,NULL,NULL),(3,'Printing Division',NULL,'2022-02-18 06:18:43','0','Amaco Manufacturing & Industrial Services Pvt. Ltd.','امكو للتصنيع والخدمات الصناعية الجندي. المحدودة.',2055017282,310398615200003),(4,'HQ ',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_division`
--

DROP TABLE IF EXISTS `employee_division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee_division` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `e_id` bigint(21) DEFAULT NULL,
  `div_id` bigint(21) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_division`
--

LOCK TABLES `employee_division` WRITE;
/*!40000 ALTER TABLE `employee_division` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee_division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `department` bigint(20) unsigned NOT NULL,
  `full_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expenses`
--

DROP TABLE IF EXISTS `expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expenses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `paid_by` bigint(20) unsigned DEFAULT NULL,
  `referrence_bill_no` bigint(200) unsigned DEFAULT NULL,
  `paid_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_to` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_account_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_paid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tax` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT '"new"',
  `bank_ref_no` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_slip` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_category_id` bigint(20) DEFAULT NULL,
  `company_name` varchar(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_path` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` varchar(192) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vatno` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inv_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `utilize_div_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `voucher_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendor_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expenses`
--

LOCK TABLES `expenses` WRITE;
/*!40000 ALTER TABLE `expenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file_uploads`
--

DROP TABLE IF EXISTS `file_uploads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file_uploads` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `rfq_id` bigint(20) unsigned NOT NULL,
  `file_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_uploads`
--

LOCK TABLES `file_uploads` WRITE;
/*!40000 ALTER TABLE `file_uploads` DISABLE KEYS */;
/*!40000 ALTER TABLE `file_uploads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investment`
--

DROP TABLE IF EXISTS `investment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `investment` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `payment_account_id` bigint(20) unsigned DEFAULT NULL,
  `opening_balance` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profit_per` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investment`
--

LOCK TABLES `investment` WRITE;
/*!40000 ALTER TABLE `investment` DISABLE KEYS */;
/*!40000 ALTER TABLE `investment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investments`
--

DROP TABLE IF EXISTS `investments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `investments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `payment_account_id` bigint(20) unsigned DEFAULT NULL,
  `opening_balance` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profit_per` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investments`
--

LOCK TABLES `investments` WRITE;
/*!40000 ALTER TABLE `investments` DISABLE KEYS */;
INSERT INTO `investments` VALUES (1,14,'0','0.00','0','2022-01-03 04:26:33','2022-01-03 04:26:41'),(2,16,'0','0.00','1','2022-01-03 07:27:04','2022-01-03 07:27:04'),(3,35,'0','0.00','0','2022-01-03 07:45:33','2022-01-03 07:49:07'),(4,33,'0','0.00','0','2022-01-03 13:08:10','2022-01-16 09:17:11'),(5,20,'0','0.00','0','2022-01-03 13:08:19','2022-01-16 09:17:03'),(6,36,'0','0.00','1','2022-01-10 04:17:23','2022-01-10 04:17:23'),(7,13,'0','0.00','0','2022-01-16 09:13:54','2022-01-16 09:14:31'),(8,17,'0','0.00','1','2022-02-05 06:43:14','2022-02-05 06:43:14'),(9,37,'0','0.00','1','2022-02-05 06:51:42','2022-02-05 06:51:42');
/*!40000 ALTER TABLE `investments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investments_details`
--

DROP TABLE IF EXISTS `investments_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `investments_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_account_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investments_details`
--

LOCK TABLES `investments_details` WRITE;
/*!40000 ALTER TABLE `investments_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `investments_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_details`
--

DROP TABLE IF EXISTS `invoice_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoice_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `invoice_id` bigint(20) unsigned DEFAULT NULL,
  `quotation_detail_id` bigint(20) unsigned DEFAULT NULL,
  `product_id` bigint(20) unsigned DEFAULT NULL,
  `quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sell_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `arabic_description` varchar(2560) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_of_measure` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(2560) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `purchase_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `margin` varchar(192) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_details`
--

LOCK TABLES `invoice_details` WRITE;
/*!40000 ALTER TABLE `invoice_details` DISABLE KEYS */;
INSERT INTO `invoice_details` VALUES (1,1,145,NULL,'5','109.140','545.70','2021-12-17 11:14:46','2021-12-17 11:14:46','رايزن','PIECES','ryzen','107',NULL),(2,4,NULL,1,'5','3500.00','17500.00','2021-12-27 10:15:18','2021-12-27 10:15:18','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','EACH','PLC Troubleshooting Per Day Charges','3500',NULL),(3,4,NULL,3,'1','3000.00','12000.00','2021-12-27 10:15:18','2021-12-27 10:15:18','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EACH','Mob/De-Mob/along with testing equipment','3000',NULL),(4,5,NULL,1,'5','5000.00','25000.00','2021-12-27 10:35:23','2021-12-27 10:35:23','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','KILOGRAM','PLC Troubleshooting Per Day Charges','5000',NULL),(5,6,NULL,1,'5','0.00','36625.00','2021-12-27 10:55:31','2021-12-27 10:55:31','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(6,6,NULL,3,'1','0.00','12000.00','2021-12-27 10:55:31','2021-12-27 10:55:31','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EACH','Mob/De-Mob/along with testing equipment',NULL,NULL),(7,7,NULL,1,'5','7325','36625.00','2021-12-27 12:03:08','2021-12-27 12:03:08','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(8,7,NULL,3,'6','12000','72000.00','2021-12-27 12:03:09','2021-12-27 12:03:09','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EACH','Mob/De-Mob/along with testing equipment',NULL,NULL),(9,8,NULL,1,'5','7325','36625.00','2021-12-27 12:04:22','2021-12-27 12:04:22','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(10,8,NULL,3,'1','12000','12000.00','2021-12-27 12:04:22','2021-12-27 12:04:22','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EACH','Mob/De-Mob/along with testing equipment',NULL,NULL),(11,9,NULL,4,'5','7325','36625.00','2021-12-28 11:31:38','2021-12-28 11:31:38','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(12,9,NULL,5,'1','12000','12000.00','2021-12-28 11:31:38','2021-12-28 11:31:38','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EA','Mob/De-Mob/Along With Testing Equipment',NULL,NULL),(13,10,NULL,1,'5','7325','36625.00','2021-12-28 14:42:21','2021-12-28 14:42:21','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(14,10,NULL,5,'1','12000','12000.00','2021-12-28 14:42:21','2021-12-28 14:42:21','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EA','Mob/De-Mob/Along With Testing Equipment',NULL,NULL),(15,11,NULL,1,'5','7325','36625.00','2021-12-28 14:49:00','2021-12-28 14:49:00','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(16,11,NULL,5,'1','12000','12000.00','2021-12-28 14:49:01','2021-12-28 14:49:01','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EA','Mob/De-Mob/Along With Testing Equipment',NULL,NULL),(17,13,NULL,1,'5','7325','36625.00','2021-12-29 09:05:29','2021-12-29 09:05:29','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PER DAY','PLC Troubleshooting Per Day Charges',NULL,NULL),(18,13,NULL,5,'1','12000','12000.00','2021-12-29 09:05:29','2021-12-29 09:05:29','Mob / De-Mob / جنبًا إلى جنب مع معدات الاختبار','EA','Mob/De-Mob/Along With Testing Equipment',NULL,NULL),(19,14,NULL,1,'2','204.00','408.00','2022-01-04 07:45:35','2022-01-04 07:45:35','رسوم استكشاف الأخطاء وإصلاحها لكل يوم PLC','PAC','PLC Troubleshooting Per Day Charges','200',NULL),(20,16,NULL,7,'144','50','7200.00','2022-01-05 08:38:30','2022-01-05 12:22:31','رسوم التركيب','EA','Installation Charges',NULL,NULL),(21,16,NULL,7,'144','50','7200.00','2022-01-05 08:38:31','2022-01-05 08:38:31','رسوم التركيب','EA','Installation Charges',NULL,NULL),(26,17,NULL,6,'144','125','18000.00','2022-01-05 12:23:54','2022-02-12 09:47:50','كابلات كهربائية مخفية لمصابيح الطاولة','EA','Concealed electrical cabling for table lamps',NULL,'0'),(27,17,NULL,7,'144','50','7200.00','2022-01-05 12:23:54','2022-02-12 09:47:50','رسوم التركيب','EA','Installation Charges',NULL,'0'),(29,18,NULL,NULL,'10','27.00','270.00','2022-01-18 05:57:26','2022-01-18 05:58:05','فرشاة كأس Osborm M14 65mm (موديل أحمر) صنع في ألمانيا','EA','Cup Brush Osborm M14 65MM (Model Red) Made in Germany','19','42.105263157895'),(30,19,NULL,89,'0','0.00','0.00','2022-01-24 13:43:01','2022-01-24 13:43:32','المادة المكونة: PP - أبيض 105 × 50 مم - (ختم الأمان)',NULL,'MATERIAL: PP - White 105 x 50 mm – ( Safety Seal )',NULL,'0'),(31,19,NULL,90,'0','0.00','0.00','2022-01-24 13:43:01','2022-01-24 13:43:32','المادة المكونة: PP - أبيض 40 × 40 ملم - (غداء)',NULL,'MATERIAL: PP – White 40 x 40 mm – ( Lunch )',NULL,'0'),(32,20,NULL,92,'8','14.000','136.00','2022-02-08 06:41:09','2022-02-09 07:53:19','زيادات التحذير','EA','Warning Traingles','14','21.428571428571'),(33,20,NULL,93,'6','100.000','678.00','2022-02-08 06:41:09','2022-02-09 07:53:19','غسول معقم للعين - 500 مل','EA','Sterile eyewash - 500ml','100','13'),(34,20,NULL,94,'4','90.000','404.00','2022-02-08 06:41:09','2022-02-09 07:53:19','مجرفة غير شرارة','EA','Non-spark shovel','90','12.222222222222'),(35,20,NULL,95,'5','75.000','425.00','2022-02-08 06:41:09','2022-02-09 07:53:19','3 أعمدة خشبية قطرها 2 بوصة','EA','3 wooden Poles 2 inch diameter','75','13.333333333333'),(36,20,NULL,96,'2','150.000','400.00','2022-02-08 06:41:09','2022-02-09 07:53:19','قناع الوجه FFP3 القابل للتصرف قناع الوجه المسطح للحماية من الغبار والأبخرة الدقيقة للغاية والضباب المائي. وفقًا لـ EN 149: 2001 + A1: 2009','BX','Disposable FFP3 face mask Flat face mask for protection against very fine dusts, fumes and water-based mists. According to EN 149:2001+A1:2009','150','33.333333333333'),(40,21,NULL,114,'500','0.12','60.00','2022-03-08 14:01:08','2022-03-08 14:03:37','المادة المكونة: PP - أبيض 30 × 40 مم - (ملصقات الصالون)','EA','MATERIAL: PP - White  30 x 40 mm – ( Saloon Stickers )','0.000',NULL),(41,22,NULL,115,'1000','0.2','200.00','2022-03-08 14:07:35','2022-03-10 12:58:48','المادة: PP - شعار معجنات سانا البيضاء - ملصق الحاوية','EA','MATERIAL: PP - White Sana pastries logo - Container Sticker',NULL,'0'),(42,23,NULL,116,'5000','0.14','700.00','2022-03-08 14:09:44','2022-03-08 14:09:44',NULL,'EA','MATERIAL: PP - White 60 mm – ( LOGO )',NULL,'0'),(43,23,NULL,117,'2000','0.1','200.00','2022-03-08 14:09:44','2022-03-08 14:09:44',NULL,'EA','MATERIAL: PP – White 30 mm – ( LOGO )',NULL,'0'),(45,25,NULL,118,'20','22','440.00','2022-03-09 10:21:02','2022-03-09 10:24:17','فرشاة ذات عقدة ملتوية','EA','Twisted knot wirewheel brush',NULL,NULL),(46,25,NULL,119,'20','23','460.00','2022-03-09 10:21:02','2022-03-09 10:24:17','عجلة تلميع لامعة سكوتش','EA','Scotch bright buffing wheel',NULL,NULL),(47,25,NULL,120,'10','23','230.00','2022-03-09 10:21:03','2022-03-09 10:24:17','عجلة تلميع - 4 &quot;','EA','Buffing wheel-4\"',NULL,NULL),(48,25,NULL,121,'2','110','220.00','2022-03-09 10:21:03','2022-03-09 10:24:18','معجون التخليل','KG','Pickling Paste',NULL,NULL),(49,25,NULL,122,'2','400','800.00','2022-03-09 10:21:03','2022-03-09 10:24:18','تطهير الشريط -2 &quot;ASWT 2','ROLLS','Purging tape-2\"  ASWT 2',NULL,NULL),(50,25,NULL,123,'2','650','1300.00','2022-03-09 10:21:03','2022-03-09 10:24:18','جلاخة مستقيمة - قطر 150 مم','EA','Straight Grinder-150mm dia',NULL,NULL),(51,26,232,27,'2','437','874.00','2022-03-13 08:06:29','2022-03-13 08:06:29',NULL,'EA','Rotor','200','118.500'),(52,26,233,28,'1','45','45.00','2022-03-13 08:06:29','2022-03-13 08:06:29',NULL,'EA','Rotor Switch','55','-18.182'),(53,27,231,26,'1','246','246.00','2022-03-13 08:07:51','2022-03-13 08:07:51',NULL,'EA','Plastic pipe welding machine','217','13.364'),(54,28,NULL,124,'3','3850','11550.00','2022-03-15 14:00:46','2022-03-15 14:00:46',NULL,'EA','Zamil - split AC 1.5 Ton\nModel: Innovation','2200','75'),(55,29,NULL,125,'2','1800.000','3600.00','2022-03-19 09:55:24','2022-03-19 09:55:24',NULL,'EA','Fabrication of Flat Ring\nSize :Thick 15mm X W 23mm X Dia 780mm Material : NBR/EPDM\nHardness: 70~75 ShA','1800','0'),(56,29,NULL,126,'1','2800.000','2800.00','2022-03-19 09:55:24','2022-03-19 09:55:24',NULL,'EA','Mold Charges','2800','0'),(57,30,441,127,'1','599.998','600.00','2022-03-23 06:21:10','2022-03-23 06:21:10',NULL,'EA','Project Site Sign Board PVC Type \nSafety Banners Signages\n\nDimensions: 5 x 3 Mtr','450','33.333'),(60,31,135,128,'3','2500','7500.00','2022-03-31 09:33:02','2022-03-31 09:33:02','رافعة شوكية من نوع الوصول','PER DAY','Reach type forklift','700','257.14285714286'),(61,31,135,129,'1','2000','2000.00','2022-03-31 09:33:02','2022-03-31 09:33:02','التعبئة والتفريغ','EA','Mobilization and Demobilization','2000','0'),(86,32,170,130,'1500','3.15','4725.00','2022-03-31 09:38:04','2022-03-31 09:38:04','قرص جلخ 4 بوصة','EA','Grinding disk 4\"','2.4','31.25'),(87,32,170,131,'500','10.625','5312.50','2022-03-31 09:38:05','2022-03-31 09:38:05','لحام كهربائي E7018 ، 2.5 مم','KG','Welding Electrode E7018 , 2.5 mm','8.5','25'),(88,32,170,132,'100','14','1400.00','2022-03-31 09:38:05','2022-03-31 09:38:05','إلكترود اللحام E6010 ، 3.2 مم','KG','Welding Electrode E6010, 3.2mm','10.5','33.333333333333'),(89,32,170,133,'1150','2.5','2875.00','2022-03-31 09:38:05','2022-03-31 09:38:05','قرص قطع 4 &quot;ديا × 3/32&quot;','EA','Cutting Disc 4\" Dia x 3/32\"','1.8','38.888888888889'),(90,32,170,134,'35','11','385.00','2022-03-31 09:38:05','2022-03-31 09:38:05','مطارق تقطيع اللحام','EA','Welding Chipping hammers','8.5','29.411764705882'),(91,32,170,135,'1000','2.3','2300.00','2022-03-31 09:38:05','2022-03-31 09:38:05','قرص قطع 4 &quot;ديا × 1/8&quot;','EA','Cutting Disc 4\" Dia x 1/8 \"','1.9','21.052631578947'),(98,33,172,136,'20','22','440.00','2022-03-31 09:55:49','2022-03-31 09:55:49','فرشاة عجلة سلك عقدة ملتوية','EA','Twisted knot wire wheel brush','22','0'),(99,33,172,137,'20','23','460.00','2022-03-31 09:55:49','2022-03-31 09:55:49','عجلة تلميع لامعة سكوتش','EA','Scotch bright buffing wheel','23','0'),(100,33,172,138,'10','23','230.00','2022-03-31 09:55:49','2022-03-31 09:55:49','عجلة تلميع - 4 &quot;','EA','Buffing wheel-4\"','23','0'),(101,33,172,139,'1','310','310.00','2022-03-31 09:55:49','2022-03-31 09:55:49','معجون التخليل','EA','Pickling Paste','310','0'),(102,33,172,140,'2','400','800.00','2022-03-31 09:55:49','2022-03-31 09:55:49','تطهير الشريط -2 &quot;ASWT 2','ROLLS','Purging tape-2\"  ASWT 2','400','0'),(103,33,172,141,'2','650','1300.00','2022-03-31 09:55:49','2022-03-31 09:55:49','جلاخة مستقيمة - قطر 150 مم','EA','Straight Grinder-150mm dia','650','0');
/*!40000 ALTER TABLE `invoice_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `invoices` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotation_id` bigint(20) unsigned DEFAULT NULL,
  `invoice_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'New',
  `issue_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_in_percentage` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_in_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `grand_total` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `party_id` bigint(20) DEFAULT NULL,
  `po_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `delete_status` int(11) DEFAULT '0',
  `exclude_from_vat` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (13,NULL,'AMC-INV-21-1201','New','29 Dec 2021','48625.00',NULL,'7293.75','55918.75',NULL,NULL,'2021-12-29 09:05:29','2021-12-29 09:05:29',32,'AES-21-1236',1,NULL,0,0),(17,NULL,'AMC-INV-22-0102','New','12 Feb 2022','25200.00','null','3780.00','28980.00',NULL,NULL,'2022-01-05 12:23:54','2022-02-12 09:47:50',34,'---',1,7,0,0),(18,NULL,'AMC-INV-22-0103','New','18 Jan 2022','270.00',NULL,'40.50','310.50',NULL,NULL,'2022-01-18 05:57:26','2022-01-18 05:57:26',33,'Cash Purchase',1,7,0,0),(20,NULL,'AMC-INV-22-0205','New','09 Feb 2022','2043.00','0','306.45','2349.45',NULL,NULL,'2022-02-08 06:41:09','2022-02-09 07:53:19',25,'649',1,7,0,0),(22,NULL,'AMC-INV-22-0307','New','10 Mar 2022','200.00','0','30.00','230.00',NULL,NULL,'2022-03-08 14:07:35','2022-03-10 12:58:48',49,NULL,3,7,0,0),(23,NULL,'AMC-INV-22-0308','New','08 Mar 2022','900.00','0','135.00','1035.00',NULL,NULL,'2022-03-08 14:09:44','2022-03-08 14:09:44',48,NULL,3,7,0,0),(25,NULL,'AMC-INV-22-0309','New','09 Mar 2022','3450.00','0','517.50','3967.50',NULL,NULL,'2022-03-09 10:21:02','2022-03-09 10:24:17',25,'672',1,7,0,0),(26,99,'AMC-INV-22-0310','New','2022-03-13T08:06:15.856Z','919.00',NULL,'137.85','1056.85',NULL,NULL,'2022-03-13 08:06:29','2022-03-13 08:06:29',36,NULL,1,7,0,0),(27,98,'AMC-INV-22-0311','New','2022-03-13T08:07:37.664Z','246.00',NULL,'36.90','282.90',NULL,NULL,'2022-03-13 08:07:51','2022-03-13 08:07:51',36,NULL,1,7,0,0),(28,NULL,'AMC-INV-22-0312','New','15 Mar 2022','11550.00','0','1732.50','13282.50',NULL,NULL,'2022-03-15 14:00:46','2022-03-15 14:00:46',52,NULL,1,7,0,0),(29,NULL,'AMC-INV-22-0313','New','01 Mar 2022','6400.00','0','960.00','7360.00',NULL,NULL,'2022-03-19 09:55:24','2022-03-19 09:55:24',52,'---',1,7,0,0),(30,156,'AMC-INV-22-0314','New','2022-03-23T06:21:04.751Z','600.00',NULL,'90.00','690.00',NULL,NULL,'2022-03-23 06:21:10','2022-03-23 06:21:10',47,NULL,1,7,0,0),(31,135,'AMC-INV-22-0315','New','06 Mar 2022','9500.00','null','1425.00','10925.00',NULL,NULL,'2022-03-31 09:31:02','2022-03-31 09:33:02',25,'678',1,7,0,0),(32,170,'AMC-INV-22-0316','New','24 Mar 2022','16997.50','0','2549.63','19547.13',NULL,NULL,'2022-03-31 09:35:18','2022-03-31 09:38:04',25,'693',1,7,0,0),(33,172,'AMC-INV-22-0317','New','24 Mar 2022','3540.00','null','531.00','4071.00',NULL,NULL,'2022-03-31 09:55:31','2022-03-31 09:55:48',25,'672',1,7,0,0);
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_logs`
--

DROP TABLE IF EXISTS `login_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` bigint(20) DEFAULT NULL,
  `platform` varchar(191) DEFAULT NULL,
  `browser` varchar(191) DEFAULT NULL,
  `date_time` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=341 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_logs`
--

LOCK TABLES `login_logs` WRITE;
/*!40000 ALTER TABLE `login_logs` DISABLE KEYS */;
INSERT INTO `login_logs` VALUES (1,7,NULL,NULL,'19-01-2022 @ 10:35:56','2022-01-19 10:35:56','2022-01-19 10:35:56','Login',NULL),(2,7,NULL,NULL,'19-01-2022 @ 10:36:05','2022-01-19 10:36:05','2022-01-19 10:36:05','Login',NULL),(3,7,NULL,NULL,'19-01-2022 @ 10:37:03','2022-01-19 10:37:03','2022-01-19 10:37:03','Login',NULL),(4,7,NULL,NULL,'19-01-2022 @ 13:56:49','2022-01-19 13:56:49','2022-01-19 13:56:49','Login',NULL),(5,7,NULL,NULL,'19-01-2022 @ 18:09:14','2022-01-19 18:09:14','2022-01-19 18:09:14','Login',NULL),(6,7,NULL,NULL,'19-01-2022 @ 18:55:54','2022-01-19 18:55:54','2022-01-19 18:55:54','Login',NULL),(7,7,NULL,NULL,'19-01-2022 @ 19:01:55','2022-01-19 19:01:55','2022-01-19 19:01:55','Logout',NULL),(8,7,NULL,NULL,'20-01-2022 @ 12:09:28','2022-01-20 12:09:28','2022-01-20 12:09:28','Login',NULL),(9,7,NULL,NULL,'20-01-2022 @ 12:38:13','2022-01-20 12:38:13','2022-01-20 12:38:13','Login',NULL),(10,7,NULL,NULL,'20-01-2022 @ 13:37:24','2022-01-20 13:37:24','2022-01-20 13:37:24','Login',NULL),(11,7,NULL,NULL,'20-01-2022 @ 14:33:12','2022-01-20 14:33:12','2022-01-20 14:33:12','Login',NULL),(12,7,NULL,NULL,'20-01-2022 @ 15:02:57','2022-01-20 15:02:57','2022-01-20 15:02:57','Login',NULL),(13,7,NULL,NULL,'20-01-2022 @ 15:14:37','2022-01-20 15:14:37','2022-01-20 15:14:37','Login',NULL),(14,7,NULL,NULL,'20-01-2022 @ 15:41:17','2022-01-20 15:41:17','2022-01-20 15:41:17','Login',NULL),(15,7,NULL,NULL,'20-01-2022 @ 17:19:15','2022-01-20 17:19:15','2022-01-20 17:19:15','Login',NULL),(16,7,NULL,NULL,'20-01-2022 @ 18:10:13','2022-01-20 18:10:13','2022-01-20 18:10:13','Login',NULL),(17,7,NULL,NULL,'21-01-2022 @ 14:51:27','2022-01-21 14:51:27','2022-01-21 14:51:27','Logout',NULL),(18,7,NULL,NULL,'21-01-2022 @ 16:26:31','2022-01-21 16:26:31','2022-01-21 16:26:31','Login',NULL),(19,7,NULL,NULL,'22-01-2022 @ 11:29:32','2022-01-22 11:29:32','2022-01-22 11:29:32','Login',NULL),(20,7,NULL,NULL,'22-01-2022 @ 11:56:58','2022-01-22 11:56:58','2022-01-22 11:56:58','Login',NULL),(21,7,NULL,NULL,'22-01-2022 @ 12:03:41','2022-01-22 12:03:41','2022-01-22 12:03:41','Login',NULL),(22,7,NULL,NULL,'22-01-2022 @ 12:07:51','2022-01-22 12:07:51','2022-01-22 12:07:51','Logout',NULL),(23,7,NULL,NULL,'22-01-2022 @ 12:08:00','2022-01-22 12:08:00','2022-01-22 12:08:00','Login',NULL),(24,7,NULL,NULL,'22-01-2022 @ 12:19:04','2022-01-22 12:19:04','2022-01-22 12:19:04','Login',NULL),(25,7,NULL,NULL,'22-01-2022 @ 12:20:23','2022-01-22 12:20:23','2022-01-22 12:20:23','Login',NULL),(26,7,NULL,NULL,'22-01-2022 @ 12:21:11','2022-01-22 12:21:11','2022-01-22 12:21:11','Login',NULL),(27,7,NULL,NULL,'22-01-2022 @ 12:23:52','2022-01-22 12:23:52','2022-01-22 12:23:52','Logout',NULL),(28,7,NULL,NULL,'22-01-2022 @ 12:29:33','2022-01-22 12:29:33','2022-01-22 12:29:33','Login',NULL),(29,7,NULL,NULL,'22-01-2022 @ 14:55:44','2022-01-22 14:55:44','2022-01-22 14:55:44','Login',NULL),(30,7,NULL,NULL,'22-01-2022 @ 19:18:15','2022-01-22 19:18:15','2022-01-22 19:18:15','Login',NULL),(31,7,NULL,NULL,'22-01-2022 @ 19:32:19','2022-01-22 19:32:19','2022-01-22 19:32:19','Logout',NULL),(32,7,NULL,NULL,'22-01-2022 @ 19:47:49','2022-01-22 19:47:49','2022-01-22 19:47:49','Login',NULL),(33,7,NULL,NULL,'24-01-2022 @ 11:51:50','2022-01-24 11:51:50','2022-01-24 11:51:50','Login',NULL),(34,7,NULL,NULL,'24-01-2022 @ 15:12:58','2022-01-24 15:12:58','2022-01-24 15:12:58','Login',NULL),(35,7,NULL,NULL,'24-01-2022 @ 15:38:45','2022-01-24 15:38:45','2022-01-24 15:38:45','Login',NULL),(36,7,NULL,NULL,'24-01-2022 @ 18:33:39','2022-01-24 18:33:39','2022-01-24 18:33:39','Login',NULL),(37,7,NULL,NULL,'24-01-2022 @ 19:07:02','2022-01-24 19:07:02','2022-01-24 19:07:02','Login',NULL),(38,7,NULL,NULL,'25-01-2022 @ 12:49:19','2022-01-25 12:49:19','2022-01-25 12:49:19','Login',NULL),(39,7,NULL,NULL,'25-01-2022 @ 13:58:36','2022-01-25 13:58:36','2022-01-25 13:58:36','Login',NULL),(40,7,NULL,NULL,'25-01-2022 @ 17:45:33','2022-01-25 17:45:33','2022-01-25 17:45:33','Login',NULL),(41,7,NULL,NULL,'25-01-2022 @ 17:46:23','2022-01-25 17:46:23','2022-01-25 17:46:23','Logout',NULL),(42,7,NULL,NULL,'26-01-2022 @ 11:30:38','2022-01-26 11:30:38','2022-01-26 11:30:38','Login',NULL),(43,7,NULL,NULL,'26-01-2022 @ 14:34:41','2022-01-26 14:34:41','2022-01-26 14:34:41','Login',NULL),(44,7,NULL,NULL,'26-01-2022 @ 18:13:54','2022-01-26 18:13:54','2022-01-26 18:13:54','Logout',NULL),(45,7,NULL,NULL,'27-01-2022 @ 18:07:59','2022-01-27 18:07:59','2022-01-27 18:07:59','Login',NULL),(46,7,NULL,NULL,'29-01-2022 @ 17:47:27','2022-01-29 17:47:27','2022-01-29 17:47:27','Login',NULL),(47,7,NULL,NULL,'31-01-2022 @ 12:25:11','2022-01-31 12:25:11','2022-01-31 12:25:11','Login',NULL),(48,7,NULL,NULL,'01-02-2022 @ 15:10:26','2022-02-01 15:10:26','2022-02-01 15:10:26','Login',NULL),(49,7,NULL,NULL,'01-02-2022 @ 15:11:15','2022-02-01 15:11:15','2022-02-01 15:11:15','Login',NULL),(50,7,NULL,NULL,'02-02-2022 @ 09:31:28','2022-02-02 09:31:28','2022-02-02 09:31:28','Login',NULL),(51,7,NULL,NULL,'02-02-2022 @ 10:02:58','2022-02-02 10:02:58','2022-02-02 10:02:58','Login',NULL),(52,7,NULL,NULL,'02-02-2022 @ 10:23:30','2022-02-02 10:23:30','2022-02-02 10:23:30','Login',NULL),(53,7,NULL,NULL,'02-02-2022 @ 10:54:55','2022-02-02 10:54:55','2022-02-02 10:54:55','Login',NULL),(54,7,NULL,NULL,'02-02-2022 @ 16:17:00','2022-02-02 16:17:00','2022-02-02 16:17:00','Login',NULL),(55,7,NULL,NULL,'03-02-2022 @ 09:40:21','2022-02-03 09:40:21','2022-02-03 09:40:21','Login',NULL),(56,7,NULL,NULL,'03-02-2022 @ 11:54:07','2022-02-03 11:54:07','2022-02-03 11:54:07','Login',NULL),(57,7,NULL,NULL,'04-02-2022 @ 14:58:19','2022-02-04 14:58:19','2022-02-04 14:58:19','Login',NULL),(58,7,NULL,NULL,'04-02-2022 @ 17:16:35','2022-02-04 17:16:35','2022-02-04 17:16:35','Logout',NULL),(59,8,NULL,NULL,'04-02-2022 @ 17:19:06','2022-02-04 17:19:06','2022-02-04 17:19:06','Login',NULL),(60,7,NULL,NULL,'05-02-2022 @ 10:08:37','2022-02-05 10:08:37','2022-02-05 10:08:37','Login',NULL),(61,7,NULL,NULL,'05-02-2022 @ 10:14:10','2022-02-05 10:14:10','2022-02-05 10:14:10','Logout',NULL),(62,7,NULL,NULL,'05-02-2022 @ 10:14:23','2022-02-05 10:14:23','2022-02-05 10:14:23','Login',NULL),(63,7,NULL,NULL,'05-02-2022 @ 10:16:48','2022-02-05 10:16:48','2022-02-05 10:16:48','Login',NULL),(64,7,NULL,NULL,'05-02-2022 @ 10:17:52','2022-02-05 10:17:52','2022-02-05 10:17:52','Login',NULL),(65,7,NULL,NULL,'05-02-2022 @ 10:46:22','2022-02-05 10:46:22','2022-02-05 10:46:22','Logout',NULL),(66,7,NULL,NULL,'05-02-2022 @ 10:46:35','2022-02-05 10:46:35','2022-02-05 10:46:35','Login',NULL),(67,7,NULL,NULL,'05-02-2022 @ 10:46:41','2022-02-05 10:46:41','2022-02-05 10:46:41','Logout',NULL),(68,7,NULL,NULL,'05-02-2022 @ 10:46:56','2022-02-05 10:46:56','2022-02-05 10:46:56','Login',NULL),(69,7,NULL,NULL,'05-02-2022 @ 12:05:40','2022-02-05 12:05:40','2022-02-05 12:05:40','Logout',NULL),(70,7,NULL,NULL,'05-02-2022 @ 12:23:45','2022-02-05 12:23:45','2022-02-05 12:23:45','Login',NULL),(71,7,NULL,NULL,'05-02-2022 @ 15:53:54','2022-02-05 15:53:54','2022-02-05 15:53:54','Login',NULL),(72,7,NULL,NULL,'08-02-2022 @ 12:04:56','2022-02-08 12:04:56','2022-02-08 12:04:56','Login',NULL),(73,7,NULL,NULL,'08-02-2022 @ 12:26:30','2022-02-08 12:26:30','2022-02-08 12:26:30','Login',NULL),(74,7,NULL,NULL,'08-02-2022 @ 12:47:54','2022-02-08 12:47:54','2022-02-08 12:47:54','Login',NULL),(75,7,NULL,NULL,'08-02-2022 @ 14:01:36','2022-02-08 14:01:36','2022-02-08 14:01:36','Login',NULL),(76,7,NULL,NULL,'08-02-2022 @ 14:16:09','2022-02-08 14:16:09','2022-02-08 14:16:09','Login',NULL),(77,7,NULL,NULL,'08-02-2022 @ 18:23:38','2022-02-08 18:23:38','2022-02-08 18:23:38','Login',NULL),(78,7,NULL,NULL,'08-02-2022 @ 18:24:25','2022-02-08 18:24:25','2022-02-08 18:24:25','Logout',NULL),(79,7,NULL,NULL,'08-02-2022 @ 18:24:40','2022-02-08 18:24:40','2022-02-08 18:24:40','Login',NULL),(80,25,NULL,NULL,'08-02-2022 @ 22:52:29','2022-02-08 22:52:29','2022-02-08 22:52:29','Login',NULL),(81,25,NULL,NULL,'08-02-2022 @ 23:01:07','2022-02-08 23:01:07','2022-02-08 23:01:07','Login',NULL),(82,25,NULL,NULL,'08-02-2022 @ 23:23:18','2022-02-08 23:23:18','2022-02-08 23:23:18','Logout',NULL),(83,7,NULL,NULL,'09-02-2022 @ 07:50:52','2022-02-09 07:50:52','2022-02-09 07:50:52','Login',NULL),(84,7,NULL,NULL,'09-02-2022 @ 07:52:26','2022-02-09 07:52:26','2022-02-09 07:52:26','Logout',NULL),(85,9,NULL,NULL,'09-02-2022 @ 07:54:51','2022-02-09 07:54:51','2022-02-09 07:54:51','Login',NULL),(86,9,NULL,NULL,'09-02-2022 @ 07:56:52','2022-02-09 07:56:52','2022-02-09 07:56:52','Logout',NULL),(87,9,NULL,NULL,'09-02-2022 @ 09:36:07','2022-02-09 09:36:07','2022-02-09 09:36:07','Login',NULL),(88,7,NULL,NULL,'09-02-2022 @ 10:51:09','2022-02-09 10:51:09','2022-02-09 10:51:09','Logout',NULL),(89,7,NULL,NULL,'09-02-2022 @ 10:55:31','2022-02-09 10:55:31','2022-02-09 10:55:31','Login',NULL),(90,7,NULL,NULL,'09-02-2022 @ 10:55:36','2022-02-09 10:55:36','2022-02-09 10:55:36','Logout',NULL),(91,9,NULL,NULL,'09-02-2022 @ 10:56:12','2022-02-09 10:56:12','2022-02-09 10:56:12','Login',NULL),(92,9,NULL,NULL,'09-02-2022 @ 11:02:27','2022-02-09 11:02:27','2022-02-09 11:02:27','Logout',NULL),(93,9,NULL,NULL,'09-02-2022 @ 11:02:55','2022-02-09 11:02:55','2022-02-09 11:02:55','Login',NULL),(94,9,NULL,NULL,'09-02-2022 @ 11:28:36','2022-02-09 11:28:36','2022-02-09 11:28:36','Login',NULL),(95,7,NULL,NULL,'09-02-2022 @ 11:30:11','2022-02-09 11:30:11','2022-02-09 11:30:11','Login',NULL),(96,7,NULL,NULL,'09-02-2022 @ 11:51:40','2022-02-09 11:51:40','2022-02-09 11:51:40','Login',NULL),(97,7,NULL,NULL,'09-02-2022 @ 17:59:23','2022-02-09 17:59:23','2022-02-09 17:59:23','Login',NULL),(98,7,NULL,NULL,'09-02-2022 @ 18:03:22','2022-02-09 18:03:22','2022-02-09 18:03:22','Logout',NULL),(99,7,NULL,NULL,'09-02-2022 @ 18:03:48','2022-02-09 18:03:48','2022-02-09 18:03:48','Login',NULL),(100,7,NULL,NULL,'10-02-2022 @ 10:14:00','2022-02-10 10:14:00','2022-02-10 10:14:00','Login',NULL),(101,7,NULL,NULL,'10-02-2022 @ 11:34:03','2022-02-10 11:34:03','2022-02-10 11:34:03','Login',NULL),(102,7,NULL,NULL,'10-02-2022 @ 11:36:34','2022-02-10 11:36:34','2022-02-10 11:36:34','Login',NULL),(103,7,NULL,NULL,'10-02-2022 @ 16:37:21','2022-02-10 16:37:21','2022-02-10 16:37:21','Login',NULL),(104,7,NULL,NULL,'10-02-2022 @ 17:50:26','2022-02-10 17:50:26','2022-02-10 17:50:26','Login',NULL),(105,7,NULL,NULL,'10-02-2022 @ 18:09:42','2022-02-10 18:09:42','2022-02-10 18:09:42','Login',NULL),(106,7,NULL,NULL,'10-02-2022 @ 21:05:59','2022-02-10 21:05:59','2022-02-10 21:05:59','Login',NULL),(107,7,NULL,NULL,'10-02-2022 @ 21:16:20','2022-02-10 21:16:20','2022-02-10 21:16:20','Login',NULL),(108,7,NULL,NULL,'11-02-2022 @ 11:41:30','2022-02-11 11:41:30','2022-02-11 11:41:30','Login',NULL),(109,7,NULL,NULL,'11-02-2022 @ 18:18:02','2022-02-11 18:18:02','2022-02-11 18:18:02','Login',NULL),(110,7,NULL,NULL,'12-02-2022 @ 12:15:09','2022-02-12 12:15:09','2022-02-12 12:15:09','Login',NULL),(111,7,NULL,NULL,'12-02-2022 @ 13:39:31','2022-02-12 13:39:31','2022-02-12 13:39:31','Login',NULL),(112,7,NULL,NULL,'12-02-2022 @ 15:01:06','2022-02-12 15:01:06','2022-02-12 15:01:06','Login',NULL),(113,7,NULL,NULL,'12-02-2022 @ 15:30:16','2022-02-12 15:30:16','2022-02-12 15:30:16','Login',NULL),(114,7,NULL,NULL,'12-02-2022 @ 17:22:58','2022-02-12 17:22:58','2022-02-12 17:22:58','Login',NULL),(115,7,NULL,NULL,'12-02-2022 @ 18:13:13','2022-02-12 18:13:13','2022-02-12 18:13:13','Login',NULL),(116,25,NULL,NULL,'13-02-2022 @ 12:17:26','2022-02-13 12:17:26','2022-02-13 12:17:26','Login',NULL),(117,7,NULL,NULL,'13-02-2022 @ 15:17:11','2022-02-13 15:17:11','2022-02-13 15:17:11','Login',NULL),(118,7,NULL,NULL,'13-02-2022 @ 20:31:18','2022-02-13 20:31:18','2022-02-13 20:31:18','Login',NULL),(119,7,NULL,NULL,'14-02-2022 @ 10:25:03','2022-02-14 10:25:03','2022-02-14 10:25:03','Login',NULL),(120,7,NULL,NULL,'14-02-2022 @ 11:48:15','2022-02-14 11:48:15','2022-02-14 11:48:15','Login',NULL),(121,7,NULL,NULL,'14-02-2022 @ 18:03:58','2022-02-14 18:03:58','2022-02-14 18:03:58','Login',NULL),(122,7,NULL,NULL,'15-02-2022 @ 11:20:47','2022-02-15 11:20:47','2022-02-15 11:20:47','Login',NULL),(123,7,NULL,NULL,'15-02-2022 @ 11:28:30','2022-02-15 11:28:30','2022-02-15 11:28:30','Login',NULL),(124,7,NULL,NULL,'15-02-2022 @ 11:36:52','2022-02-15 11:36:52','2022-02-15 11:36:52','Login',NULL),(125,7,NULL,NULL,'15-02-2022 @ 11:45:19','2022-02-15 11:45:19','2022-02-15 11:45:19','Login',NULL),(126,7,NULL,NULL,'15-02-2022 @ 11:45:25','2022-02-15 11:45:25','2022-02-15 11:45:25','Login',NULL),(127,7,NULL,NULL,'15-02-2022 @ 11:45:27','2022-02-15 11:45:27','2022-02-15 11:45:27','Logout',NULL),(128,7,NULL,NULL,'15-02-2022 @ 11:46:12','2022-02-15 11:46:12','2022-02-15 11:46:12','Login',NULL),(129,7,NULL,NULL,'15-02-2022 @ 11:48:08','2022-02-15 11:48:08','2022-02-15 11:48:08','Logout',NULL),(130,7,NULL,NULL,'15-02-2022 @ 11:48:19','2022-02-15 11:48:19','2022-02-15 11:48:19','Logout',NULL),(131,7,NULL,NULL,'16-02-2022 @ 11:59:32','2022-02-16 11:59:32','2022-02-16 11:59:32','Login',NULL),(132,7,NULL,NULL,'16-02-2022 @ 12:17:42','2022-02-16 12:17:42','2022-02-16 12:17:42','Login',NULL),(133,7,NULL,NULL,'16-02-2022 @ 14:20:11','2022-02-16 14:20:11','2022-02-16 14:20:11','Login',NULL),(134,7,NULL,NULL,'17-02-2022 @ 10:59:56','2022-02-17 10:59:56','2022-02-17 10:59:56','Login',NULL),(135,7,NULL,NULL,'17-02-2022 @ 15:30:11','2022-02-17 15:30:11','2022-02-17 15:30:11','Login',NULL),(136,7,NULL,NULL,'17-02-2022 @ 16:02:29','2022-02-17 16:02:29','2022-02-17 16:02:29','Login',NULL),(137,7,NULL,NULL,'17-02-2022 @ 16:04:21','2022-02-17 16:04:21','2022-02-17 16:04:21','Login',NULL),(138,7,NULL,NULL,'17-02-2022 @ 16:40:03','2022-02-17 16:40:03','2022-02-17 16:40:03','Login',NULL),(139,7,NULL,NULL,'17-02-2022 @ 16:51:08','2022-02-17 16:51:08','2022-02-17 16:51:08','Login',NULL),(140,7,NULL,NULL,'17-02-2022 @ 16:57:51','2022-02-17 16:57:51','2022-02-17 16:57:51','Login',NULL),(141,7,NULL,NULL,'17-02-2022 @ 17:37:43','2022-02-17 17:37:43','2022-02-17 17:37:43','Login',NULL),(142,7,NULL,NULL,'18-02-2022 @ 10:32:13','2022-02-18 10:32:13','2022-02-18 10:32:13','Login',NULL),(143,7,NULL,NULL,'18-02-2022 @ 11:53:46','2022-02-18 11:53:46','2022-02-18 11:53:46','Logout',NULL),(144,7,NULL,NULL,'18-02-2022 @ 18:01:49','2022-02-18 18:01:49','2022-02-18 18:01:49','Login',NULL),(145,7,NULL,NULL,'18-02-2022 @ 18:24:12','2022-02-18 18:24:12','2022-02-18 18:24:12','Login',NULL),(146,7,NULL,NULL,'18-02-2022 @ 18:34:10','2022-02-18 18:34:10','2022-02-18 18:34:10','Login',NULL),(147,7,NULL,NULL,'19-02-2022 @ 11:14:26','2022-02-19 11:14:26','2022-02-19 11:14:26','Login',NULL),(148,7,NULL,NULL,'21-02-2022 @ 12:57:29','2022-02-21 12:57:29','2022-02-21 12:57:29','Login',NULL),(149,7,NULL,NULL,'21-02-2022 @ 18:12:48','2022-02-21 18:12:48','2022-02-21 18:12:48','Login',NULL),(150,7,NULL,NULL,'21-02-2022 @ 18:13:19','2022-02-21 18:13:19','2022-02-21 18:13:19','Logout',NULL),(151,7,NULL,NULL,'21-02-2022 @ 20:44:55','2022-02-21 20:44:55','2022-02-21 20:44:55','Login',NULL),(152,25,NULL,NULL,'21-02-2022 @ 20:56:45','2022-02-21 20:56:45','2022-02-21 20:56:45','Login',NULL),(153,7,NULL,NULL,'22-02-2022 @ 09:45:42','2022-02-22 09:45:42','2022-02-22 09:45:42','Login',NULL),(154,7,NULL,NULL,'22-02-2022 @ 12:19:21','2022-02-22 12:19:21','2022-02-22 12:19:21','Login',NULL),(155,7,NULL,NULL,'22-02-2022 @ 14:23:56','2022-02-22 14:23:56','2022-02-22 14:23:56','Login',NULL),(156,7,NULL,NULL,'22-02-2022 @ 14:28:05','2022-02-22 14:28:05','2022-02-22 14:28:05','Login',NULL),(157,7,NULL,NULL,'22-02-2022 @ 15:09:55','2022-02-22 15:09:55','2022-02-22 15:09:55','Login',NULL),(158,7,NULL,NULL,'22-02-2022 @ 15:18:19','2022-02-22 15:18:19','2022-02-22 15:18:19','Login',NULL),(159,7,NULL,NULL,'22-02-2022 @ 18:35:43','2022-02-22 18:35:43','2022-02-22 18:35:43','Login',NULL),(160,7,NULL,NULL,'22-02-2022 @ 18:40:52','2022-02-22 18:40:52','2022-02-22 18:40:52','Logout',NULL),(161,7,NULL,NULL,'22-02-2022 @ 19:15:46','2022-02-22 19:15:46','2022-02-22 19:15:46','Login',NULL),(162,7,NULL,NULL,'22-02-2022 @ 19:18:30','2022-02-22 19:18:30','2022-02-22 19:18:30','Logout',NULL),(163,9,NULL,NULL,'23-02-2022 @ 10:49:16','2022-02-23 10:49:16','2022-02-23 10:49:16','Login',NULL),(164,9,NULL,NULL,'23-02-2022 @ 11:48:40','2022-02-23 11:48:40','2022-02-23 11:48:40','Login',NULL),(165,9,NULL,NULL,'23-02-2022 @ 11:51:09','2022-02-23 11:51:09','2022-02-23 11:51:09','Login',NULL),(166,9,NULL,NULL,'23-02-2022 @ 11:51:23','2022-02-23 11:51:23','2022-02-23 11:51:23','Logout',NULL),(167,9,NULL,NULL,'23-02-2022 @ 11:51:42','2022-02-23 11:51:42','2022-02-23 11:51:42','Login',NULL),(168,9,NULL,NULL,'23-02-2022 @ 11:56:14','2022-02-23 11:56:14','2022-02-23 11:56:14','Login',NULL),(169,9,NULL,NULL,'23-02-2022 @ 11:57:05','2022-02-23 11:57:05','2022-02-23 11:57:05','Login',NULL),(170,9,NULL,NULL,'23-02-2022 @ 11:57:44','2022-02-23 11:57:44','2022-02-23 11:57:44','Logout',NULL),(171,9,NULL,NULL,'23-02-2022 @ 11:58:17','2022-02-23 11:58:17','2022-02-23 11:58:17','Login',NULL),(172,9,NULL,NULL,'23-02-2022 @ 11:58:50','2022-02-23 11:58:50','2022-02-23 11:58:50','Login',NULL),(173,9,NULL,NULL,'23-02-2022 @ 11:59:47','2022-02-23 11:59:47','2022-02-23 11:59:47','Logout',NULL),(174,7,NULL,NULL,'23-02-2022 @ 11:59:58','2022-02-23 11:59:58','2022-02-23 11:59:58','Login',NULL),(175,9,NULL,NULL,'23-02-2022 @ 12:24:01','2022-02-23 12:24:01','2022-02-23 12:24:01','Login',NULL),(176,9,NULL,NULL,'23-02-2022 @ 12:25:24','2022-02-23 12:25:24','2022-02-23 12:25:24','Logout',NULL),(177,9,NULL,NULL,'23-02-2022 @ 12:31:31','2022-02-23 12:31:31','2022-02-23 12:31:31','Login',NULL),(178,7,NULL,NULL,'23-02-2022 @ 12:47:18','2022-02-23 12:47:18','2022-02-23 12:47:18','Login',NULL),(179,7,NULL,NULL,'23-02-2022 @ 15:34:39','2022-02-23 15:34:39','2022-02-23 15:34:39','Login',NULL),(180,7,NULL,NULL,'23-02-2022 @ 17:39:53','2022-02-23 17:39:53','2022-02-23 17:39:53','Login',NULL),(181,7,NULL,NULL,'23-02-2022 @ 19:40:52','2022-02-23 19:40:52','2022-02-23 19:40:52','Login',NULL),(182,7,NULL,NULL,'23-02-2022 @ 19:41:41','2022-02-23 19:41:41','2022-02-23 19:41:41','Logout',NULL),(183,25,NULL,NULL,'23-02-2022 @ 21:21:15','2022-02-23 21:21:15','2022-02-23 21:21:15','Login',NULL),(184,7,NULL,NULL,'24-02-2022 @ 13:39:42','2022-02-24 13:39:42','2022-02-24 13:39:42','Login',NULL),(185,7,NULL,NULL,'24-02-2022 @ 16:13:13','2022-02-24 16:13:13','2022-02-24 16:13:13','Login',NULL),(186,7,NULL,NULL,'24-02-2022 @ 16:14:59','2022-02-24 16:14:59','2022-02-24 16:14:59','Logout',NULL),(187,7,NULL,NULL,'24-02-2022 @ 16:16:49','2022-02-24 16:16:49','2022-02-24 16:16:49','Login',NULL),(188,7,NULL,NULL,'24-02-2022 @ 16:18:05','2022-02-24 16:18:05','2022-02-24 16:18:05','Logout',NULL),(189,7,NULL,NULL,'24-02-2022 @ 16:18:21','2022-02-24 16:18:21','2022-02-24 16:18:21','Login',NULL),(190,7,NULL,NULL,'24-02-2022 @ 16:19:45','2022-02-24 16:19:45','2022-02-24 16:19:45','Logout',NULL),(191,7,NULL,NULL,'24-02-2022 @ 16:20:24','2022-02-24 16:20:24','2022-02-24 16:20:24','Login',NULL),(192,7,NULL,NULL,'24-02-2022 @ 16:20:33','2022-02-24 16:20:33','2022-02-24 16:20:33','Logout',NULL),(193,7,NULL,NULL,'24-02-2022 @ 16:22:24','2022-02-24 16:22:24','2022-02-24 16:22:24','Login',NULL),(194,7,NULL,NULL,'24-02-2022 @ 16:22:32','2022-02-24 16:22:32','2022-02-24 16:22:32','Logout',NULL),(195,7,NULL,NULL,'24-02-2022 @ 16:23:56','2022-02-24 16:23:56','2022-02-24 16:23:56','Login',NULL),(196,7,NULL,NULL,'24-02-2022 @ 18:23:04','2022-02-24 18:23:04','2022-02-24 18:23:04','Login',NULL),(197,7,NULL,NULL,'24-02-2022 @ 18:33:59','2022-02-24 18:33:59','2022-02-24 18:33:59','Login',NULL),(198,7,NULL,NULL,'25-02-2022 @ 09:50:11','2022-02-25 09:50:11','2022-02-25 09:50:11','Login',NULL),(199,7,NULL,NULL,'25-02-2022 @ 10:36:03','2022-02-25 10:36:03','2022-02-25 10:36:03','Login',NULL),(200,7,NULL,NULL,'25-02-2022 @ 11:38:57','2022-02-25 11:38:57','2022-02-25 11:38:57','Login',NULL),(201,7,NULL,NULL,'25-02-2022 @ 15:26:18','2022-02-25 15:26:18','2022-02-25 15:26:18','Login',NULL),(202,7,NULL,NULL,'25-02-2022 @ 15:31:06','2022-02-25 15:31:06','2022-02-25 15:31:06','Login',NULL),(203,7,NULL,NULL,'25-02-2022 @ 16:03:03','2022-02-25 16:03:03','2022-02-25 16:03:03','Logout',NULL),(204,7,NULL,NULL,'25-02-2022 @ 17:50:56','2022-02-25 17:50:56','2022-02-25 17:50:56','Login',NULL),(205,9,NULL,NULL,'28-02-2022 @ 02:30:27','2022-02-28 02:30:27','2022-02-28 02:30:27','Login',NULL),(206,7,NULL,NULL,'28-02-2022 @ 15:48:16','2022-02-28 15:48:16','2022-02-28 15:48:16','Login',NULL),(207,25,NULL,NULL,'28-02-2022 @ 18:28:50','2022-02-28 18:28:50','2022-02-28 18:28:50','Login',NULL),(208,7,NULL,NULL,'28-02-2022 @ 19:14:30','2022-02-28 19:14:30','2022-02-28 19:14:30','Login',NULL),(209,9,NULL,NULL,'28-02-2022 @ 23:24:59','2022-02-28 23:24:59','2022-02-28 23:24:59','Login',NULL),(210,7,NULL,NULL,'01-03-2022 @ 11:30:18','2022-03-01 11:30:18','2022-03-01 11:30:18','Login',NULL),(211,7,NULL,NULL,'01-03-2022 @ 12:56:09','2022-03-01 12:56:09','2022-03-01 12:56:09','Login',NULL),(212,25,NULL,NULL,'02-03-2022 @ 10:41:20','2022-03-02 10:41:20','2022-03-02 10:41:20','Login',NULL),(213,25,NULL,NULL,'02-03-2022 @ 10:47:40','2022-03-02 10:47:40','2022-03-02 10:47:40','Logout',NULL),(214,7,NULL,NULL,'02-03-2022 @ 13:55:59','2022-03-02 13:55:59','2022-03-02 13:55:59','Login',NULL),(215,7,NULL,NULL,'02-03-2022 @ 16:20:14','2022-03-02 16:20:14','2022-03-02 16:20:14','Login',NULL),(216,7,NULL,NULL,'02-03-2022 @ 16:58:52','2022-03-02 16:58:52','2022-03-02 16:58:52','Login',NULL),(217,7,NULL,NULL,'02-03-2022 @ 18:12:49','2022-03-02 18:12:49','2022-03-02 18:12:49','Logout',NULL),(218,7,NULL,NULL,'02-03-2022 @ 18:13:03','2022-03-02 18:13:03','2022-03-02 18:13:03','Login',NULL),(219,7,NULL,NULL,'03-03-2022 @ 10:19:34','2022-03-03 10:19:34','2022-03-03 10:19:34','Login',NULL),(220,7,NULL,NULL,'03-03-2022 @ 17:12:23','2022-03-03 17:12:23','2022-03-03 17:12:23','Login',NULL),(221,7,NULL,NULL,'03-03-2022 @ 17:46:18','2022-03-03 17:46:18','2022-03-03 17:46:18','Login',NULL),(222,7,NULL,NULL,'06-03-2022 @ 12:39:58','2022-03-06 12:39:58','2022-03-06 12:39:58','Login',NULL),(223,7,NULL,NULL,'06-03-2022 @ 21:18:02','2022-03-06 21:18:02','2022-03-06 21:18:02','Login',NULL),(224,7,NULL,NULL,'07-03-2022 @ 10:46:01','2022-03-07 10:46:01','2022-03-07 10:46:01','Login',NULL),(225,7,NULL,NULL,'07-03-2022 @ 10:49:23','2022-03-07 10:49:23','2022-03-07 10:49:23','Logout',NULL),(226,7,NULL,NULL,'08-03-2022 @ 15:04:29','2022-03-08 15:04:29','2022-03-08 15:04:29','Login',NULL),(227,7,NULL,NULL,'08-03-2022 @ 20:32:08','2022-03-08 20:32:08','2022-03-08 20:32:08','Login',NULL),(228,7,NULL,NULL,'08-03-2022 @ 20:35:44','2022-03-08 20:35:44','2022-03-08 20:35:44','Login',NULL),(229,7,NULL,NULL,'08-03-2022 @ 20:39:43','2022-03-08 20:39:43','2022-03-08 20:39:43','Login',NULL),(230,7,NULL,NULL,'09-03-2022 @ 09:04:56','2022-03-09 09:04:56','2022-03-09 09:04:56','Login',NULL),(231,7,NULL,NULL,'09-03-2022 @ 09:05:57','2022-03-09 09:05:57','2022-03-09 09:05:57','Login',NULL),(232,7,NULL,NULL,'09-03-2022 @ 09:42:28','2022-03-09 09:42:28','2022-03-09 09:42:28','Login',NULL),(233,7,NULL,NULL,'09-03-2022 @ 09:47:55','2022-03-09 09:47:55','2022-03-09 09:47:55','Login',NULL),(234,7,NULL,NULL,'09-03-2022 @ 09:55:43','2022-03-09 09:55:43','2022-03-09 09:55:43','Logout',NULL),(235,7,NULL,NULL,'09-03-2022 @ 11:14:10','2022-03-09 11:14:10','2022-03-09 11:14:10','Login',NULL),(236,7,NULL,NULL,'09-03-2022 @ 11:44:55','2022-03-09 11:44:55','2022-03-09 11:44:55','Login',NULL),(237,7,NULL,NULL,'09-03-2022 @ 11:55:06','2022-03-09 11:55:06','2022-03-09 11:55:06','Login',NULL),(238,7,NULL,NULL,'09-03-2022 @ 14:33:45','2022-03-09 14:33:45','2022-03-09 14:33:45','Login',NULL),(239,7,NULL,NULL,'10-03-2022 @ 09:37:37','2022-03-10 09:37:37','2022-03-10 09:37:37','Login',NULL),(240,7,NULL,NULL,'10-03-2022 @ 11:18:37','2022-03-10 11:18:37','2022-03-10 11:18:37','Login',NULL),(241,7,NULL,NULL,'10-03-2022 @ 12:03:30','2022-03-10 12:03:30','2022-03-10 12:03:30','Login',NULL),(242,7,NULL,NULL,'10-03-2022 @ 12:18:08','2022-03-10 12:18:08','2022-03-10 12:18:08','Login',NULL),(243,7,NULL,NULL,'10-03-2022 @ 12:45:31','2022-03-10 12:45:31','2022-03-10 12:45:31','Login',NULL),(244,7,NULL,NULL,'10-03-2022 @ 16:56:53','2022-03-10 16:56:53','2022-03-10 16:56:53','Login',NULL),(245,7,NULL,NULL,'10-03-2022 @ 18:24:02','2022-03-10 18:24:02','2022-03-10 18:24:02','Login',NULL),(246,7,NULL,NULL,'10-03-2022 @ 18:27:15','2022-03-10 18:27:15','2022-03-10 18:27:15','Login',NULL),(247,7,NULL,NULL,'10-03-2022 @ 18:45:09','2022-03-10 18:45:09','2022-03-10 18:45:09','Logout',NULL),(248,7,NULL,NULL,'11-03-2022 @ 09:58:14','2022-03-11 09:58:14','2022-03-11 09:58:14','Login',NULL),(249,7,NULL,NULL,'11-03-2022 @ 10:03:04','2022-03-11 10:03:04','2022-03-11 10:03:04','Logout',NULL),(250,7,NULL,NULL,'11-03-2022 @ 17:20:09','2022-03-11 17:20:09','2022-03-11 17:20:09','Login',NULL),(251,7,NULL,NULL,'12-03-2022 @ 11:13:14','2022-03-12 11:13:14','2022-03-12 11:13:14','Login',NULL),(252,7,NULL,NULL,'12-03-2022 @ 11:23:30','2022-03-12 11:23:30','2022-03-12 11:23:30','Login',NULL),(253,7,NULL,NULL,'12-03-2022 @ 14:44:05','2022-03-12 14:44:05','2022-03-12 14:44:05','Login',NULL),(254,7,NULL,NULL,'12-03-2022 @ 17:43:37','2022-03-12 17:43:37','2022-03-12 17:43:37','Login',NULL),(255,7,NULL,NULL,'12-03-2022 @ 18:00:56','2022-03-12 18:00:56','2022-03-12 18:00:56','Login',NULL),(256,7,NULL,NULL,'12-03-2022 @ 18:03:16','2022-03-12 18:03:16','2022-03-12 18:03:16','Logout',NULL),(257,7,NULL,NULL,'13-03-2022 @ 12:46:49','2022-03-13 12:46:49','2022-03-13 12:46:49','Login',NULL),(258,9,NULL,NULL,'13-03-2022 @ 13:25:57','2022-03-13 13:25:57','2022-03-13 13:25:57','Login',NULL),(259,7,NULL,NULL,'13-03-2022 @ 13:59:13','2022-03-13 13:59:13','2022-03-13 13:59:13','Login',NULL),(260,9,NULL,NULL,'13-03-2022 @ 19:20:20','2022-03-13 19:20:20','2022-03-13 19:20:20','Login',NULL),(261,7,NULL,NULL,'14-03-2022 @ 09:38:50','2022-03-14 09:38:50','2022-03-14 09:38:50','Login',NULL),(262,7,NULL,NULL,'14-03-2022 @ 11:06:22','2022-03-14 11:06:22','2022-03-14 11:06:22','Login',NULL),(263,7,NULL,NULL,'14-03-2022 @ 11:50:48','2022-03-14 11:50:48','2022-03-14 11:50:48','Login',NULL),(264,7,NULL,NULL,'14-03-2022 @ 11:53:14','2022-03-14 11:53:14','2022-03-14 11:53:14','Login',NULL),(265,7,NULL,NULL,'14-03-2022 @ 12:04:45','2022-03-14 12:04:45','2022-03-14 12:04:45','Logout',NULL),(266,7,NULL,NULL,'14-03-2022 @ 12:26:33','2022-03-14 12:26:33','2022-03-14 12:26:33','Login',NULL),(267,7,NULL,NULL,'14-03-2022 @ 15:33:29','2022-03-14 15:33:29','2022-03-14 15:33:29','Login',NULL),(268,7,NULL,NULL,'14-03-2022 @ 18:10:03','2022-03-14 18:10:03','2022-03-14 18:10:03','Login',NULL),(269,9,NULL,NULL,'14-03-2022 @ 18:16:39','2022-03-14 18:16:39','2022-03-14 18:16:39','Login',NULL),(270,25,NULL,NULL,'14-03-2022 @ 20:02:48','2022-03-14 20:02:48','2022-03-14 20:02:48','Login',NULL),(271,9,NULL,NULL,'15-03-2022 @ 09:51:28','2022-03-15 09:51:28','2022-03-15 09:51:28','Login',NULL),(272,7,NULL,NULL,'15-03-2022 @ 12:40:05','2022-03-15 12:40:05','2022-03-15 12:40:05','Login',NULL),(273,7,NULL,NULL,'15-03-2022 @ 18:20:21','2022-03-15 18:20:21','2022-03-15 18:20:21','Login',NULL),(274,7,NULL,NULL,'15-03-2022 @ 19:25:13','2022-03-15 19:25:13','2022-03-15 19:25:13','Login',NULL),(275,7,NULL,NULL,'16-03-2022 @ 11:30:04','2022-03-16 11:30:04','2022-03-16 11:30:04','Login',NULL),(276,7,NULL,NULL,'16-03-2022 @ 11:56:14','2022-03-16 11:56:14','2022-03-16 11:56:14','Login',NULL),(277,7,NULL,NULL,'16-03-2022 @ 13:47:05','2022-03-16 13:47:05','2022-03-16 13:47:05','Login',NULL),(278,7,NULL,NULL,'17-03-2022 @ 15:06:40','2022-03-17 15:06:40','2022-03-17 15:06:40','Login',NULL),(279,7,NULL,NULL,'17-03-2022 @ 17:47:03','2022-03-17 17:47:03','2022-03-17 17:47:03','Login',NULL),(280,7,NULL,NULL,'19-03-2022 @ 14:54:37','2022-03-19 14:54:37','2022-03-19 14:54:37','Login',NULL),(281,7,NULL,NULL,'19-03-2022 @ 15:15:36','2022-03-19 15:15:36','2022-03-19 15:15:36','Login',NULL),(282,25,NULL,NULL,'20-03-2022 @ 14:47:42','2022-03-20 14:47:42','2022-03-20 14:47:42','Login',NULL),(283,7,NULL,NULL,'20-03-2022 @ 15:26:43','2022-03-20 15:26:43','2022-03-20 15:26:43','Login',NULL),(284,7,NULL,NULL,'20-03-2022 @ 17:26:09','2022-03-20 17:26:09','2022-03-20 17:26:09','Login',NULL),(285,7,NULL,NULL,'20-03-2022 @ 21:47:35','2022-03-20 21:47:35','2022-03-20 21:47:35','Login',NULL),(286,7,NULL,NULL,'20-03-2022 @ 22:45:23','2022-03-20 22:45:23','2022-03-20 22:45:23','Login',NULL),(287,7,NULL,NULL,'21-03-2022 @ 09:26:56','2022-03-21 09:26:56','2022-03-21 09:26:56','Login',NULL),(288,7,NULL,NULL,'21-03-2022 @ 10:55:28','2022-03-21 10:55:28','2022-03-21 10:55:28','Login',NULL),(289,7,NULL,NULL,'21-03-2022 @ 11:02:11','2022-03-21 11:02:11','2022-03-21 11:02:11','Login',NULL),(290,7,NULL,NULL,'21-03-2022 @ 11:51:26','2022-03-21 11:51:26','2022-03-21 11:51:26','Login',NULL),(291,7,NULL,NULL,'21-03-2022 @ 13:57:33','2022-03-21 13:57:33','2022-03-21 13:57:33','Login',NULL),(292,7,NULL,NULL,'21-03-2022 @ 16:44:18','2022-03-21 16:44:18','2022-03-21 16:44:18','Login',NULL),(293,7,NULL,NULL,'22-03-2022 @ 12:06:07','2022-03-22 12:06:07','2022-03-22 12:06:07','Login',NULL),(294,7,NULL,NULL,'22-03-2022 @ 15:15:32','2022-03-22 15:15:32','2022-03-22 15:15:32','Login',NULL),(295,7,NULL,NULL,'22-03-2022 @ 16:01:49','2022-03-22 16:01:49','2022-03-22 16:01:49','Login',NULL),(296,7,NULL,NULL,'23-03-2022 @ 16:37:44','2022-03-23 16:37:44','2022-03-23 16:37:44','Login',NULL),(297,7,NULL,NULL,'23-03-2022 @ 16:59:09','2022-03-23 16:59:09','2022-03-23 16:59:09','Login',NULL),(298,7,NULL,NULL,'23-03-2022 @ 17:19:51','2022-03-23 17:19:51','2022-03-23 17:19:51','Login',NULL),(299,7,NULL,NULL,'23-03-2022 @ 18:08:07','2022-03-23 18:08:07','2022-03-23 18:08:07','Login',NULL),(300,25,NULL,NULL,'23-03-2022 @ 18:11:11','2022-03-23 18:11:11','2022-03-23 18:11:11','Login',NULL),(301,7,NULL,NULL,'23-03-2022 @ 20:18:38','2022-03-23 20:18:38','2022-03-23 20:18:38','Login',NULL),(302,7,NULL,NULL,'23-03-2022 @ 20:21:01','2022-03-23 20:21:01','2022-03-23 20:21:01','Login',NULL),(303,7,NULL,NULL,'24-03-2022 @ 11:22:31','2022-03-24 11:22:31','2022-03-24 11:22:31','Login',NULL),(304,7,NULL,NULL,'24-03-2022 @ 12:15:42','2022-03-24 12:15:42','2022-03-24 12:15:42','Login',NULL),(305,7,NULL,NULL,'24-03-2022 @ 13:21:46','2022-03-24 13:21:46','2022-03-24 13:21:46','Login',NULL),(306,7,NULL,NULL,'24-03-2022 @ 17:24:25','2022-03-24 17:24:25','2022-03-24 17:24:25','Login',NULL),(307,7,NULL,NULL,'24-03-2022 @ 17:59:11','2022-03-24 17:59:11','2022-03-24 17:59:11','Login',NULL),(308,7,NULL,NULL,'24-03-2022 @ 17:59:26','2022-03-24 17:59:26','2022-03-24 17:59:26','Logout',NULL),(309,7,NULL,NULL,'25-03-2022 @ 10:37:14','2022-03-25 10:37:14','2022-03-25 10:37:14','Login',NULL),(310,7,NULL,NULL,'25-03-2022 @ 10:46:47','2022-03-25 10:46:47','2022-03-25 10:46:47','Login',NULL),(311,7,NULL,NULL,'25-03-2022 @ 11:32:23','2022-03-25 11:32:23','2022-03-25 11:32:23','Logout',NULL),(312,7,NULL,NULL,'25-03-2022 @ 12:18:53','2022-03-25 12:18:53','2022-03-25 12:18:53','Login',NULL),(313,7,NULL,NULL,'25-03-2022 @ 15:27:59','2022-03-25 15:27:59','2022-03-25 15:27:59','Login',NULL),(314,7,NULL,NULL,'25-03-2022 @ 16:37:55','2022-03-25 16:37:55','2022-03-25 16:37:55','Login',NULL),(315,7,NULL,NULL,'25-03-2022 @ 17:49:09','2022-03-25 17:49:09','2022-03-25 17:49:09','Login',NULL),(316,7,NULL,NULL,'26-03-2022 @ 11:01:08','2022-03-26 11:01:08','2022-03-26 11:01:08','Login',NULL),(317,7,NULL,NULL,'26-03-2022 @ 11:17:14','2022-03-26 11:17:14','2022-03-26 11:17:14','Login',NULL),(318,7,NULL,NULL,'26-03-2022 @ 18:16:05','2022-03-26 18:16:05','2022-03-26 18:16:05','Login',NULL),(319,7,NULL,NULL,'27-03-2022 @ 13:05:05','2022-03-27 13:05:05','2022-03-27 13:05:05','Login',NULL),(320,7,NULL,NULL,'28-03-2022 @ 10:20:33','2022-03-28 10:20:33','2022-03-28 10:20:33','Login',NULL),(321,7,NULL,NULL,'28-03-2022 @ 10:31:23','2022-03-28 10:31:23','2022-03-28 10:31:23','Login',NULL),(322,7,NULL,NULL,'28-03-2022 @ 10:35:43','2022-03-28 10:35:43','2022-03-28 10:35:43','Login',NULL),(323,7,NULL,NULL,'28-03-2022 @ 10:38:13','2022-03-28 10:38:13','2022-03-28 10:38:13','Logout',NULL),(324,7,NULL,NULL,'28-03-2022 @ 10:38:29','2022-03-28 10:38:29','2022-03-28 10:38:29','Login',NULL),(325,7,NULL,NULL,'28-03-2022 @ 13:36:18','2022-03-28 13:36:18','2022-03-28 13:36:18','Login',NULL),(326,7,NULL,NULL,'28-03-2022 @ 15:13:47','2022-03-28 15:13:47','2022-03-28 15:13:47','Login',NULL),(327,7,NULL,NULL,'29-03-2022 @ 18:51:39','2022-03-29 18:51:39','2022-03-29 18:51:39','Login',NULL),(328,7,NULL,NULL,'30-03-2022 @ 10:18:44','2022-03-30 10:18:44','2022-03-30 10:18:44','Login',NULL),(329,7,NULL,NULL,'30-03-2022 @ 12:39:58','2022-03-30 12:39:58','2022-03-30 12:39:58','Login',NULL),(330,7,NULL,NULL,'30-03-2022 @ 15:13:34','2022-03-30 15:13:34','2022-03-30 15:13:34','Login',NULL),(331,7,NULL,NULL,'30-03-2022 @ 15:14:21','2022-03-30 15:14:21','2022-03-30 15:14:21','Logout',NULL),(332,7,NULL,NULL,'30-03-2022 @ 15:14:24','2022-03-30 15:14:24','2022-03-30 15:14:24','Login',NULL),(333,7,NULL,NULL,'30-03-2022 @ 15:25:37','2022-03-30 15:25:37','2022-03-30 15:25:37','Login',NULL),(334,7,NULL,NULL,'30-03-2022 @ 15:32:05','2022-03-30 15:32:05','2022-03-30 15:32:05','Login',NULL),(335,7,NULL,NULL,'31-03-2022 @ 11:09:34','2022-03-31 11:09:34','2022-03-31 11:09:34','Login',NULL),(336,7,NULL,NULL,'31-03-2022 @ 15:45:39','2022-03-31 15:45:39','2022-03-31 15:45:39','Login',NULL),(337,7,NULL,NULL,'01-04-2022 @ 15:31:49','2022-04-01 15:31:49','2022-04-01 15:31:49','Login',NULL),(338,7,NULL,NULL,'02-04-2022 @ 10:08:12','2022-04-02 10:08:12','2022-04-02 10:08:12','Login',NULL),(339,7,NULL,NULL,'02-04-2022 @ 12:20:45','2022-04-02 12:20:45','2022-04-02 12:20:45','Login',NULL),(340,7,NULL,NULL,'02-04-2022 @ 16:30:58','2022-04-02 16:30:58','2022-04-02 16:30:58','Login',NULL);
/*!40000 ALTER TABLE `login_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturers`
--

DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manufacturers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
INSERT INTO `manufacturers` VALUES (1,'Ikk',NULL,'2021-09-28 02:42:07','2021-09-28 02:42:07',NULL,NULL);
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(5,'2020_11_26_041327_create_departments_table',1),(6,'2020_11_26_041802_create_products_table',1),(7,'2020_11_26_042147_create_categories_table',1),(8,'2020_11_26_044945_divisions',1),(9,'2020_12_09_044610_create_parties_table',1),(10,'2020_12_09_092514_create_r_f_q_s_table',1),(11,'2020_12_09_103424_create_r_f_q_details_table',1),(12,'2020_12_16_054753_create_analyses_table',1),(13,'2020_12_19_095514_create_quotations_table',1),(14,'2020_12_19_100014_create_quotation_details_table',1),(15,'2020_12_23_051413_create_sales_table',1),(16,'2020_12_23_054244_create_sale_details_table',1),(17,'2020_12_24_064647_create_contacts_table',1),(18,'2020_12_28_062126_create_file_uploads_table',1),(19,'2021_01_08_090247_create_invoices_table',1),(20,'2021_01_08_090507_create_invoice_details_table',1),(21,'2021_01_09_061141_create_expenses_table',1),(22,'2021_01_09_064301_create_employees_table',1),(23,'2021_01_12_122043_create_manufacturers_table',1),(24,'2021_01_15_070129_create_payment_accounts_table',1),(25,'2021_01_16_063904_create_product_prices_table',1),(26,'2021_01_30_095227_create_purchase_invoices_table',2),(27,'2021_01_30_095258_create_purchase_invoice_details_table',2),(28,'2021_02_02_104930_create_account_categories_table',3),(29,'2021_02_02_111107_create_columns_table',3),(30,'2021_02_02_112902_create_column_data_table',3),(31,'2021_02_10_064744_create_delivery_notes_table',4),(32,'2021_02_10_064821_create_delivery_note_details_table',4),(41,'2014_10_12_000000_create_users_table',5),(42,'2020_11_26_041120_create_roles_table',5),(43,'2021_03_12_062848_create_advance_payments_table',6),(44,'2021_03_12_063148_create_receipts_table',6),(45,'2021_04_02_085817_create_party_banks_table',7),(46,'2021_04_20_062310_create_companies_table',8),(47,'2021_04_20_062654_create_company_banks_table',8),(48,'2021_07_27_103315_payee_table',9),(49,'2021_08_03_062444_user_division',9),(50,'2021_08_05_070018_create_user_divisions_table',10),(51,'2021_09_15_104914_create_party_divisions',11),(52,'2021_09_25_105652_create_investment_table',12),(53,'2021_09_25_112653_create_investments_table',12),(54,'2021_09_25_122415_create_investments_table',13),(55,'2021_10_13_111004_create_notes_table',13),(56,'2021_11_06_053850_investments_details',14),(57,'2022_02_04_062942_designations',14);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modules` (
  `mod_id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL,
  `module_name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`mod_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (2,NULL,'Dashboard','Module','Active','2021-12-14 10:45:41','2021-12-14 10:45:41',1),(8,2,'Dashboard Qutation Request','Component','Active','2021-12-14 23:42:57','2021-12-17 03:34:41',1),(12,NULL,'Party','Module','Active','2021-12-15 01:51:09','2021-12-15 01:51:09',1),(15,NULL,'Product','Module','Active','2021-12-15 01:55:46','2021-12-15 02:19:39',1),(19,2,'Dashboard Pending Quotation','Component','Active','2021-12-15 03:40:43','2021-12-17 03:35:05',1),(20,NULL,'Purchase','Module','Active','2021-12-15 03:42:01','2021-12-15 03:42:01',1),(21,NULL,'Sales','Module','Active','2021-12-15 03:42:17','2021-12-15 03:42:17',1),(22,NULL,'Account','Module','Active','2021-12-15 03:42:29','2021-12-15 03:42:29',1),(23,NULL,'Report','Module','Active','2021-12-15 03:42:40','2021-12-15 03:42:40',1),(24,NULL,'Users','Module','Active','2021-12-15 03:43:10','2021-12-15 03:43:10',1),(25,NULL,'Employees','Module','Active','2021-12-15 03:43:24','2021-12-15 03:43:24',1),(26,20,'RFQ','Sub Module','Active','2021-12-15 03:43:51','2021-12-15 03:43:51',1),(27,20,'Purchase Order','Sub Module','Active','2021-12-15 03:44:39','2021-12-15 03:44:39',1),(28,20,'Purchase Return','Sub Module','Active','2021-12-15 03:44:55','2021-12-15 03:44:55',1),(29,21,'Quotation','Sub Module','Active','2021-12-15 03:45:47','2021-12-15 03:45:47',1),(30,21,'Delivery Note','Sub Module','Active','2021-12-15 03:46:09','2021-12-15 03:46:09',1),(31,21,'Invoice','Sub Module','Active','2021-12-15 03:46:23','2021-12-15 03:46:23',1),(32,21,'Sales Return','Sub Module','Active','2021-12-15 03:47:00','2021-12-15 03:47:00',1),(33,22,'Dashboard','Sub Module','Active','2021-12-15 03:47:57','2021-12-15 03:47:57',1),(34,22,'Expenses','Sub Module','Active','2021-12-15 03:48:24','2021-12-15 03:48:24',1),(35,22,'Transaction','Sub Module','Active','2021-12-15 03:48:41','2021-12-15 03:48:41',1),(36,22,'Statements','Sub Module','Active','2021-12-15 03:49:01','2021-12-15 03:49:01',1),(37,36,'Vendor','Sub Module','Active','2021-12-15 03:49:32','2021-12-15 03:49:32',1),(38,36,'Customer','Sub Module','Active','2021-12-15 03:50:02','2021-12-15 03:50:02',1),(39,36,'Master','Sub Module','Active','2021-12-15 03:50:18','2021-12-15 03:50:18',1),(40,36,'Personal','Sub Module','Active','2021-12-15 03:50:33','2021-12-15 03:50:33',1),(49,23,'Balance Sheet','Sub Module','Active','2021-12-15 04:03:07','2021-12-15 04:03:07',1),(50,23,'Profit Loss','Sub Module','Active','2021-12-15 04:03:26','2021-12-15 04:03:26',1),(51,23,'Tax','Sub Module','Active','2021-12-15 04:03:43','2021-12-15 04:03:43',1),(52,51,'Purchase','Sub Module','Active','2021-12-15 04:04:11','2021-12-15 04:04:11',1),(53,51,'Sales','Sub Module','Active','2021-12-15 04:04:29','2021-12-15 04:04:29',1),(54,51,'Vat','Sub Module','Active','2021-12-15 04:05:42','2021-12-15 04:05:42',1),(55,23,'Sales','Sub Module','Active','2021-12-15 04:06:18','2021-12-15 04:06:18',1),(56,NULL,'Permission','Module','Active','2021-12-15 04:07:01','2021-12-15 04:07:01',1),(57,56,'Modules','Sub Module','Active','2021-12-15 04:07:24','2021-12-15 04:07:24',1),(58,2,'Last 12 Months Sales','Component','Active','2021-12-17 00:56:36','2021-12-17 00:56:36',1),(59,2,'Dashboard Expense Chart','Component','Active','2021-12-17 01:10:40','2021-12-17 01:24:12',1),(60,2,'Dashboard Account Statements','Component','Active','2021-12-17 01:14:28','2021-12-17 01:14:28',1),(61,2,'Dashboard Due Statements','Component','Active','2021-12-17 01:20:53','2021-12-17 01:20:53',1),(62,2,'Dashboard Revenue','Component','Active','2021-12-17 03:32:35','2021-12-17 03:32:35',1),(63,2,'Dashboard Total Sales','Component','Active','2021-12-17 03:35:28','2021-12-17 03:35:28',1),(64,12,'Party Add New Button','Component','Active','2021-12-17 03:43:04','2021-12-17 03:43:04',1),(65,12,'Party View Table','Component','Active','2021-12-17 03:43:37','2021-12-17 03:43:37',1),(66,15,'Purchase Add Button','Component','Active','2021-12-17 03:48:44','2021-12-17 03:48:44',1),(67,15,'Product Searchbar','Component','Active','2021-12-17 03:49:35','2021-12-17 03:49:35',1),(68,15,'Product View Card','Component','Active','2021-12-17 03:50:06','2021-12-17 03:50:06',1),(69,26,'Purchase RFQ Add New Button','Component','Active','2021-12-17 03:51:55','2021-12-17 03:51:55',1),(70,26,'Purchase RFQ View Table','Component','Active','2021-12-17 03:56:01','2021-12-17 03:56:01',1),(71,27,'Generate Purchase Order Button','Component','Active','2021-12-17 03:57:11','2021-12-17 03:57:11',1),(72,27,'Purchase Order View Table','Component','Active','2021-12-17 03:57:35','2021-12-17 03:57:35',1),(73,28,'Generate Purchase Return Button','Component','Active','2021-12-17 03:59:42','2021-12-17 03:59:42',1),(74,28,'Purchase Return Order Table','Component','Active','2021-12-17 04:01:21','2021-12-17 04:01:21',1),(75,29,'Sales Quotation Add Button','Component','Active','2021-12-17 04:05:15','2021-12-17 04:05:15',1),(76,29,'Sales Quotation Quick Quote Button','Component','Active','2021-12-17 04:07:46','2021-12-17 04:07:46',1),(77,29,'Sales Quotation New Tab','Component','Active','2021-12-17 04:09:23','2021-12-17 04:09:23',1),(78,29,'Sales Quotation Accepted Quotation Tab','Component','Active','2021-12-17 04:10:51','2021-12-17 04:10:51',1),(79,29,'Sales Quotation Trash Tab','Component','Active','2021-12-17 04:11:19','2021-12-17 04:11:19',1),(80,31,'Sales Invoice Generate Button','Component','Active','2021-12-17 04:12:32','2021-12-17 04:12:32',1),(81,31,'Sales Invoice View Table','Component','Active','2021-12-17 04:16:38','2021-12-17 04:16:38',1),(82,32,'Sales Return Generate Button','Component','Active','2021-12-17 04:17:02','2021-12-17 04:17:02',1),(83,32,'Sales Return View Table','Component','Active','2021-12-17 04:20:17','2021-12-17 04:20:17',1),(84,33,'Account Dashboard Total Balance Card','Component','Active','2021-12-18 00:21:58','2021-12-18 00:21:58',1),(85,33,'Account Dashboard Trading Division Card','Component','Active','2021-12-18 00:26:22','2021-12-18 00:26:22',1),(86,33,'Account Dashboard Manufacturing Card','Component','Active','2021-12-19 07:30:01','2021-12-19 07:30:01',1),(87,33,'Account Dashboard Printing Division Card','Component','Active','2021-12-19 07:32:04','2021-12-19 07:32:04',1),(88,33,'Account Dashboard HQ Card','Component','Active','2021-12-19 07:32:28','2021-12-19 07:32:28',1),(89,33,'Account Dashboard Balance Card','Component','Active','2021-12-19 07:34:16','2021-12-19 07:34:16',1),(90,34,'Account Expense Add New Button','Component','Active','2021-12-19 07:35:54','2021-12-19 07:35:54',1),(91,34,'Account Expense Pending Expenses List View','Component','Active','2021-12-19 07:39:30','2021-12-19 07:39:30',1),(92,34,'Account Expense Verified Expenses List View','Component','Active','2021-12-19 07:41:04','2021-12-19 07:41:04',1),(93,35,'Account Transaction New Receipt Button','Component','Active','2021-12-19 07:42:19','2021-12-19 07:42:19',1),(94,35,'Account Transaction Receipt View','Component','Active','2021-12-19 07:47:04','2021-12-19 07:47:04',1),(95,35,'Account Transaction Payment Tab','Component','Active','2021-12-19 07:48:10','2021-12-19 07:48:10',1),(96,37,'Account Statement Vendor Print button','Component','Active','2021-12-19 07:52:46','2021-12-19 07:52:46',1),(97,38,'Account Statement Customer Print button','Component','Active','2021-12-19 07:54:37','2021-12-19 07:54:37',1),(98,39,'Account Statement Master Print button','Component','Active','2021-12-19 07:55:32','2021-12-19 07:55:32',1),(99,24,'User Add New Button','Component','Active','2021-12-19 08:03:35','2021-12-19 08:03:35',1),(100,24,'Users New Tab','Component','Active','2021-12-19 08:04:13','2021-12-19 08:04:13',1),(101,24,'Users Trash','Component','Active','2021-12-19 08:05:04','2021-12-19 08:05:04',1);
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quotation_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3481 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'2021-11-05 04:26:50','2021-11-05 04:26:50','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','58',NULL,NULL),(2,'2021-11-05 04:26:50','2021-11-05 04:26:50','This is a system generated quote and hence does not required any signature.','58',NULL,NULL),(23,'2021-11-08 08:49:01','2021-11-08 08:49:01','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','59',NULL,NULL),(24,'2021-11-08 08:49:01','2021-11-08 08:49:01','This is a system generated quote and hence does not required any signature.','59',NULL,NULL),(875,'2021-12-16 12:31:27','2021-12-16 12:31:27','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','76',NULL,NULL),(876,'2021-12-16 12:31:27','2021-12-16 12:31:27','This is a system generated quote and hence does not required any signature.','76',NULL,NULL),(877,'2021-12-17 11:14:11','2021-12-17 11:14:11','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','77',NULL,NULL),(878,'2021-12-17 11:14:11','2021-12-17 11:14:11','This is a system generated quote and hence does not required any signature.','77',NULL,NULL),(1741,'2022-01-16 14:58:27','2022-01-16 14:58:27','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','91',1,7),(1742,'2022-01-16 14:58:27','2022-01-16 14:58:27','This is a system generated quote and hence does not required any signature.','91',1,7),(1743,'2022-01-16 15:10:42','2022-01-16 15:10:42','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','92',1,7),(1744,'2022-01-16 15:10:42','2022-01-16 15:10:42','This is a system generated quote and hence does not required any signature.','92',1,7),(1747,'2022-01-16 15:40:55','2022-01-16 15:40:55','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','93',1,7),(1748,'2022-01-16 15:40:55','2022-01-16 15:40:55','This is a system generated quote and hence does not required any signature.','93',1,7),(1749,'2022-01-16 15:48:19','2022-01-16 15:48:19','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','94',1,7),(1750,'2022-01-16 15:48:19','2022-01-16 15:48:19','This is a system generated quote and hence does not required any signature.','94',1,7),(1755,'2022-01-16 16:17:09','2022-01-16 16:17:09','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','95',1,7),(1756,'2022-01-16 16:17:09','2022-01-16 16:17:09','This is a system generated quote and hence does not required any signature.','95',1,7),(1775,'2022-01-17 05:43:54','2022-01-17 05:43:54','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','96',1,7),(1776,'2022-01-17 05:43:54','2022-01-17 05:43:54','This is a system generated quote and hence does not required any signature.','96',1,7),(1777,'2022-01-17 07:58:18','2022-01-17 07:58:18','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','97',1,7),(1778,'2022-01-17 07:58:18','2022-01-17 07:58:18','This is a system generated quote and hence does not required any signature.','97',1,7),(1819,'2022-01-19 12:39:55','2022-01-19 12:39:55','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','103',1,7),(1820,'2022-01-19 12:39:55','2022-01-19 12:39:55','This is a system generated quote and hence does not required any signature.','103',1,7),(1821,'2022-01-19 12:40:26','2022-01-19 12:40:26','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','104',1,7),(1822,'2022-01-19 12:40:26','2022-01-19 12:40:26','This is a system generated quote and hence does not required any signature.','104',1,7),(1823,'2022-01-20 06:31:04','2022-01-20 06:31:04','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','100',1,7),(1824,'2022-01-20 06:31:04','2022-01-20 06:31:04','This is a system generated quote and hence does not required any signature.','100',1,7),(1879,'2022-01-20 09:51:36','2022-01-20 09:51:36','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','101',1,7),(1880,'2022-01-20 09:51:36','2022-01-20 09:51:36','This is a system generated quote and hence does not required any signature.','101',1,7),(2159,'2022-01-22 07:38:10','2022-01-22 07:38:10','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','110',1,7),(2160,'2022-01-22 07:38:10','2022-01-22 07:38:10','This is a system generated quote and hence does not required any signature.','110',1,7),(2161,'2022-01-22 07:55:58','2022-01-22 07:55:58','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','111',1,7),(2162,'2022-01-22 07:55:58','2022-01-22 07:55:58','This is a system generated quote and hence does not required any signature.','111',1,7),(2163,'2022-01-22 09:26:25','2022-01-22 09:26:25','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','112',1,7),(2164,'2022-01-22 09:26:25','2022-01-22 09:26:25','This is a system generated quote and hence does not required any signature.','112',1,7),(2485,'2022-01-24 07:25:41','2022-01-24 07:25:41','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','98',1,7),(2486,'2022-01-24 07:25:41','2022-01-24 07:25:41','This is a system generated quote and hence does not required any signature.','98',1,7),(2561,'2022-02-05 05:00:15','2022-02-05 05:00:15','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','117',1,7),(2562,'2022-02-05 05:00:15','2022-02-05 05:00:15','This is a system generated quote and hence does not required any signature.','117',1,7),(2577,'2022-02-05 05:19:15','2022-02-05 05:19:15','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','118',1,7),(2578,'2022-02-05 05:19:15','2022-02-05 05:19:15','This is a system generated quote and hence does not required any signature.','118',1,7),(2633,'2022-02-05 05:38:59','2022-02-05 05:38:59','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','113',1,7),(2634,'2022-02-05 05:38:59','2022-02-05 05:38:59','This is a system generated quote and hence does not required any signature.','113',1,7),(2637,'2022-02-05 05:40:10','2022-02-05 05:40:10','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','108',1,7),(2638,'2022-02-05 05:40:10','2022-02-05 05:40:10','This is a system generated quote and hence does not required any signature.','108',1,7),(2679,'2022-02-05 05:42:35','2022-02-05 05:42:35','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','107',1,7),(2680,'2022-02-05 05:42:35','2022-02-05 05:42:35','This is a system generated quote and hence does not required any signature.','107',1,7),(2683,'2022-02-05 05:43:25','2022-02-05 05:43:25','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','106',1,7),(2684,'2022-02-05 05:43:25','2022-02-05 05:43:25','This is a system generated quote and hence does not required any signature.','106',1,7),(2689,'2022-02-05 05:44:30','2022-02-05 05:44:30','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','102',1,7),(2690,'2022-02-05 05:44:30','2022-02-05 05:44:30','This is a system generated quote and hence does not required any signature.','102',1,7),(2699,'2022-02-05 05:47:10','2022-02-05 05:47:10','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','89',1,7),(2700,'2022-02-05 05:47:10','2022-02-05 05:47:10','This is a system generated quote and hence does not required any signature.','89',1,7),(2727,'2022-02-05 05:50:30','2022-02-05 05:50:30','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','88',1,7),(2728,'2022-02-05 05:50:30','2022-02-05 05:50:30','This is a system generated quote and hence does not required any signature.','88',1,7),(2731,'2022-02-05 05:52:13','2022-02-05 05:52:13','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','87',1,7),(2732,'2022-02-05 05:52:13','2022-02-05 05:52:13','This is a system generated quote and hence does not required any signature.','87',1,7),(2741,'2022-02-05 05:53:20','2022-02-05 05:53:20','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','86',1,7),(2742,'2022-02-05 05:53:20','2022-02-05 05:53:20','This is a system generated quote and hence does not required any signature.','86',1,7),(2745,'2022-02-05 05:53:49','2022-02-05 05:53:49','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','85',1,7),(2746,'2022-02-05 05:53:49','2022-02-05 05:53:49','This is a system generated quote and hence does not required any signature.','85',1,7),(2757,'2022-02-05 05:54:36','2022-02-05 05:54:36','Quoted prices are for complete lot, any partial order is subject to reconfirmation.','84',1,7),(2758,'2022-02-05 05:54:36','2022-02-05 05:54:36','This is a system generated quote and hence does not required any signature.','84',1,7),(2791,'2022-02-05 05:57:23','2022-02-05 05:57:23','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','83',1,7),(2792,'2022-02-05 05:57:23','2022-02-05 05:57:23','This is a system generated quote and hence does not required any signature.','83',1,7),(2797,'2022-02-05 05:58:20','2022-02-05 05:58:20','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','82',1,7),(2798,'2022-02-05 05:58:20','2022-02-05 05:58:20','This is a system generated quote and hence does not required any signature.','82',1,7),(2829,'2022-02-05 06:00:33','2022-02-05 06:00:33','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','81',1,7),(2830,'2022-02-05 06:00:33','2022-02-05 06:00:33','This is a system generated quote and hence does not required any signature.','81',1,7),(2835,'2022-02-05 06:01:57','2022-02-05 06:01:57','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','80',1,7),(2836,'2022-02-05 06:01:57','2022-02-05 06:01:57','This is a system generated quote and hence does not required any signature.','80',1,7),(2839,'2022-02-05 06:02:41','2022-02-05 06:02:41','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','79',1,7),(2840,'2022-02-05 06:02:41','2022-02-05 06:02:41','This is a system generated quote and hence does not required any signature.','79',1,7),(2845,'2022-02-05 06:03:16','2022-02-05 06:03:16','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','78',1,7),(2846,'2022-02-05 06:03:16','2022-02-05 06:03:16','This is a system generated quote and hence does not required any signature.','78',1,7),(2847,'2022-02-05 06:03:16','2022-02-05 06:03:16','We will deliver to the Site , however Gate Access/Passes , Unloading / Crane Arrangements will be from Client\'s Side. ','78',1,7),(2848,'2022-02-05 06:03:16','2022-02-05 06:03:16','In the event of delay in receiving the Shipment beyond business Hours/ Extension in Number of Working Days , Trip Losses incurred for Transport will be charged Additional  ','78',1,7),(2869,'2022-02-05 06:10:15','2022-02-05 06:10:15','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','75',1,7),(2870,'2022-02-05 06:10:15','2022-02-05 06:10:15','This is a system generated quote and hence does not required any signature.','75',1,7),(2891,'2022-02-05 06:12:12','2022-02-05 06:12:12','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','74',1,7),(2892,'2022-02-05 06:12:12','2022-02-05 06:12:12','This is a system generated quote and hence does not required any signature.','74',1,7),(2923,'2022-02-05 06:14:40','2022-02-05 06:14:40','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','73',1,7),(2924,'2022-02-05 06:14:40','2022-02-05 06:14:40','This is a system generated quote and hence does not required any signature.','73',1,7),(2963,'2022-02-05 06:18:07','2022-02-05 06:18:07','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','72',1,7),(2964,'2022-02-05 06:18:07','2022-02-05 06:18:07','This is a system generated quote and hence does not required any signature.','72',1,7),(2983,'2022-02-05 06:19:22','2022-02-05 06:19:22','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','71',1,7),(2984,'2022-02-05 06:19:22','2022-02-05 06:19:22','This is a system generated quote and hence does not required any signature.','71',1,7),(2985,'2022-02-05 06:19:45','2022-02-05 06:19:45','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','70',1,7),(2986,'2022-02-05 06:19:45','2022-02-05 06:19:45','This is a system generated quote and hence does not required any signature.','70',1,7),(3005,'2022-02-05 06:21:06','2022-02-05 06:21:06','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','69',1,7),(3006,'2022-02-05 06:21:06','2022-02-05 06:21:06','This is a system generated quote and hence does not required any signature.','69',1,7),(3021,'2022-02-05 06:22:09','2022-02-05 06:22:09','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','68',1,7),(3022,'2022-02-05 06:22:09','2022-02-05 06:22:09','This is a system generated quote and hence does not required any signature.','68',1,7),(3037,'2022-02-05 06:23:06','2022-02-05 06:23:06','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','67',1,7),(3038,'2022-02-05 06:23:06','2022-02-05 06:23:06','This is a system generated quote and hence does not required any signature.','67',1,7),(3045,'2022-02-05 06:23:53','2022-02-05 06:23:53','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','66',1,7),(3046,'2022-02-05 06:23:53','2022-02-05 06:23:53','This is a system generated quote and hence does not required any signature.','66',1,7),(3047,'2022-02-05 06:24:16','2022-02-05 06:24:16','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','65',1,7),(3048,'2022-02-05 06:24:16','2022-02-05 06:24:16','This is a system generated quote and hence does not required any signature.','65',1,7),(3051,'2022-02-05 06:26:08','2022-02-05 06:26:08','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','64',1,7),(3052,'2022-02-05 06:26:08','2022-02-05 06:26:08','This is a system generated quote and hence does not required any signature.','64',1,7),(3055,'2022-02-05 06:26:39','2022-02-05 06:26:39','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','63',1,7),(3056,'2022-02-05 06:26:39','2022-02-05 06:26:39','This is a system generated quote and hence does not required any signature.','63',1,7),(3057,'2022-02-05 06:27:09','2022-02-05 06:27:09','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','62',1,7),(3058,'2022-02-05 06:27:09','2022-02-05 06:27:09','This is a system generated quote and hence does not required any signature.','62',1,7),(3063,'2022-02-05 06:33:06','2022-02-05 06:33:06','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','114',1,7),(3064,'2022-02-05 06:33:06','2022-02-05 06:33:06','This is a system generated quote and hence does not required any signature.','114',1,7),(3075,'2022-02-10 06:15:21','2022-02-10 06:15:21','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','120',1,7),(3076,'2022-02-10 06:15:21','2022-02-10 06:15:21','This is a system generated quote and hence does not required any signature.','120',1,7),(3119,'2022-02-12 12:43:44','2022-02-12 12:43:44','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','121',1,7),(3120,'2022-02-12 12:43:44','2022-02-12 12:43:44','This is a system generated quote and hence does not required any signature.','121',1,7),(3121,'2022-02-13 15:07:05','2022-02-13 15:07:05','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','122',1,7),(3122,'2022-02-13 15:07:05','2022-02-13 15:07:05','This is a system generated quote and hence does not required any signature.','122',1,7),(3123,'2022-02-23 05:40:21','2022-02-23 05:40:21','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','126',1,9),(3124,'2022-02-23 05:40:21','2022-02-23 05:40:21','This is a system generated quote and hence does not required any signature.','126',1,9),(3125,'2022-02-23 16:27:59','2022-02-23 16:27:59','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','127',1,25),(3126,'2022-02-23 16:27:59','2022-02-23 16:27:59','This is a system generated quote and hence does not required any signature.','127',1,25),(3127,'2022-02-23 16:29:45','2022-02-23 16:29:45','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','128',1,25),(3128,'2022-02-23 16:29:45','2022-02-23 16:29:45','This is a system generated quote and hence does not required any signature.','128',1,25),(3129,'2022-02-27 21:06:45','2022-02-27 21:06:45','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','129',1,9),(3130,'2022-02-27 21:06:45','2022-02-27 21:06:45','This is a system generated quote and hence does not required any signature.','129',1,9),(3131,'2022-02-28 13:05:29','2022-02-28 13:05:29','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','130',1,25),(3132,'2022-02-28 13:05:29','2022-02-28 13:05:29','This is a system generated quote and hence does not required any signature.','130',1,25),(3135,'2022-02-28 18:20:54','2022-02-28 18:20:54','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','132',1,9),(3136,'2022-02-28 18:20:54','2022-02-28 18:20:54','This is a system generated quote and hence does not required any signature.','132',1,9),(3137,'2022-02-28 19:23:38','2022-02-28 19:23:38','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','133',1,9),(3138,'2022-02-28 19:23:38','2022-02-28 19:23:38','This is a system generated quote and hence does not required any signature.','133',1,9),(3161,'2022-03-02 09:55:43','2022-03-02 09:55:43','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','135',1,7),(3162,'2022-03-02 09:55:43','2022-03-02 09:55:43','This is a system generated quote and hence does not required any signature.','135',1,7),(3209,'2022-03-02 12:46:44','2022-03-02 12:46:44','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','134',1,7),(3210,'2022-03-02 12:46:44','2022-03-02 12:46:44','This is a system generated quote and hence does not required any signature.','134',1,7),(3215,'2022-03-08 13:42:22','2022-03-08 13:42:22','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','140',1,7),(3216,'2022-03-08 13:42:22','2022-03-08 13:42:22','This is a system generated quote and hence does not required any signature.','140',1,7),(3217,'2022-03-09 08:12:59','2022-03-09 08:12:59','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','141',1,7),(3218,'2022-03-09 08:12:59','2022-03-09 08:12:59','This is a system generated quote and hence does not required any signature.','141',1,7),(3219,'2022-03-09 12:06:11','2022-03-09 12:06:11','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','142',1,7),(3220,'2022-03-09 12:06:11','2022-03-09 12:06:11','This is a system generated quote and hence does not required any signature.','142',1,7),(3223,'2022-03-13 07:52:42','2022-03-13 07:52:42','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','99',1,7),(3224,'2022-03-13 07:52:42','2022-03-13 07:52:42','This is a system generated quote and hence does not required any signature.','99',1,7),(3225,'2022-03-13 08:20:30','2022-03-13 08:20:30','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','146',1,9),(3226,'2022-03-13 08:20:30','2022-03-13 08:20:30','This is a system generated quote and hence does not required any signature.','146',1,9),(3227,'2022-03-13 13:55:43','2022-03-13 13:55:43','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','147',1,9),(3228,'2022-03-13 13:55:43','2022-03-13 13:55:43','This is a system generated quote and hence does not required any signature.','147',1,9),(3229,'2022-03-14 12:53:01','2022-03-14 12:53:01','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','148',1,9),(3230,'2022-03-14 12:53:01','2022-03-14 12:53:01','This is a system generated quote and hence does not required any signature.','148',1,9),(3239,'2022-03-14 13:10:29','2022-03-14 13:10:29','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','105',1,7),(3240,'2022-03-14 13:10:29','2022-03-14 13:10:29','This is a system generated quote and hence does not required any signature.','105',1,7),(3265,'2022-03-14 14:18:46','2022-03-14 14:18:46','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','149',1,7),(3266,'2022-03-14 14:18:46','2022-03-14 14:18:46','This is a system generated quote and hence does not required any signature.','149',1,7),(3267,'2022-03-14 14:41:26','2022-03-14 14:41:26','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','150',1,9),(3268,'2022-03-14 14:41:26','2022-03-14 14:41:26','This is a system generated quote and hence does not required any signature.','150',1,9),(3271,'2022-03-14 14:57:37','2022-03-14 14:57:37','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','131',1,25),(3272,'2022-03-14 14:57:37','2022-03-14 14:57:37','This is a system generated quote and hence does not required any signature.','131',1,25),(3363,'2022-03-17 15:58:39','2022-03-17 15:58:39','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','151',1,7),(3364,'2022-03-17 15:58:39','2022-03-17 15:58:39','This is a system generated quote and hence does not required any signature.','151',1,7),(3387,'2022-03-20 12:03:11','2022-03-20 12:03:11','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','155',1,7),(3388,'2022-03-20 12:03:11','2022-03-20 12:03:11','This is a system generated quote and hence does not required any signature.','155',1,7),(3393,'2022-03-20 17:33:36','2022-03-20 17:33:36','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','152',1,7),(3394,'2022-03-20 17:33:36','2022-03-20 17:33:36','This is a system generated quote and hence does not required any signature.','152',1,7),(3399,'2022-03-20 18:56:06','2022-03-20 18:56:06','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','157',1,7),(3400,'2022-03-20 18:56:06','2022-03-20 18:56:06','This is a system generated quote and hence does not required any signature.','157',1,7),(3415,'2022-03-21 10:25:53','2022-03-21 10:25:53','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','116',1,7),(3416,'2022-03-21 10:25:53','2022-03-21 10:25:53','This is a system generated quote and hence does not required any signature.','116',1,7),(3421,'2022-03-23 06:16:44','2022-03-23 06:16:44','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','156',1,7),(3422,'2022-03-23 06:16:44','2022-03-23 06:16:44','This is a system generated quote and hence does not required any signature.','156',1,7),(3423,'2022-03-23 06:24:42','2022-03-23 06:24:42','Quoted prices are for complete lot, any partial order is subject to reconfirmation.','154',1,7),(3424,'2022-03-23 06:24:42','2022-03-23 06:24:42','This is a system generated quote and hence does not required any signature.','154',1,7),(3425,'2022-03-23 06:30:54','2022-03-23 06:30:54','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','159',1,7),(3426,'2022-03-23 06:30:54','2022-03-23 06:30:54','This is a system generated quote and hence does not required any signature.','159',1,7),(3427,'2022-03-23 06:34:17','2022-03-23 06:34:17','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','160',1,7),(3428,'2022-03-23 06:34:17','2022-03-23 06:34:17','This is a system generated quote and hence does not required any signature.','160',1,7),(3429,'2022-03-23 06:34:29','2022-03-23 06:34:29','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','161',1,7),(3430,'2022-03-23 06:34:29','2022-03-23 06:34:29','This is a system generated quote and hence does not required any signature.','161',1,7),(3431,'2022-03-23 12:48:08','2022-03-23 12:48:08','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','153',1,25),(3432,'2022-03-23 12:48:08','2022-03-23 12:48:08','This is a system generated quote and hence does not required any signature.','153',1,25),(3435,'2022-03-23 15:38:58','2022-03-23 15:38:58','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','162',1,7),(3436,'2022-03-23 15:38:58','2022-03-23 15:38:58','This is a system generated quote and hence does not required any signature.','162',1,7),(3439,'2022-03-23 16:10:54','2022-03-23 16:10:54','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','163',1,7),(3440,'2022-03-23 16:10:54','2022-03-23 16:10:54','This is a system generated quote and hence does not required any signature.','163',1,7),(3443,'2022-03-27 07:40:05','2022-03-27 07:40:05','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','164',1,7),(3444,'2022-03-27 07:40:05','2022-03-27 07:40:05','This is a system generated quote and hence does not required any signature.','164',1,7),(3455,'2022-03-27 14:18:12','2022-03-27 14:18:12','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','165',1,7),(3456,'2022-03-27 14:18:12','2022-03-27 14:18:12','This is a system generated quote and hence does not required any signature.','165',1,7),(3457,'2022-03-27 14:26:56','2022-03-27 14:26:56','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','166',1,7),(3458,'2022-03-27 14:26:56','2022-03-27 14:26:56','This is a system generated quote and hence does not required any signature.','166',1,7),(3459,'2022-03-27 14:37:12','2022-03-27 14:37:12','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','168',1,7),(3460,'2022-03-27 14:37:12','2022-03-27 14:37:12','This is a system generated quote and hence does not required any signature.','168',1,7),(3461,'2022-03-27 15:44:12','2022-03-27 15:44:12','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','167',1,7),(3462,'2022-03-27 15:44:12','2022-03-27 15:44:12','This is a system generated quote and hence does not required any signature.','167',1,7),(3463,'2022-03-28 06:39:24','2022-03-28 06:39:24','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','169',1,7),(3464,'2022-03-28 06:39:24','2022-03-28 06:39:24','This is a system generated quote and hence does not required any signature.','169',1,7),(3467,'2022-03-29 14:04:41','2022-03-29 14:04:41','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','170',1,7),(3468,'2022-03-29 14:04:41','2022-03-29 14:04:41','This is a system generated quote and hence does not required any signature.','170',1,7),(3473,'2022-03-31 09:54:27','2022-03-31 09:54:27','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','172',1,7),(3474,'2022-03-31 09:54:27','2022-03-31 09:54:27','This is a system generated quote and hence does not required any signature.','172',1,7),(3477,'2022-04-01 11:36:40','2022-04-01 11:36:40','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','171',1,7),(3478,'2022-04-01 11:36:40','2022-04-01 11:36:40','This is a system generated quote and hence does not required any signature.','171',1,7),(3479,'2022-04-01 12:30:59','2022-04-01 12:30:59','Quoted prices are for complete lot,any partial order is subject to reconfirmation.','173',1,7),(3480,'2022-04-01 12:30:59','2022-04-01 12:30:59','This is a system generated quote and hence does not required any signature.','173',1,7);
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` bigint(12) NOT NULL AUTO_INCREMENT,
  `heading` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `notification` text,
  `n_for` varchar(15) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parties`
--

DROP TABLE IF EXISTS `parties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parties` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firm_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firm_name_in_ar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registration_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registration_no_in_ar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_no_in_ar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `post_box_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `proviance` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `party_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fax` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `opening_balance` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit_limit` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit_days` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iban_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vendor_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `party_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `city_ar` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street_ar` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip_code_ar` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `proviance_ar` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_ar` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `payment_term` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete` int(11) DEFAULT '0',
  `mext` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lext` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `building_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `building_no_arr` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ext` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parties`
--

LOCK TABLES `parties` WRITE;
/*!40000 ALTER TABLE `parties` DISABLE KEYS */;
INSERT INTO `parties` VALUES (1,'SAUDI ARABIAN BAYTUR CONSTRUCTION CO.','شركة بيتور العربية السعودية للإنشاءات','12345678901',NULL,'300449479600003','٣٠٠٤٤٩٤٧٩٦٠٠٠٠٣',NULL,NULL,NULL,NULL,NULL,NULL,'Customer',NULL,'www.baytur.com.sa','/','0.00','250000.00','45',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00001','2021-08-31 02:32:36','2022-03-09 09:04:13',NULL,NULL,NULL,NULL,NULL,1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(2,'National Industrial Training Institute','المعهد الوطني للتدريب الصناعي',NULL,NULL,'300985071300003',NULL,'P.O. Box 550','Hofuf, Airport Road','Al-Ahsa','Eastern Province','Saudi Arabia','31982','Customer',NULL,NULL,'/','0.00','0.00','30',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00002','2021-08-31 02:34:33','2021-08-31 02:34:33',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(3,'King Abdullah Financial District  Development & Management Co.','تطوير مركز الملك عبدالله المالي',NULL,NULL,NULL,NULL,NULL,' ','Riyadh',' ','Saudi Arabia',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00003','2021-08-31 02:36:15','2021-08-31 02:36:15',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(4,'Al-Ajmaeen Chemicals Products Factory','مصنع الاجمين للمنتجات الكيماوية',NULL,NULL,'300409594500003',NULL,NULL,' ','Jubail','Eastern Province','Saudi Arabia',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00004','2021-08-31 02:37:59','2021-08-31 02:37:59',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(5,'Fresh Organic Food Est.','مؤسسة الأغذية العضوية الطازجة.',NULL,NULL,'310540036900003',NULL,NULL,' ',' ',' ','Saudi Arabia',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00005','2021-08-31 02:38:56','2021-08-31 02:38:56',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(6,'Food Fitness','اللياقة الغذائية',NULL,NULL,'301270668500003',NULL,NULL,' ',' ',' ','',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00006','2021-08-31 02:39:26','2021-08-31 02:39:26',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(7,'Sadf Trading & Development Company','صدف للتجارة',NULL,NULL,'300492283400003',NULL,NULL,' ',' ',' ','',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00007','2021-08-31 02:41:30','2021-08-31 02:41:30',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(8,'CATCO','كاتكو',NULL,NULL,NULL,NULL,NULL,' ',' ','Eastern Province','Saudi Arabia',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00008','2021-08-31 02:42:59','2021-08-31 02:42:59',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(9,'Amaco Arabia - INTERNAL','أماكو العربية - داخلي',NULL,NULL,NULL,NULL,NULL,' ',' ',' ','',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00009','2021-08-31 02:43:33','2021-08-31 02:43:33',NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(10,'TASNEE','TASNEE',NULL,NULL,NULL,NULL,'35579','Al Jubail Industrial City','Jubail','Eastern','Saudi Arabia','31961','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00010','2021-10-12 10:04:03','2021-10-12 10:04:03','الجبيل',NULL,'٣١٩٦١','الشرقية','الجبيل',1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(11,'M.E CONSTRUCTION','ME البناء',NULL,NULL,NULL,NULL,'1161','Prince Thamer Street','Al Khobar','Eastern','KSA','31952','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00011','2021-10-13 13:00:17','2022-03-09 09:05:26','Al Khobar','شارع الأمير ثامر','٣١٩٥٢','الشرقية','Al Khobar',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(13,'MIDAD HOLDING','????? ???????',NULL,NULL,NULL,NULL,NULL,NULL,'KHOBAR','EASTERN','KSA',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00013','2021-10-19 05:43:23','2021-10-19 13:20:08','KHOBAR',NULL,'null','???','KHOBAR',1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(16,'KASABA CONTRACTING','شركة القصبة للمقاولات',NULL,NULL,NULL,NULL,NULL,NULL,'Dammam/Khobhar','Eastern','KSA',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00016','2021-11-08 08:16:22','2022-02-02 05:18:17','الدمام / الخبر','',NULL,'الشرقية','الدمام / الخبر',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(19,'SINOPEC','سينوبيك',NULL,NULL,NULL,NULL,'32159','Eurovillage Compound','Al Khobar','Eastern','KSA','31952','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00019','2021-11-14 07:56:32','2021-11-14 07:56:32','Al Khobar',NULL,'٣١٩٥٢','الشرقية','Al Khobar',1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(25,'NATIONAL INDUSTRIAL TRAINING INSTITUTE','المعهد الوطني للتدريب الصناعي',NULL,NULL,'300985071300003','٣٠٠٩٨٥٠٧١٣٠٠٠٠٣','550','Airport Road','Al AHsa','Eastern','KSA','31982','Customer','96613595502',NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00025','2021-11-17 07:42:14','2022-03-09 09:04:39','Al AHsa','طريق المطار','٣١٩٨٢','الشرقية','Al AHsa',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(26,'SRACO','سراكو',NULL,NULL,NULL,NULL,NULL,' ','DAMMAM','EASTERN','KSA',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00026','2021-11-30 13:08:52','2021-11-30 13:08:52','الدمام',NULL,NULL,'شرق','الدمام',1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(27,'AL RASHID TRADING AND CONTRACTING COMPANY','شركة الراشد للتجارة والمقاولات','1010004739',NULL,'300056271710003','٣٠٠٠٥٦٢٧١٧١٠٠٠٣','307','King Saud Road','Riyadh','Emirate Of Riyadh','Saudi Arabia','12621','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00027','2021-12-16 07:46:40','2022-03-21 10:17:00','مدينة الرياض','طريق الملك سعود','١٢٦٢١','امارة الرياض','مدينة الرياض',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(28,'ARABIAN AXLES','اكسلس عربية',NULL,NULL,NULL,NULL,'7594',' ','Dammam','Eastern','','31472','Customer',NULL,'http://www.arabianaxles.com','/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00028','2021-12-19 16:21:59','2021-12-19 16:21:59','الدمام',NULL,'٣١٤٧٢','الشرقية','الدمام',1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(30,'PETROJET','بتروجيت',NULL,NULL,NULL,NULL,NULL,NULL,'Al Khobar','Eastern','KSA',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00030','2021-12-20 20:53:28','2022-02-02 05:16:25','Al Khobar','',NULL,'الشرقية','Al Khobar',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(32,'REDA HAZARD CONTROL TRADING & DEVELOPMENT  COMPANY FOR MACHINERY AND EQUIPMENT LTD.','شركة رضا لتجارة ومراقبة المخاطر للأجهزة والمعدات المحدودة',NULL,NULL,'300054456100003','٣٠٠٠٥٤٤٥٦١٠٠٠٠٣','2923','Dammam Express Highway','Al Khobar','Eastern Province','Saudi Arabia','31952','Customer','138570079',NULL,NULL,'0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00032','2021-12-27 08:40:17','2022-03-09 09:05:54','Al Khobar','طريق الدمام السريع','٣١٩٥٢','المنطقة الشرقية','Al Khobar',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(33,'PIPE & WELL O. & M. SERVICES CO.','شركة خدمات الأنابيب والآبار',NULL,NULL,NULL,NULL,NULL,'Al-Khalidiah Ash Shamaliyah  Unit No-7,','Dammam','Eastern Province','Saudi Arabia','32231','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00033','2022-01-03 10:06:34','2022-03-09 09:06:30','الدمام','Al-Khalidiah Ash Shamaliyah  Unit No-7,','٣٢٢٣١','المنطقة الشرقية','الدمام',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(34,'FIRST SOLUTION FURNITURE COMPANY','شركة فيرست سوليوشن للأثاث',NULL,NULL,'310722442400003','٣١٠٧٢٢٤٤٢٤٠٠٠٠٣',NULL,'Ash Shula','Dammam','Eastern Province','Saudi Arabia','34261','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00034','2022-01-05 08:35:04','2022-01-05 08:59:25','الدمام','الرماد شولا','٣٤٢٦١','المنطقة الشرقية','الدمام',1,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(35,'GLOBE PROJECTS SUPPORT CONT. EST','','2055123859',NULL,'300400187600003',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'C-00035','2022-01-10 12:41:42','2022-01-10 12:41:42',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(36,'GLOBE PROJECTS SUPPORT CONT. EST','مشروع GLOBE PROJECTS SUPPORT CONT. يكون','2055123859',NULL,'2055123859','٢٠٥٥١٢٣٨٥٩',NULL,'Jabal Street','Al Jubail','Eastern Province','Saudi Arabia','35514','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00036','2022-01-10 13:38:09','2022-01-10 13:38:09','Al Jubail','Jabal Street','٣٥٥١٤','المنطقة الشرقية','Al Jubail',1,0,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(37,'AMERICAN CASTING & MANUFACTURING CORP.','شركة الصب والتصنيع الأمريكية',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'USA',NULL,'Vendor',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00037','2022-01-16 06:34:41','2022-03-09 09:06:55',NULL,NULL,NULL,NULL,'',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(39,'MARAFIQ SAUR OPERATION & MAINTENANCE COMPANY','شركة مرافق سور للتشغيل والصيانة','2055014875',NULL,'300000419910003','٣٠٠٠٠٠٤١٩٩١٠٠٠٣','36777','Jubail Industrial City','Jubail','Eastern Province','Saudi Arabia','31961','Customer','966133429396',NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00039','2022-01-16 15:04:22','2022-01-16 15:04:22','الجبيل','مدينة الجبيل الصناعية','٣١٩٦١','المنطقة الشرقية','الجبيل',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(40,'COMPREHENSIVE ASSESSMENT TRADING CORP.','شركة التقييم الشامل للتجارة',NULL,NULL,NULL,NULL,'2784',NULL,'Dammam','Eastern Province','Saudi Arabia','32416','Customer','966138346737',NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00040','2022-01-17 14:55:10','2022-03-09 09:08:00','الدمام',NULL,'٣٢٤١٦','المنطقة الشرقية','الدمام',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(41,'ARWADA TRADING COMPANY','شركة اروادة التجارية','1010318232',NULL,'310151183500003','٣١٠١٥١١٨٣٥٠٠٠٠٣',NULL,NULL,NULL,'Eastern Province','Saudi Arabia',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00041','2022-01-17 15:23:14','2022-03-09 09:08:28',NULL,NULL,NULL,'المنطقة الشرقية','',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(42,'FOOD FITNESS','لياقة الطعام',NULL,NULL,'301270668500003','٣٠١٢٧٠٦٦٨٥٠٠٠٠٣',NULL,'','','','',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00042','2022-01-24 13:40:02','2022-01-24 13:40:02','','',NULL,'','',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(43,'SEVENSTAR MODERN INDUSTRIES FACTORY','مصنع سفن ستار للصناعات الحديثة','2050218852',NULL,'300502226500003','٣٠٠٥٠٢٢٢٦٥٠٠٠٠٣','72244','Dammam Jubail Highway','Dammam','Eastern Province','Saudi Arabia','31518','Vendor','966138501003',NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00043','2022-01-26 06:05:41','2022-01-26 06:05:41','الدمام','طريق الدمام الجبيل السريع','٣١٥١٨','المنطقة الشرقية','الدمام',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(45,'POWER TOOLS DISTRIBUTION CENTER','مركز توزيع العدد الكهربائية',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Vendor',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00045','2022-02-22 09:05:38','2022-03-09 09:10:38',NULL,NULL,NULL,NULL,NULL,1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(46,'SAUDI ARABIAN OIL COMPANY','شركة الزيت العربية السعودية',NULL,NULL,NULL,NULL,NULL,NULL,'Shaybah',NULL,'Saudi Arabia',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00046','2022-02-23 05:26:22','2022-03-09 09:11:08','شيبة',NULL,NULL,NULL,'شيبة',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(47,'TECNIMONT ARABIA','تكنيمونت أرابيا',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00047','2022-03-08 13:24:52','2022-03-08 13:24:52',NULL,NULL,NULL,NULL,NULL,1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(48,'DRAGON POWER','عصائر قوة التنين لتقديم المشروبات','2050219794',NULL,'310991713800003','٣١٠٩٩١٧١٣٨٠٠٠٠٣',NULL,'4827 KING SAUD ROAD','DAMMAM','EASTERN PROVINCE','SAUDI ARABIA','32414','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00048','2022-03-08 13:52:01','2022-03-08 13:55:08','الدمام','4827 طريق الملك سعود','٣٢٤١٤','المنطقة الشرقية','الدمام',3,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(49,'SANA PASTRIES','مؤسسه تميم نمشان الدوسري للمقاولات',NULL,NULL,'301035767100003','٣٠١٠٣٥٧٦٧١٠٠٠٠٣',NULL,NULL,'DAMMAM','EASTERN PROVINCE','SAUDI ARABIA','32253','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00049','2022-03-08 13:53:48','2022-03-08 13:56:46','الدمام',NULL,'٣٢٢٥٣','المنطقة الشرقية','الدمام',3,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(50,'SAUDI CATERING & CONTRACTING CO.','الشركة السعودية للتموين والمقاولات.',NULL,NULL,NULL,NULL,NULL,NULL,'Khobar','Eastern','Ksa',NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00050','2022-03-14 12:49:01','2022-03-14 12:49:01','khobar',NULL,NULL,'الشرقية','المملكة العربية السعودية',1,9,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(51,'SHANDONGTIEJUN ELECTRIC POWER ENGINEERING CO. LTD','شركة شاندونغتيجون المحدودة لهندسة الطاقة الكهربائية',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00051','2022-03-14 13:16:19','2022-03-14 13:16:19',NULL,NULL,NULL,NULL,NULL,1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(52,'AMACO - ENGINEERING DIVISION','أماكو - القسم الهندسي',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00052','2022-03-15 13:56:31','2022-03-15 13:56:31',NULL,NULL,NULL,NULL,NULL,1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(54,'MIDDLE EAST BATTERY COMPANY','شركة الشرق الأوسط للبطاريات','2050030781',NULL,'300455786500003','٣٠٠٤٥٥٧٨٦٥٠٠٠٠٣','13441','2nd Industrial Area','Dammam','Eastern Province','Saudi Arabia','31493','Customer',NULL,NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00054','2022-03-20 10:00:04','2022-03-20 10:00:04','الدمام','المنطقة الصناعية الثانية','٣١٤٩٣','المنطقة الشرقية','المملكة العربية السعودية',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(55,'YUSUF BIN AHMED KANOO COMPANY LIMITED','شركة يوسف بن أحمد كانو المحدودة','2050000443',NULL,'300420892310003','٣٠٠٤٢٠٨٩٢٣١٠٠٠٣',NULL,'Building No. 5315','Dammam','Eastern Province','Saudi Arabia','32241','Vendor','966550501458',NULL,'/','0.00','0.00','0',NULL,NULL,NULL,NULL,NULL,'AMCT-PC-00055','2022-03-22 08:30:21','2022-03-22 08:30:21','الدمام','مبنى رقم 5315','٣٢٢٤١','المنطقة الشرقية','المملكة العربية السعودية',1,7,NULL,0,NULL,NULL,NULL,NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `parties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `party_banks`
--

DROP TABLE IF EXISTS `party_banks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `party_banks` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `account_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iban_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `delete` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `party_banks`
--

LOCK TABLES `party_banks` WRITE;
/*!40000 ALTER TABLE `party_banks` DISABLE KEYS */;
INSERT INTO `party_banks` VALUES (1,35,'08700000097404','SA8110000008700000097404','Saudi National Bank',NULL,'2022-01-10 12:41:42','2022-01-10 12:41:42',NULL,NULL,0),(2,43,'SEVENSTAR STEEL & RUBBER INDUSTRIES','SA1280000255608010176917','AL RAJHI BANK','DAMMAM','2022-01-26 06:05:41','2022-01-26 06:05:41',1,7,0),(3,55,'044006864001','SA6645000000044006864001','SABB','DAMMAM MAIN','2022-03-22 08:30:21','2022-03-22 08:30:21',1,7,0);
/*!40000 ALTER TABLE `party_banks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `party_divisions`
--

DROP TABLE IF EXISTS `party_divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `party_divisions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `party_id` bigint(20) DEFAULT NULL,
  `vendor_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `party_divisions`
--

LOCK TABLES `party_divisions` WRITE;
/*!40000 ALTER TABLE `party_divisions` DISABLE KEYS */;
INSERT INTO `party_divisions` VALUES (1,'2021-09-21 05:12:33','2021-09-21 05:12:33',24,1,'AMCT-00001'),(2,'2021-10-05 07:49:34','2021-10-05 07:49:34',24,16,'AMCT-00016'),(3,'2021-10-05 07:49:34','2021-10-05 07:49:34',25,16,'AMCM-00016'),(4,'2021-10-12 10:04:03','2021-10-12 10:04:03',24,10,'AMCT-00010'),(5,'2021-10-13 13:00:17','2021-10-13 13:00:17',24,11,'AMCT-00011'),(6,'2021-10-19 13:20:08','2021-10-19 13:20:08',24,13,'AMCT-00013'),(7,'2021-11-04 07:02:17','2021-11-04 07:02:17',24,14,'AMCT-00014'),(8,'2021-11-14 07:56:32','2021-11-14 07:56:32',24,19,'AMCT-00019'),(9,'2021-11-16 21:58:40','2021-11-16 21:58:40',26,20,'AMCP-00020'),(10,'2021-11-16 22:04:01','2021-11-16 22:04:01',26,21,'AMCP-00021'),(11,'2021-11-16 22:07:27','2021-11-16 22:07:27',26,22,'AMCP-00022'),(12,'2021-11-16 22:09:57','2021-11-16 22:09:57',24,23,'AMCT-00023'),(13,'2021-11-17 07:42:14','2021-11-17 07:42:14',24,25,'AMCT-00025'),(14,'2021-11-30 13:08:52','2021-11-30 13:08:52',24,26,'AMCT-00026'),(15,'2021-12-16 07:46:40','2021-12-16 07:46:40',24,27,'AMCT-00027'),(16,'2021-12-19 16:21:59','2021-12-19 16:21:59',24,28,'AMCT-00028'),(17,'2021-12-19 20:56:46','2021-12-19 20:56:46',24,29,'AMCT-00029'),(18,'2021-12-20 20:53:28','2021-12-20 20:53:28',24,30,'AMCT-00030'),(19,'2021-12-27 08:40:17','2021-12-27 08:40:17',24,32,'AMCT-00032'),(20,'2022-01-03 10:06:34','2022-01-03 10:06:34',24,33,'AMCT-00033'),(21,'2022-01-05 08:35:04','2022-01-05 08:35:04',24,34,'AMCT-00034'),(22,'2022-01-10 13:38:09','2022-01-10 13:38:09',24,36,'AMCT-00036'),(23,'2022-01-16 06:34:42','2022-01-16 06:34:42',24,37,'AMCT-00037'),(24,'2022-01-16 14:53:18','2022-01-16 14:53:18',24,38,'AMCT-00038'),(25,'2022-01-16 15:04:22','2022-01-16 15:04:22',24,39,'AMCT-00039'),(26,'2022-01-17 14:55:10','2022-01-17 14:55:10',24,40,'AMCT-00040'),(27,'2022-01-17 15:23:14','2022-01-17 15:23:14',24,41,'AMCT-00041'),(28,'2022-01-24 13:40:02','2022-01-24 13:40:02',26,42,'AMCP-00042'),(29,'2022-01-26 06:05:41','2022-01-26 06:05:41',24,43,'AMCT-00043'),(30,'2022-02-02 04:12:54','2022-02-02 04:12:54',24,44,'AMCT-00044'),(31,'2022-02-22 09:05:38','2022-02-22 09:05:38',24,45,'AMCT-00045'),(32,'2022-02-23 05:26:22','2022-02-23 05:26:22',24,46,'AMCT-00046'),(33,'2022-03-08 13:24:52','2022-03-08 13:24:52',24,47,'AMCT-00047'),(34,'2022-03-08 13:52:01','2022-03-08 13:52:01',26,48,'AMCP-00048'),(35,'2022-03-08 13:53:48','2022-03-08 13:53:48',26,49,'AMCP-00049'),(36,'2022-03-14 12:49:01','2022-03-14 12:49:01',24,50,'AMCT-00050'),(37,'2022-03-14 13:16:19','2022-03-14 13:16:19',24,51,'AMCT-00051'),(38,'2022-03-15 13:56:31','2022-03-15 13:56:31',24,52,'AMCT-00052'),(39,'2022-03-20 09:22:45','2022-03-20 09:22:45',24,53,'AMCT-00053'),(40,'2022-03-20 10:00:04','2022-03-20 10:00:04',24,54,'AMCT-00054'),(41,'2022-03-22 08:30:21','2022-03-22 08:30:21',24,55,'AMCT-00055');
/*!40000 ALTER TABLE `party_divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_accounts`
--

DROP TABLE IF EXISTS `payment_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_accounts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `bank_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `balance` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_accounts`
--

LOCK TABLES `payment_accounts` WRITE;
/*!40000 ALTER TABLE `payment_accounts` DISABLE KEYS */;
INSERT INTO `payment_accounts` VALUES (13,'2021-03-16 06:35:07','2021-03-16 06:35:07','Asif',8,NULL,NULL,NULL,'personal'),(14,'2021-03-16 12:43:51','2021-03-16 12:43:51','Shazli',9,NULL,NULL,NULL,'personal'),(15,'2021-03-16 12:44:51','2021-03-16 12:44:51','Jamsheed',10,NULL,NULL,NULL,'personal'),(16,'2021-03-16 12:45:34','2021-08-14 07:12:48','Ansif',11,NULL,NULL,NULL,'personal'),(17,'2021-03-17 02:34:09','2021-08-14 07:06:57','Danish',7,NULL,NULL,NULL,'personal'),(20,'2021-08-06 07:12:15','2021-08-14 07:13:41','Salman',13,NULL,NULL,NULL,'personal'),(24,'2021-08-17 08:23:17','2022-02-18 06:16:15','Trading Division',NULL,NULL,'1','0','division'),(25,'2021-08-17 08:23:17','2021-08-17 08:23:17','Manufacturer',NULL,NULL,'2','0','division'),(26,NULL,'2022-02-18 06:18:43','Printing Division',NULL,NULL,'3','0','division'),(27,'2021-08-17 08:23:17','2021-08-17 08:23:17','HQ',NULL,NULL,'4','0','division'),(33,'2021-09-02 15:02:22','2021-09-02 15:02:22','Imran',19,NULL,NULL,NULL,'personal'),(34,'2021-10-12 09:55:20','2021-10-12 09:55:20','Shazli',22,NULL,NULL,'0','personal'),(35,'2022-01-03 07:28:57','2022-01-03 07:45:33','Ansi',25,NULL,NULL,'0','personal');
/*!40000 ALTER TABLE `payment_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission_denied`
--

DROP TABLE IF EXISTS `permission_denied`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission_denied` (
  `pd_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `u_id` bigint(20) DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`pd_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission_denied`
--

LOCK TABLES `permission_denied` WRITE;
/*!40000 ALTER TABLE `permission_denied` DISABLE KEYS */;
INSERT INTO `permission_denied` VALUES (34,9,'Permission','lock','Module','2022-01-11 06:43:09','2022-01-11 06:43:09'),(35,9,'Users','lock','Module','2022-01-11 06:43:11','2022-01-11 06:43:11'),(36,9,'Employees','lock','Module','2022-01-11 06:43:26','2022-01-11 06:43:26'),(37,9,'Account','lock','Module','2022-01-11 11:29:09','2022-01-11 11:29:09'),(38,9,'Dashboard Account Statements','lock','Component','2022-01-11 11:32:50','2022-01-11 11:32:50'),(40,27,'Users','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(41,27,'Permission','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(42,27,'Modules','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(43,27,'Qr','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(44,27,'Account','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(45,27,'Account Dashboard','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(46,27,'Expenses','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(47,27,'Transaction','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(48,27,'Statements','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(49,27,'Vendor','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(50,27,'Customer','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(51,27,'Master','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18'),(52,27,'Personal','lock','Module','2022-01-16 09:16:18','2022-01-16 09:16:18');
/*!40000 ALTER TABLE `permission_denied` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_prices`
--

DROP TABLE IF EXISTS `product_prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_prices` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `party_id` bigint(20) unsigned NOT NULL,
  `price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_prices`
--

LOCK TABLES `product_prices` WRITE;
/*!40000 ALTER TABLE `product_prices` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) unsigned DEFAULT NULL,
  `division_id` bigint(20) unsigned DEFAULT NULL,
  `manufacturer_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_in_ar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `unit_of_measure` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hsn_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `initial_quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `minimum_quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `delete` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,NULL,NULL,NULL,'PLC Troubleshooting Per Day Charges',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2021-12-27 08:27:31','2021-12-27 08:27:31',1,NULL,0),(2,NULL,NULL,NULL,'PLC Troubleshooting Per Day Charges',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2021-12-27 08:43:02','2021-12-27 08:43:02',1,NULL,0),(3,NULL,NULL,NULL,'Mob/De-Mob/along with testing equipment',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2021-12-27 10:15:18','2021-12-27 10:15:18',1,NULL,0),(4,NULL,NULL,NULL,'PLC Troubleshooting Per Day Charges',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2021-12-28 11:31:38','2021-12-28 11:31:38',1,NULL,0),(5,NULL,NULL,NULL,'Mob/De-Mob/Along With Testing Equipment',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2021-12-28 11:31:38','2021-12-28 11:31:38',1,NULL,0),(6,NULL,NULL,NULL,'Concealed electrical cabling for table lamps',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2022-01-05 08:38:30','2022-01-05 08:38:30',1,NULL,0),(7,NULL,NULL,NULL,'Installation Charges',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2022-01-05 08:38:31','2022-01-05 08:38:31',1,NULL,0),(8,NULL,NULL,NULL,'Plastic Seals , Make : ACM , COO : USA, Model : HS-115 , Printed',NULL,NULL,'Plastic Seals','EA',NULL,NULL,'0',NULL,'2022-01-10 05:06:19','2022-01-10 05:06:19',1,NULL,0),(9,NULL,NULL,NULL,'Cup Brush Osborm M14 65MM \nMade in Germany',NULL,NULL,'Cup Brush Osborm M14 65MM made in Germany','EA',NULL,NULL,'0',NULL,'2022-01-10 08:31:10','2022-01-10 08:31:10',1,NULL,0),(10,NULL,NULL,NULL,'Cup Brush Osborm M14 80MM made in Germany',NULL,NULL,'Cup Brush Osborm M14 80MM made in Germany','EA',NULL,NULL,'0',NULL,'2022-01-10 08:31:10','2022-01-10 08:31:10',1,NULL,0),(11,NULL,NULL,NULL,'Strap Clamp/Buckle, SS201, 1/2\'\', Band-it, UK\n(100 pcs/Box)',NULL,NULL,'Strap Clamp/Buckle, SS201, 1/2\'\', Band-it, UK','BX',NULL,NULL,'0',NULL,'2022-01-10 08:31:10','2022-01-10 08:31:10',1,NULL,0),(12,NULL,NULL,NULL,'Strap Roll/Buckle, SS201, 1/2\'\', C20499, Band-it, UK\n(30 Mtr/Roll)',NULL,NULL,'Strap Roll/Buckle, SS201, 1/2\'\', C20499, Band-it, UK','BX',NULL,NULL,'0',NULL,'2022-01-10 08:31:10','2022-01-10 08:31:10',1,NULL,0),(13,NULL,NULL,NULL,'3 x 2.5 MM, Rubber Cable, Black ',NULL,NULL,'Rubber Cable 2.5mm x 3 Core\nBlack, France (90Mtr/Roll)','MTR',NULL,NULL,'0',NULL,'2022-01-10 08:31:10','2022-01-10 08:31:10',1,NULL,0),(14,NULL,NULL,NULL,'3 x 4 MM, Rubber Cable, Nexans\nMade In France',NULL,NULL,'Rubber Cable 3x4 MM \nNexas, France (100Mtr/Roll)','MTR',NULL,NULL,'0',NULL,'2022-01-10 08:31:10','2022-01-10 08:31:10',1,NULL,0),(15,NULL,NULL,NULL,'Canon image Runner C3125i,A3 Multification color printer.',NULL,NULL,'A3 Printer ','EA',NULL,NULL,'0',NULL,'2022-01-10 16:06:58','2022-01-10 16:06:58',1,7,0),(16,NULL,NULL,NULL,'Canon Pixma TR4540, All in one office color printer',NULL,NULL,'Office desk Printer','EA',NULL,NULL,'0',NULL,'2022-01-10 16:06:58','2022-01-10 16:06:58',1,7,0),(17,NULL,NULL,NULL,'a',NULL,NULL,'Stanley 5pc File Set (8\'\' Mill File, 6\'\' Round File, 6\'\' Slim Taper File, 8\'\' 4-in-1 File, Interchangeable Handle), 22-314','EA',NULL,NULL,'0',NULL,'2022-01-12 15:42:17','2022-01-12 15:42:17',1,7,0),(18,NULL,NULL,NULL,'1',NULL,NULL,'Knipex, Screwdriver for slotter screws \nLength: 202mm, 98 20 40','EA',NULL,NULL,'0',NULL,'2022-01-12 15:42:17','2022-01-12 15:42:17',1,7,0),(19,NULL,NULL,NULL,'Cargo Seal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2022-01-16 07:00:57','2022-01-16 07:00:57',1,7,0),(20,NULL,NULL,NULL,'kjgk',NULL,NULL,'','',NULL,NULL,'0',NULL,'2022-01-16 15:10:42','2022-01-16 15:10:42',1,7,0),(21,NULL,NULL,NULL,'hjjjj',NULL,NULL,'fggg','','Non inventory',NULL,'0',NULL,'2022-01-16 15:40:42','2022-01-16 15:40:42',1,7,0),(22,NULL,NULL,NULL,'xfbdf',NULL,NULL,'O-Ring flat Thickness 12 mm','EA','Non inventory',NULL,'0',NULL,'2022-01-16 15:56:16','2022-01-16 15:56:16',1,7,0),(23,NULL,NULL,NULL,'Fabrication of Flat Ring\n\nSize: 12 x 23 x 780 (mm)\nThickness x Width x Dia\nApplication FRP Flange\nMaterial : NBR/EPDM Rubber\nHardness : 70~75 ShA\n',NULL,NULL,'O-Ring Flat\nThickness: 12 mm\nWidth: 23 mm\nDia: 780 mm\nMaterial: NBR/EPDM Rubber\nHardness: 70-75 SHA','EA','Non inventory',NULL,'0',NULL,'2022-01-16 16:22:19','2022-01-16 16:22:19',1,7,0),(24,NULL,NULL,NULL,'pipes',NULL,NULL,'pipes','MLT','Non inventory',NULL,'0',NULL,'2022-01-17 07:58:18','2022-01-17 07:58:18',1,7,0),(25,NULL,NULL,NULL,'Plastic pipe welding machine\nMade in Turkey',NULL,NULL,'Plastic pipe welding machine','EA','Non inventory',NULL,'0',NULL,'2022-01-17 13:57:37','2022-01-17 13:57:37',1,7,0),(26,NULL,NULL,NULL,'Plastic pipe welding machine\nMade in China',NULL,NULL,'Plastic pipe welding machine','EA','Non inventory',NULL,'0',NULL,'2022-01-17 13:57:37','2022-01-17 13:57:37',1,7,0),(27,NULL,NULL,NULL,'Rotor',NULL,NULL,'Rotor','','Non inventory',NULL,'0',NULL,'2022-01-17 14:18:48','2022-01-17 14:18:48',1,7,0),(28,NULL,NULL,NULL,'Rotor switch',NULL,NULL,'Rotor Switch','','Non inventory',NULL,'0',NULL,'2022-01-17 14:18:48','2022-01-17 14:18:48',1,7,0),(29,NULL,NULL,NULL,'Zone SIGN:\n3mm Aluminum with white color Powder Coating Text Screen Painted\nSize: 23x10 cm (various Number) 6mm Two hole as Per Design',NULL,NULL,'Plate Material:  Aluminum\nPlate Size – 23cm x 10cm x 3cm    \n6 mm size two Hole  to be in center.\nPaint – Water proof, Permanent and Reflective color.','EA','Non inventory',NULL,'0',NULL,'2022-01-17 15:00:52','2022-01-17 15:00:52',1,7,0),(30,NULL,NULL,NULL,'Plywood\nDimension: 1.2 m x 2.4 m x 18mm thickness\nMade in China',NULL,NULL,'Plywood - 1.2 x 2.4m (4ft x 8ft) of 18mm thick exterior marine grade','EA','Non inventory',NULL,'0',NULL,'2022-01-17 15:25:14','2022-01-17 15:25:14',1,7,0),(31,NULL,NULL,NULL,'Plywood 18 mm thick INDONESIAN , 2.44 x 1.22 m',NULL,NULL,'Plywood 18 mm thick INDONESIAN or\nequivalent with dimension\n2.44 x 1.22 m','PCS','Non inventory',NULL,'0',NULL,'2022-01-18 05:17:51','2022-01-18 05:17:51',1,7,0),(32,NULL,NULL,NULL,'Timber 2” x 4 “ with length 4 m , AUSTRIA',NULL,NULL,'Timber 2” x 4 “ with length 4 m','PCS','Non inventory',NULL,'0',NULL,'2022-01-18 05:17:51','2022-01-18 05:17:51',1,7,0),(33,NULL,NULL,NULL,'Timber 1” x 4 “ with length 4 m, AUSTRIA',NULL,NULL,'Timber 1” x 4 “ with length 4 m','PCS','Non inventory',NULL,'0',NULL,'2022-01-18 05:17:51','2022-01-18 05:17:51',1,7,0),(34,NULL,NULL,NULL,'Cup Brush Osborm M14 65MM (Model Red) Made in Germany',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'2022-01-18 05:57:26','2022-01-18 05:57:26',1,7,0),(35,NULL,NULL,NULL,'b',NULL,NULL,'a','MTR','Non inventory',NULL,'0',NULL,'2022-01-19 12:39:55','2022-01-19 12:39:55',1,7,0),(36,NULL,NULL,NULL,'Schneider Panel Board 36 Branch 160 APMS',NULL,NULL,'Schneider Panel Board 36 Branch 160 APMS','EA','Non inventory',NULL,'0',NULL,'2022-01-20 10:02:43','2022-01-20 10:02:43',1,7,0),(37,NULL,NULL,NULL,'6\'\' CS pipe, SCH 80 (6 mtr)',NULL,NULL,'6\'\' Diameter, Carbon Steel pipe sch 80(6 meter length)','EA','Non inventory',NULL,'0',NULL,'2022-01-20 10:02:43','2022-01-20 10:02:43',1,7,0),(38,NULL,NULL,NULL,'6\'\' CS pipe, SCH 80, 6 mtr.\nUkrain',NULL,NULL,'6\" NB \\ Sch 80 \\ Carbon Steel pipe','EA','Non inventory',NULL,'0',NULL,'2022-01-20 10:19:47','2022-01-20 10:19:47',1,7,0),(39,NULL,NULL,NULL,'Welding Electrodes Ø 3.2mm E 7018\nKISWAL - Korea',NULL,NULL,'Welding Electrodes Ø 3.2mm E 7018','KG','Non inventory',NULL,'0',NULL,'2022-01-20 10:19:47','2022-01-20 10:19:47',1,7,0),(40,NULL,NULL,NULL,'Pressure Calibrator Model No. 718-300G\nRange: 20 to 600\nBRAND: GE',NULL,NULL,'Pressure Calibrator Model No. 718-300G\nRange: 20 to 600','EA','Non inventory',NULL,'0',NULL,'2022-01-20 11:07:22','2022-01-20 11:07:22',1,7,0),(41,NULL,NULL,NULL,' fggg',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:43:01','2022-01-20 11:43:01',1,7,0),(42,NULL,NULL,NULL,' Welding Electrodes  Ø 2.5mm E 7018',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:49:34','2022-01-20 11:49:34',1,7,0),(43,NULL,NULL,NULL,'  Welding Electrodes  Ø 3.2mm E 6010',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:49:34','2022-01-20 11:49:34',1,7,0),(44,NULL,NULL,NULL,' 5* grinding disk  ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:49:34','2022-01-20 11:49:34',1,7,0),(45,NULL,NULL,NULL,'  5* cutting disk ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:49:34','2022-01-20 11:49:34',1,7,0),(46,NULL,NULL,NULL,' wire brush ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:49:34','2022-01-20 11:49:34',1,7,0),(47,NULL,NULL,NULL,' 5* power brush',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(48,NULL,NULL,NULL,' Victor Gas cutting  nozzle for cutting 1/2\" thickness',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(49,NULL,NULL,NULL,'spark lighter ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(50,NULL,NULL,NULL,' hypertherm power max 85 tungsten electrode (for plasma machine )',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(51,NULL,NULL,NULL,' leather welding gloves',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(52,NULL,NULL,NULL,' leather apron',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(53,NULL,NULL,NULL,'ear plug ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(54,NULL,NULL,NULL,'dust masks 3m N95',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 11:59:45','2022-01-20 11:59:45',1,7,0),(55,NULL,NULL,NULL,' safety glasses',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:43:29','2022-01-20 12:43:29',1,7,0),(56,NULL,NULL,NULL,'safety glasses',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:48:28','2022-01-20 12:48:28',1,7,0),(57,NULL,NULL,NULL,'Face shield replacement visor',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:48:28','2022-01-20 12:48:28',1,7,0),(58,NULL,NULL,NULL,' Welding helmet',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:48:28','2022-01-20 12:48:28',1,7,0),(59,NULL,NULL,NULL,' Clear lens for welding screen',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:48:28','2022-01-20 12:48:28',1,7,0),(60,NULL,NULL,NULL,' Filter lens for welding screen - shade 11',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:48:28','2022-01-20 12:48:28',1,7,0),(61,NULL,NULL,NULL,' Filter lens for welding screen - shade 10',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-20 12:48:28','2022-01-20 12:48:28',1,7,0),(62,NULL,NULL,NULL,'bnnnn',NULL,NULL,'ghhh','MLT','Non inventory',NULL,'0',NULL,'2022-01-22 07:36:54','2022-01-22 07:36:54',1,7,0),(63,NULL,NULL,NULL,'Screws 6 x 50 mm ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 07:56:42','2022-01-22 07:56:42',1,7,0),(64,NULL,NULL,NULL,'',NULL,NULL,'Screws','','Non inventory',NULL,'0',NULL,'2022-01-22 09:28:31','2022-01-22 09:28:31',1,7,0),(65,NULL,NULL,NULL,'Spirit Level',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:38:00','2022-01-22 09:38:00',1,7,0),(66,NULL,NULL,NULL,'Generator high pressure oil pipe',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:38:00','2022-01-22 09:38:00',1,7,0),(67,NULL,NULL,NULL,'plate tamper oil seal',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:38:00','2022-01-22 09:38:00',1,7,0),(68,NULL,NULL,NULL,'Air conditioner switch',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:38:00','2022-01-22 09:38:00',1,7,0),(69,NULL,NULL,NULL,'Female socket',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:39:56','2022-01-22 09:39:56',1,7,0),(70,NULL,NULL,NULL,'Mobile power box',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:39:56','2022-01-22 09:39:56',1,7,0),(71,NULL,NULL,NULL,'Leakage switch',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:39:56','2022-01-22 09:39:56',1,7,0),(72,NULL,NULL,NULL,'Electrical waterproof tape',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:39:56','2022-01-22 09:39:56',1,7,0),(73,NULL,NULL,NULL,'Switch track',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:39:56','2022-01-22 09:39:56',1,7,0),(74,NULL,NULL,NULL,'battery clip',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(75,NULL,NULL,NULL,'Steel ruler',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(76,NULL,NULL,NULL,'Ash bucket',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(77,NULL,NULL,NULL,'Thermometer ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(78,NULL,NULL,NULL,'FLY KILLER ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(79,NULL,NULL,NULL,'HEAT TUBE ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(80,NULL,NULL,NULL,'WATER HEATER ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(81,NULL,NULL,NULL,'N95 MASK',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(82,NULL,NULL,NULL,'MEDICAL DISPOAIABLE FACE MASK ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(83,NULL,NULL,NULL,'DISPOAIABLE  COVERALL ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(84,NULL,NULL,NULL,'GOEELES ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(85,NULL,NULL,NULL,'FACE SHEILD ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(86,NULL,NULL,NULL,'SANITIZER ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(87,NULL,NULL,NULL,'SOPROPYL ALCOHOL ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(88,NULL,NULL,NULL,'LEVEL MACHINE ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-22 09:44:41','2022-01-22 09:44:41',1,7,0),(89,NULL,NULL,NULL,'MATERIAL: PP - White 105 x 50 mm – ( Safety Seal )',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-24 13:43:01','2022-01-24 13:43:01',3,7,0),(90,NULL,NULL,NULL,'MATERIAL: PP – White 40 x 40 mm – ( Lunch )',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-24 13:43:01','2022-01-24 13:43:01',3,7,0),(91,NULL,NULL,NULL,'MATERIAL: PP – White 40 x 40 mm – ( dessert ) ',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-01-24 13:43:32','2022-01-24 13:43:32',3,7,0),(92,NULL,NULL,NULL,'Warning Traingles',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-02-08 06:41:09','2022-02-08 06:41:09',1,7,0),(93,NULL,NULL,NULL,'Sterile eyewash - 500ml',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-02-08 06:41:09','2022-02-08 06:41:09',1,7,0),(94,NULL,NULL,NULL,'Non-spark shovel',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-02-08 06:41:09','2022-02-08 06:41:09',1,7,0),(95,NULL,NULL,NULL,'3 wooden Poles 2 inch diameter',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-02-08 06:41:09','2022-02-08 06:41:09',1,7,0),(96,NULL,NULL,NULL,'Disposable FFP3 face mask Flat face mask for protection against very fine dusts, fumes and water-based mists. According to EN 149:2001+A1:2009',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-02-08 06:41:09','2022-02-08 06:41:09',1,7,0),(105,NULL,1,NULL,'CP8613 PACK',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 06:17:29',1,7,0),(106,NULL,1,NULL,'CP6120-D35H',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 09:58:16',1,7,0),(107,NULL,1,NULL,'CP0611-D28',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 09:58:56',1,7,0),(108,NULL,1,NULL,'CP7783',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 10:00:10',1,7,0),(109,NULL,1,NULL,'CP7769',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 10:23:18',1,7,0),(110,NULL,1,NULL,'CP3550-120AA5',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 12:23:17',1,7,0),(111,NULL,1,NULL,'CP3750-085AA7',NULL,NULL,NULL,NULL,'Inventory',NULL,'0',NULL,'2022-02-22 09:57:18','2022-02-25 10:02:36',1,7,0),(112,NULL,1,NULL,'Hollow Bar',NULL,NULL,'',NULL,NULL,NULL,'0','0','2022-02-23 16:15:27','2022-02-23 16:15:27',1,25,0),(113,NULL,NULL,NULL,'MATERIAL: PP - White  x 50 mm – ( Saloon Stickers )',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-08 14:01:08','2022-03-08 14:01:08',3,7,0),(114,NULL,NULL,NULL,'MATERIAL: PP - White  30 x 40 mm – ( Saloon Stickers )',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-08 14:03:37','2022-03-08 14:03:37',NULL,NULL,0),(115,NULL,NULL,NULL,'MATERIAL: PP - White Sana pastries logo - Container Sticker',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-08 14:07:35','2022-03-08 14:07:35',3,7,0),(116,NULL,NULL,NULL,'MATERIAL: PP - White 60 mm – ( LOGO )',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-08 14:09:44','2022-03-08 14:09:44',3,7,0),(117,NULL,NULL,NULL,'MATERIAL: PP – White 30 mm – ( LOGO )',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-08 14:09:44','2022-03-08 14:09:44',3,7,0),(118,NULL,NULL,NULL,'Twisted knot wirewheel brush',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-09 10:21:02','2022-03-09 10:21:02',1,7,0),(119,NULL,NULL,NULL,'Scotch bright buffing wheel',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-09 10:21:02','2022-03-09 10:21:02',1,7,0),(120,NULL,NULL,NULL,'Buffing wheel-4\"',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-09 10:21:03','2022-03-09 10:21:03',1,7,0),(121,NULL,NULL,NULL,'Pickling Paste',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-09 10:21:03','2022-03-09 10:21:03',1,7,0),(122,NULL,NULL,NULL,'Purging tape-2\"  ASWT 2',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-09 10:21:03','2022-03-09 10:21:03',1,7,0),(123,NULL,NULL,NULL,'Straight Grinder-150mm dia',NULL,NULL,NULL,NULL,'Non inventory',NULL,'0',NULL,'2022-03-09 10:21:03','2022-03-09 10:21:03',1,7,0),(124,NULL,NULL,NULL,'Zamil - split AC 1.5 Ton\nModel: Innovation',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-15 14:00:46','2022-03-15 14:00:46',1,7,0),(125,NULL,NULL,NULL,'Fabrication of Flat Ring\nSize :Thick 15mm X W 23mm X Dia 780mm Material : NBR/EPDM\nHardness: 70~75 ShA',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-19 09:55:24','2022-03-19 09:55:24',1,7,0),(126,NULL,NULL,NULL,'Mold Charges',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-19 09:55:24','2022-03-19 09:55:24',1,7,0),(127,NULL,NULL,NULL,'Project Site Sign Board PVC Type \nSafety Banners Signages\n\nDimensions: 5 x 3 Mtr',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-23 06:21:10','2022-03-23 06:21:10',1,7,0),(128,NULL,NULL,NULL,'Reach type forklift',NULL,NULL,NULL,'PER DAY','Non inventory',NULL,'0',NULL,'2022-03-31 09:31:02','2022-03-31 09:31:02',1,7,0),(129,NULL,NULL,NULL,'Mobilization and Demobilization',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:31:02','2022-03-31 09:31:02',1,7,0),(130,NULL,NULL,NULL,'Grinding disk 4\"',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:35:18','2022-03-31 09:35:18',1,7,0),(131,NULL,NULL,NULL,'Welding Electrode E7018 , 2.5 mm',NULL,NULL,NULL,'KG','Non inventory',NULL,'0',NULL,'2022-03-31 09:35:18','2022-03-31 09:35:18',1,7,0),(132,NULL,NULL,NULL,'Welding Electrode E6010, 3.2mm',NULL,NULL,NULL,'KG','Non inventory',NULL,'0',NULL,'2022-03-31 09:35:18','2022-03-31 09:35:18',1,7,0),(133,NULL,NULL,NULL,'Cutting Disc 4\" Dia x 3/32\"',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:35:18','2022-03-31 09:35:18',1,7,0),(134,NULL,NULL,NULL,'Welding Chipping hammers',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:35:18','2022-03-31 09:35:18',1,7,0),(135,NULL,NULL,NULL,'Cutting Disc 4\" Dia x 1/8 \"',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:35:18','2022-03-31 09:35:18',1,7,0),(136,NULL,NULL,NULL,'Twisted knot wire wheel brush',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:55:31','2022-03-31 09:55:31',1,7,0),(137,NULL,NULL,NULL,'Scotch bright buffing wheel',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:55:31','2022-03-31 09:55:31',1,7,0),(138,NULL,NULL,NULL,'Buffing wheel-4\"',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:55:31','2022-03-31 09:55:31',1,7,0),(139,NULL,NULL,NULL,'Pickling Paste',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:55:31','2022-03-31 09:55:31',1,7,0),(140,NULL,NULL,NULL,'Purging tape-2\"  ASWT 2',NULL,NULL,NULL,'ROLLS','Non inventory',NULL,'0',NULL,'2022-03-31 09:55:31','2022-03-31 09:55:31',1,7,0),(141,NULL,NULL,NULL,'Straight Grinder-150mm dia',NULL,NULL,NULL,'EA','Non inventory',NULL,'0',NULL,'2022-03-31 09:55:31','2022-03-31 09:55:31',1,7,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_invoice_details`
--

DROP TABLE IF EXISTS `purchase_invoice_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_invoice_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `purchase_invoice_id` bigint(20) unsigned DEFAULT NULL,
  `quotation_detail_id` bigint(20) unsigned DEFAULT NULL,
  `product_id` bigint(20) unsigned DEFAULT NULL,
  `quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sell_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `purchase_price` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_of_measure` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `arabic_description` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_invoice_details`
--

LOCK TABLES `purchase_invoice_details` WRITE;
/*!40000 ALTER TABLE `purchase_invoice_details` DISABLE KEYS */;
INSERT INTO `purchase_invoice_details` VALUES (1,1,326,105,'1',NULL,'5990.00','2022-02-22 09:57:18','2022-02-22 09:59:44','5990','EA','CP8613 PACK','حزمة CP8613'),(2,1,327,106,'2',NULL,'12000.00','2022-02-22 09:57:18','2022-02-22 09:59:44','6000','EA','CP6120-D35H','CP6120-D35H'),(3,1,328,107,'2',NULL,'4000.00','2022-02-22 09:57:18','2022-02-22 09:59:44','2000','EA','CP0611-D28','CP0611-D28'),(4,1,329,108,'2',NULL,'1190.00','2022-02-22 09:57:18','2022-02-22 09:59:44','595','EA','CP7783','CP7783'),(5,1,330,109,'3',NULL,'1200.00','2022-02-22 09:57:18','2022-02-22 09:59:44','400','EA','CP7769','CP7769'),(6,1,331,110,'2',NULL,'740.00','2022-02-22 09:57:18','2022-02-22 09:59:44','370','EA','CP3550-120AA5','CP3550-120AA5'),(7,1,332,111,'2',NULL,'1300.00','2022-02-22 09:57:18','2022-02-22 09:59:45','650','EA','CP3750-085AA7','CP3750-085AA7');
/*!40000 ALTER TABLE `purchase_invoice_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_invoices`
--

DROP TABLE IF EXISTS `purchase_invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_invoices` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotation_id` bigint(20) unsigned DEFAULT NULL,
  `invoice_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'true',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'New',
  `issue_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_in_percentage` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_in_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `grand_total` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bill_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `currency_type` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT 'SAR',
  `po_number` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `party_id` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete_status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_invoices`
--

LOCK TABLES `purchase_invoices` WRITE;
/*!40000 ALTER TABLE `purchase_invoices` DISABLE KEYS */;
INSERT INTO `purchase_invoices` VALUES (1,125,'12','New','22 Feb 2022','26420.00','0','3963.00','30383.00',NULL,NULL,'2022-02-22 09:57:18','2022-02-22 09:59:44',1,7,'SAR','AMC-PO-22-0202',NULL,'45',0);
/*!40000 ALTER TABLE `purchase_invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_returns`
--

DROP TABLE IF EXISTS `purchase_returns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_returns` (
  `pr_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotationr_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `rfq_id` bigint(20) unsigned DEFAULT '0',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'New',
  `total_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_in_p` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_in_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `net_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `validity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_terms` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `warranty` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_time` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inco_terms` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pr_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `contact_id` int(11) DEFAULT NULL,
  `transaction_type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ps_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_order_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_revised` tinyint(4) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `sign` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_id` bigint(191) DEFAULT NULL,
  `freight_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'SAR',
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rfq_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `div_id` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delete_status` int(11) DEFAULT '0',
  PRIMARY KEY (`pr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_returns`
--

LOCK TABLES `purchase_returns` WRITE;
/*!40000 ALTER TABLE `purchase_returns` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_returns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_returns_details`
--

DROP TABLE IF EXISTS `purchase_returns_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchase_returns_details` (
  `prd_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pr_id` bigint(20) unsigned DEFAULT NULL,
  `po_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quotation_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `analyse_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `purchase_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `margin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sell_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `remark` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `file_img_url` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_of_measure` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_no` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`prd_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_returns_details`
--

LOCK TABLES `purchase_returns_details` WRITE;
/*!40000 ALTER TABLE `purchase_returns_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_returns_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotation_details`
--

DROP TABLE IF EXISTS `quotation_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotation_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotation_id` bigint(20) unsigned DEFAULT NULL,
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `analyse_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `purchase_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `margin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sell_price` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `remark` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `file_img_url` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_description` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_of_measure` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_val` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `index1` bigint(20) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=581 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotation_details`
--

LOCK TABLES `quotation_details` WRITE;
/*!40000 ALTER TABLE `quotation_details` DISABLE KEYS */;
INSERT INTO `quotation_details` VALUES (1,1,'306.00',NULL,NULL,'30.00','bottles','10','2','30.6','2021-10-05 07:51:11','2022-02-05 06:30:45','',NULL,'leak proof bottles','SETS','0','0',1),(2,1,'20100.00',NULL,NULL,'2.96','Bolt Type Seal','5000','35.7','4.02','2021-10-12 10:12:53','2022-02-05 06:30:45','',NULL,'Bolt Type Seal , Printed \nMake : ACM , Model : ISO-1H','UNITS','0','0',2),(3,2,'25948.00',NULL,NULL,'860.00','200 mm Dia. UPVC Pipe','26','16.046','998.00','2021-10-13 13:05:12','2022-02-05 06:30:23','',NULL,'200 mm Dia. UPVC Pipe , Class 5 , 6 Meter , KSA','EACH','0','0',1),(4,2,'440.00',NULL,NULL,'45.00','200 mm Dia. UPVC Bell End','8','22.23','55.00','2021-10-13 13:05:12','2022-02-05 06:30:23','',NULL,'200 Mm Dia. UPVC Bell End , KSA','EACH','0','0',2),(5,3,'11960.00',NULL,NULL,'375.00','200 mm Dia. UPVC Pipe','26','22.667','460.00','2021-10-13 13:35:16','2022-02-05 06:29:45','',NULL,'200 mm Dia. UPVC Pipe , Class 3, 6 meter length, KSA','EACH','0','0',1),(6,3,'440.00',NULL,NULL,'45.00','200 mm Dia. UPVC Bell End','8','22.23','55.00','2021-10-13 13:35:16','2022-02-05 06:29:45','',NULL,'200 Mm Dia. UPVC Bell End , KSA','EACH','0','0',2),(7,4,'56.00',NULL,NULL,'7','vbbb','8','0','7.00','2021-10-19 14:21:37','2021-10-19 14:21:37','',NULL,'nnnn','KILOLITER','0',NULL,1),(8,5,'11880.00',NULL,NULL,'3300','HOSE REEL','3','20','3960.00','2021-10-20 12:25:36','2022-02-05 06:29:13',NULL,'quotation/quotation_detail/5/phpVxJcod','HOSE REEL 13 MM RUBBER NPT HR9213 . MAKE : Chicago Pneumatic','EACH','0','0',1),(22,59,'98.00',NULL,NULL,'40','UPVC Pipe Class 3 , 3\'\'','2','22.5','49.00','2021-11-08 08:39:30','2021-11-08 08:49:01','',NULL,'UPVC Pipe 75 mm X 2.2 mm X 6 m C-3 , Grey, Made In KSA','EACH','0',NULL,1),(23,59,'34.00',NULL,NULL,'14','UPVC Coupling , 3\"','2','21.4','17.00','2021-11-08 08:39:30','2021-11-08 08:49:01','',NULL,'R Coupling 75 Mm , DSCJ C-3 , Grey, Made In KSA','EACH','0',NULL,1),(24,59,'3040.00',NULL,NULL,'62','UPVC Pipe Class 4 , 75 Mm','40','22.58','76.00','2021-11-08 08:39:30','2021-11-08 08:49:01','',NULL,'Pipe 75 Mm X 3.6 Mm X 6 M  C-4 , Grey, Made In KSA','EACH','0',NULL,1),(25,59,'2000.00',NULL,NULL,'16','UPVC coupling , 75 mm','100','24.98','20.00','2021-11-08 08:39:30','2021-11-08 08:49:01','',NULL,'R Coupling 75 Mm , DSCJ CL-4 , Grey, Made In KSA','EACH','0',NULL,1),(26,59,'762.50',NULL,NULL,'25','UPVC Coupling , 110 mm','25','22','30.50','2021-11-08 08:39:30','2021-11-08 08:43:50','',NULL,'R Coupling 110 Mm , C-4 , grey Made In KSA','EACH','0',NULL,1),(27,62,'400.00',NULL,NULL,'100','a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.','4','','100','2021-11-10 08:08:57','2022-02-05 06:27:09','',NULL,'a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.','EACH','0','0',1),(28,63,'12500.00',NULL,NULL,'0.900','PLASTIC SEAL TASNEE Material#: 6000226\nSIZE: 11-1/2 X 13/32 IN\n\nAPPLICATION: CONTAINER DOOR\n\nADDITIONAL FEATURES: 135 LB BREAKING STRENGTH\n\nQTY: 10,000 Pieces','10000','39','1.25','2021-11-10 08:28:55','2022-02-05 06:26:39','',NULL,'Plastic Seal , 11.5 \'\'\nModel : HS115\nMake : ACM\nCOO : USA\n','EACH','0','0',1),(29,63,'10400.00',NULL,NULL,'0.75','','10000','39','1.04','2021-11-10 08:28:55','2022-02-05 06:26:39','',NULL,'OPTION 2 :\nPlastic Seal , 16\'\'\nModel : PS360NT\nMake : ACM\nCOO : USA','EACH','0','0',2),(30,64,'21000.00',NULL,NULL,'16.5','Coverall','1000','27.3','21.00','2021-11-14 08:07:20','2022-02-05 06:26:08',NULL,'quotation/quotation_detail/64/phpQp87N9','Coverall DUPONT TYVEK 400','EACH','0','0',1),(31,64,'19500.00',NULL,NULL,'15','Coverall','1000','29.97','19.50','2021-11-14 08:07:20','2022-02-05 06:26:08',NULL,'quotation/quotation_detail/64/phpn0jXz1','Coverall Alphatec Ansell Model 111','EACH','0','0',2),(32,65,'12000.00',NULL,NULL,'0.902','Plastic Seal','10000','33','1.20','2021-11-15 06:23:43','2022-02-05 06:24:16',NULL,'quotation/quotation_detail/65/phpf0fCKE','Security Plastic Seal, Stamped With Letters and Serial Numbers\nModel : HS-115\nMake : ACM\nCOO : USA ','EACH','0','0',1),(33,66,'950.00',NULL,NULL,'0.15','Sticker , Rectangle','5000','25','0.19','2021-11-16 23:03:08','2022-02-05 06:23:53',NULL,'quotation/quotation_detail/66/phpnAHxIr','Package, Sticker PP White , Rectangular , Size 5 X 10 Cm','PECIES','0','0',1),(34,66,'1800.00',NULL,NULL,'0.15','Sticker , Rectangle','10000','23','0.18','2021-11-16 23:03:08','2022-02-05 06:23:53','',NULL,'Package Sticker PP White, Rectangular, Size 5 X 10 CM','PECIES','0','0',2),(35,66,'650.00',NULL,NULL,'0.09','Sticker , Square / Round','5000','40','0.13','2021-11-16 23:03:08','2022-02-05 06:23:53','',NULL,'Package Sticker PP White, Square / Round , Size 6 CM','PECIES','0','0',3),(36,66,'1200.00',NULL,NULL,'0.09','Sticker , Square / Round','10000','35','0.12','2021-11-16 23:03:08','2022-02-05 06:23:53','',NULL,'Package Sticker PP White , Square / Round , Size 6 CM','PECIES','0','0',4),(37,67,'6108.00',NULL,NULL,'850.000','CS Plate','4','79.647','1527.00','2021-11-17 08:05:10','2022-02-05 06:23:06','',NULL,'CS Plate , 4X8 Ft, 6 mm, MTC Available','EACH','0','0',1),(38,67,'1512.00',NULL,NULL,'160','Welding Flux Wire','7','35','216.00','2021-11-17 08:05:10','2022-02-05 06:23:06','',NULL,'Flux Cored Welding Wire , E71T-1C , 1.2 mm Wire Spool , 1 Carton = 16 Kg Roll , (Total Qty : 7 X 16 = 112 Kgs)','CARTONS','0','0',2),(41,67,'1650.00',NULL,NULL,'550.000','CO2 Gas Cylinder , 45 Kgs , Oxidizer','2','50','825.00','2021-11-17 08:05:10','2022-02-05 06:23:06','',NULL,'CO2 Gas Cylinder , 45 Kgs , Oxidizer','EACH','0','0',3),(42,67,'1950.00',NULL,'','650.000','CO2 Gas Cylinder , 45 Kgs , Welding','2','50','975.00','2021-11-17 09:19:39','2022-02-05 06:23:06','',NULL,'CO2 Gas Cylinder , 45 Kgs , Welding','EACH','0','0',4),(43,67,'341.00',NULL,'','110.000','Hose 15 Meters','2','55','170.50','2021-11-17 09:19:39','2022-02-05 06:23:06','',NULL,'Hose 15 Meters, Taiwan','EACH','0','0',5),(44,67,'544.00',NULL,'','170.000','Hose 30 Meters','2','60','272.00','2021-11-17 09:19:40','2022-02-05 06:23:06','',NULL,'Hose 30 Meters, Taiwan','EACH','0','0',6),(45,67,'108.00',NULL,'','30.000','Hose Connector, 6.3 mm','2','80','54.00','2021-11-17 09:19:40','2022-02-05 06:23:06','',NULL,'Hose Connector , 6.3 mm','EACH','0','0',7),(46,67,'2010.00',NULL,'','670.000','Regulator Set , Oxygen + Welding Cutting, Mexico','2','50','1005.00','2021-11-17 09:19:40','2022-02-05 06:23:06','',NULL,'Regulator Set , Oxygen + Welding Cutting, Mexico','EACH','0','0',8),(47,68,'520.00',NULL,NULL,'16','SMOKE DETECTOR OC05 EN 54-7(00) BRAND FARE','25','30','20.80','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'SMOKE DETECTOR , NORMAL','PIECES','0','0',1),(48,68,'1072.50',NULL,NULL,'33','','25','30','42.90','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'SMOKE DETECTOR , UL STANDARD','PIECES','0','0',2),(49,68,'3000.00',NULL,NULL,'30','DETECTOR HEAT 4098-9733','80','25','37.50','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'HEAT DETECTOR , NORMAL','PIECES','0','0',3),(50,68,'4500.00',NULL,NULL,'45','','80','25','56.25','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'HEAT DETECTOR , GOOD QUALITY','PIECES','0','0',4),(51,68,'6500.00',NULL,NULL,'65','','80','25','81.25','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'HEAT DETECTOR , UL STANDARD','PIECES','0','0',5),(52,68,'400.40',NULL,NULL,'22','SIMPLEX BREAK GLASS','14','30','28.60','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'MANUAL CALL POINT','PIECES','0','0',6),(53,68,'0.00',NULL,NULL,'0.000','FIRE BELL WITH LIGHT','14','','0.00','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'REGRET','PIECES','0','0',7),(54,68,'4725.00',NULL,NULL,'210','FIRE EXTINGUISHER CYLINDER 6KG CO2','18','25','262.50','2021-11-30 13:24:40','2022-02-05 06:22:09','',NULL,'FIRE EXTINGUISHER CYLINDER 6KG CO2','PIECES','0','0',8),(55,69,'350.00',NULL,NULL,'0.038','Screw, Self-Drilling #7 1-1/2\", Black, Fine thread','5000','75','0.07','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Screw, Self-Drilling #7 1-1/2\", Black, Fine thread','EACH','0','0',1),(56,69,'8100.00',NULL,NULL,'1350','Check valve,cPVC, 3\" USA Brand','5','20','1620.00','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Check valve,cPVC, 3\" USA Brand','EACH','0','0',2),(57,69,'30000.00',NULL,NULL,'258.42','Flush tank, accessories # 03 spain  IDROSPANIA - Loja MOD - Switchable Discharger with Base and Rubber Seat - Rock Bag','100','16.089','300.00','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Flush tank, accessories # 03 spain  IDROSPANIA - Loja MOD - Switchable Discharger with Base and Rubber Seat - Rock Bag','EACH','0','0',3),(58,69,'300.00',NULL,NULL,'0.026','Screw, Self-Drilling, Size 7# 1\", Black, fine thread','5000','120','0.06','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Screw, Self-Drilling, Size 7# 1\", Black, fine thread','EACH','0','0',4),(59,69,'4950.00',NULL,NULL,'26.850','Cleaner, crc co-contact 400ml','150','22.906','33.000','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Cleaner, crc co-contact 400ml','EACH','0','0',5),(60,69,'1500.00',NULL,NULL,'9.75','Wd-40, 330ml','120','28.21','12.500','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Wd-40, 330ml','EACH','0','0',6),(61,69,'39000.00',NULL,NULL,'65','Water  filter cartridge dw-1-01-40-1-d dw series ? nsf 61 , size 40\" Delta Pure, USA','500','20','78.000','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Water  filter cartridge dw-1-01-40-1-d dw series ? nsf 61 , size 40\" Delta Pure, USA','EACH','0','0',7),(62,69,'3500.00',NULL,NULL,'260','Water heater, capacity 50ltr   Saudi ceramics/Star','10','34.6155','350.000','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Water heater, capacity 50ltr   Saudi ceramics/Star','EACH','0','0',8),(63,69,'80.00',NULL,NULL,'2.5','Coupling, cPVC, size 3/4\", SCH 80 UNITED','20','59.8','4.00','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'Coupling, cPVC, size 3/4\", SCH 80 UNITED','EACH','0','0',9),(64,69,'1600.00',NULL,NULL,'65','P-trap Standard Model Chrome  53002000 Hansgrohe','20','23.08','80.00','2021-12-05 20:41:30','2022-02-05 06:21:06','',NULL,'P-trap Standard Model Chrome  53002000 Hansgrohe','EACH','0','0',10),(65,70,'59940.36',NULL,NULL,'3100','Grundfos Pumps, Submersible Wastewater Pumps Unilift Ap12.50.11. A1 - Product Number 96010678, 220-230V, 60Hz','12','61.13','4995.03','2021-12-07 12:45:45','2022-02-05 06:19:45','',NULL,'Grundfos Pumps, Submersible Wastewater Pumps Unilift Ap12.50.11. A1 - Product Number 96010678, 220-230V, 60Hz','EACH','0','0',1),(66,71,'350.00',NULL,NULL,'0.038','Screw, Self-Drilling #7 1-1/2\", Black, Fine thread','5000','75','0.07','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Screw, Self-Drilling #7 1-1/2\", Black, Fine thread','EACH','0','0',1),(67,71,'8100.00',NULL,NULL,'1350','Check valve,cPVC, 3\" USA Brand','5','20','1620.00','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Check valve,cPVC, 3\" USA Brand','EACH','0','0',2),(68,71,'8000.00',NULL,NULL,'55.000','Flush tank, accessories # 03 spain  IDROSPANIA - Loja MOD - Switchable Discharger with Base and Rubber Seat - Rock Bag','100','45.454','80.000','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Flush tank, accessories # 03 spain  IDROSPANIA - Loja MOD - Switchable Discharger with Base and Rubber Seat - Rock Bag','EACH','0','0',3),(69,71,'300.00',NULL,NULL,'0.026','Screw, Self-Drilling, Size 7# 1\", Black, fine thread','5000','120','0.06','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Screw, Self-Drilling, Size 7# 1\", Black, fine thread','EACH','0','0',4),(70,71,'4950.00',NULL,NULL,'26.850','Cleaner, crc co-contact 400ml','150','22.906','33.000','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Cleaner, crc co-contact 400ml','EACH','0','0',5),(71,71,'1500.00',NULL,NULL,'9.75','Wd-40, 330ml','120','28.21','12.500','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Wd-40, 330ml','EACH','0','0',6),(72,71,'39000.00',NULL,NULL,'65','Water  filter cartridge dw-1-01-40-1-d dw series ? nsf 61 , size 40\" Delta Pure, USA','500','20','78.000','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Water  filter cartridge dw-1-01-40-1-d dw series ? nsf 61 , size 40\" Delta Pure, USA','EACH','0','0',7),(73,71,'3500.00',NULL,NULL,'260','Water heater, capacity 50ltr   Saudi ceramics/Star','10','34.6155','350.000','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Water heater, capacity 50ltr   Saudi ceramics/Star','EACH','0','0',8),(74,71,'80.00',NULL,NULL,'2.5','Coupling, cPVC, size 3/4\", SCH 80 UNITED','20','59.8','4.00','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'Coupling, cPVC, size 3/4\", SCH 80 UNITED','EACH','0','0',9),(75,71,'1600.00',NULL,NULL,'65','P-trap Standard Model Chrome  53002000 Hansgrohe','20','23.08','80.00','2021-12-07 12:53:16','2022-02-05 06:19:22','',NULL,'P-trap Standard Model Chrome  53002000 Hansgrohe','EACH','0','0',10),(76,72,'8880.12',NULL,NULL,'12.330','CPVC Pipe 1\"\n','612','17.681076236821','14.510','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'CPVC Pipe 1\" , NEPROPLAST','METERS','0','0',1),(77,72,'139.56',NULL,NULL,'19.330','CPVC Pipe 1 ¼ \"\n','6','20.332643559234','23.260','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'CPVC Pipe 1 ¼ \", NEPROPLAST','METERS','0','0',2),(78,72,'475.51',NULL,NULL,'4','CPVC 90° ELBOW 1\"\n','101','17.7','4.708','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'CPVC 90° ELBOW 1\", NEPROPLAST','NUMBERS','0','0',3),(79,72,'1958.40',NULL,NULL,'5.500','CPVC 45° ELBOW  1\"\n','306','16.363636363636','6.400','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'CPVC 45° ELBOW  1\", NEPROPLAST','NUMBERS','0','0',4),(80,72,'16.28',NULL,NULL,'6.500','CPVC 45° ELBOW 1 ¼ \"\n','2','25.230769230769','8.140','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'CPVC 45° ELBOW 1 ¼ \" , NEPROPLAST','NUMBERS','0','0',5),(81,72,'0.00',NULL,NULL,'0.000',' CLEAN OUT 1\"\n','164','','0.000','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'REGRET','NUMBERS','0','0',6),(82,72,'0.00',NULL,NULL,'0.000','CPVC P TRAPE 1\"\n','84','','0.000','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'REGRET','NUMBERS','0','0',7),(83,72,'1443.94',NULL,NULL,'6','CPVC Y TEE  1\"\n','208','15.7','6.942','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'CPVC  TEE  1\" , NEPROPLAST','NUMBERS','0','0',8),(84,72,'0.00',NULL,NULL,'0.000','\"CPVC EXPANSION JOINT \n1\"\"\"\n','1','','0.000','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'REGRET','NUMBERS','0','0',9),(85,72,'2100.00',NULL,NULL,'3','SPLIT CLAMP WITH RUBBER M10 1\"\n','600','16.6','3.50','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'SPLIT CLAMP WITH RUBBER M10 1\" , NEPROPLAST','NUMBERS','0','0',10),(86,72,'99.20',NULL,NULL,'4','SPLIT CLAMP WITH RUBBER M10 1 1/4\"\n','20','24','4.960','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'SPLIT CLAMP WITH RUBBER M10 1 1/4\" , NEPROPLAST','NUMBERS','0','0',11),(87,72,'3093.55',NULL,NULL,'16.250','PIPE INSULATION  3/4\" \n','144','32.2','21.483','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION  3/4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',12),(88,72,'3040.69',NULL,NULL,'16.660','PIPE INSULATION   1\" \n','138','32.255702280912','22.034','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION   1\", AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',13),(89,72,'3818.43',NULL,NULL,'17.910','PIPE INSULATION  1 1/4\" \n','159.6','33.586823003908','23.925','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION  1 1/4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',14),(90,72,'11130.95',NULL,NULL,'19.580','PIPE INSULATION  1 1/2 \n','426','33.449438202247','26.129','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION  1 1/2 , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',15),(91,72,'4652.52',NULL,NULL,'21.250','PIPE INSULATION   2\" \n','164.4','33.176470588235','28.300','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION   2\" , AFICO , Length Size : 1.2 Meter Per Piece\n','METERS','0','0',16),(92,72,'5854.39',NULL,NULL,'24.160','PIPE INSULATION  2 1/2\"\n','181.2','33.728476821192','32.309','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION  2 1/2\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',17),(93,72,'8379.00',NULL,NULL,'27.500','PIPE INSULATION   3\" \n','228','33.636363636364','36.750','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION   3\", AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',18),(94,72,'4522.07',NULL,NULL,'33.330','PIPE INSULATION   4\" \n','102','33.014101410141','44.334','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION   4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',19),(95,72,'3204.00',NULL,NULL,'40.000','PIPE INSULATION   6\" \n','60','33.5','53.400','2021-12-08 08:10:02','2022-02-05 06:18:07','',NULL,'PIPE INSULATION   6\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',20),(96,73,'2400.00',NULL,NULL,'94','Ignitor, capacity 400w, 220-240v, 50/60hz  Z400MK Vossloh Schwabe, Germany','20','27.66','120.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Ignitor, capacity 400w, 220-240v, 50/60hz  Z400MK Vossloh Schwabe, Germany','EACH','0','0',1),(97,73,'5000.00',NULL,NULL,'201','Ballast, 70w, (0,98a), 220v NAHJ 70  NAHJ70 Vossloh Schwabe, Germany','20','24.378','250.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Ballast, 70w, (0,98a), 220v NAHJ 70  NAHJ70 Vossloh Schwabe, Germany','EACH','0','0',2),(98,73,'1800.00',NULL,NULL,'30.000','Metal corner tape 50mm x 30m BAMA','50','20','36.000','2021-12-09 00:14:51','2022-02-05 06:14:40',NULL,'quotation/quotation_detail/73/phpUJyOX7','Metal corner tape 50mm x 30m Greenway/China','EACH','0','0',3),(99,73,'825.00',NULL,NULL,'4.250','Tape, masking 2\" 30M abro','150','29.411764705882','5.500','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Tape, masking 2\" 30M ABRO  , 25 Yards/Pc','EACH','0','0',4),(100,73,'750.00',NULL,NULL,'0.85','Clip, steel, 3/4\", one sided, EMT','500','76.5','1.500','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Clip, steel, 3/4\", one sided, EMT','EACH','0','0',5),(101,73,'600.00',NULL,NULL,'1.25','Connector, steel,  1/2\", EMT','300','60','2.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Connector, steel,  1/2\", EMT','EACH','0','0',6),(102,73,'780.00',NULL,NULL,'1.65','Connector, steel, 3/4\", EMT','300','57.6','2.600','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Connector, steel, 3/4\", EMT','EACH','0','0',7),(103,73,'780.00',NULL,NULL,'1.65','Coupling, steel, 1/2\", EMT','300','57.6','2.600','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Coupling, steel, 1/2\", EMT','EACH','0','0',8),(104,73,'900.00',NULL,NULL,'2','Connector, steel,  3/4\" EMT flexible','300','50','3.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Connector, steel,  3/4\" EMT flexible','EACH','0','0',9),(105,73,'1500.00',NULL,NULL,'2.5','Junction galvanized box, 7cm x 7cm, deep 3.5cm','400','50','3.750','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Junction galvanized box, 7cm x 7cm, deep 3.5cm','EACH','0','0',10),(106,73,'250.00',NULL,NULL,'4','Electrical tape,3m regular, red','50','25','5.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Electrical tape,3m regular, red','EACH','0','0',11),(107,73,'250.00',NULL,NULL,'4','Electrical tape 3m black','50','25','5.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Electrical tape 3m black','EACH','0','0',12),(108,73,'525.00',NULL,NULL,'0.3','Clip, steel, 1/2\", double sided EMT','500','250','1.050','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Clip, steel, 1/2\", double sided EMT','EACH','0','0',13),(109,73,'250.00',NULL,NULL,'4','Electrical tape 3m, white','50','25','5.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Electrical tape 3m, white','EACH','0','0',14),(110,73,'250.00',NULL,NULL,'4','Electrical tape 3m , yellow','50','25','5.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Electrical tape 3m , yellow','EACH','0','0',15),(111,73,'250.00',NULL,NULL,'4','Electrical, regular tape 3m, green','50','25','5.000','2021-12-09 00:14:51','2022-02-05 06:14:40','',NULL,'Electrical, regular tape 3m, green','EACH','0','0',16),(121,74,'2100.00',NULL,NULL,'3','SPLIT CLAMP WITH RUBBER M10 1\"\n','600','16.6','3.50','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'SPLIT CLAMP WITH RUBBER M10 1\" , NEPROPLAST','NUMBERS','0','0',1),(122,74,'100.00',NULL,NULL,'4','SPLIT CLAMP WITH RUBBER M10 1 1/4\"\n','20','25','5.00','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'SPLIT CLAMP WITH RUBBER M10 1 1/4\" , NEPROPLAST','NUMBERS','0','0',2),(123,74,'3187.15',NULL,NULL,'16.250','PIPE INSULATION  3/4\" \n','144','36.2','22.133','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION  3/4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',3),(124,74,'3132.60',NULL,NULL,'16.660','PIPE INSULATION   1\" \n','138','36.255702280912','22.700','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION   1\", AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',4),(125,74,'3904.29',NULL,NULL,'17.910','PIPE INSULATION  1 1/4\" \n','159.6','36.586823003908','24.463','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION  1 1/4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',5),(126,74,'11464.94',NULL,NULL,'19.580','PIPE INSULATION  1 1/2 \n','426','37.449438202247','26.913','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION  1 1/2 , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',6),(127,74,'4827.11',NULL,NULL,'21.250','PIPE INSULATION   2\" \n','164.4','38.176470588235','29.362','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION   2\" , AFICO , Length Size : 1.2 Meter Per Piece\n','METERS','0','0',7),(128,74,'6029.43',NULL,NULL,'24.160','PIPE INSULATION  2 1/2\"\n','181.2','37.728476821192','33.275','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION  2 1/2\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',8),(129,74,'8817.90',NULL,NULL,'27.500','PIPE INSULATION   3\" \n','228','40.636363636364','38.675','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION   3\", AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',9),(130,74,'4692.00',NULL,NULL,'33.330','PIPE INSULATION   4\" \n','102','38.014101410141','46.000','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION   4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',10),(131,74,'3324.00',NULL,NULL,'40.000','PIPE INSULATION   6\" \n','60','38.5','55.400','2021-12-12 11:45:41','2022-02-05 06:12:12','',NULL,'PIPE INSULATION   6\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',11),(132,75,'2100.00',NULL,NULL,'3','SPLIT CLAMP WITH RUBBER M10 1\"\n','600','16.6','3.50','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'SPLIT CLAMP WITH RUBBER M10 1\" , NEPROPLAST','NUMBERS','0','0',1),(133,75,'100.00',NULL,NULL,'4','SPLIT CLAMP WITH RUBBER M10 1 1/4\"\n','20','25','5.00','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'SPLIT CLAMP WITH RUBBER M10 1 1/4\" , NEPROPLAST','NUMBERS','0','0',2),(134,75,'3187.15',NULL,NULL,'16.250','PIPE INSULATION  3/4\" \n','144','36.2','22.133','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION  3/4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',3),(135,75,'3132.60',NULL,NULL,'16.660','PIPE INSULATION   1\" \n','138','36.255702280912','22.700','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION   1\", AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',4),(136,75,'3904.29',NULL,NULL,'17.910','PIPE INSULATION  1 1/4\" \n','159.6','36.586823003908','24.463','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION  1 1/4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',5),(137,75,'11464.94',NULL,NULL,'19.580','PIPE INSULATION  1 1/2 \n','426','37.449438202247','26.913','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION  1 1/2 , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',6),(138,75,'4827.11',NULL,NULL,'21.250','PIPE INSULATION   2\" \n','164.4','38.176470588235','29.362','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION   2\" , AFICO , Length Size : 1.2 Meter Per Piece\n','METERS','0','0',7),(139,75,'6029.43',NULL,NULL,'24.160','PIPE INSULATION  2 1/2\"\n','181.2','37.728476821192','33.275','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION  2 1/2\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',8),(140,75,'8817.90',NULL,NULL,'27.500','PIPE INSULATION   3\" \n','228','40.636363636364','38.675','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION   3\", AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',9),(141,75,'4692.00',NULL,NULL,'33.330','PIPE INSULATION   4\" \n','102','38.014101410141','46.000','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION   4\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',10),(142,75,'3324.00',NULL,NULL,'40.000','PIPE INSULATION   6\" \n','60','38.5','55.400','2021-12-13 12:08:12','2022-02-05 06:10:15','',NULL,'PIPE INSULATION   6\" , AFICO , Length Size : 1.2 Meter Per Piece','METERS','0','0',11),(145,77,'545.70',NULL,NULL,'107','ryzen','5','2','109.140','2021-12-17 11:14:11','2021-12-17 11:14:11','',NULL,'ryzen','PIECES','0',NULL,1),(146,78,'543750.00',NULL,NULL,'75000','POTABLE WATER TANK , L : 12.32 m ,   D : 3.5m L , Capacity :30,000 Gallons FRP','5','45.00','108750.000','2021-12-19 15:13:20','2022-02-05 06:03:16','',NULL,'FRP POTABLE WATER TANK , \nDims : L : 12.32 m (Approx) , D : 3.5 m , FRP , \nCapacity : 120,000 L (Approx : 31,700 Gallons)\nManufacturer : MNT \nCertifications & Accr. : ANSI, ISO, NSF , ASTM , Aramco','NUMBERS','0','0',1),(147,78,'652500.00',NULL,NULL,'75000','FIRE  WATER TANK , L : 12.32 m ,   D : 3.5m L , Capacity :30,000 Gallons FRP','6','45.00','108750.000','2021-12-19 15:13:20','2022-02-05 06:03:16','',NULL,'FRP FIRE WATER TANK , \nDims : L : 12.32 m (Approx) , D : 3.5 m , FRP , \nCapacity : 120,000 L (Approx : 31,700 Gallons)\nManufacturer : MNT \nCertifications & Accr. : ANSI, ISO, NSF , ASTM , Aramco','NUMBERS','0','0',2),(148,79,'92950.00',NULL,NULL,'65000','XY Rail - Fabrication','1','43','92950.000','2021-12-19 16:36:52','2022-02-05 06:02:41','',NULL,'XY JIS 250 Beam Structure Fabrication Dims : 8 m X 3.5 m X 4 m \n+ \nElectric Chain Hoist 4-Way Movement (Capacity 1 Ton)\n +\n Accessories (Both Side Trolley With Gear Box , Gusset Plate in Structure , Base Plate (20 mm Thick)\n+\nInstallation Onsite using Crane\n(Electrical and Civil Scope Not included in the Proposal)','UNITS','0','0',1),(149,79,'7500.00',NULL,NULL,'5000','Civil Foundation','1','50','7500.000','2021-12-19 16:36:52','2022-02-05 06:02:41','',NULL,'Civil Foundation as per Work Area Requirement ','UNITS','0','0',2),(150,80,'198000.00',NULL,NULL,'165','Plywood 18 mm thick INDONESIAN or\nequivalent with dimension\n2.44 x 1.22 m','1000','20','198','2021-12-20 21:00:51','2022-02-05 06:01:57','',NULL,'Plywood 18 mm thick INDONESIAN , 2.44 x 1.22 m','PIECES','0','0',1),(151,80,'22000.00',NULL,NULL,'17.5','Timber 2” x 4 “ with length 4 m\n','1000','25.713','22.000','2021-12-20 21:00:51','2022-02-05 06:01:57','',NULL,'Timber 2” x 4 “ with length 4 m , AUSTRIA','PIECES','0','0',2),(152,80,'85000.00',NULL,NULL,'34','Timber 1” x 4 “ with length 4 m','2000','25','42.500','2021-12-20 21:00:51','2022-02-05 06:01:57','',NULL,'Timber 1” x 4 “ with length 4 m, AUSTRIA','PIECES','0','0',3),(153,81,'1950.00',NULL,NULL,'30','Coverall , Size S Navy blue, with NITI logo','50','30','39','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size S Navy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','0','0',1),(154,81,'1950.00',NULL,NULL,'30','	\nCoverall Size M Navy blue, with NITI logo','50','30','39','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size M, Navy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','0','0',2),(155,81,'3404.70',NULL,NULL,'30','	\nCoverall Size L Navy blue, with NITI logo','90','30','37.83','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size L, Navy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','3','105.3',3),(156,81,'3510.00',NULL,NULL,'30','	\nCoverall Size XL Navy blue, with NITI logo','90','30','39','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size XL,  Navy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','0','0',4),(157,81,'3600.00',NULL,NULL,'30','	\nCoverall Size 2XL Navy blue, with NITI logo','90','33.334','40','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size 2XL, Navy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','0','0',5),(158,81,'3600.00',NULL,NULL,'30','	\nCoverall Size 3XL Navy blue, with NITI logo','90','33.334','40','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size 3XL,\nNavy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','0','0',6),(159,81,'3600.00',NULL,NULL,'30','	\nCoverall Size 4XL Navy blue, with NITI logo','90','33.334','40','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Coverall , Size 4XL, Navy blue, EN340 Standard, Twill Cotton, 195 GSM , Manufacturer :KADTEX , with NITI logo 2.2 X 8.5 cm','EACH','0','0',7),(160,81,'180.00',NULL,NULL,'32','Shoes, Safety, Size 38','5','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 38 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',8),(161,81,'144.00',NULL,NULL,'32','Shoes, Safety, Size 39','4','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 39 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',9),(162,81,'1836.00',NULL,NULL,'32','Shoes, Safety, Size 40','51','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 40 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',10),(163,81,'3060.00',NULL,NULL,'32','Shoes, Safety, Size 41','85','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 41 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',11),(164,81,'3060.00',NULL,NULL,'32','Shoes, Safety, Size 42','85','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 42 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',12),(165,81,'3060.00',NULL,NULL,'32','Shoes, Safety, Size 43','85','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 43 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',13),(166,81,'3060.00',NULL,NULL,'32','Shoes, Safety, Size 44','85','12.5','36','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 44 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',14),(167,81,'3145.00',NULL,NULL,'32','Shoes, Safety, Size 45','85','15.625','37','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 45 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',15),(168,81,'555.00',NULL,NULL,'32','Shoes, Safety, Size 46','15','15.625','37','2021-12-27 22:57:09','2022-02-05 06:00:33','',NULL,'Shoes, Safety, Size 46 , Anti Slip, Oil Resistant , Complies EN and ISO Standards, Manufacturer : Ultima/Armour , COO : INDIA','PAIRS','0','0',16),(169,82,'60175.00',NULL,NULL,'41500','Removal Of Existing Conveyer System & Filling With Concrete \nFilling Of Sand and Top 200 mm Thick Concrete 4000 Psi','1','45','60175','2022-01-01 19:47:40','2022-02-05 05:58:20','',NULL,'Removal Of Existing Conveyer System & Filling With Concrete \nFilling Of Sand and Top 200 mm Thick Concrete 4000 Psi','UNT','0','0',1),(170,82,'14500.00',NULL,NULL,'10000','Demolition Of Conveyer , Transportation','1','45','14500','2022-01-01 19:47:40','2022-02-05 05:58:20','',NULL,'Demolition Of Conveyer , Transportation','UNT','0','0',2),(171,82,'51000.00',NULL,NULL,'34000','Fabrication , SUpply & Installation of Rail with Material','1','50','51000','2022-01-01 19:47:40','2022-02-05 05:58:20','',NULL,'Fabrication , SUpply & Installation of Rail with Material','UNT','0','0',3),(173,83,'136.00',NULL,NULL,'14','Warning Triangles','8','21.428571428571','17','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Warning Triangle, Good Quality','EA','0','0',2),(174,83,'678.00',NULL,NULL,'95','Sterile eyewash - 500ml','6','18.947368421053','113','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Sterile Eyewash','EA','0','0',3),(176,83,'404.00',NULL,NULL,'85','Non-spark shovel','4','18.823529411765','101','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Plastic Shovel Green','EA','0','0',5),(181,83,'420.00',NULL,NULL,'46','Gas filter with saturation indicator (Respiratory protection against gases and vapors EN 14387)','6','52.173913043478','70','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'3M 6001 Cartridge Gas Filter','PAIRS','0','0',10),(182,83,'450.00',NULL,NULL,'38','Polypropylene broom','10','18.421052631579','45','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Polypropylene Broom , UK ','EA','0','0',11),(183,83,'552.00',NULL,NULL,'155','Dustbin','3','18.709677419355','184','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Dustbin , 36 Liter','EA','0','0',12),(184,83,'1250.00',NULL,NULL,'250','Mobile granule dispenser','4','25','312.5','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Wringer Mop Bucket','EA','0','0',13),(185,83,'150.00',NULL,NULL,'17','Sand Buckets','6','47.058823529412','25','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Fire Bucket SAND','EA','0','0',14),(186,83,'950.00',NULL,NULL,'190','First Aid Kit','4','25','237.5','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'First Aid Kit , 50 , Steel Box','SET','0','0',15),(187,83,'510.00',NULL,NULL,'50','3 wooden Poles 2 inch diameter','6','70','85','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Wooden Pole 2 Inch','EA','0','0',16),(188,83,'840.00',NULL,NULL,'255','Soft Stretcher Folding','2','64.705882352941','420','2022-01-02 07:19:06','2022-02-05 05:57:23','',NULL,'Soft Stretcher Folding','EA','0','0',17),(189,84,'30.00',NULL,NULL,'20','-','1','50','30','2022-01-03 10:23:55','2022-02-05 05:54:36','',NULL,'Electric Fuse\nBrand: Bosch ','EA','0','0',1),(190,84,'52.00',NULL,NULL,'40','-','1','30','52','2022-01-03 10:23:55','2022-02-05 05:54:36','',NULL,'Push button red.\nMade in China','EA','0','0',2),(191,84,'145.00',NULL,NULL,'112','-','1','29.464285714286','145','2022-01-03 10:23:55','2022-02-05 05:54:36','',NULL,'Push button red.\nBrand: Schneider','EA','0','0',3),(192,84,'69.00',NULL,NULL,'46','-','1','50','69','2022-01-03 10:23:55','2022-02-05 05:54:36','',NULL,'Push button green.\nBrand: ABB ','EA','0','0',4),(193,84,'86.25',NULL,NULL,'46','-','1','87.5','86.25','2022-01-03 10:23:55','2022-02-05 05:54:36','',NULL,'Relay \nBrand: Schneider','EA','0','0',5),(194,84,'580.00',NULL,NULL,'20','-','20','45','29','2022-01-03 10:23:55','2022-02-05 05:54:36','',NULL,'Electric Lock Connector\nAssorted sizes','PAC','0','0',6),(195,85,'13100.00',NULL,'8','0.825','Plastic Seals','10000','58.787878787879','1.31','2022-01-10 05:06:19','2022-02-05 05:53:49','',NULL,'Plastic Seals , Make : ACM , COO : USA, Model : HS-115 , Printed','EA','0','0',1),(196,85,'24000.00',NULL,'8','0.825','Plastic Seals','20000','45.454545454545','1.2','2022-01-10 05:06:19','2022-02-05 05:53:49','',NULL,'Plastic Seals , Make : ACM , COO : USA, Model : HS-115 , Printed','EA','0','0',2),(197,86,'4350.00',NULL,'9','19','Cup Brush Osborm M14 65MM made in Germany','150','52.631578947368','29','2022-01-10 08:31:10','2022-02-05 05:53:20','',NULL,'Cup Brush Osborm M14 65MM (Model Red)\nMade in Germany','EA','0','0',1),(199,86,'3900.00',NULL,'11','135','Strap Clamp/Buckle, SS201, 1/2\'\', Band-it, UK','25','15.555555555556','156','2022-01-10 08:31:10','2022-02-05 05:53:20','',NULL,'Strap Clamp/Buckle, SS201, 1/2\'\', Band-it, UK\n(100 pcs/Box)','BX','0','0',2),(200,86,'5050.00',NULL,'12','175','Strap Roll/Buckle, SS201, 1/2\'\', C20499, Band-it, UK','25','15.428571428571','202','2022-01-10 08:31:10','2022-02-05 05:53:20','',NULL,'Strap Roll/Buckle, SS201, 1/2\'\', C20499, Band-it, UK\n(30 Mtr/Roll)','BX','0','0',3),(201,86,'1035.00',NULL,'13','9','Rubber Cable 2.5mm x 3 Core\nBlack, France (90Mtr/Roll)','90','27.777777777778','11.5','2022-01-10 08:31:10','2022-02-05 05:53:20','',NULL,'3 x 2.5 MM, Rubber Cable, Black ','MTR','0','0',4),(202,86,'1350.00',NULL,'14','11','Rubber Cable 3x4 MM \nNexas, France (100Mtr/Roll)','100','22.727272727273','13.5','2022-01-10 08:31:10','2022-02-05 05:53:20','',NULL,'3 x 4 MM, Rubber Cable, Nexans\nMade In France','MTR','0','0',5),(203,87,'8050.00',NULL,'15','7000','A3 Printer ','1','15','8050','2022-01-10 16:06:58','2022-02-05 05:52:13','',NULL,'Canon image Runner C3125i,A3 Multification color printer.','EA','0','0',1),(204,87,'540.00',NULL,'16','485','Office desk Printer','1','11.340206185567','540','2022-01-10 16:06:58','2022-02-05 05:52:13','',NULL,'Canon Pixma TR4540, All in one office color printer','EA','0','0',2),(205,88,'NaN',NULL,'17','0.00','Stanley 5pc File Set (8\'\' Mill File, 6\'\' Round File, 6\'\' Slim Taper File, 8\'\' 4-in-1 File, Interchangeable Handle), 22-314','1','',NULL,'2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',1),(206,88,'0.00',NULL,'17','0.00','Stanley, 4.5\'\' Bi-Material File Handle, 22-311','1','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',2),(207,88,'NaN',NULL,'17','0.00','Stanley, 8\'\' Groove Joint Pliers','5','',NULL,'2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',3),(208,88,'0.00',NULL,'18','0.00','Knipex, Screwdriver for slotter screws \nLength: 202mm, 98 20 40','3','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'1','EA','0','0',4),(209,88,'0.00',NULL,'17','0.00','Knipex, Screwdriver for cross-recessed screws, PH2\nLength: 212mm, 98 24 02','3','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',5),(210,88,'0.00',NULL,'17','0.00','Knipex, Screwdriver for  slotter screws\nLength: 295mm, 98 20 80','3','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',6),(211,88,'0.00',NULL,'17','0.00','Knipex, Screwdriver for cross-recessed screws, PH2\nLength: 320mm, 98 24 02','3','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',7),(212,88,'0.00',NULL,'17','0.00','Stanley, 16ft FATMAX Tape Measure, FMHT36316THS','10','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',8),(213,88,'0.00',NULL,'17','0.00','Stanley, 2LB FATMAX Anti Vibe Blacksmith Hammer 56-003','3','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',9),(214,88,'0.00',NULL,'17','0.00','Cable drum, 150 meter','3','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',10),(215,88,'0.00',NULL,'17','0.00','Knipex, Diagonal Cutter, Length: 140mm, 70 02 140','5','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',11),(216,88,'0.00',NULL,'17','0.00','Knipex, Combination Plier, Length:160mm, 03 02 159','5','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',12),(217,88,'0.00',NULL,'17','0.00','Whistle','30','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',13),(218,88,'0.00',NULL,'17','0.00','Stanley, Voltage Tester Screwdriver.','10','','0','2022-01-12 15:42:17','2022-02-05 05:50:30','',NULL,'a','EA','0','0',14),(219,89,'4050.00',NULL,'9','19','Cup Brush Osborm M14 65MM made in Germany','150','42.105263157895','27','2022-01-15 17:17:27','2022-02-05 05:47:10','',NULL,'Cup Brush Osborm M14 65MM (Model Red)\nMade in Germany','EA','0','0',1),(220,89,'3900.00',NULL,'11','135','Strap Clamp/Buckle, SS201, 1/2\'\', Band-it, UK','25','15.555555555556','156','2022-01-15 17:17:27','2022-02-05 05:47:10','',NULL,'Strap Clamp/Buckle, SS201, 1/2\'\', Band-it, UK\n(100 pcs/Box)','BX','0','0',2),(221,89,'5050.00',NULL,'12','175','Strap Roll/Buckle, SS201, 1/2\'\', C20499, Band-it, UK','25','15.428571428571','202','2022-01-15 17:17:27','2022-02-05 05:47:10','',NULL,'Strap Roll/Buckle, SS201, 1/2\'\', C20499, Band-it, UK\n(30 Mtr/Roll)','BX','0','0',3),(222,89,'967.50',NULL,'13','9','Rubber Cable 2.5mm x 3 Core\nBlack, France (90Mtr/Roll)','90','19.444444444444','10.75','2022-01-15 17:17:27','2022-02-05 05:47:10','',NULL,'3 x 2.5 MM, Rubber Cable, Black ','MTR','0','0',4),(223,89,'1300.00',NULL,'14','11','Rubber Cable 3x4 MM \nNexas, France (100Mtr/Roll)','100','18.181818181818','13','2022-01-15 17:17:27','2022-02-05 05:47:10','',NULL,'3 x 4 MM, Rubber Cable, Nexans\nMade In France','MTR','0','0',5),(224,90,'1760.00',NULL,'19','0.22','Cargo Seal','8000',NULL,NULL,'2022-01-16 07:00:57','2022-01-20 09:15:01',NULL,NULL,'HS-115 Plastic Cargo Seal, ACM, USA,\nColor: Red (Print sequence: You need to specify) ','EA',NULL,NULL,1),(225,92,'0.00',NULL,'20','0.00','','0','0','0.00','2022-01-16 15:10:42','2022-01-16 15:10:42','',NULL,'kjgk','','0',NULL,1),(226,93,'0.00',NULL,'21','0.00','fggg','0','0','0.00','2022-01-16 15:40:42','2022-01-16 15:40:42','',NULL,'hjjjj','','0',NULL,1),(227,95,'28500.00',NULL,'22','2080','O-Ring flat Thickness 12 mm','10','37.019','2849.995','2022-01-16 15:56:16','2022-01-16 16:16:03','',NULL,'xfbdf','EA','0',NULL,1),(228,96,'28001.00',NULL,'23','2080','O-Ring Flat\nThickness: 12 mm\nWidth: 23 mm\nDia: 780 mm\nMaterial: NBR/EPDM Rubber\nHardness: 70-75 SHA','10','34.620','2800.1','2022-01-16 16:22:19','2022-01-17 05:43:54','',NULL,'Fabrication of Flat Ring\n\nSize: 12 x 23 x 780 (mm)\nThickness x Width x Dia\nApplication FRP Flange\nMaterial : NBR/EPDM Rubber\nHardness : 70~75 ShA\n','EA','0',NULL,1),(229,97,'0.00',NULL,'24','','pipes','','','','2022-01-17 07:58:18','2022-01-17 07:58:18','',NULL,'pipes','MLT','',NULL,1),(231,98,'246.00',NULL,'26','217','Plastic pipe welding machine','1','13.364','246','2022-01-17 13:57:37','2022-01-24 07:25:41','',NULL,'Plastic pipe welding machine\nIKS - 1500 WATT\nMade in China','EA','0',NULL,1),(232,99,'874.00',NULL,'27','200','Rotor','2','118.500','437','2022-01-17 14:18:48','2022-02-12 11:01:01',NULL,'quotation/quotation_detail/99/phpdQk3zC','Rotor','EA','0','0',2),(233,99,'45.00',NULL,'28','55','Rotor Switch','1','-18.182','45','2022-01-17 14:18:48','2022-03-13 07:52:42',NULL,'quotation/quotation_detail/99/phpZNDVUA','Rotor switch','EA','0','0',1),(234,100,'17533.00',NULL,'29','68','Plate Material:  Aluminum\nPlate Size – 23cm x 10cm x 3cm    \n6 mm size two Hole  to be in center.\nPaint – Water proof, Permanent and Reflective color.','197','30.882','89','2022-01-17 15:00:52','2022-01-17 15:00:52','',NULL,'Zone SIGN:\n3mm Aluminum with white color Powder Coating Text Screen Painted\nSize: 23x10 cm (various Number) 6mm Two hole as Per Design','EA','0',NULL,1),(235,101,'39200.00',NULL,'30','86','Plywood - 1.2 x 2.4m (4ft x 8ft) of 18mm thick exterior marine grade','400','13.953','98','2022-01-17 15:25:14','2022-01-17 15:25:14','',NULL,'Plywood\nDimension: 1.2 m x 2.4 m x 18mm thickness\nMade in China','EA','0',NULL,1),(236,102,'594000.00',NULL,'31','165','Plywood 18 mm thick INDONESIAN or\nequivalent with dimension\n2.44 x 1.22 m','3000','20.000','198','2022-01-18 05:17:51','2022-02-02 05:11:00','',NULL,'Plywood 18 mm thick INDONESIAN , 2.44 x 1.22 m','PCS','0','0',1),(237,102,'127500.00',NULL,'32','34','Timber 2” x 4 “ with length 4 m','3000','25.000','42.5','2022-01-18 05:17:51','2022-02-05 05:44:30','',NULL,'Timber 2” x 4 “ with length 4 m , AUSTRIA','PCS','0','0',2),(238,102,'132000.00',NULL,'33','17.5','Timber 1” x 4 “ with length 4 m','6000','25.714','22','2022-01-18 05:17:51','2022-02-05 05:44:30','',NULL,'Timber 1” x 4 “ with length 4 m, AUSTRIA','PCS','0','0',3),(239,103,'4680.00',NULL,'35','200','a','20','30','234','2022-01-19 12:39:55','2022-01-19 12:39:55','',NULL,'b','MTR','10',NULL,1),(240,104,'4680.00',NULL,'35','200','a','20','30','234','2022-01-19 12:40:26','2022-01-19 12:40:26','',NULL,'b','MTR','10',NULL,1),(241,105,'22655.00',NULL,'29','89','Plate Material:  Aluminum\nPlate Size – 23cm x 10cm x 3cm    \n6 mm size two Hole  to be in center.\nPaint – Water proof, Permanent and Reflective color.','197','29.213','115','2022-01-20 09:46:37','2022-03-14 13:10:29','',NULL,'Zone SIGN:\n3mm Aluminum with Engraving Letters\nFilled Black Color in engraved area\nSize: 230x100 mm (various Number)\n6mm Two hole as Per Design','EA','0','0',1),(242,106,'3460.00',NULL,'36','1520','Schneider Panel Board 36 Branch 160 APMS','2','13.816','1732.8','2022-01-20 10:02:43','2022-02-05 05:43:25','',NULL,'Schneider Panel Board 36 Branch 160 APMS','EA','0','0',1),(243,106,'38900.00',NULL,'37','1720','6\'\' Diameter, Carbon Steel pipe sch 80(6 meter length)','20','13.081','1995.2','2022-01-20 10:02:43','2022-02-05 05:43:25','',NULL,'6\'\' CS pipe, SCH 80 (6 mtr)','EA','0','0',2),(244,107,'38400.00',NULL,'38','1720','6\" NB \\ Sch 80 \\ Carbon Steel pipe','20','11.628','1920','2022-01-20 10:19:47','2022-02-05 05:42:35','',NULL,'6\'\' CS pipe, SCH 80, 6 mtr.\nUkrain','EA','0','0',1),(245,107,'20250.00',NULL,'39','12.5','Welding Electrodes Ø 3.2mm E 7018','1500','8','13.5','2022-01-20 10:19:47','2022-02-05 05:42:35','',NULL,'Welding Electrodes Ø 3.2mm E 7018\nKISWAL - Korea','KG','0','0',2),(246,108,'25990.00',NULL,'40','23000','Pressure Calibrator Model No. 718-300G\nRange: 20 to 600','1','13','25990','2022-01-20 11:07:22','2022-02-05 05:40:10','',NULL,'Pressure Calibrator Model No. 718-300G\nRange: 20 to 600\nBRAND: GE','EA','0','0',1),(247,108,'25990.00',NULL,'40','23000','Pressure Calibrator Model No. 718-300G\nRange: 0 to 1500','1','13','25990','2022-01-20 11:07:22','2022-02-05 05:40:10','',NULL,'Pressure Calibrator Model No. 718-300G\nRange: 20 to 600\nBRAND: GE','EA','0','0',2),(249,107,'20250.00',NULL,NULL,'12.5',' Welding Electrodes  Ø 2.5mm E 7018','1500','8','13.5','2022-01-20 11:49:34','2022-02-05 05:42:35','',NULL,'Welding Electrodes  Ø 2.5mm E 7018 \nKISWAL - Korea','KG',NULL,'0',3),(250,107,'23625.00',NULL,NULL,'14.6','  Welding Electrodes  Ø 3.2mm E 6010','1500','7.877','15.75','2022-01-20 11:49:34','2022-02-05 05:42:35','',NULL,'Welding Electrodes  Ø 3.2mm E 6010\nKISWAL - Korea','KG',NULL,'0',4),(251,107,'1600.00',NULL,NULL,'3.7',' 5* grinding disk  ','400','8.108','4','2022-01-20 11:49:34','2022-02-05 05:42:35','',NULL,'5\" griding disk BRAND:ATI','EA',NULL,'0',5),(252,107,'3200.00',NULL,NULL,'2.85','  5* cutting disk ','1000','12.281','3.2','2022-01-20 11:49:34','2022-02-05 05:42:35','',NULL,'5\" cutting disk BRAND:ATI','EA',NULL,'0',6),(253,107,'360.00',NULL,NULL,'5',' wire brush ','60','20','6','2022-01-20 11:49:34','2022-02-05 05:42:35','',NULL,'wood handle wire brush','EA',NULL,'0',7),(254,107,'0',NULL,NULL,'',' 5* power brush','0','','0','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,'NEED CLARITY',' ',NULL,'0',8),(255,107,'225.00',NULL,NULL,'40',' Victor Gas cutting  nozzle for cutting 1/2\" thickness','5','12.500','45','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,' Victor Gas cutting  nozzle for cutting 1/2\" thickness','EA',NULL,'0',9),(256,107,'45.00',NULL,NULL,'8','spark lighter ','5','12.500','9','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,'spark lighter ','EA',NULL,'0',10),(257,107,'0.00',NULL,NULL,'',' hypertherm power max 85 tungsten electrode (for plasma machine )','0','','0','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,'N/a',' ',NULL,'0',11),(258,107,'198.00',NULL,NULL,'3',' leather welding gloves','60','10.000','3.3','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,' leather welding gloves','PAIRS',NULL,'0',12),(259,107,'130.00',NULL,NULL,'12',' leather apron','10','8.33','13','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,' leather apron','EA',NULL,'0',13),(260,107,'490.00',NULL,NULL,'45','ear plug ','10','8.889','49','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,'ear plug 100pc/Box','BX',NULL,'0',14),(261,107,'132000.00',NULL,NULL,'100','dust masks 3m N95','1200','10.000','110','2022-01-20 11:59:45','2022-02-05 05:42:35','',NULL,'3M , N95 dust masks','BX',NULL,'0',15),(262,107,'225.00',NULL,NULL,'2.25','safety glasses','60','66.667','3.75','2022-01-20 12:48:28','2022-02-05 05:42:35','',NULL,'safety glasses','EA',NULL,'0',16),(263,107,'120.00',NULL,NULL,'10','Face shield replacement visor','10','20.000','12','2022-01-20 12:48:28','2022-02-05 05:42:35','',NULL,'Face shield replacement visor','EA',NULL,'0',17),(264,107,'450.00',NULL,NULL,'40',' Welding helmet','10','12.500','45','2022-01-20 12:48:28','2022-02-05 05:42:35','',NULL,'Welding helmet','EA',NULL,'0',18),(265,107,'300.00',NULL,NULL,'0.75',' Clear lens for welding screen','300','33.333','1','2022-01-20 12:48:28','2022-02-05 05:42:35','',NULL,'Clear lens for welding screen','EA',NULL,'0',19),(266,107,'4200.00',NULL,NULL,'30',' Filter lens for welding screen - shade 11','120','16.667','35','2022-01-20 12:48:28','2022-02-05 05:42:35','',NULL,'Filter lens for welding screen - shade 11','EA',NULL,'0',20),(267,107,'4200.00',NULL,NULL,'30',' Filter lens for welding screen - shade 10','120','16.667','35','2022-01-20 12:48:28','2022-02-05 05:42:35','',NULL,'Filter lens for welding screen - shade 10','EA',NULL,'0',21),(268,109,'160.00',NULL,'1','40','PLC Troubleshooting Per Day Charges','4',NULL,NULL,'2022-01-22 06:42:22','2022-01-22 06:42:22',NULL,NULL,'ghhh','GRS',NULL,NULL,1),(269,110,'408.00',NULL,'62','20','ghhh','20','2','20.4','2022-01-22 07:36:54','2022-01-22 07:36:54','',NULL,'bnnnn','MLT','0',NULL,1),(270,113,'885.00',NULL,'64','0.15','Screws 6 x 50 mm','5000','18','0.177','2022-01-22 09:28:31','2022-02-05 05:38:59','',NULL,'Screws 6 x 50mm','PCS','0','0',1),(271,113,'1830.00',NULL,NULL,'50','Spirit Level 1.2 m','30','22.000','61','2022-01-22 09:38:00','2022-02-05 05:38:59','',NULL,'Spirit Level 1.2 m','PCS',NULL,'0',2),(272,113,'0.00',NULL,NULL,'','Generator high pressure oil pipe - 150 cm','1','','0','2022-01-22 09:38:00','2022-02-05 05:38:59','',NULL,'NEED CLARITY','PCS',NULL,'0',3),(273,113,'5400.00',NULL,NULL,'120','Plate tamper oil seal','40','12.500','135','2022-01-22 09:38:00','2022-02-05 05:38:59','',NULL,'plate tamper oil seal','PCS',NULL,'0',4),(274,113,'1400.00',NULL,NULL,'23','Air conditioner switch','50','21.739','28','2022-01-22 09:38:00','2022-02-05 05:38:59','',NULL,'Air conditioner switch','PCS',NULL,'0',5),(275,113,'620.00',NULL,NULL,'50','Female socket\nRed, 380V 32A, Five holes','10','24.000','62','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'Female socket\nRed, 380V 32A, Five holes','PCS',NULL,'0',6),(276,113,'1715.00',NULL,NULL,'40','Female socket\nBlue, 220V 32A, three holes','35','22.500','49','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'Female socket\nBlue, 220V 32A, three holes','PCS',NULL,'0',7),(277,113,'2025.00',NULL,NULL,'115','Mobile power box\n400 x 300 x 150 mm','15','17.391','135','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'Mobile power box\n400 x 300 x 150 mm','PCS',NULL,'0',8),(278,113,'3605.00',NULL,NULL,'90','Leakage switch\n2p 40A','35','14.444','103','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'Leakage switch 30ma\nHIMAL 2p 40A','PCS',NULL,'0',9),(279,113,'2520.00',NULL,NULL,'110','Leakage switch\n4P 63A','20','14.545','126','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'Leakage switch 30ma\nHIMAL 4P 63A','PCS',NULL,'0',10),(280,113,'480.00',NULL,NULL,'27.6','Electrical waterproof tape - 23','15','15.942','32','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'Electrical waterproof tape','ROLLS',NULL,'0',11),(281,113,'0.00',NULL,NULL,'','Switch track','10','','0','2022-01-22 09:39:56','2022-02-05 05:38:59','',NULL,'NEED SIZE','MTR',NULL,'0',12),(282,113,'25.00',NULL,NULL,'20','battery clip','1','25.000','25','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'battery clip','BX',NULL,'0',13),(283,113,'100.00',NULL,NULL,'15','Steel ruler 500mm','5','33.333','20','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'Steel ruler 500mm','PCS',NULL,'0',14),(284,113,'3200.00',NULL,NULL,'2.75','Ash bucket','1000','16.364','3.2','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'Ash bucket','PCS',NULL,'0',15),(285,113,'375.00',NULL,NULL,'20','Thermometer ','15','25.000','25','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'Thermometer ','PCS',NULL,'0',16),(286,113,'2860.00',NULL,NULL,'100','FLY KILLER ','22','30.000','130','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'Insect killer','PCS',NULL,'0',17),(287,113,'0.00',NULL,NULL,'','HEAT TUBE ','40','','0','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'N/a','PCS',NULL,'0',18),(288,113,'1800.00',NULL,NULL,'300','WATER HEATER ','5','20.000','360','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'Water heater -50L','PCS',NULL,'0',19),(289,113,'3500.00',NULL,NULL,'55','N95 MASK','50','27.273','70','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'N95 Mask\n20pc/Box','BX',NULL,'0',20),(290,113,'33440.00',NULL,NULL,'310','MEDICAL DISPOAIABLE FACE MASK ','88','22.581','380','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'MEDICAL DISPOAIABLE FACE MASK \n40 box/Carton','CTN',NULL,'0',21),(291,113,'500.00',NULL,NULL,'4','DISPOAIABLE  COVERALL ','100','25.000','5','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'DISPOAIABLE  COVERALL ','PCS',NULL,'0',22),(292,113,'600.00',NULL,NULL,'5','GOEELES ','100','20.000','6','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'Goggles','PCS',NULL,'0',23),(293,113,'350.00',NULL,NULL,'2.75','FACE SHEILD ','100','27.273','3.5','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'FACE SHEILD ','PCS',NULL,'0',24),(294,113,'700.00',NULL,NULL,'5','SANITIZER - 50ml','100','40.000','7','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'SANITIZER - 50ml','PCS',NULL,'0',25),(295,113,'1800.00',NULL,NULL,'14','SOPROPYL ALCOHOL - 750ml ','100','28.571','18','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'SOPROPYL ALCOHOL - 750ml ','PCS',NULL,'0',26),(296,113,'0.00',NULL,NULL,'','LEVEL MACHINE ','1','','0','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'N/a','PCS',NULL,'0',27),(297,113,'280.00',NULL,NULL,'10','SANITIZER - 500 ml','20','40.000','14','2022-01-22 09:44:41','2022-02-05 05:38:59','',NULL,'SANITIZER - 500 ml','PCS',NULL,'0',28),(298,114,'0.00',NULL,'0','0.00','','0','','0.00','2022-01-24 07:33:47','2022-02-05 06:33:06','',NULL,'','','0','0',1),(299,114,'0.00',NULL,'0','0.00','','0','','0.00','2022-01-24 07:33:47','2022-02-05 06:33:06','',NULL,'','','0','0',2),(300,114,'0.00',NULL,'0','0.00','','0','','0.00','2022-01-24 07:33:47','2022-02-05 06:33:06','',NULL,'','','0','0',3),(301,115,'3600.00',NULL,'0','1800','Flat Ring','2',NULL,NULL,'2022-01-26 06:09:06','2022-01-26 06:10:01',NULL,NULL,'Fabrication of Flat Ring\nSize :\nThk 15mm x Width 23mm x Dia 780mm\nFlat Type\nApplication FRP Flange\nMaterial : NBR/EPDM Rubber\nHardness : 70~75 ShA\nAs per provided Picture','EA',NULL,NULL,1),(302,115,'2800.00',NULL,'0','2800','Flat Ring Mold','1',NULL,NULL,'2022-01-26 06:09:06','2022-01-26 06:10:01',NULL,NULL,'Development Cost (Mold) One Time','EA',NULL,NULL,1),(303,116,'14400.00',NULL,'0','42','Plastic wire mesh including identification tapes and steel supports (Standard size) ','48','614.286','300','2022-01-26 15:23:33','2022-03-21 10:25:53','',NULL,'Plastic wire mesh\n50 Mtr/Roll.','ROLLS','0','0',1),(304,116,'1100.00',NULL,'0','42','Red and white traffic cones with solar light units','20','30.952','52.5','2022-01-26 15:23:33','2022-02-05 05:02:02','',NULL,'OPTION 1:\nRed and white traffic cones - 1mtr with solar light units','EA','0','0',2),(305,116,'1020.00',NULL,'0','38.5','','20','32.468','48.125','2022-01-26 15:23:33','2022-02-05 05:02:02','',NULL,'OPTION 2:\nRed and white traffic cones - 75 cm with solar light units','EA','0','0',3),(306,116,'27200.00',NULL,'0','55','Plastic speed humps','400','23.636','68','2022-01-26 15:23:33','2022-02-05 05:02:02','',NULL,'1 Mtr plastic speed hump - 2 Cable model','MTR','0','0',4),(307,117,'15000.00',NULL,'0','700','Reach type forklift','10','114.286','1500','2022-01-27 05:42:27','2022-02-05 05:00:15','',NULL,'Heli Reach Truck\n2 Ton Capacity','PER DAY','0','0',1),(308,117,'2000.00',NULL,'0','2000','Mobilization and Demobilization','1','0.000','2000','2022-01-27 05:42:27','2022-02-05 05:00:15','',NULL,'Mobilization and Demobilization','EA','0','0',2),(309,118,'11040.00',NULL,'0','4800','Only Diesel Engine DY-23/DY-23','2','15','5520','2022-01-27 08:51:14','2022-02-05 05:09:01','',NULL,'OPTION 1:\nAir Cooled Diesel.','EA','0','0',1),(310,118,'33350.00',NULL,'0','14500','','2','15','16675','2022-01-27 08:51:14','2022-02-05 05:09:01','',NULL,'OPTION 2:\nAir Cooled Diesel.\nSerie 12LD\n23.1 hp','EA','0','0',2),(311,119,'1760.00',NULL,'0','0.22','Cargo Seal','8000','',NULL,'2022-02-02 05:43:24','2022-02-05 10:25:29',NULL,NULL,'HS-115 Plastic Cargo Seal, ACM, USA,\nColor: Red (Print Sequence: You Need To Specify)','EA',NULL,NULL,1),(312,120,'10000.00',NULL,'0','24','Coverall Non-FR','200','108.333','50','2022-02-08 17:50:51','2022-02-08 17:50:51','',NULL,'Coverall, Non-FR, Twill Cotton 100%, 190 GSM,\nVarious Sizes\nCOO : INDIA\nBrand : KADTEX\nComplies EN & ASTM, Data Sheet Attached','EA','0','0',1),(313,120,'23000.00',NULL,'0','70','Coverall FR','200','64.286','115','2022-02-08 17:50:51','2022-02-10 06:05:45','',NULL,'Coverall, FR, Cotton 100%, 220 GSM, 8 CAL\nVarious Sizes\nCOO : INDIA\nBrand : KADTEX\nComplies : EN , NFPA & ASTM , Data Sheet Attached','EA','0','0',2),(314,121,'14000.00',NULL,'0','39','Coverall Non-FR','200','79.487','70','2022-02-10 06:12:23','2022-02-12 12:43:36',NULL,NULL,'COTTON COVERALL NAVY BLUE W/ 2\"  REFLECTIVE STRIP, BRAND : FALTRA , PAKISTAN','EA','0','0',1),(315,121,'27000.00',NULL,'0','98','Coverall FR','200','37.755','135','2022-02-10 06:12:23','2022-02-12 12:43:41',NULL,NULL,'FIRE RETARDANT COVERALL NAVY BLUE W/ 2  REFLECTIVE STRIP, BRAND : FALTRA, PAKISTAN','EA','0','0',2),(317,122,'1080.00',NULL,'0','290','Pipe Wrench, 24\"\nH/D RID GID USA (High Quality)','3','24.138','360','2022-02-13 15:07:05','2022-02-13 15:07:05','',NULL,'Pipe Wrench, 24\"\nH/D RID GID USA (High Quality)','EA','0','0',1),(318,122,'350.00',NULL,'0','140','Pipe Wrench, 14\" \nH/D RID GID USA (High Quality)','2','25','175','2022-02-13 15:07:05','2022-02-13 15:07:05','',NULL,'Pipe Wrench, 14\" \nH/D RID GID USA (High Quality)','EA','0','0',2),(326,125,'5990.00',NULL,'0','5990','CP8613 PACK','1',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'3/4\" Cordless Nut Runner, 300 -\n1300 Nm complete pack.\nPart # (6151570000)','EA',NULL,NULL,0),(327,125,'12000.00',NULL,'0','6000','CP6120-D35H','2',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'1-1/2\" Impact wrench, D-Handle\nType, 4880 Nm Max Torque.\nPart # (6151590120)','EA',NULL,NULL,0),(328,125,'4000.00',NULL,'0','2000','CP0611-D28','2',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'1\" Drive impact wrench D-Handle\nType, 3790 Nm.\nPart # (6151590160)','EA',NULL,NULL,0),(329,125,'1190.00',NULL,'0','595','CP7783','2',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'1\" Drive impact wrench D-Handle\nType, 3790 Nm.\nPart # (8941077830)','EA',NULL,NULL,0),(330,125,'1200.00',NULL,'0','400','CP7769','3',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'3/4\" Drive impact wrench Pistol\nType 1950 Nm Max Torque.\nPart # (8941077691)','EA',NULL,NULL,0),(331,125,'740.00',NULL,'0','370','CP3550-120AA5','2',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'5\" & 4-1/2\" Angle Grinder 1.5 HP,\n12000 RPM.\nPart # (6151607780)','EA',NULL,NULL,0),(332,125,'1300.00',NULL,'0','650','CP3750-085AA7','2',NULL,NULL,'2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,NULL,'7\" Angle Grinder 2.2 HP, 8500 RPM.\nPart # (6151607830)','EA',NULL,NULL,0),(333,126,'420000.00',NULL,'0','250','Running Track 1200 Sq. m ','1200','40','350','2022-02-23 05:40:21','2022-02-23 05:40:21','',NULL,'Sandwich Layer Running Track 1200 Sq m','EA','0','0',1),(334,126,'49980.00',NULL,'0','35000','Existing Floor Removal','1','42.8','49980','2022-02-23 05:40:21','2022-02-23 05:40:21','',NULL,'Existing Floor Removal','EA','0','0',2),(335,127,'0.00',NULL,'0','','100*100*3mm hollow section steel  post 6 meter  length each','0','0','0','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','','0','0',1),(336,127,'0.00',NULL,'0','','Hollow Section Steel Profile 6 mtr 80*40*3mm','0','0','0','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','','0','0',2),(337,127,'0.00',NULL,'0','','Hollow Section Steel Profile  6 mtr   40*40*2m','0','0','0','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','','0','0',3),(338,127,'0.00',NULL,'0','','Zinc Coated Correction Meter Sheet Size 430*100cm thickness 0.32 mm','0','0','0','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','','0','0',4),(339,127,'0.00',NULL,'0','','self drilling screw with rubber washer zinc plated 3*40mm ','0','0','0','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','','0','0',5),(340,127,'0.00',NULL,'0','170','Welding Electrod 6013 2.5mm ESAB','0','14.706','195','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','','0','0',6),(341,127,'19500.00',NULL,'0','170','Zinc Coated Corrugated Metal Sheets size100*300cm  0.5 Thickness','100','14.706','195','2022-02-23 16:27:59','2022-02-23 16:27:59','',NULL,'','BX','0','0',7),(342,129,'10480.00',NULL,'8','0.825','Plastic Seals','8000','58.787878787879','1.31','2022-02-27 21:06:45','2022-02-27 21:06:45','',NULL,'Plastic Seals , Make : ACM , COO : USA, Model : HS-115 , Printed','EA','0','0',1),(343,129,'10480.00',NULL,'8','0.825','Plastic Seals','8000','58.787','1.31','2022-02-27 21:06:45','2022-02-27 21:06:45','',NULL,'Plastic Seals , Make : ACM , COO : USA, Model : HS-115 , Printed','EA','0','0',2),(348,131,'125.00',NULL,'0','50','mhjh','2','25','62.5','2022-02-28 13:47:51','2022-02-28 13:47:51','',NULL,'jhgkhf','CENTIMETER','0','0',1),(349,131,'0.00',NULL,'0','','jhfkg','0','','0','2022-02-28 13:47:51','2022-03-14 14:57:37','',NULL,'kjbkb','MLT','0','0',2),(350,132,'2850.00',NULL,'0','1.88','Cutting Disc 4 Inch, 1.6 mm','1140','32.979','2.5','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'Cutting Disc 4 Inch, 1.6 mm','EA','0','0',1),(351,132,'2850.00',NULL,'0','1.7','Cutting Disc 4 Inch, 2.4 mm','1140','47.059','2.5','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'Cutting Disc 4 Inch, 2.4 mm','EA','0','0',2),(352,132,'5472.00',NULL,'0','1.55','Cutting Disc 4 Inch, 3.2 mm','2280','54.839','2.4','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'Cutting Disc 4 Inch, 3.2 mm','EA','0','0',3),(353,132,'7182.00',NULL,'0','2','Grinding Disc 4 Inch','2280','57.500','3.15','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'Cutting Disc 4 Inch, 2.4 mm','EA','0','0',4),(354,132,'15800.20',NULL,'0','13','E7018 ELECTRODE 2.5 MM','1030','18','15.34','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'E7018 ELECTRODE 2.5 MM','KG','0','0',5),(355,132,'12272.00',NULL,'0','13','E7018 ELECTRODE 3.2 MM','800','18','15.34','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'E7018 ELECTRODE 3.2 MM','KG','0','0',6),(356,132,'1899.80',NULL,'0','14','E6010 ELECTRODE 3.2 MM','115','18','16.52','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'E6010 ELECTRODE 3.2 MM','KG','0','0',7),(357,132,'1653.00',NULL,'0','10','Welding Chipping Hammers','114','45','14.5','2022-02-28 18:20:54','2022-02-28 18:20:54','',NULL,'Welding Chipping Hammers','EA','0','0',8),(358,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',1),(359,133,'180.00',NULL,'0','35','Pipe & Duct Snip, 8 IN','4','28.571','45','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Pipe & Duct Snip, 8 IN, Taiwan','EA','0','0',2),(360,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',3),(361,133,'180.00',NULL,'0','35','Trojan Snip','4','28.571','45','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Trojan Snip , 24\'\' PRC','EA','0','0',4),(362,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',5),(363,133,'348.00',NULL,'0','72','90 Deg Tin Snip, 9 IN','4','20.833','87','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'90 Deg Tin Snip, 9 IN, STANLEY','EA','0','0',6),(364,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',7),(365,133,'439.20',NULL,'0','90','Rivet Gun','4','22','109.8','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Rivet Gun, Set','SET','0','0',8),(366,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',9),(367,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',10),(368,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',11),(369,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',12),(370,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',13),(371,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',14),(372,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',15),(373,133,'253.80',NULL,'0','4.7','Flexible Duct , Size 6\'\'','45','20','5.64','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Flexible Duct , Size 6\'\' , 7.5 m = 1 Roll','MTR','0','0',16),(374,133,'432.00',NULL,'0','90','Water Based Duct Sealing Agent ','4','20','108','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Water Based Duct Sealing Agent , UAE, 1 DRUM = 1 GALLON','DRM','0','0',17),(375,133,'90.00',NULL,'0','10','Zip Ties','6','50.000','15','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Zip Ties , 2.5 X 3.6','PAC','0','0',18),(376,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',19),(377,133,'0.00',NULL,'0','','REGRET','0','0','0','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'REGRET','','0','0',20),(378,133,'3000.00',NULL,'0','170','Brazing Rod','15','17.647','200','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Brazing Rod, 1.27 X 3.2 , 1 SET = 28 Sticks ','SET','0','0',21),(379,133,'1440.00',NULL,'0','240','Copper Refrigeration Tube Dehydrated','5','20','288','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Copper Refrigeration Tube Dehydrated, 2.8, KOREA , 1 SET = 15 m','SET','0','0',22),(380,133,'336.00',NULL,'0','2.5','Copper Tube Fitting Coupling','70','92.000','4.8','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Copper Tube Fitting Coupling, 3/8','EA','0','0',23),(381,133,'160.00',NULL,'0','2','Access Valve , Size 1/4 X 3/8','40','100.000','4','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Access Valve , Size 1/4 X 3/8','EA','0','0',24),(382,133,'160.00',NULL,'0','2','Access Valve 1/4 Flare , 5/8 Dia','40','100.000','4','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Access Valve 1/4 Flare , 5/8 Dia','EA','0','0',25),(383,133,'528.00',NULL,'0','110','Copper Tube Bender 5/8','4','20','132','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'Copper Tube Bender 5/8','EA','0','0',26),(384,133,'1342.00',NULL,'0','550','Freon Gas Recovery Cylinder','2','22','671','2022-02-28 19:23:38','2022-02-28 19:23:38','',NULL,'1 EA = 12 KG Cylinder , Freon Gas Recovery Cylinder','EA','0','0',27),(385,134,'2667.60',NULL,'0','1.8','Cutting Disc 4 Inch, 1.6 mm','1140','30','2.34','2022-03-02 08:40:59','2022-03-02 12:44:15','',NULL,'CUTTING DISC 4\", 1MM(1/16\")','EA','0','0',1),(386,134,'2850.00',NULL,'0','1.7','Cutting Disc 4 Inch, 2.4 mm','1140','47.059','2.5','2022-03-02 08:40:59','2022-03-02 08:40:59','',NULL,'Cutting Disc 4 Inch, 2.4 mm','EA','0','0',2),(387,134,'5472.00',NULL,'0','1.55','Cutting Disc 4 Inch, 3.2 mm','2280','54.839','2.4','2022-03-02 08:40:59','2022-03-02 08:40:59','',NULL,'Cutting Disc 4 Inch, 3.2 mm','EA','0','0',3),(388,134,'7182.00',NULL,'0','2','Grinding Disc 4 Inch','2280','57.500','3.15','2022-03-02 08:40:59','2022-03-02 08:40:59','',NULL,'Cutting Disc 4 Inch, 2.4 mm','EA','0','0',4),(389,134,'10943.75',NULL,'0','8.5','E7018 ELECTRODE 2.5 MM','1030','25.000','10.625','2022-03-02 08:40:59','2022-03-02 12:13:43','',NULL,'E7018 ELECTRODE 2.5 MM','KG','0','0',5),(390,134,'9880.00',NULL,'0','9.5','E7018 ELECTRODE 3.2 MM','800','30.000','12.35','2022-03-02 08:40:59','2022-03-02 12:13:43','',NULL,'E7018 ELECTRODE 3.2 MM','KG','0','0',6),(391,134,'1624.00',NULL,'0','10.5','E6010 ELECTRODE 3.2 MM','116','33.333','14','2022-03-02 08:40:59','2022-03-02 12:13:43','',NULL,'E6010 ELECTRODE 3.2 MM','KG','0','0',7),(392,134,'1356.60',NULL,'0','8.5','Welding Chipping Hammers','114','40.000','11.9','2022-03-02 08:40:59','2022-03-02 12:13:43','',NULL,'Welding Chipping Hammers','EA','0','0',8),(393,135,'7500.00',NULL,'0','700','Reach type forklift','3','257.143','2500','2022-03-02 09:35:34','2022-03-02 09:55:43','',NULL,'Heli Reach Truck\n2 Ton Capacity','PER DAY','0','0',1),(394,135,'2000.00',NULL,'0','2000','Mobilization and Demobilization','1','0.000','2000','2022-03-02 09:35:34','2022-03-02 09:35:34','',NULL,'Mobilization and Demobilization','EA','0','0',2),(395,137,'1760.00',NULL,'0','0.22','Cargo Seal','8000','',NULL,'2022-03-08 09:50:42','2022-03-08 09:51:37',NULL,NULL,'Cargo Seal - HS-115 Plastic Cargo Seal, ACM, USA,\nColor: Red (Print Sequence: You Need To Specify)','EA',NULL,NULL,0),(396,138,'1760.00',NULL,'0','0.22','Cargo Seal','8000',NULL,NULL,'2022-03-08 09:54:45','2022-03-08 09:54:45',NULL,NULL,'Cargo Seal - HS-115 Plastic Cargo Seal, ACM, USA,\nColor: Red (Print Sequence: You Need To Specify)','EA',NULL,NULL,0),(397,139,'1760.00',NULL,'0','0.22','Cargo Seal','8000',NULL,NULL,'2022-03-08 09:56:13','2022-03-08 09:56:13',NULL,NULL,'Cargo Seal - HS-115 Plastic Cargo Seal, ACM, USA,\nColor: Red (Print Sequence: You Need To Specify)','EA',NULL,NULL,0),(398,140,'31500.00',NULL,'0','226','Office filing racks','70','99.115','450','2022-03-08 13:38:52','2022-03-08 13:42:22','',NULL,'OPTION 1:\n\nMetal office filing racks, 5 shelves. \nHigh Quality Storage Unit\n\nDimensions:\n200 x 80 x 40 \n(H x W x D)','EA','0','0',1),(399,140,'38500.00',NULL,'0','286','Office filing racks','70','92.308','550','2022-03-08 13:38:52','2022-03-08 13:42:22','',NULL,'OPTION 2:\n\nMetal office filing racks, 5 shelves.\nHigh Quality Storage Unit\n\nDimensions:\n200 x 120 x 30 \n(H x W x D)','EA','0','0',2),(400,141,'151200.00',NULL,'0','36000','Total station - EDM Leica Flexline TS03','3','40','50400','2022-03-09 08:12:59','2022-03-09 08:12:59','',NULL,'Nikon XF-5” Total Station Full set   ','EA','0','0',1),(401,141,'161700.00',NULL,'0','38500','Total station - EDM Leica Flexline TS03','3','40','53900','2022-03-09 08:12:59','2022-03-09 08:12:59','',NULL,'Nikon XS-2” Total Station Full set  ','EA','0','0',1),(402,142,'4350.00',NULL,'0','1050','Wooden pole','3','38.095','1450','2022-03-09 12:06:11','2022-03-09 12:06:11','',NULL,'Fabrication of stretcher\n\nPipe size 1 -1/4 “ with cs sheet 1.5 MM\nwhite color paint','EA','0','0',1),(403,145,'90066.00',NULL,'0','30022','kjbklj','3',NULL,NULL,'2022-03-12 06:09:39','2022-03-12 06:09:39',NULL,NULL,'jgfujyigi','BX',NULL,NULL,0),(404,146,'469200000.00',NULL,'0','200000','Flooring For Swimming Floor Exteriors','1380','70','340000','2022-03-13 08:20:30','2022-03-13 08:20:30','',NULL,'Surface Preparation + Installation of EPDM','EA','0','0',1),(405,146,'393000.00',NULL,'0','300000','Lockers Uninstallation & New Lockers','1','31','393000','2022-03-13 08:20:30','2022-03-13 08:20:30','',NULL,'New Lockers 3 tier Installation , Metallic + Uninstallation of the Existing','EA','0','0',2),(406,147,'469200000.00',NULL,'0','250000','Flooring For Swimming pool, Exteriors','1380','36.000','340000','2022-03-13 13:55:43','2022-03-13 13:55:43','',NULL,'Surface Preparation + Installation of EPDM','EA','0','0',1),(407,148,'596000.00',NULL,'0','200000','Padel Court 20 X 10','2','49','298000','2022-03-14 12:53:01','2022-03-14 12:53:01','',NULL,'Padel Court - 20X10 m, Turf Green, with 4 Light Poles','SET','0','0',1),(408,105,'132.00',NULL,NULL,'110',' Steel Cable Tie Manual Cutter','1','20','132','2022-03-14 13:07:16','2022-03-14 13:07:16','',NULL,'Stainless Steel Cable Tie Manual Cutter','EA','0','0',2),(409,105,'107.50',NULL,NULL,'17','Leather Working gloves ','5','26.471','21.5','2022-03-14 13:07:16','2022-03-14 13:07:16','',NULL,'Leather Working gloves (Delta)','PAIRS','0','0',3),(410,105,'1125.00',NULL,NULL,'2.1','Stainless Steel Cable Ties','500','7.143','2.25','2022-03-14 13:07:16','2022-03-14 13:07:16','',NULL,'Stainless Steel Cable Ties','EA','0','0',4),(411,149,'1274.40',NULL,'0','54','spray paint -red','20','18','63.72','2022-03-14 13:36:46','2022-03-14 14:08:06','',NULL,'Jotun Red Spray paint 1 ltr Tin','EA','0','0',1),(412,149,'1817.20',NULL,'0','70','nylon rope thick=12mm','22','18','82.6','2022-03-14 13:36:46','2022-03-14 14:08:06','',NULL,'12 mm Nylon Rope - 1 Roll of 100 yards','ROLLS','0','0',2),(413,149,'10440.00',NULL,'0','29','Non shrink grounting material  Sika grout 340','300','20','34.8','2022-03-14 13:36:46','2022-03-14 14:08:06','',NULL,'SikaGrout - 214 SA','BAG','0','0',3),(414,149,'7560.00',NULL,'0','21','Non shrink grounting material  Sika grout 340','300','20','25.2','2022-03-14 13:36:46','2022-03-14 14:08:06','',NULL,'SikaGrout - 114 SA','BAG','0','0',3),(415,149,'276.12',NULL,'0','78','dust mask','3','18','92.04','2022-03-14 13:36:46','2022-03-14 14:08:06','',NULL,'3M dust mask - N95 model: 8210 (1 box - 20 pcs)','BX','0','0',4),(416,149,'3009.00',NULL,'0','85','dust mask filter element','30','18','100.3','2022-03-14 13:36:46','2022-03-14 14:08:06','',NULL,'3M filter dust mask - N95 model: 8210V (1 Box - 10 pcs)','PCS','0','0',5),(417,150,'187000.00',NULL,'0','170000','Tennis Court & Accesories','1','10','187000','2022-03-14 14:41:26','2022-03-14 14:41:26','',NULL,'Tennis Court Flooring With Accessories - Referee Chair , Poles & Net, Dims As per Existing','SET','0','0',1),(418,150,'208000.00',NULL,'0','160000','Basket Ball with Accessories','1','30','208000','2022-03-14 14:41:26','2022-03-14 14:41:26','',NULL,'Basket Ball Court Flooring , Accessories - Poles & Board','SET','0','0',2),(419,151,'13300.00',NULL,'0','60','Business Cards 200 Pcs ','140','58.333','95','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'Business Cards\n(1 set = 200 Pcs) ','SET','0','0',1),(420,151,'24000.00',NULL,'0','40','Name Stamp 2cm Dia (Round) ','200','200.000','120','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'Name Stamp 2cm Dia (Round) ','EA','0','0',2),(421,151,'675.00',NULL,'0','75','Company Stamp 5cm x 3cm (Oval) ','5','80.000','135','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'Company Stamp \n5cm x 3cm (Oval) ','EA','0','0',3),(422,151,'3400.00',NULL,'0','100','Time / Received / Date - Two Color - 4cm Dia ','20','70.000','170','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'Time / Received / Date - Two Color - 4cm Dia ','EA','0','0',4),(423,151,'3000.00',NULL,'0','75','Stamp Approved /Suspended - 6cm x 3cm','20','100.000','150','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'Stamp Approved /Suspended - 6cm x 3cm','EA','0','0',5),(424,151,'2500.00',NULL,'0','75',' Stamp Copy /Controlled /Master Copy - 5cm x 1cm ','20','66.667','125','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,' Stamp Copy /Controlled /Master Copy - 5cm x 1cm','EA','0','0',6),(425,151,'21000.00',NULL,'0','75',' Signature Stamp -6cm x 4cm ','150','86.667','140','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,' Signature Stamp -6cm x 4cm','EA','0','0',7),(426,151,'9375.00',NULL,'0','50','Stamp Faxed / Private / Confidential - 3.6cm x 1.2cm','75','150.000','125','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'Stamp Faxed / Private / Confidential - 3.6cm x 1.2cm','EA','0','0',8),(427,151,'1500.00',NULL,'0','0.018',' HSE Training Stickers, HSE Emergency number Stickers, Life Protection Rules, Site HSE Induction, Heat Stress Awareness -35mm Dia','2000','4066.667','0.75','2022-03-17 12:45:20','2022-03-17 12:45:20','',NULL,'HSE Training Stickers, HSE Emergency number Stickers, Life Protection Rules, Site HSE Induction, Heat Stress Awareness -35mm Dia','EA','0','0',9),(428,151,'21000.00',NULL,'0','75','PTW Books, Confined Space, Excavation, Radiography, Engineering - A4 Size','200','40.000','105','2022-03-17 12:45:20','2022-03-17 15:52:09','',NULL,'PTW Books, Confined Space, Excavation, Radiography, Engineering - A4 Size, 100 pages','EA','0','0',10),(429,151,'40000.00',NULL,'0','160','PTW Books, Hot Work Permit, Cold Work Permit, Lifting Work - A3 Size','200','25.000','200','2022-03-17 12:45:20','2022-03-17 15:52:09','',NULL,'PTW Books, Hot Work Permit, Cold Work Permit, Lifting Work - A3 Size, 100 pages','EA','0','0',11),(430,151,'50.00',NULL,'0','1','Test Date Sticker (3cm x 1cm)','50','','1','2022-03-17 12:45:20','2022-03-17 15:52:09','',NULL,'Test Date Sticker (3cm x 1cm)','EA','0','0',12),(431,151,'2000.00',NULL,'0','8','1st Energizing Work Permit','50','400.000','40','2022-03-17 12:45:20','2022-03-17 15:52:09','',NULL,'1st Energizing Work Permit, 100 pages','EA','0','0',13),(432,151,'1500.00',NULL,'0','2','Caution Tag \"Unsafe do not use\"','500','50.000','3','2022-03-17 12:45:20','2022-03-17 15:52:09','',NULL,'Caution Tag \"Unsafe do not use\" - Sticker 10 cm  ','EA','0','0',14),(433,151,'263500.00',NULL,'0','350','Hoisting Flag Single Side Printing Knitted Polyester 3m x 1.5m','425','77.143','620','2022-03-17 12:45:20','2022-03-17 15:57:43','',NULL,'Hoisting Flag Single Side Printing Knitted Polyester 3m x 1.5m - Polyester Material','EA','0','0',15),(434,152,'37000.00',NULL,'0','247','Fabrication of plastic sheet with drill holes\n60 x 100 x 8 cm','100','49.798','370','2022-03-20 08:03:14','2022-03-20 17:33:36','',NULL,'OPTION 1:\nFabrication of Acrylic sheet with drill holes \n\nDimensions: \n60cm x 100 cm x 8mm','EA','0','0',1),(435,152,'40000.00',NULL,'0','282','Fabrication of plastic sheet with drill holes\n60 x 100 x 8 cm','100','41.844','400','2022-03-20 08:03:14','2022-03-20 17:33:36','',NULL,'OPTION 2:\nFabrication of Acrylic sheet with drill holes \n\nDimensions: \n60cm x 100 cm x 10mm','EA','0','0',1),(439,154,'450.00',NULL,'0','100','Roll-up banner\nDimensions:\n2.2 x 1.2 Mtrs','3','50.000','150','2022-03-20 10:29:54','2022-03-23 06:24:42','',NULL,'Roll-up banner with stand\n\nDimensions:\n2.2 x 1.2 Mtrs','EA','0','0',1),(440,155,'0.00',NULL,'0','','','0','0','0','2022-03-20 12:03:11','2022-03-20 12:03:11','',NULL,'dgdh','','0','0',1),(441,156,'600.00',NULL,'0','450','Project Site Sign Board PVC Type \nSafety Banners Signages\n\nDimensions: 5 x 3 Mtr','1','33.333','599.998','2022-03-20 14:32:50','2022-03-23 06:16:44','',NULL,'PVC banner sign board\n\nDimensions: 5 x 3 Mtr','EA','0','0',1),(444,157,'9200.00',NULL,'0','4600','Fabrication of alloy steel shaft','2','','4600','2022-03-20 18:55:26','2022-03-20 18:55:57','',NULL,'Fabrication of alloy steel shaft with drill hole plate welded to the axis.\n\nMaterial: SS 316\n','EA','0','0',1),(448,159,'600.00',NULL,'0','450','','1','33.333','600','2022-03-23 06:30:54','2022-03-23 06:30:54','',NULL,'PVC Banner \n15 x 3 Mtrs','EA','0','0',1),(449,160,'600.00',NULL,'0','450','PVC Banner \n15 x 3 mtrs','1','33.333','600','2022-03-23 06:34:17','2022-03-23 06:34:17','',NULL,'PVC Banner \n15 x 3 mtrs','EA','0','0',1),(450,161,'600.00',NULL,'0','450','PVC Banner \n15 x 3 mtrs','1','33.333','600','2022-03-23 06:34:29','2022-03-23 06:34:29','',NULL,'PVC Banner \n15 x 3 mtrs','EA','0','0',1),(454,153,'432.00',NULL,NULL,'30','Belt Dressing and Condition','12','20','36','2022-03-23 12:48:08','2022-03-23 12:48:08','',NULL,'Permatex Belt Dressing and Conditioner','PCS','0','0',1),(455,153,'1380.00',NULL,NULL,'115','Tread Locker Loctite 262','10','20','138','2022-03-23 12:48:08','2022-03-23 12:48:08','',NULL,'Loctite 262 Tread Locke','PCS','0','0',2),(456,153,'351.00',NULL,NULL,'8','Contact Sealant Liquid','36','21.875','9.75','2022-03-23 12:48:08','2022-03-23 12:48:08','',NULL,'Pattex  Contact Sealant Liquid Transparent 50 ML Made in Germany ','PCS','0','0',3),(468,162,'38000.00',NULL,NULL,'235','Fabrication of plastic sheet with drill holes\n60 x 100 x 8 cm','100','61.702','380','2022-03-23 15:38:58','2022-03-23 15:38:58','',NULL,'OPTION 1:\nFabrication of Poly-Carbonate sheet with 100 drill holes \n\nDimensions: \n60cm x 100 cm x 8mm','EA','0','0',1),(469,162,'41000.00',NULL,NULL,'259','Fabrication of plastic sheet with drill holes\n60 x 100 x 8 cm','100','58.301','410','2022-03-23 15:38:58','2022-03-23 15:38:58','',NULL,'OPTION 2:\nFabrication of Poly-Carbonate sheet with 100 drill holes \n\nDimensions: \n60cm x 100 cm x 10mm','EA','0','0',1),(474,163,'2500.00',NULL,NULL,'1800','Paper Liner Holder.','1','38.889','2500','2022-03-23 16:10:54','2022-03-23 16:10:54','',NULL,'Fabrication of paper liner holder as per drawing.','EA','0','0',1),(475,163,'4300.00',NULL,NULL,'3200','Sludge Collector Trolley.','1','34.375','4300','2022-03-23 16:10:54','2022-03-23 16:10:54','',NULL,'Fabrication of sludge collector with material as per drawing','EA','0','0',2),(476,163,'1800.00',NULL,NULL,'1300','Wide Scraper – With dimension.','1','38.462','1800','2022-03-23 16:10:54','2022-03-23 16:10:54','',NULL,'Fabrication of wider scarper with material as per given dimensions. 3 Sizes.','EA','0','0',3),(477,163,'3500.00',NULL,NULL,'2500','Paper Liner Trolley With dimension.','1','40','3500','2022-03-23 16:10:54','2022-03-23 16:10:54','',NULL,'Fabrication of paper liner trolley.\nHeight of trolley will be adjustable.','EA','0','0',4),(478,158,'36159.00',NULL,'0','36159','','1','',NULL,'2022-03-24 05:54:53','2022-03-24 05:54:53',NULL,NULL,'EP650-LA-KEE-K\n\nEPOCH 650 Digital Ultrasonic Flaw Detector, LEMO Connectors, Analog Output, UK Power Cord, English Keypad, English Manual, Knob Configuration.  Designed in compliance with EN12668-1. Standard software features include: Full Screen A-scan mode, Dynamic DAC/TCG, Onboard DGS/AVG, AWS D1.1/D1.5 Indication Rating, Curved Surface Correction, Manual PRF Control from 10Hz to 2000Hz, Single-Shot Measurement at all PRF Rates, Tunable Square Wave Pulser, Basic Digital Receiver Filters, Auto 80%, 5 User-Customizable Measurement Displays, Soundpath Leg Grid Display Mode, Internal Alphanumeric Datalogger with Expanded File Types, Multiple Report Output formats, and Editable Parameters. Instrument package includes: Color LCD with multiple color schemes and variable brightness control, EPOCH 650 Calibration Certificate, Lithium Ion rechargeable battery, Continuous Position Pipestand, and Transport Case.','EA',NULL,NULL,0),(479,158,'0.00',NULL,'0','0.00','','1','','0.00','2022-03-24 05:54:53','2022-03-24 05:54:53',NULL,NULL,'M2008 : Delay Line Transducer,\n\nDelay Line Transducer. 0.5 MHz. 1.00 Element Diameter. Straight BNC Connector. This transducer uses a rubber delay line to maximize acoustic matching to composite materials.','EA',NULL,NULL,0),(480,158,'0.00',NULL,'0','0.00','','1','','0.00','2022-03-24 05:54:53','2022-03-24 05:54:53',NULL,NULL,'L1CB-58-6 : Cable. Standard &L\n\nCable. LEMO to BNC. 6 ft. RG58/U','EA',NULL,NULL,0),(483,164,'27000.00',NULL,NULL,'1800','Supply and installation of aluminum windows','12','25.000','2250','2022-03-27 07:40:05','2022-03-27 07:40:05','',NULL,'Fabrication, supply and installation of aluminum window with accessories\n\nCenter part: fixed glass\nSide parts: swing openable\nDimensions: 1x 1.8m\n\nAluminum saraya profile 2mm thick bronze\n\nAccessories: European made','EA','0','0',1),(484,164,'1800.00',NULL,NULL,'100','removal of old window','12','50.000','150','2022-03-27 07:40:05','2022-03-27 07:40:05','',NULL,'Removal of old window','EA','0','0',2),(495,165,'230.00',NULL,NULL,'100','INTERNAL DISTRIBUTION stamp','1','130.000','230','2022-03-27 14:18:12','2022-03-27 14:18:12','','quotation/quotation_detail/165/phpS7lP8P','Crystal Head Stamp, Single color\n\nContent: INTERNAL DISTRIBUTION \n\nDimensions: 5.5 x 6.5 cm','EA','0','0',1),(496,165,'330.00',NULL,NULL,'180','INTERNAL DISTRIBUTION stamp','1','83.333','330','2022-03-27 14:18:12','2022-03-27 14:18:12','',NULL,'Self inking Stamp, Single color\n\nContent: INTERNAL DISTRIBUTION \n\nDimensions: 5.5 x 6.5 cm','EA','0','0',1),(497,165,'170.00',NULL,NULL,'80','RECEIVED stamp','1','112.500','170','2022-03-27 14:18:12','2022-03-27 14:18:12','','quotation/quotation_detail/165/phpTBgyWv','Self inking Stamp, 2 Color Stamp\n\nContent: RECEIVED & DATE\n\nDimensions: 4 cm','EA','0','0',2),(498,166,'170.00',NULL,NULL,'80','RECEIVED stamp','1','112.500','170','2022-03-27 14:26:56','2022-03-27 14:26:56','','quotation/quotation_detail/166/phpKugqTN','Self inking, 2 color stamp\n\nContent: RECEIVED & DATE\n\nDimensions: 4 x 3 cm','EA','0','0',1),(499,166,'220.00',NULL,NULL,'50','LOGO stamp','2','120.000','110','2022-03-27 14:26:56','2022-03-27 14:26:56','','quotation/quotation_detail/166/phpimhPoV','Crystal Head, single color stamp\n\nContent: LOGO \n\nDimensions: 2 cm','EA','0','0',2),(500,166,'320.00',NULL,NULL,'80',' LOGO stamp','2','100.000','160','2022-03-27 14:26:56','2022-03-27 14:26:56','',NULL,'Self inking, single color stamp\n\nContent: LOGO \n\nDimensions: 2 cm ','EA','0','0',2),(501,168,'480.00',NULL,'0','180','PVC Banner','2','33.333','240','2022-03-27 14:37:12','2022-03-27 14:37:12','',NULL,'PVC Banner\n\nDimensions: 3 x 2 Mtr','EA','0','0',1),(502,167,'950.00',NULL,NULL,'560','Indoor flag 100 x 150 cm with stand','1','69.643','950','2022-03-27 15:44:12','2022-03-27 15:44:12','',NULL,'Indoor Logo Flag \n2 Side printing\n\nDimensions: 100 x 150 cm\n\nMaterial: Satin\n\nFlag pole Details:\nSilver color metal stand, 250 cm Height.','EA','0','0',1),(503,169,'31500.00',NULL,'0','226','Office filing racks','70','99.115','450','2022-03-28 06:39:24','2022-03-28 06:39:24','',NULL,'OPTION 1:\n\nMetal office filing racks, 5 shelves. \nHigh Quality Storage Unit\n\nDimensions:\n200 x 80 x 40 \n(H x W x D)','EA','0','0',1),(510,170,'4725.00',NULL,NULL,'2.4','Grinding disk 4\"','1500','31.250','3.15','2022-03-29 14:04:41','2022-03-29 14:04:41','',NULL,'GRINDING DISC 4\"','EA','0','0',1),(511,170,'5312.50',NULL,NULL,'8.5','Welding Electrode E7018 , 2.5 mm','500','25.000','10.625','2022-03-29 14:04:41','2022-03-29 14:04:41','',NULL,'WELDING ROD 7018, 2.5mm','KG','0','0',2),(512,170,'1400.00',NULL,NULL,'10.5','Welding Electrode E6010, 3.2mm','100','33.333','14','2022-03-29 14:04:41','2022-03-29 14:04:41','',NULL,'ELDING ROD 6010, 3.2mm','KG','0','0',3),(513,170,'2875.00',NULL,NULL,'1.8','Cutting Disc 4\" Dia x 3/32\"','1150','38.889','2.5','2022-03-29 14:04:41','2022-03-29 14:04:41','',NULL,'CUTTING DISC 4\",1MM(1/16\"','EA','0','0',4),(514,170,'385.00',NULL,NULL,'8.5','Welding Chipping hammers','35','29.412','11','2022-03-29 14:04:41','2022-03-29 14:04:41','',NULL,'WELDING CHIPPING HAMMER','EA','0','0',5),(515,170,'2300.00',NULL,NULL,'1.9','Cutting Disc 4\" Dia x 1/8 \"','1000','21.053','2.3','2022-03-29 14:04:41','2022-03-29 14:04:41','',NULL,'CUTTING DISC 4\", DIAX1/8\"','EA','0','0',6),(544,172,'440.00',NULL,'0','22','Twisted knot wire wheel brush','20','0','22','2022-03-31 09:54:27','2022-03-31 09:54:27','',NULL,'Twisted knot wire wheel brush','EA','0','0',1),(545,172,'460.00',NULL,'0','23','Scotch bright buffing wheel','20','0','23','2022-03-31 09:54:27','2022-03-31 09:54:27','',NULL,'Scotch bright buffing wheel','EA','0','0',2),(546,172,'230.00',NULL,'0','23','Buffing wheel-4\"','10','0','23','2022-03-31 09:54:27','2022-03-31 09:54:27','',NULL,'Buffing wheel-4\"','EA','0','0',3),(547,172,'310.00',NULL,'0','310','Pickling Paste','1','0','310','2022-03-31 09:54:27','2022-03-31 09:54:27','',NULL,'Pickling Paste (2.5 kg Bag)\nMade in UAE','EA','0','0',4),(548,172,'800.00',NULL,'0','400','Purging tape-2\"  ASWT 2','2','0','400','2022-03-31 09:54:27','2022-03-31 09:54:27','',NULL,'Purging tape-2\"  ASWT 2','ROLLS','0','0',5),(549,172,'1300.00',NULL,'0','650','Straight Grinder-150mm dia','2','0','650','2022-03-31 09:54:27','2022-03-31 09:54:27','',NULL,'Purging tape-2\"  ASWT 2','EA','0','0',6),(564,171,'960.00',NULL,NULL,'16','Three pin power cable 10A - 250 W','30','100','32','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'Three pin power cable \n13A - 250 V (3 Mtrs) - 3 sockets','EA','0','0',1),(565,171,'1080.00',NULL,NULL,'18','Three pin power cable 10A - 250 W','30','100','36','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'Three pin power cable \n10A - 250 V (5 Mtrs)','EA','0','0',1),(566,171,'160.00',NULL,NULL,'12','USB printer cable','10','35','16','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'USB printer cable - 1.5 Mtrs','EA','0','0',2),(567,171,'270.00',NULL,NULL,'20','USB printer cable','10','35','27','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'USB printer cable - 3 Mtrs','EA','0','0',2),(568,171,'470.00',NULL,NULL,'35','USB printer cable','10','35','47','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'USB printer cable - 5 Mtrs','EA','0','0',2),(569,171,'880.00',NULL,NULL,'65','USB printer cable','10','35','88','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'USB printer cable - 10 Mtrs','EA','0','0',2),(570,171,'2025.00',NULL,NULL,'60','DP-DP cable 1.5 Mtrs','25','35','81','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'DP-DP cable 1.5 Mtrs','EA','0','0',3),(571,171,'1150.00',NULL,NULL,'17','HDMI cable 1.5 Mtrs ','50','35','23','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'HDMI cable 1.5 Mtrs ','EA','0','0',4),(572,171,'528.00',NULL,NULL,'98','HDMI cable 15 Mtrs ','4','35','132','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'HDMI cable 15 Mtrs ','EA','0','0',5),(573,171,'6000.00',NULL,NULL,'325','8GB DDR RAM','15','23.077','400','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'8GB DDR4 RAM','EA','0','0',6),(574,171,'4760.00',NULL,NULL,'66','Logitech H151 headphone','40','80','119','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'Logitech H151 headphone','EA','0','0',7),(575,171,'720.00',NULL,NULL,'18','cat-6 RJ45 cable 3 Mtrs','30','35','24','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'cat-6 RJ45 cable 3 Mtrs','EA','0','0',8),(576,171,'440.00',NULL,NULL,'22','Power Extension box 5 socket, 5 Mtrs, 13A - 250 W','10','100','44','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'Power Extension box 5 socket, 5 Mtrs, 13A - 250V - KSA PIN','EA','0','0',9),(577,171,'520.00',NULL,NULL,'26','Power Extension box 5 socket, 5 Mtrs, 13A - 250 W','10','100','52','2022-04-01 11:36:40','2022-04-01 11:36:40','',NULL,'Power Extension box 5 socket, 5 Mtrs, 13A - 250V - Multipin','EA','0','0',9),(578,173,'0.00',NULL,'0','','Water Dispenser Hot & Cold','4','0','0','2022-04-01 12:30:59','2022-04-01 12:30:59','',NULL,'SK Magic Water Dispenser Hot and Cold, 220V.\n\nColor: ','EA','0','0',1),(579,173,'0.00',NULL,'0','','','0','0','0.00','2022-04-01 12:30:59','2022-04-01 12:30:59','',NULL,'','','0','0',1),(580,173,'320.00',NULL,'0','50','Paper cup dispenser','4','60.000','80','2022-04-01 12:30:59','2022-04-01 12:30:59','',NULL,'Anti-Dust Wall Mount Automatic Plastic','EA','0','0',2);
/*!40000 ALTER TABLE `quotation_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotations`
--

DROP TABLE IF EXISTS `quotations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quotations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotation_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `rfq_id` bigint(20) unsigned DEFAULT '0',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'New',
  `total_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount_in_p` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_in_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `net_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `validity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_terms` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `warranty` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_time` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inco_terms` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `po_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `contact_id` int(11) DEFAULT NULL,
  `transaction_type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ps_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sales_order_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_revised` tinyint(4) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `sign` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_id` tinyint(4) DEFAULT NULL,
  `freight_type` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_type` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rfq_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transport` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT '0.00',
  `other` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT '0.00',
  `div_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `qstatus` int(191) DEFAULT '0',
  `delete` int(11) DEFAULT '0',
  `freight_charges` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0.00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotations`
--

LOCK TABLES `quotations` WRITE;
/*!40000 ALTER TABLE `quotations` DISABLE KEYS */;
INSERT INTO `quotations` VALUES (1,'AMC-QT-21-1001',10,1,'New','20390.00','0.000','3058.50','23448.50','10 Days','Credit 30 Days','NA','6 - 8 Weeks from the Date of PO','Ex-Works USA','1','2021-10-12 10:12:53','2022-02-05 06:30:45',17,'sale','12 Oct 2021',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quote',NULL,NULL,'0','0',1,7,0,0,NULL),(2,'AMC-QT-21-1002',11,1,'New','26388.00','0.000','3958.20','30346.20','7 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office - Khobar','2','2021-10-13 13:05:12','2022-02-05 06:30:23',18,'sale','13 Oct 2021',NULL,1,NULL,'undefined',NULL,0,NULL,NULL,'null',NULL,NULL,'0','0',1,7,0,0,NULL),(3,'AMC-QT-21-1002-REV-01',11,1,'New','12400.00','0.000','1860.00','14260.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office - Khobar','3','2021-10-13 13:35:16','2022-02-05 06:29:45',18,'sale','13 Oct 2021',NULL,NULL,2,'undefined',NULL,0,NULL,NULL,'null',NULL,NULL,'0','0',1,7,0,0,NULL),(5,'AMC-QT-21-1003',13,1,'New','11880.00','0.000','1782.00','13662.00','10 Days','100% Advance','1 Year OEM Warranty','4 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office','5','2021-10-20 12:25:36','2022-02-05 06:29:13',20,'sale','20 Oct 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'null',NULL,NULL,'0','0',1,7,0,0,NULL),(59,'AMC-QT-21-1101',16,0,'reject','5934.50','0','890.17','6824.68','5 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','59','2021-11-08 08:39:30','2021-11-08 08:49:14',23,'sale','08 Nov 2021',NULL,NULL,NULL,'9',NULL,2,NULL,NULL,NULL,NULL,NULL,'0.00','0.00',1,NULL,0,0,NULL),(60,'AMC-QT-21-1102',10,0,'New','19400.00','0','2910.00','22310.00','7 Days','Credit','NA','Within 4-5 Weeks from the Date of PO','EX-WORKS USA',NULL,'2021-11-10 07:42:10','2021-11-10 07:42:10',17,'sale','10 Nov 2021',NULL,NULL,NULL,'9',NULL,2,NULL,NULL,'Quotation for Plastic Seals','13798680',NULL,'0.00','0.00',1,NULL,0,0,NULL),(61,'AMC-QT-21-1103',1,0,'New','102000.00','0','15300.00','117300.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2021-11-10 08:05:47','2021-11-10 08:05:47',NULL,'sale','10 Nov 2021',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,'Quotation',NULL,NULL,'0.00','0.00',1,NULL,0,0,NULL),(62,'AMC-QT-21-1104',1,0,'New','400.00','0.000','60.00','460.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','62','2021-11-10 08:08:57','2022-02-05 06:27:09',48,'sale','10 Nov 2021',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quotation','11',NULL,'0','0',1,7,0,0,NULL),(63,'AMC-QT-21-1105',10,0,'New','22935.00','0.000','3440.25','26375.25','7 Days','CREDIT','NA','4-5 Weeks after the date of PO','EX WORKS - USA','63','2021-11-10 08:28:55','2022-02-05 06:26:39',17,'sale','10 Nov 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Plastic Seals','13798680',NULL,'0','0',1,7,0,0,NULL),(64,'AMC-QT-21-1106',19,0,'New','40500.00','0.000','6075.00','46575.00','7 Days','As per Agreed','NA','Within 1-2 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office','64','2021-11-14 08:07:20','2022-02-05 06:26:08',26,'sale','14 Nov 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Coveralls','COV-RFQ',NULL,'0','0',1,7,0,0,NULL),(65,'AMC-QT-21-1107',10,0,'New','11997.00','0.000','1799.55','13796.55','7 Days','CREDIT','NA','Within 4 Weeks from the Date of PO','Ex Works USA','65','2021-11-15 06:23:43','2022-02-05 06:24:16',17,'sale','15 Nov 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Security Plastic Seals','1110213',NULL,'0','0',1,7,0,0,NULL),(66,'AMC-QT-21-1108',23,0,'New','4628.00','0.000','694.20','5322.20','3 Days','100% Advance','NA','Within 1-5 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','66','2021-11-16 23:03:08','2022-02-05 06:23:53',30,'sale','17 Nov 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Package Stickers','SHWR-AMC-001',NULL,'0','0',1,7,0,0,NULL),(67,'AMC-QT-21-1109',25,0,'New','14223.00','0.000','2133.45','16356.45','3 Days','CREDIT 30 Days','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid - AL Ahsa - NITI','67','2021-11-17 08:05:10','2022-02-05 06:23:06',32,'sale','17 Nov 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Misc. Items','RFQ-AMC',NULL,'0','0',1,7,0,0,NULL),(68,'AMC-QT-21-1110',26,0,'New','20718.00','0.000','3107.70','23825.70','5 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office - Khobar','68','2021-11-30 13:24:40','2022-02-05 06:22:09',33,'sale','30 Nov 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Safety (Fire) Items','1-19949',NULL,'0','0',1,7,0,0,NULL),(69,'AMC-QT-21-1201',25,0,'New','89348.00','0.000','13402.20','102750.20','7 Days','30 Days Credit','NA','Within 1 Week from the Date of PO','DDP-Delivery Duty Paid To Customer Office','69','2021-12-05 20:41:30','2022-02-05 06:21:06',32,'sale','05 Dec 2021',NULL,1,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Building Materials','729',NULL,'0','0',1,7,0,0,NULL),(70,'AMC-QT-21-1202',25,0,'New','59940.00','0.000','8991.00','68931.00','7 Days','CREDIT 30 Days','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To NITI','70','2021-12-07 12:45:45','2022-02-05 06:19:45',32,'sale','07 Dec 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for GRUNDFOS Pump','781',NULL,'0','0',1,7,0,0,NULL),(71,'AMC-QT-21-1201-REV-01',25,0,'New','67349.00','0.000','10102.35','77451.35','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','71','2021-12-07 12:53:16','2022-02-05 06:19:22',32,'sale','05 Dec 2021',NULL,NULL,69,'undefined',NULL,2,NULL,NULL,'Quotation for Building Materials','729',NULL,'0','0',1,7,0,0,NULL),(72,'AMC-QT-21-1202',11,0,'New','62808.00','0.000','9421.20','72229.20','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid  - Khobar / Dammam','72','2021-12-08 08:10:02','2022-02-05 06:18:07',18,'sale','13 Dec 2021',NULL,1,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for CPVC and Insulation Items','EML-BLDGPIPE',NULL,'0','0',1,7,0,0,NULL),(73,'AMC-QT-21-1203',25,0,'New','17110.00','0.000','2566.50','19676.50','3 Days','CREDIT 30 Days','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','73','2021-12-09 00:14:51','2022-02-05 06:14:40',32,'sale','09 Dec 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Electrical Items','731',NULL,'0','0',1,7,0,0,NULL),(74,'AMC-QT-21-1202-REV-01',11,0,'New','51578.00','0.000','7736.70','59314.70','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid - MAKKAH Site','74','2021-12-12 11:45:41','2022-02-05 06:12:12',18,'sale','08 Dec 2021',NULL,1,72,'undefined',NULL,2,NULL,NULL,'Quotation for CPVC and Insulation Items','EML-BLDGPIPE',NULL,'0','0',1,7,0,0,NULL),(75,'AMC-QT-21-1202-REV-02',11,0,'New','51578.00','0.000','7736.70','59314.70','3 Days','100% Advancee','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid - MAKKAH Site7','75','2021-12-13 12:08:12','2022-02-05 06:10:15',18,'sale','08 Dec 2021',NULL,NULL,74,'undefined',NULL,2,NULL,NULL,'Quotation for CPVC and Insulation Items','EML-BLDGPIPE',NULL,'0','0',1,7,0,0,NULL),(76,'AMC-QT-21-1204',27,0,'New','7305.00','3','1062.88','8148.727500000001','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','76','2021-12-16 08:09:23','2021-12-16 12:31:04',34,'sale','16 Dec 2021',NULL,NULL,NULL,'9',NULL,2,NULL,NULL,'Quotation For FRP Tanks - Shaybah Security Project','3000954291',NULL,'500','25',1,NULL,0,0,NULL),(77,'AMC-QT-21-1205',1,0,'reject','545.70','0','81.86','627.5600000000001','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2021-12-17 11:14:11','2022-01-06 06:26:37',NULL,'sale','17 Dec 2021',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,'General Quotation for Items',NULL,NULL,'0.00','0.00',1,NULL,0,0,NULL),(78,'AMC-QT-21-1206',27,0,'New','1196250.00','0.000','179437.50','1375687.50','10 Days','60% Advance - Balance upon Delivery','NA','4-5 Weeks from the Date Of PO','DDP-Delivery Duty Paid To Customer OfficeShaybah Plant','78','2021-12-19 15:13:20','2022-02-05 06:03:16',34,'sale','19 Dec 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for FRP Tanks - Shaybah Project','3000954291',NULL,'0','0',1,7,0,0,NULL),(79,'AMC-QT-21-1207',28,0,'New','100450.00','0.000','15067.50','115517.50','3 Days','100% Advance','NA','1 Week for fabrication + 1 Week for Delivery & Installation','DDP-Delivery Duty Paid To Customer Office','79','2021-12-19 16:36:52','2022-02-05 06:02:41',NULL,'sale','19 Dec 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Fabrication of XY Rail','XYRAIL-EML',NULL,'0','0',1,7,0,0,NULL),(80,'AMC-QT-21-1208',30,0,'New','305000.00','0.000','45750.00','350750.00','15 Days','As Per Agreed / Cheque / Advance','NA','Within 1 Week from the Date Of PO','DDP-Delivery Duty Paid To Customer Office','80','2021-12-20 21:00:51','2022-02-05 06:01:57',37,'sale','20 Dec 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Plywood and Timber','TIMBER-PLY-EML',NULL,'0','0',1,7,0,0,NULL),(81,'AMC-QT-21-1209',25,0,'New','39820.00','0.264','5957.20','45671.90','3 Days','30 Days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer - NITI','81','2021-12-27 22:57:09','2022-02-05 06:00:33',32,'sale','28 Dec 2021',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Safety Items','696',NULL,'0','0',1,7,0,0,NULL),(82,'AMC-QT-22-0101',28,0,'New','125675.00','0.000','18851.25','144526.25','7 Days','100% Advance','NA','Job Completion - 10 Working Days from the Date Of PO Commencement','DDP-Delivery Duty Paid To Customer Office','82','2022-01-01 19:47:40','2022-02-05 05:58:20',35,'sale','01 Jan 2022',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Demolition of Conveyer System','DM-AA-001',NULL,'0','0',1,7,0,0,NULL),(83,'AMC-QT-22-0102',25,0,'New','20854.00','0.000','3128.10','23982.10','7 Days','30 days Credit','NA','Within 1 Week','DDP-Delivery Duty Paid To Customer Office - NITI','83','2022-01-02 07:19:06','2022-02-05 05:57:23',41,'sale','02 Jan 2022',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quotation for Medical Safety Items','796',NULL,'0','0',1,7,0,0,NULL),(84,'AMC-QT-22-0103',33,0,'New','962.00','0.000','144.30','1106.30','3 Days','Upon Delivery','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','84','2022-01-03 10:23:55','2022-02-05 05:54:36',44,'sale','03 Jan 2022',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Electric Items','-',NULL,'0','0',1,7,0,0,NULL),(85,'AMC-QT-22-0104',10,0,'New','37100.00','0.000','5565.00','42665.00','7  Days','CREDIT','NA','Within 5-6 Weeks from the Date of PO','Ex Works USA','85','2022-01-10 05:06:19','2022-02-27 21:06:45',47,'sale','10 Jan 2022',NULL,1,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Seals','13814138',NULL,'0','0',1,7,0,0,NULL),(86,'AMC-QT-22-0105',33,0,'New','15685.00','0.000','2352.75','18037.75','3 Days','CREDIT','NA','Within 2 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office','86','2022-01-10 08:31:10','2022-02-05 05:53:20',44,'sale','10 Jan 2022',NULL,1,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for cup brush & cables',NULL,NULL,'0','0',1,7,0,0,NULL),(87,'AMC-QT-22-0106',36,0,'New','8590.00','0.000','1288.50','9878.50','3 Days','15 Days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','87','2022-01-10 16:06:58','2022-02-05 05:52:13',51,'sale','10 Jan 2022',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Printer',NULL,NULL,'0','0',1,7,0,0,NULL),(88,'AMC-QT-22-0107',1,0,'New','0.00','0','0.00','0.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','88','2022-01-12 15:42:17','2022-02-05 05:50:30',NULL,'sale','12 Jan 2022',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quotation for Baytur',NULL,NULL,'0','0',1,7,0,0,NULL),(89,'AMC-QT-22-0105-REV-01',33,0,'New','15267.00','0.000','2290.05','17557.05','3 Days','CREDIT','NA','Within 2 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office','89','2022-01-15 17:17:27','2022-02-05 05:47:10',44,'sale','10 Jan 2022',NULL,NULL,86,'undefined',NULL,2,NULL,NULL,'Quotation for cup brush & cables',NULL,NULL,'0','0',1,7,0,0,NULL),(90,'0',37,0,'New','1760.00','0','0.00','1760','.','As agreed','NA','Within 2-3 Weeks from the Date of PO','Ex-works NEW YORK','AMC-PO-22-0101','2022-01-16 07:00:57','2022-01-24 07:48:24',52,'purchase','24 Jan 2022',NULL,NULL,NULL,NULL,NULL,0,'As agreed','USD',NULL,NULL,NULL,NULL,NULL,1,7,0,0,NULL),(91,'AMC-QT-22-0108',NULL,0,'reject','0.00','0','0','0','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-01-16 14:58:27','2022-01-16 15:31:45',NULL,'sale','16 Jan 2022',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,NULL,NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(92,'AMC-QT-22-0109',NULL,0,'reject','0.00','0','0.00','0','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-01-16 15:10:42','2022-01-16 15:31:27',NULL,'sale','16 Jan 2022',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,NULL,NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(96,'AMC-QT-22-0110',39,0,'draft','28000.96','0.000','4200.14','32201.1','3 Days','As per agreed terms','NA','Within 7-8 Working Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','96','2022-01-16 16:22:19','2022-01-17 05:43:54',54,'sale','16 Jan 2022',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,'Quotation for O-Ring','ZWH-22-008',NULL,'0','0',1,7,0,0,NULL),(98,'AMC-QT-22-0111',36,0,'accept','246.00','0.000','36.90','282.90','3 Days','15 Days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','---','2022-01-17 13:57:37','2022-01-24 07:30:14',51,'sale','24 Jan 2022','ASON-22-0001',NULL,NULL,'7',NULL,2,NULL,NULL,'Quotation for plastic pipe welding machine',NULL,NULL,'0','0',1,7,0,0,NULL),(99,'AMC-QT-22-0112',36,0,'accept','919.00','0.000','137.85','1056.85','1 Day','15 Days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','Cash Purchase','2022-01-17 14:18:48','2022-03-13 07:53:14',51,'sale','17 Jan 2022','ASON-22-0001',NULL,NULL,'7',NULL,2,NULL,NULL,'Quotation for rotor & switch',NULL,NULL,'0','0',1,7,0,0,NULL),(100,'AMC-QT-22-0113',40,0,'New','17533.00','0.000','2629.95','20162.95','3 Days','100% Advance','NA','Within 8-10 days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','100','2022-01-17 15:00:52','2022-01-20 09:46:37',55,'sale','17 Jan 2022',NULL,1,NULL,'7',NULL,0,NULL,NULL,'Quotation for Fabrication of sign board',NULL,NULL,'0','0',1,7,0,0,NULL),(101,'AMC-QT-22-0114',41,0,'New','39200.00','0.000','5880.00','45080.00','3 Days','100% Advance','NA','Within1 Week from the Date of PO','DDP-Delivery Duty Paid To Customer Office','101','2022-01-17 15:25:14','2022-01-20 09:51:36',56,'sale','17 Jan 2022',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,'Quotation for plywood',NULL,NULL,'0','0',1,7,0,0,NULL),(102,'AMC-QT-22-0115',30,0,'New','853500.00','0.000','128025.00','981525.00','10 Days','As Per Agreed / Cheque / Advance','NA','As per agreed terms','DDP-Delivery Duty Paid To Customer Office','102','2022-01-18 05:17:51','2022-02-05 05:44:30',37,'sale','18 Jan 2022',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Plywood and Timber','RFQ for supply of wood',NULL,'0','0',1,7,0,0,NULL),(103,'AMC-QT-22-0116',13,0,'reject','5200.00','0','702.00','5382.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-01-19 12:39:55','2022-01-19 12:41:25',NULL,'sale','19 Jan 2022',NULL,1,NULL,'7',NULL,0,NULL,NULL,'Quote',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(104,'AMC-QT-22-0116-REV-01',13,0,NULL,'5200.00','0','702.00','5382.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-01-19 12:40:26','2022-01-19 12:40:26',NULL,'sale','19 Jan 2022',NULL,NULL,103,'7',NULL,0,NULL,NULL,'Quote',NULL,NULL,NULL,NULL,1,7,0,0,NULL),(105,'AMC-QT-22-0113-REV-01',40,0,'New','24019.00','0.000','3602.85','27621.85','5 Days','100% Advance','NA','Within 8-10 days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','105','2022-01-20 09:46:37','2022-03-14 13:07:16',55,'sale','14 Mar 2022',NULL,NULL,100,'1',NULL,2,NULL,NULL,'Quotation for Fabrication of sign board',NULL,NULL,'0','0',1,7,0,0,NULL),(106,'AMC-QT-22-0117',40,0,'New','42360.00','0.000','6354.00','48714.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','106','2022-01-20 10:02:43','2022-02-05 05:43:25',55,'sale','20 Jan 2022',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quotation for Panel board & Steel pipe','INQ-1258',NULL,'0','0',1,7,0,0,NULL),(107,'AMC-QT-22-0118',40,0,'New','250268.00','0.000','37540.20','287808.20','2 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','107','2022-01-20 10:19:47','2022-02-05 05:42:35',55,'sale','22 Jan 2022',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quotation for Pipe, Welding & Safety Items','INQ-1424',NULL,'0','0',1,7,0,0,NULL),(108,'AMC-QT-22-0119',36,0,'New','51980.00','0.000','7797.00','59777.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','108','2022-01-20 11:07:22','2022-02-05 05:40:10',51,'sale','20 Jan 2022',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'Quotation for pressure Calibrator',NULL,NULL,'0','0',1,7,0,0,NULL),(111,'AMC-QT-22-0120',36,0,'draft','0.00','0','0.00','0.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','111','2022-01-22 07:55:58','2022-01-22 07:56:42',NULL,'sale','22 Jan 2022',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,'null',NULL,NULL,'0','0',1,7,0,0,NULL),(112,'AMC-QT-22-0121',0,0,'draft','0.00','0','0.00','0.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-01-22 09:26:25','2022-01-22 09:26:25',NULL,'sale','22 Jan 2022',NULL,NULL,NULL,'7',NULL,0,NULL,NULL,NULL,NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(113,'AMC-QT-22-0122',36,0,'New','70010.00','0.000','10501.50','80511.50','2 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','113','2022-01-22 09:28:31','2022-02-05 05:38:59',51,'sale','24 Jan 2022',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for general Items.',NULL,NULL,'0','0',1,7,0,0,NULL),(114,'AMC-QT-22-0123',0,0,'draft','0.00','0','0.00','0.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','114','2022-01-24 07:33:47','2022-02-05 06:33:06',NULL,'sale','24 Jan 2022',NULL,NULL,NULL,'undefined',NULL,0,NULL,NULL,'null',NULL,NULL,'0','0',1,7,0,0,NULL),(115,'0',43,0,'New','6400.00','0','0.00','6400','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','AMC-PO-22-0102','2022-01-26 06:09:06','2022-01-26 06:10:01',58,'purchase','26 Jan 2022',NULL,NULL,NULL,NULL,NULL,0,'Air Freight','SAR',NULL,NULL,NULL,NULL,NULL,1,7,0,0,NULL),(116,'AMC-QT-22-0124',27,0,'New','43720.00','0.000','6558.00','50278.00','3 Days','As agreed','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','116','2022-01-26 15:23:33','2022-03-21 10:25:53',73,'sale','02 Feb 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for road safety items',NULL,NULL,'0','0',1,7,0,0,NULL),(117,'AMC-QT-22-0125',25,0,'New','17000.00','0.000','2550.00','19550.00','1 Week','30 Days advance','NA','As agreed','DDP-Delivery Duty Paid To Customer Office','117','2022-01-27 05:42:27','2022-03-02 09:35:34',41,'sale','27 Jan 2022',NULL,1,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for Reach type forklift',NULL,NULL,'0','0',1,7,0,0,NULL),(118,'AMC-QT-22-0126',33,0,'New','44390.00','0.000','6658.50','51048.50','2 Days','30 Days Credit','1 Year','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','118','2022-01-27 08:51:14','2022-02-05 05:09:01',44,'sale','27 Jan 2022',NULL,NULL,NULL,'undefined',NULL,2,NULL,NULL,'Quotation for diesel engine',NULL,NULL,'0','0',1,7,0,0,NULL),(119,'0',37,0,'New','1760.00','0','0.00','1760','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','Ex-Works, NEWYORK','AMC-PO-22-0201','2022-02-02 05:43:24','2022-02-05 10:25:29',52,'purchase','02 Feb 2022',NULL,NULL,NULL,NULL,NULL,0,'Air Freight','USD',NULL,NULL,NULL,NULL,NULL,1,7,0,0,NULL),(120,'AMC-QT-22-0201',33,0,'New','33000.00','0.000','4950.00','37950.00','10 Days','As per Agreed','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','120','2022-02-08 17:50:51','2022-02-10 06:15:21',44,'sale','10 Feb 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Coveralls','COV-AMC',NULL,'0','0',1,7,0,0,NULL),(121,'AMC-QT-22-0202',33,0,'New','41000.00','0.000','6150.00','47150.00','10 Days','As per agreed','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','121','2022-02-10 06:12:23','2022-02-12 11:13:39',44,'sale','10 Feb 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Coveralls - FALTRA',NULL,NULL,'0','0',1,7,0,0,NULL),(122,'AMC-QT-22-0203',33,0,'New','1430.00','0.000','214.50','1644.50','3 Days','As per agreed terms','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-13 15:07:05','2022-02-13 15:07:05',44,'sale','13 Feb 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Pipe Wrench',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(123,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-02-15 05:52:27','2022-02-15 05:52:27',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,0,0,NULL),(125,'0',45,0,'New','26420.00','0','0.00','26420','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','AMC-PO-22-0202','2022-02-22 09:56:58','2022-02-22 09:56:58',NULL,'purchase','22 Feb 2022',NULL,NULL,NULL,NULL,NULL,0,'Air Freight','SAR',NULL,NULL,NULL,NULL,NULL,1,7,0,0,NULL),(126,'AMC-QT-22-0204',46,0,'reject','469980.00','0.000','70497.00','540477.00','15 Days','100% Advance','NA','8 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-23 05:40:21','2022-02-27 21:00:56',61,'sale','23 Feb 2022',NULL,NULL,NULL,'11',NULL,2,NULL,NULL,'Quotation for Running Track','RFQ-RunningTrack',NULL,'0.00','0.00',1,9,0,0,NULL),(127,'AMC-QT-22-0205',1,0,'draft','19500.00','0.000','2925.00','22425.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-23 16:27:59','2022-02-23 16:27:59',63,'sale','23 Feb 2022',NULL,NULL,NULL,'10',NULL,0,NULL,NULL,'Amaco quote','2202013',NULL,'0.00','0.00',1,25,0,0,NULL),(128,'AMC-QT-22-0206',0,0,'draft','0.00','0','0','0.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-23 16:29:45','2022-02-23 16:29:45',NULL,'sale','23 Feb 2022',NULL,NULL,NULL,'10',NULL,0,NULL,NULL,NULL,NULL,NULL,'0.00','0.00',1,25,0,0,NULL),(129,'AMC-QT-22-0104-REV-01',10,0,'New','20960.00','0.000','3144.00','24104.00','7  Days','CREDIT','NA','Within 5-6 Weeks from the Date of PO','Ex Works USA',NULL,'2022-02-27 21:06:45','2022-02-27 21:06:45',47,'sale','28 Feb 2022',NULL,NULL,85,'undefined',NULL,2,NULL,NULL,'Quotation for Seals','13855024/13855025',NULL,NULL,NULL,1,9,0,0,NULL),(130,'AMC-QT-22-0207',25,0,'draft','434.00','0.000','65.10','499.10','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-28 13:05:29','2022-02-28 13:05:29',40,'sale','28 Feb 2022',NULL,NULL,NULL,'10',NULL,0,NULL,NULL,'Amaco Quote HVAC $TOOLS',NULL,NULL,'0.00','0.00',1,25,0,0,NULL),(131,'AMC-QT-22-0208',25,0,'draft','125.00','0.000','18.75','143.75','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','131','2022-02-28 13:47:51','2022-03-14 14:57:37',NULL,'sale','28 Feb 2022',NULL,NULL,NULL,'1',NULL,0,NULL,NULL,'null',NULL,NULL,'0','0',1,25,0,0,NULL),(132,'AMC-QT-22-0209',25,0,'New','49979.00','0.000','7496.85','57475.85','3 Days','30 days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-28 18:20:54','2022-03-02 08:40:59',32,'sale','28 Feb 2022',NULL,1,NULL,'1',NULL,2,NULL,NULL,'Quotation for Cutting Discs','Weld-Mat',NULL,'0.00','0.00',1,9,0,0,NULL),(133,'AMC-QT-22-0210',25,0,'New','8889.00','0.000','1333.35','10222.35','7  Days','30 Days CREDIT','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-02-28 19:23:38','2022-02-28 19:23:38',32,'sale','28 Feb 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'HVAC Items & Consumables','HVAC-MAT',NULL,'0.00','0.00',1,9,0,0,NULL),(134,'AMC-QT-22-0209-REV-01',25,0,'New','41976.00','0.000','6296.40','48272.40','3 Days','30 days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','134','2022-03-02 08:40:59','2022-03-02 12:13:43',32,'sale','01 Mar 2022',NULL,NULL,132,'1',NULL,2,NULL,NULL,'Quotation for Cutting Discs','Weld-Mat',NULL,'0','0',1,7,0,0,NULL),(135,'AMC-QT-22-0125-REV-01',25,0,'accept','9500.00','0.000','1425.00','10925.00','1 Week','30 days Credit','NA','As agreed','DDP-Delivery Duty Paid To Customer Office','768','2022-03-02 09:35:34','2022-03-06 07:15:21',41,'sale','02 Mar 2022','ASON-22-0001',NULL,117,'1',NULL,2,NULL,NULL,'Quotation for Reach type forklift',NULL,NULL,'0','0',1,7,0,0,NULL),(138,'0',37,0,'New','1760.00','0','0.00','1760','3 Days','As agreed','NA','Within 2-3 Weeks from the Date of PO','Ex-works NEW YORK','AMC-PO-22-0301','2022-03-08 09:54:45','2022-03-08 09:54:45',52,'purchase','08 Mar 2022',NULL,NULL,NULL,NULL,NULL,0,'As agreed','USD',NULL,NULL,NULL,NULL,NULL,1,7,0,0,NULL),(139,'0',37,0,'New','1760.00','0','0.00','1760','3 Days','As agreed','NA','Within 2-3 Weeks from the Date of PO','Ex-works NEW YORK','AMC-PO-22-0302','2022-03-08 09:56:13','2022-03-08 09:56:13',52,'purchase','08 Mar 2022',NULL,NULL,NULL,NULL,NULL,0,'As agreed','USD',NULL,NULL,NULL,NULL,NULL,1,7,0,0,NULL),(140,'AMC-QT-22-0301',47,0,'New','70000.00','0.000','10500.00','80500.00','3 Days','As per agreed terms','NA','Within 7 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','140','2022-03-08 13:38:52','2022-03-28 06:39:24',64,'sale','08 Mar 2022',NULL,1,NULL,'1',NULL,2,NULL,NULL,'Quotation for office filing racks',NULL,NULL,'0','0',1,7,0,0,NULL),(141,'AMC-QT-22-0302',25,0,'New','312900.00','0.000','46935.00','359835.00','5 Days','30 Days Credit','NA','Within 12-15 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-09 08:12:59','2022-03-09 08:12:59',41,'sale','09 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Dimension Control and station equipment',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(142,'AMC-QT-22-0303',25,0,'New','4350.00','0.000','652.50','5002.50','3 Days','30 Days credit','NA','Within 5 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-09 12:06:11','2022-03-09 12:06:11',41,'sale','09 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for fabrication of stretcher',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(145,'0',37,0,'New','90066.00','0','0.00','90066','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','AMC-PO-22-0305','2022-03-12 06:09:39','2022-03-12 06:09:39',52,'purchase','12 Mar 2022',NULL,NULL,NULL,NULL,NULL,0,'Air Freight','USD',NULL,NULL,NULL,NULL,NULL,1,7,NULL,0,NULL),(146,'AMC-QT-22-0304',46,0,'reject','469593000.00','0.000','70438950.00','540031950.00','10 Days','100% Advance','NA','within 60 Days','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-13 08:20:30','2022-03-13 08:21:35',61,'sale','13 Mar 2022',NULL,NULL,NULL,'11',NULL,2,NULL,NULL,'Quotation for EPDM & Lockers','TAN-EPDM-LOCKER',NULL,'0.00','0.00',1,9,0,0,NULL),(147,'AMC-QT-22-0305',46,0,'reject','469200000.00','0.000','70380000.00','539580000.00','10 Days','100% Advance','NA','Within 60 Days','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-13 13:55:43','2022-03-14 12:47:13',61,'sale','13 Mar 2022',NULL,NULL,NULL,'11',NULL,2,NULL,NULL,'Quotation for Swimming floor EPDM','AMC-SWM-987',NULL,'0.00','0.00',1,9,0,0,NULL),(148,'AMC-QT-22-0306',50,0,'reject','596000.00','0.000','89400.00','685400.00','3 Days','100% Advance','4 Years','10 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-14 12:53:01','2022-03-14 14:03:17',67,'sale','14 Mar 2022',NULL,NULL,NULL,'11',NULL,2,NULL,NULL,'Quotation for Padel Court','PDL-AMC',NULL,'0.00','0.00',1,9,0,0,NULL),(149,'AMC-QT-22-0307',51,0,'New','24377.00','0.000','3656.55','28033.55','3 Days','30 Days Credit','NA','Within 4-5 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','149','2022-03-14 13:36:46','2022-03-14 14:18:46',68,'sale','14 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Spray paint & Misc.',NULL,NULL,'0','0',1,7,0,0,NULL),(150,'AMC-QT-22-0308',50,0,'reject','395000.00','0.000','59250.00','454250.00','3 Days','100% Advance','NA','9 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-14 14:41:26','2022-03-15 04:21:46',67,'sale','14 Mar 2022',NULL,NULL,NULL,'11',NULL,2,NULL,NULL,'Quotation For Tennis Court & Basket Ball Court','EML-056',NULL,'0.00','0.00',1,9,0,0,NULL),(151,'AMC-QT-22-0309',47,0,'New','406800.00','0.000','61020.00','467820.00','5 Days','30 Days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','151','2022-03-17 12:45:20','2022-03-17 15:57:43',64,'sale','17 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for office stationary',NULL,NULL,'0','0',1,7,0,0,NULL),(152,'AMC-QT-22-0310',54,0,'New','77000.00','0.000','11550.00','88550.00','3 Days','As agreed','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','152','2022-03-20 08:03:14','2022-03-23 15:38:35',71,'sale','20 Mar 2022',NULL,1,NULL,'1',NULL,2,NULL,NULL,'Quotation for fabrication of plastic sheet',NULL,NULL,'0','0',1,7,0,0,NULL),(153,'AMC-QT-22-0311',54,0,'New','2163.00','0.000','324.45','2487.45','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','153','2022-03-20 09:34:19','2022-03-23 12:48:08',71,'sale','20 Mar 2022',NULL,NULL,NULL,'10',NULL,2,NULL,NULL,'CONSUMABLE ITEMS','G2649',NULL,'0','0',1,25,0,0,NULL),(154,'AMC-QT-22-0312',47,0,'accept','450.00','0.000','67.50','517.50','3 Days','As Agreed','NA','Within 2 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','154','2022-03-20 10:29:54','2022-03-23 06:24:56',72,'sale','20 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for roll up banner with stand',NULL,NULL,'0','0',1,7,0,0,NULL),(156,'AMC-QT-22-0314',47,0,'accept','600.00','0.000','90.00','690.00','3 Days','As Agreed','NA','Within 1 Day from the Date of PO','DDP-Delivery Duty Paid To Customer Office','156','2022-03-20 14:32:50','2022-03-23 06:18:09',64,'sale','22 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for sign board & banner',NULL,NULL,'0','0',1,7,0,0,NULL),(157,'AMC-QT-22-0315',54,0,'New','9200.00','0.000','1380.00','10580.00','5 Days','As Agreed','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','157','2022-03-20 18:55:26','2022-03-20 18:56:06',71,'sale','20 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for metal shaft',NULL,NULL,'0','0',1,7,0,0,NULL),(158,'0',55,0,'New','36159.00','0','5423.85','41582.85','3 Days','50% Advance & 50% upon readiness','NA','Within 3-4 Weeks from the Date of PO','DDP-Delivery Duty Paid To Customer Office','AMC-PO-22-0306','2022-03-22 08:39:36','2022-03-25 11:08:54',74,'purchase','23 Mar 2022',NULL,NULL,NULL,NULL,NULL,0,'As agreed','SAR',NULL,NULL,'Amaco Arabia Contracting Company,P.O. Box 7452, Al Jawhara District,Jubail - 35518, Saudi Arabia.',NULL,NULL,1,7,NULL,0,'0.00'),(159,'AMC-QT-22-0316',47,0,'reject','600.00','0.000','90.00','690.00','3 Days','As Agreed','NA','Within 1 Day from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-23 06:30:54','2022-03-23 06:33:29',64,'sale','23 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for PVC Banner',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(160,'AMC-QT-22-0317',47,0,'New','600.00','0.000','90.00','690.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-23 06:34:17','2022-03-23 06:34:29',64,'sale','23 Mar 2022',NULL,1,NULL,'1',NULL,0,NULL,NULL,'Quotation for pvc banner',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(161,'AMC-QT-22-0317-REV-01',47,0,'accept','600.00','0.000','90.00','690.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-23 06:34:29','2022-03-23 06:34:40',64,'sale','23 Mar 2022',NULL,NULL,160,'1',NULL,2,NULL,NULL,'Quotation for pvc banner',NULL,NULL,NULL,NULL,1,7,0,0,NULL),(162,'AMC-QT-22-0310-REV-01',54,0,'New','79000.00','0.000','11850.00','90850.00','3 Days','As agreed','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','162','2022-03-23 15:38:35','2022-03-23 15:38:58',71,'sale','23 Mar 2022',NULL,NULL,152,'1',NULL,2,NULL,NULL,'Quotation for fabrication of plastic sheet',NULL,NULL,'0','0',1,7,0,0,NULL),(163,'AMC-QT-22-0318',54,0,'New','12100.00','0.000','1815.00','13915.00','3 Days','Payment upon completion','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','163','2022-03-23 16:04:37','2022-03-23 16:10:54',71,'sale','23 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Fabrication Items','RFQ _CI-055',NULL,'0','0',1,7,0,0,NULL),(164,'AMC-QT-22-0319',54,0,'New','28800.00','0.000','4320.00','33120.00','3 Days','As agreed','NA','Within 5-6 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','164','2022-03-27 07:39:39','2022-03-27 07:40:05',71,'sale','27 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for Installation and supply for aluminum window','RFQ_CLARIOS-MEBCO_ SS173',NULL,'0','0',1,7,0,0,NULL),(165,'AMC-QT-22-0320',47,0,'New','730.00','0.000','109.50','839.50','3 Days','As agreed','NA','Within 1 Day from the Date of PO','DDP-Delivery Duty Paid To Customer Office','165','2022-03-27 12:25:11','2022-03-27 14:18:12',64,'sale','27 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for stamp 1',NULL,NULL,'0','0',1,7,0,0,NULL),(166,'AMC-QT-22-0321',47,0,'New','710.00','0.000','106.50','816.50','3 Days','As agreed','NA','Within 1 Day from the Date of PO','DDP-Delivery Duty Paid To Customer Office','166','2022-03-27 12:39:10','2022-03-27 14:26:56',64,'sale','27 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for stamp 2',NULL,NULL,'0','0',1,7,0,0,NULL),(167,'AMC-QT-22-0322',47,0,'New','950.00','0.000','142.50','1092.50','3 Days','As Agreed','NA','Within 2 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','167','2022-03-27 14:14:46','2022-03-27 15:44:12',64,'sale','27 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for indoor flag',NULL,NULL,'0','0',1,7,0,0,NULL),(168,'AMC-QT-22-0323',47,0,'accept','480.00','0.000','72.00','552.00','3 Days','As Agreed','NA','Within 1 Day from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-03-27 14:37:12','2022-03-28 07:02:17',64,'sale','27 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for pvc banner',NULL,NULL,'0.00','0.00',1,7,0,0,NULL),(169,'AMC-QT-22-0301-REV-01',47,0,'accept','31500.00','0.000','4725.00','36225.00','3 Days','As per agreed terms','NA','Within 7 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','7500102974','2022-03-28 06:39:24','2022-03-28 06:42:44',64,'sale','28 Mar 2022',NULL,NULL,140,'1',NULL,2,NULL,NULL,'Quotation for office filing racks',NULL,NULL,NULL,NULL,1,7,0,0,NULL),(170,'AMC-QT-22-0324',25,0,'accept','16998.00','0.000','2549.70','19547.70','3 Days','30 Days credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','693','2022-03-29 14:00:50','2022-03-29 14:05:47',40,'sale','29 Mar 2022','ASON-70-0001',NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for welding & grinding accessories','853',NULL,'0','0',1,7,0,0,NULL),(171,'AMC-QT-22-0325',47,0,'New','19964.70','0.000','2994.71','22959.41','3 Days','As Agreed','NA','Within 1 week from the Date of PO','DDP-Delivery Duty Paid To Customer Office','null','2022-03-30 10:27:44','2022-04-01 11:36:40',64,'sale','31 Mar 2022',NULL,NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for IT accessories','LPR-APOC-0015',NULL,'0','0',1,7,0,0,NULL),(172,'AMC-QT-22-0211',25,0,'accept','3540.00','0.000','531.00','4071.00','3 Days','30 Days Credit','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office','672','2022-03-31 09:54:27','2022-03-31 09:54:47',40,'sale','03 Feb 2022','ASON-70-0001',NULL,NULL,'1',NULL,2,NULL,NULL,'Quotation for pickling paste & Misc.','803',NULL,'0.00','0.00',1,7,0,0,NULL),(173,'AMC-QT-22-0401',47,0,'New','320.00','0.000','48.00','368.00','3 Days','100% Advance','NA','Within 2-3 Days from the Date of PO','DDP-Delivery Duty Paid To Customer Office',NULL,'2022-04-01 12:30:59','2022-04-01 12:30:59',64,'sale','01 Apr 2022',NULL,NULL,NULL,'1',NULL,0,NULL,NULL,'Quotation for water dispenser','LPR-APOC-0028',NULL,'0.00','0.00',1,7,0,0,NULL);
/*!40000 ALTER TABLE `quotations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_f_q_details`
--

DROP TABLE IF EXISTS `r_f_q_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_f_q_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `rfq_id` bigint(20) unsigned DEFAULT NULL,
  `product_id` bigint(20) unsigned DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `quantity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `product_name` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit_of_measure` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_f_q_details`
--

LOCK TABLES `r_f_q_details` WRITE;
/*!40000 ALTER TABLE `r_f_q_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `r_f_q_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `r_f_q_s`
--

DROP TABLE IF EXISTS `r_f_q_s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `r_f_q_s` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `requested_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `require_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `contact_id` int(11) DEFAULT NULL,
  `delete_status` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `r_f_q_s`
--

LOCK TABLES `r_f_q_s` WRITE;
/*!40000 ALTER TABLE `r_f_q_s` DISABLE KEYS */;
/*!40000 ALTER TABLE `r_f_q_s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipts`
--

DROP TABLE IF EXISTS `receipts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receipts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `receipt_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `party_id` bigint(20) unsigned DEFAULT NULL,
  `invoice_no` bigint(20) unsigned DEFAULT NULL,
  `payment_mode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit_note_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `narration` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_amount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `div_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sender` bigint(191) DEFAULT NULL,
  `bank_slip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receiver` bigint(191) DEFAULT NULL,
  `division_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `voucher_no` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipts`
--

LOCK TABLES `receipts` WRITE;
/*!40000 ALTER TABLE `receipts` DISABLE KEYS */;
INSERT INTO `receipts` VALUES (2,NULL,32,NULL,'banktransfer',NULL,NULL,NULL,'55918.75','Mon Jan 03 2022 15:32:00 GMT+0530 (India Standard Time)',NULL,NULL,'2022-03-28 10:06:30','2022-03-28 10:06:30','24',NULL,'2',32,NULL,NULL,1,7,'AMC-TR-RV-22-00002');
/*!40000 ALTER TABLE `receipts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'SA',NULL,NULL),(2,'ADMIN',NULL,NULL),(3,'MANAGER',NULL,NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_details`
--

DROP TABLE IF EXISTS `sale_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sale_id` bigint(20) unsigned NOT NULL,
  `quotation_details_id` bigint(20) unsigned NOT NULL,
  `quantity_delivered` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_of_measure` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_price` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_taxable` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_details`
--

LOCK TABLES `sale_details` WRITE;
/*!40000 ALTER TABLE `sale_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `quotation_id` bigint(20) unsigned NOT NULL,
  `party_id` bigint(20) unsigned NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_user` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivered_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `net_amount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit_of_measures`
--

DROP TABLE IF EXISTS `unit_of_measures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unit_of_measures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(100) NOT NULL,
  `label` varchar(100) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit_of_measures`
--

LOCK TABLES `unit_of_measures` WRITE;
/*!40000 ALTER TABLE `unit_of_measures` DISABLE KEYS */;
INSERT INTO `unit_of_measures` VALUES (1,'TON','TON-TONNES',NULL,NULL),(2,'TUB','TUB-TUBES',NULL,NULL),(3,'UNT','TUNT-UNITS',NULL,NULL),(4,'YDS','YDS-YARDS',NULL,NULL),(5,'SET','SET-SETS',NULL,NULL),(6,'SQUARE FEET','SQF-SQUARE FEET',NULL,NULL),(7,'SQUARE YARDS','SQY-SQUARE YARDS',NULL,NULL),(8,'THD','THD-THOUSANDS',NULL,NULL),(9,'KLR','KLR-KILOLITER',NULL,NULL),(10,'KG','KG-KILOGRAM',NULL,NULL),(11,'KME','KME-KILOMETER',NULL,NULL),(12,'MLT','MLT-MILLILITER',NULL,NULL),(13,'MTR','MTR-METERS',NULL,NULL),(14,'NOS','NOS-NUMBERS',NULL,NULL),(15,'KLR','KLR-KILOLITER',NULL,NULL),(16,'PAC','PAC-PACKS',NULL,NULL),(17,'PCS','PCS-PIECES',NULL,NULL),(18,'PAIRS','PAIRS',NULL,NULL),(19,'QTL','QTL-QUINTAL',NULL,NULL),(20,'ROLLS','ROLLS',NULL,NULL),(21,'CENTIMETER','CENTIMETER',NULL,NULL),(22,'CTN','CTN-CARTONS',NULL,NULL),(23,'DOZ','DOZ-DOZEN',NULL,NULL),(24,'DRM','DRM-DRUM',NULL,NULL),(25,'GM','GRAMS',NULL,NULL),(26,'GRS','GRS-GROSS',NULL,NULL),(27,'EA','EA-EACH',NULL,NULL),(28,'PER DAY','PER DAY',NULL,NULL),(29,'BX','BOXES',NULL,NULL),(30,'GAL','GALLON',NULL,NULL),(31,'BAG','BAGS','2022-03-14 13:21:17','2022-03-14 13:21:17'),(32,'BAG','BAG','2022-03-14 13:21:40','2022-03-14 13:21:40');
/*!40000 ALTER TABLE `unit_of_measures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_division`
--

DROP TABLE IF EXISTS `user_division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_division` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `u_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_division`
--

LOCK TABLES `user_division` WRITE;
/*!40000 ALTER TABLE `user_division` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_divisions`
--

DROP TABLE IF EXISTS `user_divisions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_divisions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `u_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `div_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_divisions`
--

LOCK TABLES `user_divisions` WRITE;
/*!40000 ALTER TABLE `user_divisions` DISABLE KEYS */;
INSERT INTO `user_divisions` VALUES (1,'41','1','2021-09-04 04:20:48','2021-09-04 04:20:48'),(2,'41','2','2021-09-04 04:20:48','2021-09-04 04:20:48'),(17,'22','1','2021-10-12 10:15:38','2021-10-12 10:15:38'),(29,'26','1','2022-01-10 04:17:23','2022-01-10 04:17:23'),(44,'7','1','2022-02-05 06:43:14','2022-02-05 06:43:14'),(45,'7','2','2022-02-05 06:43:14','2022-02-05 06:43:14'),(46,'7','3','2022-02-05 06:43:14','2022-02-05 06:43:14'),(47,'7','4','2022-02-05 06:43:14','2022-02-05 06:43:14'),(68,'9','1','2022-02-05 06:48:16','2022-02-05 06:48:16'),(69,'8','1','2022-02-05 06:48:59','2022-02-05 06:48:59'),(70,'8','2','2022-02-05 06:48:59','2022-02-05 06:48:59'),(71,'8','3','2022-02-05 06:48:59','2022-02-05 06:48:59'),(72,'8','4','2022-02-05 06:48:59','2022-02-05 06:48:59'),(73,'13','3','2022-02-05 06:49:36','2022-02-05 06:49:36'),(74,'19','3','2022-02-05 06:50:12','2022-02-05 06:50:12'),(75,'25','1','2022-02-05 06:50:47','2022-02-05 06:50:47'),(76,'27','1','2022-02-05 06:51:42','2022-02-05 06:51:42');
/*!40000 ALTER TABLE `user_divisions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) unsigned DEFAULT NULL,
  `contact` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(199) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prefix` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nick_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'true',
  `profile` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `n_count` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,1,'+966581285420','danish@amaco.com.sa',NULL,'$2y$10$AWlBRoahzUejviyXVIp30.fSVpo5d5Lgq9vymPFdmGw.c7dnTcr22','bQU0OD44d9','2021-03-16 05:50:27','2022-02-05 06:43:14','Danish Mohammed','Operations Manager','Mr','Danish','true','profile/7/phpkdLx0P',0),(8,2,'+966504971895','asif@amacoerp.com',NULL,'$2y$10$lRxzH.AVyrRw/LNHBk3xGu27Z/I0QaLTdiy3Ehtn.gxzOFnVRDMh6','3yb7py0qgq','2021-03-16 06:35:07','2022-02-05 06:48:59','Mohammed Asif','General Manager','Mr','Asif','true',NULL,0),(9,2,'+966535515212','abbas@amaco.com.sa',NULL,'$2y$10$m8qqYoXyGAimAVk7Q1pbyOZMbhXz/juS2GHFzWBoWZIKa01TCsTRG','9uHCuupKgi','2021-03-16 12:43:51','2022-02-23 06:37:37','Abbas Ahamed Shazli','Business Development Manager','Mr','Shazli','true',NULL,0),(10,2,'+966568938084','jamsheed@amaco.com.sa',NULL,'$2y$10$ogk4mhJ5CDJOemSqKWQW8OYIt6jGkI6En9j/LsoroXL0C0U90PyD2','p0hGmodGGx','2021-03-16 12:44:51','2022-01-03 13:08:25','Mohammed Jamsheed','Business Development Manager','Mr','Jamsheed','false',NULL,0),(13,3,'+966591462840','salmanbk@amaco.com.sa',NULL,'$2y$10$zhP5vYnlvTf6aMZF9iqxSucHvJLE0k8FMGBsCCXXA.jkAOo4Ocj4i','hOw3mJsJgB','2021-08-06 07:12:15','2022-02-05 06:49:36','Salman Mohammed B K','Sales Executive','Mr','Salman','true',NULL,0),(19,3,'+966598307355','imranexe2003@gmail.com',NULL,'$2y$10$8B4oIjDIkUaDoLAHr52dzeKJ23Pxu25Q.BtNkHgfMux8abGaq0596','Yb3VopEe74','2021-09-02 15:02:22','2022-02-05 06:50:12','Imran Moinuddin Shaikh','Machine Operator','Mr','Imran','true',NULL,0),(25,2,'+966570001147','a.ansif@amaco.com.sa',NULL,'$2y$10$YZgrHgeIdAFTq.FwcGjAAekOvaRiIBUg6mQ2B.PKBtcAV/PNsYvZi','QgdwE40SIs','2022-01-03 07:28:57','2022-02-21 15:26:16','Ansif','Procurement Manager','Mr','Ansi','true',NULL,0),(27,3,'+966551489982','sale@amaco.com.sa',NULL,'$2y$10$yhhLe4uTThsosIVejHY7vew7sCHQWQPRwTH9EdU2hD3hig6G.9e.W','OzsT1Mf1pK','2022-01-16 09:16:18','2022-02-05 06:51:42','Shabbir','Sales Coordinator','Mr',NULL,'true',NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'amaco'
--

--
-- Dumping routines for database 'amaco'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-02 11:15:09
