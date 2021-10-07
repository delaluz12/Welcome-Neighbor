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
  


module.exports = router;