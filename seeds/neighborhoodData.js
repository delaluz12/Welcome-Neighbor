const { Neighborhood } = require('../models');

const neighborhooddata = [
  {
    name: 'Rolling Hills',
    city: 'Ourtown',
    state: 'MN',
    zip: 55500,
    admin_id: 1,
  },
  {
    name: 'City Park',
    city: 'Ourtown',
    state: 'MN',
    zip: 55500,
    admin_id: 2,
  },
];

const seedNeighborhood = () => Post.bulkCreate(neighborhooddata);

module.exports = seedNeighborhood;