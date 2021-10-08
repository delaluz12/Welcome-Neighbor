const router = require('express').Router();
const { Post, User, Person, Neighborhood } = require('../models');
const withAuth = require('../utils/auth')
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
        attributes: ['email'],
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
      loggedIn: req.session.loggedIn,
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET homepage - landing page with Join or Create
router.get('/browse', async (req, res) => {

  try {
    //get neighborhoods to display in viewable list
    const dbNeighborhoods = await Neighborhood.findAll();
    const neighborhoods = dbNeighborhoods.map((neighborhood) =>
      neighborhood.get({ plain: true })
    );
    res.render('browse', { neighborhoods });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

// GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET neighbor sign up FORM
router.get('/admin', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('neighborhoodAdminForm');
});

// GET neighbor sign up FORM
router.get('/neighbor', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  //get neighborhoods to display on the drop-down in form
  const dbNeighborhoods = await Neighborhood.findAll();
  const neighborhoods = dbNeighborhoods.map((neighborhood) =>
    neighborhood.get({ plain: true })
  );
  res.render('neighborForm', { neighborhoods });
});

//GET dashboard page
router.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    res.render('dashboard');
    return;
  }
});

//GET person Form
router.get('/person', withAuth, (req, res) => {
  try {
    // must be logged in to access person form
    if (!req.session.loggedIn) {
      res.redirect('/login')
    }
    res.render('personForm', { loggedIn: req.session.loggedIn })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
