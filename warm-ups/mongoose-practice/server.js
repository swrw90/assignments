var express = require("express");
var app = express();
var port = process.env.PORT || 6000
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/reddit")

app.use(bodyParser.json ())
app.use(morgan("dev"));
app.use("/user", require("./routes/userRoute"))

app.listen(port, function() {
    console.log("Server is running on port " + port)
});