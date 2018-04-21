// module.exports = function(app, path, bodyParser){

//     app.use(bodyParser.urlencoded({ extended: true }));
//     app.use(bodyParser.json());

    var friends = [
        {
            name: "Sarah",
            image: "https://i.pinimg.com/originals/8e/35/fb/8e35fb0ca2802166e97049a3477b6c3b.jpg",
            scores: [1,4,3,5,2,3,4,2,5,3]
        },
        {
            name: "Dan",
            image: "http://thehappyguy.com/wp-content/uploads/2011/11/funnyface.jpg",
            scores: [1,3,3,2,2,3,1,2,5,3]
        }
    ];

    module.exports = friends;

//     app.get("/api/friends", function(req, res) {
//         console.log("in display friends");
//         return res.json(friends);
//     });

//     app.post("/api/friends", function(req, res) {
//         var newFriend = req.body;
    
//         // Using a RegEx Pattern to remove spaces from newFriend
//         //newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//         console.log(newFriend);
    
//         friends.push(newFriend);
    
//         res.json(newFriend);
//     });

// }