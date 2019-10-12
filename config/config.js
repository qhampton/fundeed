require("dotenv").config();
module.exports = {
  development: {
    username: "llqf4p8wo3jks59u",
    password: process.env.DB_PASSWORD,
    database: "ankkiy0ses6qwn9h",
    host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: "3306"
  },
  // development: {
  //   username: "root",
  //   password: process.env.DB_PASSWORD,
  //   database: "project2db",
  //   host: "localhost",
  //   dialect: "mysql",
  //   port: "3306"
  // },
  test: {
    username: "root",
    password: "Yakusoku1!",
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    // eslint-disable-next-line camelcase
    username: "llqf4p8wo3jks59u",
    password: process.env.DB_PASSWORD,
    database: "ankkiy0ses6qwn9h",
    host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: "3306"
  }
};
