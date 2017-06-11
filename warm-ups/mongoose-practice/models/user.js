var mongoose = require("mongoose")
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        phone: Number,
        email:{ 
            type: String,
            required: true,
            unique: true
              },
    },
    activeMember: Boolean,
    posts: [String],
    age: Number,
    friends: [String],
    location: [{
        street: String,
        city: String,
        state: String,
        country: String,
        coords: {
            lat: Number,
            long: Number
        }
    }]
});

module.exports = mongoose.model("User", userSchema);
