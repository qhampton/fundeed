require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "project2DB",
    host: "localhost",
    dialect: "mysql",
    port: "3306"
  },
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
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
