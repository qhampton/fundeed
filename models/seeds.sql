USE project2DB;

INSERT INTO users( username, auth_id, lastName, firstName, birthdate, zipcode, searchRadius, ziplist, email, lastLogin, status, createdAt, updatedAt)
VALUES('sam@fuckyou.com', 'auth0|5d98fdc1242475025b4c4095', 'Ta', 'Max', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('bill@fuckyou.com', 'auth0|5d98fdc12424753c5b4c4095', 'To', 'Brandon', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('max@fuckyou.com', 'auth0|5d98fdc1242475045b4c4095', 'Ruiz', 'Bob', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('quin@fuckyou.com', 'auth0|5d98fdc12424755c5b4c4095', 'Velediaz', 'Lily', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('andres@fuckyou.com', 'auth0|5d98fdc12424650c5b4c4095', 'Torres', 'Jorge', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('brandon@fuckyou.com', 'auth0|5d98fdc12427750c5b4c4095', 'Rodriguez', 'Will', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('louis@fuckyou.com', 'auth0|5d98fdc12424780c5b4c4095', 'Nguyen', 'Tristan', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('harrison@fuckyou.com', 'auth0|5d98fdc12494750c5b4c4095', 'Pham', 'Yugi', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('matt@fuckyou.com', 'auth0|5d98fdc12424758c5b4c4095', 'Xi', 'Seto', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('raul@fuckyou.com', 'auth0|5d98fdc12424710c5b4c4095', 'Smith', 'John', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43');

USE project2DB;

INSERT INTO profiles(categoryType, about, createdAt, updatedAt, UserAuthID)
VALUES('Food', 'I am hungry!', '2019-10-12 00:02:44', '2019-10-12 02:39:43','auth0|5d98fdc1242475025b4c4095'),
('Music', 'I play the saxophone', '2019-10-12 00:02:44', '2019-10-12 02:39:43', 'auth0|5d98fdc1242475025b4c4095'),
('Food', 'Cheese -cheese - and more cheese', '2019-10-12 00:02:44', '2019-10-12 02:39:43','auth0|5d98fdc12424780c5b4c4095'),
('Food', 'Tacos are life.', '2019-10-12 00:02:44', '2019-10-12 02:39:43','auth0|5d98fdc12424755c5b4c4095');