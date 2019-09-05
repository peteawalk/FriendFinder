var express = require("express");
var path = require("path");
var mysql = require("mysql");

var app = express();
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;



var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "friend_finder_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});



app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))