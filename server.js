const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create application/x-www-form-urlencoded parser;
app.use(bodyParser.urlencoded({ extended: true }));

// parse different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// parse custome objects into buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));