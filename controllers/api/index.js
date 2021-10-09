const router = require('express').Router();

const adminRoutes = require('./admin-routes');
const userRoutes = require('./user-routes');
const dataRoutes = require('./data-routes');
const personRoutes = require('./person-routes');
const eventRoutes = require('./event-routes');
const postRoutes = require('./post-routes');


router.use('/event', eventRoutes);
router.use('/post', postRoutes);
router.use('/person', personRoutes);
router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/data', dataRoutes)

module.exports = router;
