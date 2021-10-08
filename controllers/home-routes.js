const router = require('express').Router();
const { Post, User, Person } = require('../models');

// GET all global posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        visibility: 'global',
      },
      attributes: ['title', 'content', 'post_date_created'],

      include: [{
          model: User,
          attributes:['email'],
          include: [{
              model: Person,
              attributes: ['first_name', 'last_name']
          }],
        }]
  });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET homepage - landing page with Join or Create
router.get('/browse', (req, res) => {
  res.render('browse');
  return;
});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
