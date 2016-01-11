var express = require('express');
var router = express.Router();


var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newrest');
});

router.post('/', function(req, res, next) {
  //var restData = req.param('RestaurantName');
  var data = {
    
    name: req.body.restaurantName,
    city: req.body.city,
    state: req.body.state,
    cuisine: req.body.Cuisine,
    rating: req.body.onestar,
    imageurl: req.body.imageURL,
    bio: req.body.shortbio
  }
  knex('restaurants').insert(data).catch(function(error){
    console.log(error);
  });
  res.redirect('/');
})

module.exports = router;
