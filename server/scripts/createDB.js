const mysql = require('mysql2/promise');
const env = 'development';
const config = require('../config/config.json')[env];

initialize();

async function initialize() {
  try {
    const { host, port, username, password } = config;
    const connection = await mysql.createConnection({ host, port, user: username, password });
    const res = await connection.query(`CREATE DATABASE IF NOT EXISTS sample_db_production;`);
    console.log(res);
    process.exit();
  } catch (e) {
    console.log(e);
  }
}