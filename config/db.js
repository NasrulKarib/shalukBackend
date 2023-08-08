
require("dotenv").config();

const { Client, Pool } = require("pg");
// const pool = new Client({
//     host : "localhost",
//     user:"postgres",
//     port:5432,
//     password:"1234",
//     database:process.env.DATABASE

// });
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })

pool.connect()
module.exports = pool;