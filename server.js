var express = require("express");
var path = require("path");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public")); // static files go in public folder

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

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

// Routes
app.get("/cast", function (req, res) {
    connection.query("SELECT * FROM actors ORDER BY id", function (err, result) {
        if (err) throw err;

        var html = "<h1>Actors Ordered BY ID</h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + "</p>";
            html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
            html += "<p>Attitude: " + result[i].attitude + "</p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});



app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))