var express = require('express');
var router = express.Router();
var db = require('../model/memory.js');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  db.GetRecipe(req.params.id, function(err, recipe){
     if(err) {
         res.send("Recipe '"+req.params.id+"' not found.");
     } else {
         res.send(recipe);
     }
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  db.CreateRecipe(req.body, function(err){
     if(err) {
         res.send("Error: Could not create recipe!");
     }
     else {
         res.send("Recipe created successfully!");
     }
  });
});


module.exports = router;
