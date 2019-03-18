const mongoose = require("mongoose");

//Building game gchema
const gameSchema = mongoose.Schema({
    title : String, 
    platform : String,
    genre : String, 
    rating : Number, 
    publisher: String, 
    release: Number, 
    status : String})

module.exports = mongoose.model("Game", gameSchema)