var express = require('express');
var router = express.Router();


var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});



/* GET users listing. */
router.get('/:id', function(req, res, next) {
  // console.log(req.params.id);
  knex.select('*').from('restaurants').where({id:req.params.id}).then(function(info){
    res.render('showrest', {restaurant: info[0]});
  });
});

// router.delete('')



module.exports = router;


