module.exports = function(app, path, bodyParser){

    var friends = require(".././data/friends");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var friendMatch = [];

// Displays all characters
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.get("/api/friend", function(req, res) {
    res.json(friendMatch);
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    friendMatch = getMatch(newFriend, friends);

    friends.push(newFriend);

    res.json(newFriend);
});


function getMatch(newFriend, friends) {
    var total = 100;
    var matchTotal;
    var match;
    var newFriendIndvTotal;
    
    for (var z = 0; z < friends.length; z ++){
        var matchArray = [];
        for ( var i = 0; i < newFriend.scores.length; i++ ) {
                matchIndv = Math.abs(parseInt(newFriend.scores[i]) - parseInt(friends[z].scores[i]));
                matchArray.push(matchIndv);
            }
            var matchTotal = matchArray.reduce(add, 0);
            function add(a, b) {
                return a + b;
            }
            if (matchTotal < total) {
                total = matchTotal;
                match = friends[z];
            }
        
    }  
    return match;
}



}