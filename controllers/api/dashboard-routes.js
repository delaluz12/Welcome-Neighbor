const router = require('express').Router();
const { Person, Post, Neighborhood, Unit, User } = require('../../models');

//view posts
router.get('/post', async (req, res) =>{
  
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
    const posts = postData.map((post) => post.get({ plain: true}));
    res.render('dashboard', {posts, style: 'dashboard'});
  });


//view neighbors
router.get('/person', async (req, res) =>{
  const personData = await Person.findAll().catch((err) => {
    res.json(err);
  });
    const persons = personData.map((person) => person.get({ plain: true}));
    res.render('dashboard', {persons, style: 'dashboard'});
  });

 //profile info

 //unit info
 
 
//update profile
    //change profile info
    //create new person/delete person


  module.exports = router;