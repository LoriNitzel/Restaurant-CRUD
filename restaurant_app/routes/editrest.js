var express = require('express');
var router = express.Router();


var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});


router.get('/:id', function(req, res, next) {
  // console.log(typeof req.params.id)
  knex.select('*').from('restaurants').where({id:req.params.id}).then(function(info){
  res.render('editrest', {restaurant: info[0]});
  });
});



router.post('/:id', function(req, res, next){
  var blah = parseInt(req.params.id);
  console.log(typeof blah);
 var data = {
   
    name: req.body.restaurantName,
    city: req.body.city,
    state: req.body.state,
    cuisine: req.body.Cuisine,
    rating: req.body.onestar,
    imageurl: req.body.imageURL,
    bio: req.body.shortbio
  } 
  knex('restaurants').update(data).where({id:req.params.id}).then(function(info){
    res.redirect('/');
  });
});

//  knex.select('*').from('restaurants').where({id:req.params.id}).then(function(info){
//     res.render('showrest', {restaurant: info[0]});
//   });
// });


module.exports = router;