const router = require('express').Router();

// GET homepage
router.get('/', (req, res) => {
  res.render('homepage');
  return;
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
