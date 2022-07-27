const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const devConfig = {
  connectionString: process.env.DATABASE_URL_LOCAL // Local connection
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // Heroku addon production connection
  ssl: {
    rejectUnauthorized: false
  }
}

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);


module.exports = {
  pool,
};