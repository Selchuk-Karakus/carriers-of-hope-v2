const { Pool } = require("pg");

const pool = new Pool({
  user: "selcukkarakus",
  host: "localhost",
  database: "test",
  password: "password",
  port: 5432,
});

module.exports = pool;