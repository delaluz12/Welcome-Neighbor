const router = require('express').Router();

const {Person} = require('../../models');
const withAuth = require('../../utils/auth')



router.post('/',withAuth, async (req, res) => {
  try {

    const persondb = await Person.create({
        first_name: req.body.first_name ,
        last_name: req.body.last_name,
        type: req.body.person_type,
        phone:req.body.phone,
        cell: req.body.cell,
        birth_date: req.body.birthday,
        unit_id: req.body.unit_id ||  req.session.unit_id,
        user_id: req.body.user_id,    
      
    });

req.session.save(() => {
  req.session.loggedIn = true;
  
  res.status(200).json(persondb);
});
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.post('/new',withAuth, async (req, res) => {
  console.log('we hit the route');
  try {
    const persondb = await Person.create({
        first_name: req.body.first_name ,
        last_name: req.body.last_name,
        type: req.body.person_type,
        phone:req.body.phone,
        cell: req.body.cell,
        birth_date: req.body.birthday,
        unit_id: req.session.unit_id,
    });

req.session.save(() => {
  req.session.loggedIn = true;
  
  res.status(200).json(persondb);
});
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

router.put('/:id', withAuth, async (req, res)=> {
  try {
      const updatePerson = await Person.update( {
        first_name: req.body.first_name ,
        last_name: req.body.last_name,
        type: req.body.person_type,
        phone:req.body.phone,
        cell: req.body.cell,
        birth_date: req.body.birthday,
      }, {
          where: {id: req.params.id}
      });
      if(!updatePerson){
          res.status(404).json({message : "No Person found with that ID"})
      }
      res.status(200).json({message : "Person successfully updated!"});
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.delete('/:id',withAuth, async (req, res)=> {
  try {
      const delPerson = await Person.destroy({
          where:{ 
          id: req.params.id
          },
      });
      if(!delPerson){
          res.status(404).json({message : "No person with that ID found"});
      }
      res.status(200).json({message: "Person successfully deleted!"});
      
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
})

  

module.exports = router;