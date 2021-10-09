const router = require('express').Router();
const { Post, User, Person, Neighborhood, Unit } = require('../models');
const withAuth = require('../utils/auth')
// GET all global posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        visibility: 'global',
      },
      attributes: ['id', 'title', 'content', 'created_at'],

      include: [{
        model: User,
        attributes: ['email'],
        include: [{
          model: Person,
          attributes: ['first_name', 'last_name'],
          include: [{
            model: Unit,
            attributes: ['neighborhood_id'],
            include: [{
              model: Neighborhood,
              attributes: ['name'],
            }]
          }]
        }],
      }]
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    // console.log(posts);
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
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
    res.render('browse', { neighborhoods, loggedIn : req.session.loggedIn });
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

// //GET dashboard page
// router.get('/dashboard', (req, res) => {
//   if (req.session.loggedIn) {
//     res.render('dashboard',{loggedIn: req.session.loggedIn});
//     return;
//   } res.render('/login');
// });

//GET person Form
router.get('/newUserProfile', withAuth, async (req, res) => {
  try {
    // must be logged in to access person form
    if (!req.session.loggedIn) {
      res.redirect('/login')
    }
    const dbData = await User.findOne({
      where: {
        id: req.session.user_id,
      },
      attributes: ['id', 'unit_id'],
    });
    const userData = dbData.get({ plain: true });
    // console.log(userData);
    res.render('personForm', {userData, loggedIn: req.session.loggedIn })

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//single post view --must be logged in
router.get('/globalposts/:id', withAuth, async (req, res) => {
  try {
    const dbPost = await Post.findByPk(req.params.id, {
      where: {
        visibility: 'global',
      },
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [{
        model: User,
        attributes: ['email'],
        include: [{
          model: Person,
          attributes: ['first_name', 'last_name'],
          include: [{
            model: Unit,
            attributes: ['neighborhood_id'],
            include: [{
              model: Neighborhood,
              attributes: ['name'],
            }]
          }]
        }],
      }]
    });
    if (!dbPost) {
      res.status(400).json({ message: 'No post found with that ID' });
      return;
    }
    const post = dbPost.get({ plain: true });
    // console.log(post);
    res.render('singlePost', { loggedIn: req.session.loggedIn, post });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})



module.exports = router;
