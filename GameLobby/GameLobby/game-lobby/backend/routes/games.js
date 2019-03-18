const express = require("express");
const gameModel = require('../models/game');

const router = express.Router();


router.get('', (req, res, next) => {

  console.log('GET: Game lists');

  // query to get all games
  gameModel.find({}, function(err, games){
    var gameMap = [];

    games.forEach(function(game){
      gameMap.push(game);
    })

    res.send(gameMap);
  })

});

router.get('/:id', (req, res, next) => {

  console.log('GET: Game by id:' + req.params.id);

  // Implement Mongoose query to find Game by Id return list of games
  gameModel.findOne({"_id": req.params.id}, function(err, game){
      if (err) console.log(err);
      console.log(game);
      res.send(game);
  })

})

router.put('/:id', (req, res, next) => {

  console.log('UPDATE: Game by id: ' + req.params.id);

  // Implement Mongoose update Game by ID
  gameModel.findOneAndUpdate({"_id": req.params.id}, req.body, function(err, game){
    if (err) console.log(err);
    console.log(game);
    console.log(req.body);
    res.send(game);
  });
})

  router.post('', (req, res, next) => {

    console.log('CREATE: Game');

    // Implement Mongoose update Game by ID
    gameModel.create(req.body, function(err){
      if (err){
        console.log(err);
      }
      console.log(req.body);
      res.send(req.body,)
    });

  })

router.delete('/:id', (req, res, next) => {

  console.log('DELETE: Game by id: ' + req.params.id);

  // Implement Mongoose delete Game by ID
  gameModel.findOneAndDelete({"_id": req.params.id}, function(game){
    console.log(game);
    res.send(game);
  })
})

module.exports = router;