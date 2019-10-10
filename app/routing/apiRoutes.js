var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        
    console.log(req.body);

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
    var userPhoto = userData.photo;

    let totalDifference = 0;
    
    for (var i = 0; i < friends.length; i++) {
        totalDifference = 0;

        for (var j = 0; j < friends[i].scores[j]; j++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if ( totalDifference <= bestMatch.friendDifference ) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }
    
    // Save user's data to friends array 
    friends.push(userData);

    // Return new best match 
    res.json(bestMatch);
    });


};