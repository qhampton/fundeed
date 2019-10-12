INSERT INTO users(id, username, auth_id, lastName, firstName, birthdate, zipcode, searchRadius, ziplist, email, lastLogin, status, createdAt, updatedAt)
VALUES('1', 'sam@fuckyou.com', 'auth0|5d98fdc1242475025b4c4095', 'Ta', 'Max', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('2', 'bill@fuckyou.com', 'auth0|5d98fdc12424753c5b4c4095', 'To', 'Brandon', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('3', 'max@fuckyou.com', 'auth0|5d98fdc1242475045b4c4095', 'Ruiz', 'Bob', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('4', 'quin@fuckyou.com', 'auth0|5d98fdc12424755c5b4c4095', 'Velediaz', 'Lily', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('5', 'andres@fuckyou.com', 'auth0|5d98fdc12424650c5b4c4095', 'Torres', 'Jorge', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('6', 'brandon@fuckyou.com', 'auth0|5d98fdc12427750c5b4c4095', 'Rodriguez', 'Will', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('7', 'louis@fuckyou.com', 'auth0|5d98fdc12424780c5b4c4095', 'Nguyen', 'Tristan', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('8', 'harrison@fuckyou.com', 'auth0|5d98fdc12494750c5b4c4095', 'Pham', 'Yugi', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('9', 'matt@fuckyou.com', 'auth0|5d98fdc12424758c5b4c4095', 'Xi', 'Seto', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43')
,('10', 'raul@fuckyou.com', 'auth0|5d98fdc12424710c5b4c4095', 'Smith', 'John', '1990-01-01', '92020', '5', NULL, 'bob@fuckyou.com', NULL, 'active', '2019-10-12 00:02:44', '2019-10-12 02:39:43');

INSERT INTO profiles(auth_id, categoryType, about, createdAt, updatedAt)
VALUES('auth0|5d98fdc1242475025b4c4095', 'Food', 'I am hungry!', '2019-10-12 00:02:44', '2019-10-12 02:39:43'),
('auth0|5d98fdc1242475025b4c4095', 'Music', 'I play the saxophone', '2019-10-12 00:02:44', '2019-10-12 02:39:43'),
('auth0|5d98fdc12424780c5b4c4095', 'Food', 'Cheese -cheese - and more cheese', '2019-10-12 00:02:44', '2019-10-12 02:39:43'),
('auth0|5d98fdc12424755c5b4c4095', 'Food', 'Tacos are life.', '2019-10-12 00:02:44', '2019-10-12 02:39:43');
