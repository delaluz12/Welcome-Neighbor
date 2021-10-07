const router = require('express').Router();


const { User, Unit } = require('../../models');

// CREATE new user and unit
router.post('/', async (req, res) => {
  try {

    const dbUnit = await Unit.create({
      unit_number: req.body.unit_number,
      unit_name: req.body.street,
      neighborhood_id: req.body.neighborhood_id,
      created_at: 'null',
      updated_at: 'null'

    });

    const newunit= await Unit.findOne({
      attributes: ['id'],
      where :{unit_number:req.body.unit_number,
              unit_name: req.body.street },
              raw: true, 
    })

  
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
      role_id: req.body.role_id,
      unit_id: newunit.id
  });

req.session.save(() => {
  req.session.loggedIn = true;
  req.session.user_id = dbUserData.id;

  res.status(200).json(dbUserData);
});
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

  
 
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!userData) {
      res.status(404).json({ message: 'No User found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
