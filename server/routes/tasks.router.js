const express = require('express');
const router = express.Router();
const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: "task",
  host: "localhost",
  port: 5432,
  max: 12,
  idleTimeoutMillis: 20000
});

router.post('/', (req, res) => {
    let task = req.body;
    console.log(`Adding task`, task);

    let queryText = `INSERT INTO "tasks" ("name", "age", "task", "type")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [task.name, task.age, task.task, task.type])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new task`, error);
            res.sendStatus(500);
        });
});

module.exports = router;