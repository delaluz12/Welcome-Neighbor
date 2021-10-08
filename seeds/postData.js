const { Post } = require('../models');

const postdata = [
  {
    title: 'Bumper Crop',
    content: 'We have more tomatoes than we can eat! We have put a basket of tomatoes on our front porch and would like to share.  Feel free to stop by and pick up a few.',
    visibility: 'local',
    post_date_created: 'October 4, 2021 12:00:00',
    post_user_id: 6,
  },
  {
    title: 'On Vacation',
    content: 'We will be on vacation from October 31 - November 7.  Just letting everyone know.',
    visibility: 'local',
    post_date_created: 'September 25, 2021 11:00:00',
    post_user_id: 3,
  },
  {
    title: 'School Fundraiser',
    content: 'Crestview Elementary is doing their annual PTO fundraiser. This year they are raffling off a weekend getaway to a local resort.  Give me a call if you are interested in buying a ticket.  Each ticket is $20.',
    visibility: 'local',
    post_date_created: 'September 27, 2021 13:00:00',
    post_user_id: 4,
  },
  {
    title: 'Lost Cat',
    content: 'My indoor cat escaped last night!  Please keep an eye out for Mitzi and let us know if you spot her.  She is a orange tabby.',
    visibility: 'local',
    post_date_created: 'September 30, 2021 08:00:00',
    post_user_id: 5,
  },
  {
    title: 'Neighborhood Block Party',
    content: 'Join us for the Fall Block Party!  Bring an appetizer to share and meet in our driveway.  We will provide tables, chairs and drinks. We will also have Halloween candy for kids who come in costume!',
    visibility: 'local',
    post_date_created: 'October 4, 2021 12:00:00',
    post_user_id: 1,
  },
  {
    title: 'Garage Sale',
    content: 'We are having a garage sale from 10-2 on Saturday, October 23.  Come and check it out. 2840 Elm Street',
    visibility: 'global',
    post_date_created: 'October 8, 2021 11:00:00',
    post_user_id: 1,
  },
  {
    title: 'FREE STUFF',
    content: 'We will be moving in a couple of weeks and are getting rid of stuff!  Anything at the curb is free! Bed, dresser and decorative items. First come, first serve. 2840 Elm Street',
    visibility: 'global',
    post_date_created: 'October 9, 2021 11:00:00',
    post_user_id: 2,
  },
  {
    title: 'Help with Garden',
    content: 'I had surgery two weeks ago and have to take it easy.  Anyone around who would like to help me with some light weeding in the garden?  It is getting out of control. Send me a text at 212-456-8954',
    visibility: 'global',
    post_date_created: 'October 10, 2021 11:00:00',
    post_user_id: 4,
  },
  {
    title: 'Found - Bike Lock',
    content: 'I found a bike lock on Maple Street.  If you are missing one, give me a shout.',
    visibility: 'global',
    post_date_created: 'October 10, 2021 11:00:00',
    post_user_id: 7,
  },
  {
    title: 'Looking for a babysitter',
    content: 'If anyone knows of a local teenager they would recommend for babysitting, please send me a text at 952-894-5147',
    visibility: 'global',
    post_date_created: 'October 10, 2021 11:00:00',
    post_user_id: 5,
  },
  {
    title: 'Tutoring Help',
    content: 'We need to find a math tutor for our daughter.  If you know of someone, reach out to me at myemail@email.com',
    visibility: 'global',
    post_date_created: 'October 11, 2021 11:00:00',
    post_user_id: 1,
  },
  {
    title: 'Thanksgiving Pie',
    content: 'I am making up a bunch of pecan and pumpkin pies for Thanksgiving.  If you would like to place an order, they will be $20 each.  Send me an email at justpie@gmail.com to put in your order.',
    visibility: 'global',
    post_date_created: 'October 11, 2021 11:00:00',
    post_user_id: 2,
  },
  {
    title: 'Hello!',
    content: 'We are new to the neighborhood.  Just moved here from Chicago.  This app is great! Looking forward to getting to know everyone in the community better.',
    visibility: 'global',
    post_date_created: 'October 11, 2021 11:00:00',
    post_user_id: 3,
  },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;