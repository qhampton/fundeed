DROP DATABASE IF EXISTS project2DB;
CREATE DATABASE project2DB;

USE project2DB;

CREATE TABLE users
(
	user_id int NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(10) NOT NULL,
	last_name VARCHAR(10) NOT NULL,
	first_name VARCHAR(10) NOT NULL,
	password VARCHAR(10) NOT NULL,
    birthdate DATE,
	gender VARCHAR(10) NOT NULL,
	zipcode int NOT NULL,
    email VARCHAR(20) NOT NULL,
	PRIMARY KEY (user_id)
);

USE project2DB;

CREATE TABLE categories
(
	category_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
	category_type varchar(20) NOT NULL,
	about TEXT(255) NOT NULL,
	looking_for TEXT(255) NOT NULL,
    match_num TINYINT(1),
    PRIMARY KEY (category_id),
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);

USE project2DB;

CREATE TABLE matches
(
	match_id int NOT NULL AUTO_INCREMENT,
    category_id INT,
    user_id INT,
    match_score INT,
	FOREIGN KEY (category_id) REFERENCES categories(category_id),
	FOREIGN KEY (user_id) REFERENCES categories(user_id),
    PRIMARY KEY (match_id)
);

USE project2DB;

CREATE TABLE chats
(
	chat_id INT NOT NULL AUTO_INCREMENT,
    match_id INT,
    user_id INT,
    last_time TIMESTAMP,
    current_message TEXT (255) NOT NULL,
	FOREIGN KEY (match_id) REFERENCES matches(match_id),
	FOREIGN KEY (user_id) REFERENCES matches(user_id),
    PRIMARY KEY (chat_id)
);