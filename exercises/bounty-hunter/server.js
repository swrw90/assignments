var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var uuid = require("uuid");

var bounties = [
    {
        id: 1,
        firstName: "Mitch",
        lastName: "Mitchell",
        living: true,
        bountyAmount: 300,
        type: "Jedi",

    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Barker",
        living: false,
        bountyAmount: 100,
        type: "Sith",
    },
    {
        id: 3,
        firstName: "Pete",
        lastName: "Peterson",
        living: true,
        bountyAmount: 2,
        type: "Sith",
}];


app.get("/bounties", function (req, res) {
    res.send(bounties);
});

app.post("/bounties", function (req, res) {
    req.body.id = uuid.v4();
    bounties.push(req.body);
    return res.send(req.body);
});

app.put("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id == req.params.id) {
            req.body.id = parseInt(req.params.id);
            bounties[i] = req.body;
            return res.send(req.body);
        }
    }
    res.send("No bounty with that ID found");
})

app.delete("/bounties/:id", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id == req.params.id) {
            var removeBounty = bounties.splice(i, 1);
            return res.send(bounties);
        }
    }
    res.send("No bounty with that ID found")
})


app.listen(8080, function () {
    console.log("The server is running on port" + port);
});
