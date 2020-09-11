const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const router = require('./routes/tasks.router');


//uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

// ROUTES
app.use('/tasks', router)

//
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });