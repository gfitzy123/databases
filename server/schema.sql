CREATE DATABASE chat;

USE chat;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR NULL DEFAULT NULL,
  `age` INTEGER NULL DEFAULT NULL,
  `location` INTEGER NULL DEFAULT NULL,
  `fav_food` INTEGER NULL DEFAULT NULL,
  `friends` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
		
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `room` INTEGER NULL DEFAULT NULL,
  `user` INTEGER NULL DEFAULT NULL,
  `text` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
		
CREATE TABLE `rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`,`age`,`location`,`fav_food`,`friends`) VALUES
-- ('','','','','','');
-- INSERT INTO `messages` (`id`,`room`,`user`,`text`) VALUES
-- ('','','','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

