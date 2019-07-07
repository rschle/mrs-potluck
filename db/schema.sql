CREATE DATABASE potluck_db;
USE potluck_db;

CREATE TABLE pots 
(
	id int NOT NULL AUTO_INCREMENT,
	person_name VARCHAR(30),
    dish_name VARCHAR(200),
)