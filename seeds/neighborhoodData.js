const { Neighborhood } = require('../models');

const neighborhooddata = [
  {
    name: 'Maple Street',
    city: 'Ourtown',
    state: 'MN',
    zip: 55500,
    admin_id: 1,
  },
  {
    name: 'Elm Street',
    city: 'Ourtown',
    state: 'MN',
    zip: 55500,
    admin_id: 2,
  },
];

const seedNeighborhood = () => Post.bulkCreate(neighborhooddata);

module.exports = seedNeighborhood;