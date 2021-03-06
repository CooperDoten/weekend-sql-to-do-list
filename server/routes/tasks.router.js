
//requires
const express = require('express');
const router = express.Router();
const pg = require('pg');

//link up DB
let pool;

if (process.env.DATABASE_URL) {
  console.log("Gonna connect to a heroku DB");
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
  });
}
else {
  console.log("Assuming we're running locally");
  pool = new pg.Pool({
    database: "weekend-to-do-app"
  });
}
//POST ROUTE
router.post('/', (req, res) => {
    let task = req.body;
    console.log(`Adding task`, task);
    let queryText = `INSERT INTO "tasks" ("name", "age", "task", "type", "complete")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [task.name, task.age, task.task, task.type, task.complete])
      .then(result => {
          res.sendStatus(201);
      })
      .catch(error => {
          console.log(`Error adding new task`, error);
          res.sendStatus(500);
      });
});
//GET ROUTE
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
      .catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);
      });
  });
//PUT ROUTE
router.put('/:id', (req, res) => {
    let task = req.body;
    let id = req.params.id;
    console.log(`marking for transfer ${id}`, task);
    let queryText = `UPDATE "tasks" SET "complete" = 'Yes' WHERE "id" = $1;`;
    pool.query(queryText, [id])
      .then((result) => {
        console.log('DB should update', result);
        res.sendStatus(200);
      }).catch((er) => {
        console.log("Error from put", err);
        res.sendStatus(500);
      })
  });

//DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = req.params.id
    const queryText = `DELETE FROM "tasks" WHERE id = $1`
    pool.query(queryText, [id])
    .then((result) => {
        res.sendStatus(204);
    }).catch((err) => {
        res.sendStatus(500);
    })
})
//EXPORT TO SERVER.JS
module.exports = router;