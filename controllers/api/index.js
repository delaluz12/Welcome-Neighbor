const router = require('express').Router();

const userRoutes = require('./user-routes');
const dataRoutes = require('./data-routes');

router.use('/users', userRoutes);
router.use('/data', dataRoutes)

module.exports = router;
