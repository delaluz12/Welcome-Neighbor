const { Post } = require('../models');

const postdata = [
  {
    title: 'Bumper Crop',
    content: 'We have more tomatoes than we can eat! We have put a basket of tomatoes on our front porch and would like to share.  Feel free to stop by and pick up a few.',
    visibility: 'local',
    post_date_created: 'October 4, 2021 12:00:00',
    post_user_id: 3,
  },
  {
    title: 'On Vacation',
    content: 'We will be on vacation from October 31 - November 7.  Just letting everyone know.',
    visibility: 'local',
    post_date_created: 'September 25, 2021 11:00:00',
    post_user_id: 4,
  },
  {
    title: 'School Fundraiser',
    content: 'Crestview Elementary is doing their annual PTO fundraiser. This year they are raffling off a weekend getaway to a local resort.  Give me a call if you are interested in buying a ticket.  Each ticket is $20.',
    visibility: 'local',
    post_date_created: 'September 27, 2021 13:00:00',
    post_user_id: 5,
  },
  {
    title: 'Lost Cat',
    content: 'Our indoor cat escaped last night!  Please keep an eye out for Mitzi and let us know if you spot her.  She is a orange tabby.',
    visibility: 'local',
    post_date_created: 'September 30, 2021 08:00:00',
    post_user_id: 5,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;