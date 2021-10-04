const { Neighborhood } = require('../models');

const neighborhooddata = [
  {
    name: 'Rolling Hills',
    city: 'Ourtown',
    state: 'MN',
    zip: 55500,
  },
  {
    name: 'City Park',
    city: 'Ourtown',
    state: 'MN',
    zip: 55500,
  },
];

const seedNeighborhood = () => Neighborhood.bulkCreate(neighborhooddata);

module.exports = seedNeighborhood;