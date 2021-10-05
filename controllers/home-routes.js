const router = require('express').Router();
const User = require('../models/User');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all users for homepage
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['email']],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    console.log(users)

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
