const { Role } = require('../models');

const roledata = [
  {
    role: 'admin',
  },
  {
    role: 'neighbor'
  },
];

const seedRole = () => User.bulkCreate(roledata);

module.exports = seedRole;