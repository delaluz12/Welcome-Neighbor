const router = require('express').Router();

const adminRoutes = require('./admin-routes');
const userRoutes = require('./user-routes');
const dataRoutes = require('./data-routes');

router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/data', dataRoutes)

module.exports = router;
