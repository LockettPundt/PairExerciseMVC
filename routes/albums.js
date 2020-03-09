'use strict'
const express = require('express'),
  albumsModel = require('../models/albumsModel'),
  router = express.Router();


router.get('/', async (req, res, next) => {
  const allAlbums = await albumsModel.getAllAlbums();
  //console.log(allAlbums);

  res.render('template', { 
    locals: {
      title: 'Albums',
      allAlbums: allAlbums,
      session: req.session
    },
    partials: {
      partial: 'partial-albums'
    }
    });
});

router.get('/:id?', async (req, res, next) => {
  const {id} = req.params;
  const albumReviews = await albumsModel.getAllReviews(id);
  console.log(albumReviews);
  res.render('template', { 
    locals: {
      title: 'Reviews',
      albumReviews: albumReviews,
      session: req.session
    },
    partials: {
      partial: 'partial-review'
    }
    });
});

router.post('/', async (req, res) => {

  const {album_id, review_text, review_title, user_name, stars} = req.body;
  console.log(req.body);
  const postData = await albumsModel.createReview(album_id, user_name, stars, review_title, review_text);
  //createReview(album_id, user_id, stars, review_title, review_text)
  console.log(postData);
  res.redirect(200, '/albums');
})

module.exports = router;