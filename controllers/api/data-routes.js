const router = require('express').Router();
const { Person, Post, User, Unit, Neighborhood} = require('../../models');

// GET all posts
router.get('/posts', async (req, res) => {
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
      res.json(posts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

 // GET all neighbors by unit
router.get('/neighbors', async (req, res) => {
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
      res.json(neighbors);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

   // GET all neighbors by unit
router.get('/neighborhoods', async (req, res) => {
  try {
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
    res.json(neighbors);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});
  

   // GET all persons by unit
   router.get('/household', async (req, res) => {
    try {
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
      res.json(household);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
      }
  });

module.exports = router;