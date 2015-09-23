var express = require('express'),
    router  = express.Router(),
    helper  = require('../lib/helper'),
    data    = require('../data/data.json');

router.get('/closest', function(req, res) {
  var lat = req.query.lat;
  var long = req.query.long;

  if (!(lat && long)) {
    res.sendStatus(400);
  }

  res.json(helper.getClosestPOI(lat, long));
});

router.get('/type', function(req, res) {
  var type = req.query.type;

  if (!(type)) {
    res.sendStatus(400);
  }

  res.json(helper.getPOIofType(type));
});

router.get('/range', function(req, res) {
  var lat = req.query.lat;
  var long = req.query.long;
  var range = req.query.range;

  if (!(lat && long && range)) {
    res.sendStatus(400);
  }

  res.json(helper.getPOIinRange(lat, long, range));
});

router.get('/search', function(req, res) {
  var query = req.query.q;

  if (!(query)) {
    res.sendStatus(400);
  }

  res.json(helper.searchForPOI(query));
});

router.get('/all', function(req, res) {
  res.json(data);
});

module.exports = router;
