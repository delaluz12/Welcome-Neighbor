const router = require('express').Router();
const { Post, User, Unit, Neighborhood, Person} = require('../models');

// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all posts
router.get('/posts', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
        include: [{
            model: User,
            include: [{
                model: Unit,
                include: Neighborhood
            }],
          }]
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts);
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn, style:'dashboard'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET all neighbors
router.get('/neighbors', withAuth, async (req, res) => {
    try {
      const dbNeighborData = await Person.findAll({
        include: [{
          model: Unit,
          include: Neighborhood
        }],
      });
      const neighbors = dbNeighborData.map((neighbors) =>
        neighbors.get({ plain: true })
      );
      res.render('dashboard', {
        neighbors,
        loggedIn: req.session.loggedIn, style:'dashboard'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;