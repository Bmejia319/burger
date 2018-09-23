-- Schema
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(355) NOT NULL,
	devoured Boolean DEFAULT false,
	PRIMARY KEY (id)
);
