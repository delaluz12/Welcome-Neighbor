// seeding script
const seedEvents = require('./eventData');
const seedNeighborhoods = require('./neighborhoodData');
const seedPersons = require('./personData');
const seedPosts = require('./postData');
const seedRoles = require('./roleData');
const seedUnits = require('./unitData');
const seedUsers = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedEvents();
  console.log('\n----- EVENTS SYNCED -----\n');

  await seedNeighborhoods();
  console.log('\n----- NEIGHBORHOODS SYNCED -----\n');
  
  await seedPersons();
  console.log('\n----- PERSONS SYNCED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SYNCED -----\n');
  
  await seedRoles();
  console.log('\n----- ROLES SYNCED -----\n');
  
  await seedUnits();
  console.log('\n----- UNITS SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SYNCED -----\n');

  process.exit(0);
};

seedAll();