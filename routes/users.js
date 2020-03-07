const express = require('express'),
  bcrypt = require('bcryptjs'),
  session = require('express-session'),
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
  const response = await user.logInUser();
  console.log('login response is: ', response);
  if (!!response.isValid) {
    req.session.is_logged_in = response.isValid;
    req.session.id = response.id;
    req.session.name = response.name;
    res.redirect(200, '/');
  } else {
    res.redirect(403, '/users/login');
  }

})

router.post('/signup', async (req, res) => {

  const {user_name, user_email, user_password} = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user_password, salt);
  const user = new userModel(null, user_name, user_email, hash);
  user.addUser();
  res.sendStatus(200).redirect('/');

})


module.exports = router;
