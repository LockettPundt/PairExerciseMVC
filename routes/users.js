const express = require('express'),
  albumsModel = require('../models/albumsModel'),
  router = express.Router();


router.get( '/', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'users'
    },
    partials: {
      partial: 'partial-users'
    }
  })
  //res.send('respond with a resource');
});

router.get('/signup', async (req, res) => {

  res.render('template', {
    locals: {
      title: 'Sign Up'
    },
    partials: {
      partial: 'partial-signup'
    }
  })
});

router.get('/login', async (req, res) => {

  res.render('template', {
    locals: {
      title: 'Log in'
    },
    partials: {
      partial: 'partial-login'
    }
  })
});



module.exports = router;
