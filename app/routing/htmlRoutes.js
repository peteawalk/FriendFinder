//1. A GET Route to /survey which should display the survey page.
//2. A default, catch-all route that leads to home.html which displays the home page.

// Routes
app.get("/", function (req, res) {
    res.send("../public/home.html");
});