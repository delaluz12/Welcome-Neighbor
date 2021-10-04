const { Event } = require('../models');

const eventdata = [
  {
    event_date: 'October 31, 2021',
    title: 'Neighborhood Block Party',
    content: 'Join us for the Fall Block Party!  Bring an appetizer to share and meet in our driveway.  We will provide tables, chairs and drinks. We will also have Halloween candy for kids who come in costume!',
    visibility: 'local',
    event_date_created: 'October 4, 2021 12:00:00',
    event_user_id: 1,
  },
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;