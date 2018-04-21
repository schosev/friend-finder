module.exports = function(app, path, bodyParser){

    var friends = require(".././data/friends");

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

app.get("/api/friends", function(req, res) {
    console.log("in display friends");
    return res.json(friends);
});

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newFriend
    //newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

}