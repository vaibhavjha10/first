var express = require('express');
var router = express.Router();

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCG2sPoLvCVaGX6KVUgxF8UGFeEPsfJIVs'
});

abc = {name: 'Test', age: 23}

/* GET home page. */
router.get('/', function(req, res, next) {

  // googleMapsClient.geocode({
  //   address: '1600 Amphitheatre Parkway, Mountain View, CA'
  // }, function(err, response) {
  //   if (!err) {
  //     console.log(response.json.results);
  //     res.render('index', { title: 'Express', loc: response.json });
  //   }
  // });

  res.render('index', {loc: JSON.stringify(abc)})

});

module.exports = router;
