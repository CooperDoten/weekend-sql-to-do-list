const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: "tasks",
  host: "localhost",
  port: 5432,
  max: 12,
  idleTimeoutMillis: 20000
});

module.exports = router;