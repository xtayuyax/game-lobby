var mongoose = require("mongoose");
var express = require("express");
var express = express();

mongoose.connect("mongodb://admin:yue5yun5@ds115154.mlab.com:15154/project_db")

var Schema = mongoose.Schema;

var playerSchema = new Schema({name : String, rank: Number, score: Number, time: String, game: String, status: String})

var gameSchema = new Schema({title : String, platform : String, genre : String, rating : Number, publisher: String, release: Number, status : String})

var player = mongoose.model("player", playerSchema);

var game = mongoose.model("game", gameSchema);

var createGame = function(title, platform, genre, rating, publisher, release, status){
    let newGame = game({title : title, platform : platform, genre : genre, rating : rating, publisher : publisher, release : release, status : status})
    newGame.save(function(err){
        if (err) throw err;

        console.log("*** Game Saved ***");
    })
}

var createPlayer = function(name, rank, score, time, game, status){
    let newPlayer = player({name : name, rank : rank, score : score, time : time, game : game, status : status})
    newPlayer.save(function(err){
        if (err) throw err;

        console.log("*** Player Saved ***");
    })
}

createPlayer("Michael Yu", 2, 123144, "1d1h32min", "Maple Story 2", "Active");

createGame("Maple Story", "PC", "Action", "4", "Nexon", "2018", "Active");


