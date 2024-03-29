//1. A GET Route to /survey which should display the survey page.
//2. A default, catch-all route that leads to home.html which displays the home page.
var path = require("path");

module.exports = function (app) {

    // Routes
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });


};