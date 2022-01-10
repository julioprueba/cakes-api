CREATE DATABASE cakes;

USE cakes;

DROP TABLE IF EXISTS `cakes`;

CREATE TABLE `cakes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `img` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
