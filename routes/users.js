const express = require('express'),
  bcrypt = require('bcryptjs'),
  albumsModel = require('../models/albumsModel'),
  userModel = require('../models/userModel'),
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
})

router.get('/signup', async (req, res) => {

  res.render('template', {
    locals: {
      title: 'Sign Up'
    },
    partials: {
      partial: 'partial-signup'
    }
  })
})

router.get('/login', async (req, res) => {

  res.render('template', {
    locals: {
      title: 'Log in'
    },
    partials: {
      partial: 'partial-login'
    }
  })
})

router.post('/login', async (req, res) => {
  const {user_email_login, user_password_login} = req.body;
  const user = new userModel(null, null, user_email_login, user_password_login);
  user.logInUser();

  res.send(200);
})

router.post('/signup', async (req, res) => {

  const {user_name, user_email, user_password} = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user_password, salt);
  const user = new userModel(null, user_name, user_email, hash);
  user.addUser();
  res.send(200).redirect('/');
})


module.exports = router;
