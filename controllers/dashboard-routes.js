const router = require('express').Router();
const { Person, Post, User, Unit, Neighborhood } = require('../models');
const { restore } = require('../models/Event');
// Import the custom middleware
const withAuth = require('../utils/auth');
// GET data for the dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        visibility: 'local',
      },
      attributes: ['title', 'content', 'post_date_created'],
      include: [{
        model: User,
        attributes: ['email'],
        include: [{
          model: Person,
          attributes: ['first_name', 'last_name']
        },
        {
          model: Unit,
        }],
      }]
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    const dbNeighborData = await Neighborhood.findAll({
      where: {
        // this is hardcoded for now until we know how it is coming from the webpage
        neighborhood_id: 1
      },
      attribute: ['id'],
      include: [{
        model: Unit,
        attributes: ['unit_number', 'unit_name'],
        include: [{
          model: Person,
          attributes: ['first_name', 'last_name', 'type', 'phone', 'cell', 'birth_date']
        }],
      }]
    });
    const neighbors = dbNeighborData.map((neighbors) =>
      neighbors.get({ plain: true })
    );
    const dbHouseholdData = await Unit.findAll({
      where: {
        // this is hardcoded for now until we know how it is coming from the webpage
        id: 1
      },
      attribute: ['id'],
      include: [{
        model: Person,
      }]
    });
    const household = dbHouseholdData.map((household) =>
      household.get({ plain: true })
    );
    res.render('dashboard', {
      posts,
      neighbors,
      household,
      loggedIn: req.session.loggedIn, style: 'dashboard'
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
      loggedIn: req.session.loggedIn, style: 'dashboard'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET neighborhood roster page
router.get('/roster', async (req, res) => {
  try {
    // const dbUserData = await User.findAll({
    //   where: {
    //     id: 1
    //   },
    //   include: [
    //     {
    //       model: Unit,
    //       attributes: ['neighborhood_id'],          
    //     },
    //   ],
    // });

    // const user = dbUserData.map((unit) =>
    //   unit.get({ plain: true })
    // );
    // res.json(user);

    const dbUnitData = await Unit.findAll({
      where: {
        neighborhood_id: 1
      },
      include: [
        {
          model: Person,
          order: ['type'],
      include: [
        {
          model: User,
          attributes: ['email'],          
        },
      ],
        },
      ],
    });
    const units = dbUnitData.map((unit) =>
      unit.get({ plain: true })
    );
    console.log(units);
    // res.json(units);
    res.render('roster', {
      units,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;