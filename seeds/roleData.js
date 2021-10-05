const { Role } = require('../models');

const roledata = [
  {
    role: 'admin',
  },
  {
    role: 'neighbor'
  },
];

const seedRole = () => Role.bulkCreate(roledata);

module.exports = seedRole;