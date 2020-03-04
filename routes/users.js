const express = require('express'),
  albumsModel = require('../models/albumsModel'),
  router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
