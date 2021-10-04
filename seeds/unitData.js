const { Unit } = require('../models');

const unitdata = [
  {
    unit_number: '4400',
    unit_name: 'Maple Street',
    neighborhood_id: 1,
  },
  {
    unit_number: '2840',
    unit_name: 'Elm Street',
    neighborhood_id: 2,
  },
  {
    unit_number: '4420',
    unit_name: 'Maple Street',
    neighborhood_id: 1,
  },
  {
    unit_number: '4437',
    unit_name: 'Maple Street',
    neighborhood_id: 1,
  },
  {
    unit_number: '4442',
    unit_name: 'Maple Street',
    neighborhood_id: 1,
  },
  {
    unit_number: '4455',
    unit_name: 'Maple Street',
    neighborhood_id: 1,
  },
  {
    unit_number: '4460',
    unit_name: 'Maple Street',
    neighborhood_id: 1,
  },
];

const seedUnit = () => Post.bulkCreate(unitdata);

module.exports = seedUnit;