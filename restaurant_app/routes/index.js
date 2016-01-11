var express = require('express');
var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});


//db name is restaurant_listings
//table name is restaurants
//for each image, need to access database with info from restaurant when clicked
//use ?? to access database on click
//postgres command: SELECT * FROM restaurants


/* GET home page. *///
router.get('/', function(req, res) {
  knex.select('*').from('restaurants').then(function(info){
    // console.log(info);
    res.render('index', {restaurants: info});
    });
  });
 
//   function knexTesting(){
//     return knex.select('*').from('restaurants');
//   }
//   knexTesting().then(function(info) {
//     return knex.select({name: info[0].name})
//   }).then(function(blah){
//     console.log(blah);
//   })
// });





module.exports = router;
