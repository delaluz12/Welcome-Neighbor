
const Event = require('./Event');
const Neighborhood = require('./Neighborhood');
const Person = require('./Person');
const Post = require('./Post');
const Role = require('./Role');
const Unit = require('./Unit');
const User = require('./User');

User.belongsTo(Role, {
    foreignKey: 'role_id',
})

Role.hasMany(User);

Neighborhood.belongsTo(User, {
    foreignKey: 'admin_id',
})

Unit.belongsTo(Neighborhood, {
    foreignKey: 'comment_creator_id',
    onDelete: 'CASCADE'
});

Neighborhood.hasMany(Unit);

Person.belongsTo(Unit, {
    foreignKey: 'unit_id',
    onDelete: 'CASCADE'
});

Unit.hasMany(Person);

Post.belongsTo(User, {
    foreignKey: 'post_user_id',
    onDelete: 'CASCADE'
});

Event.belongsTo(User, {
    foreignKey: 'event_user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post);

User.hasMany(Event);


module.exports = { Event, Neighborhood, Person, Post, Role, Unit, User };