const express = require("express");
const playerModel = require('../models/player');

const router = express.Router();


router.get('', (req, res, next) => {

  console.log('GET: Player lists');

  // Add Mongoose query to find all return list of students and return

  playerModel.find({}, function(err, players){
    var playerMap = [];

    players.forEach(function(player){
      playerMap.push(player);
    })

    res.send(playerMap);
  })

});

router.get('/:id', (req, res, next) => {

  console.log('GET: Player by id:' + req.params.id);

  playerModel.findOne({"_id": req.params.id}, function(err, player){
    if (err){
      console.log(err);
      res.send("An error has ocurred");
    }
    res.send(player);
  })

})

router.put('/:id', (req, res, next) => {

  console.log('UPDATE: Player by id: ' + req.params.id);

  // Update Player by ID
  playerModel.findOneAndUpdate({"_id": req.params.id}, req.body, function (err, player) {
    if (err) console.log(err);
    console.log(player);
    console.log(req.body);
    res.send(player);
  });
})

router.post('/', (req, res, next) => {

  console.log('CREATE: Player');

  // Create Player
  playerModel.create(req.body, function(err){
    if (err){
      console.log(err);
    }
    res.send(req.body);
  })
})

router.delete('/:id', (req, res, next) => {

  console.log('DELETE: Player by id: ' + req.params.id);

  playerModel.findOneAndDelete({"_id": req.params.id}, function(player){
    console.log(player);
    res.send(player);
  });

});

module.exports = router;
