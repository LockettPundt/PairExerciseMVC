'use strict'
const express = require('express'),
  albumsModel = require('../models/albumsModel'),
  router = express.Router();


router.get('/', async (req, res, next) => {

  res.render('template', { 
    locals: {
      title: 'Hi there. Welcome.',
      session: req.session
    },
    partials: {
      partial: 'partial-index'
    }
    });
});



module.exports = router;
