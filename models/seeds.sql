DROP DATABASE IF EXISTS project2DB;
CREATE DATABASE project2DB;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

USE project2DB;

INSERT INTO users( username, auth_id, lastName, firstName, birthdate, zipcode, searchRadius, ziplist, bio,  email, lastLogin, status, createdAt, updatedAt)
VALUES('sam@fuckyou.com', 'auth0|5d98fdc1242475025b4c4095', 'Ta', 'Max', '1990-01-01', '92020', '5', NULL,'I know HTML, CSS, and React. I am looking to create an application to cure my lack of personality. Any python coders out there?', 'sam@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('bill@fuckyou.com', 'auth0|5d98fdc12424753c5b4c4095', 'To', 'Brandon', '1990-01-01', '92020', '5', NULL,'I do not know how to cook at all. Looking to learn how to cook fresh pasta.', 'bill@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('max@fuckyou.com', 'auth0|5d98fdc1242475045b4c4095', 'Ruiz', 'Bob', '1990-01-01', '92020', '5', NULL,'I love creating computers from scratch', 'max@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('quin@fuckyou.com', 'auth0|5d98fdc12424755c5b4c4095', 'Velediaz', 'Lily', '1990-01-01', '92020', '5', NULL,'I make iso apps for fun.', 'quin@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('andres@fuckyou.com', 'auth0|5d98fdc12424650c5b4c4095', 'Torres', 'Jorge', '1990-01-01', '92020', '5', NULL,'A goalie looking for a team.', 'andres@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('brandon@fuckyou.com', 'auth0|5d98fdc12427750c5b4c4095', 'Rodriguez', 'Will', '1990-01-01', '92020', '5', NULL,'New photographer looking to build portfolio', 'brandon@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('louis@fuckyou.com', 'auth0|5d98fdc12424780c5b4c4095', 'Nguyen', 'Tristan', '1990-01-01', '92020', '5', NULL,'A model ready for shoots', 'louis@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('harrison@fuckyou.com', 'auth0|5d98fdc12494750c5b4c4095', 'Pham', 'Yugi', '1990-01-01', '92020', '5', NULL,'Bouncer looking to start own club', 'harrison@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('matt@fuckyou.com', 'auth0|5d98fdc12424758c5b4c4095', 'Xi', 'Seto', '1990-01-01', '92020', '5', NULL,'Fencer currently training for the olympics', 'matt@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('raul@fuckyou.com', 'auth0|5d98fdc12424710c5b4c4095', 'Smith', 'John', '1990-01-01', '92020', '5', NULL,'Game consoles are life.', 'raul@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43');

USE project2DB;

INSERT INTO matches (profileID1, profileID2, categoryType, matching, Success, createdAt, updatedAt)
VALUES
('auth0|5d98fdc1242475025b4c4095', 'auth0|5d98fdc1242475045b4c4095', 'Technology', true, true, '2019-10-12 00:02:44', '2019-10-12 02:39:43'),
('auth0|5d98fdc12424755c5b4c4095', 'auth0|5d98fdc1242475045b4c4095', 'Technology',true,true,  '2019-10-12 00:02:44', '2019-10-12 02:39:43'),
('auth0|5d98fdc12494750c5b4c4095', '', 'Nightlife',false,false,  '2019-10-12 00:02:44', '2019-10-12 02:39:43'),
('auth0|5d98fdc1242475025b4c4095', 'auth0|5d98fdc12424755c5b4c4095', 'Technology',true,false,  '2019-10-12 00:02:44', '2019-10-12 02:39:43');

USE project2DB;

INSERT INTO chats( user, lastTime, message,createdAt, updatedAt, MatchId)
VALUES
('auth0|5d98fdc1242475045b4c4095','2019-10-12 00:02:44', 'Hi','2019-10-12 00:02:44', '2019-10-12 02:39:43', 1 ),
('auth0|5d98fdc1242475045b4c4095','2019-10-12 00:02:44', 'Hi, how are you?','2019-10-12 00:02:44', '2019-10-12 02:39:43', 1 );


-- PRESENTATION SEEDS --
-- Users --
INSERT INTO Users(username, auth_id, lastName, firstName, birthdate, zipcode, searchRadius, ziplist, email, bio, lastLogin, status, createdAt, updatedAt)
VALUES ('aruiz858@gmail.com', 'auth0|5d98fdc12424750c5b4c4095', 'Nye', 'Bill', '1899-12-31', '92111', '5', NULL, 'aruiz858@gmail.com', 'TECHNOLOGYrocks!', NULL, 'active', '2019-10-12 12:26:50', '2019-10-12 14:20:42')
,('dsadsad@dsadas.com', 'auth0|5da1df2fa824ca0d5ef9b32e', 'Ruiz', 'Andres', '2016-12-31', '92117', '10', NULL, 'aruiz858@gmail.com', 'LOSER', NULL, 'active', '2019-10-12 14:12:01', '2019-10-12 14:12:21')
,('demo@bootcamp.com', 'auth0|5da1e0a0393ee70dfa9afa07', 'Schaen', 'Harrison', '1968-01-01', '92117', '10', NULL, 'demo@bootcamp.com', 'I teach code.', NULL, 'active', '2019-10-12 14:18:11', '2019-10-12 14:19:17')
,('bob@gmail.com', 'auth0|BOBOBOBOBOBOBOO', 'Dylan', 'Bob', '1990-01-01', '92117', '10', NULL, 'bob@gmail.com', 'I\'m Lame', NULL, 'active', '2019-10-12 06:46:59', '2019-10-12 07:02:57');

-- Matches --
INSERT INTO Matches (id, profileID1, profileID2, categoryType, matching, Success, profileID, createdAt, updatedAt)
VALUES ('9', 'auth0|5d98fdc12424750c5b4c4095', 'auth0|5da1e0a0393ee70dfa9afa07', NULL, '1', '0', 'Andres', '2019-10-12 14:21:08', '2019-10-12 14:21:08')
,('8', 'auth0|5da1df2fa824ca0d5ef9b32e', 'auth0|5da1e0a0393ee70dfa9afa07', NULL, '1', '0', 'Harrison', '2019-10-12 14:12:39', '2019-10-12 14:16:08')
,('7', 'auth0|BOBOBOBOBOBOBOO', 'auth0|5da1e0a0393ee70dfa9afa07', NULL, '1', '0', 'Bill', '2019-10-12 09:59:34', '2019-10-12 14:16:12');



-- CHAT LOGS -- 
INSERT INTO Chats( user, lastTime, message,createdAt, updatedAt, MatchId)
VALUES
('Andres','2019-10-12 00:02:44', 'Hi','2019-10-12 00:02:44', '2019-10-12 02:39:43', 9 ),
('Harrison','2019-10-12 00:02:44', 'Hi, how are you?','2019-10-12 00:02:44', '2019-10-12 02:39:43', 9 ),
('Andres','2019-10-12 00:02:44', 'Struggling with project 2','2019-10-12 00:02:44', '2019-10-12 02:39:43', 9 ),
('Harrison','2019-10-12 00:02:44', 'Wow, you guys did a fantastic job!','2019-10-12 00:02:44', '2019-10-12 02:39:43', 9 );

