const mongoose = require("mongoose");

//Building player Schema
const playerSchema = mongoose.Schema({
    name : String, 
    rank: Number, 
    score: Number, 
    time: String, 
    game: String, 
    status: String});

module.exports = mongoose.model("Player", playerSchema)