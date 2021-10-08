
// models and associations

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

Role.hasMany(User, {
    foreignKey: 'role_id',
});

User.belongsTo(Unit, {
    foreignKey: 'unit_id',
})

Unit.hasMany(User, {
    foreignKey: 'unit_id'
});

Unit.belongsTo(Neighborhood, {
    foreignKey: 'neighborhood_id',
    onDelete: 'CASCADE'
});

Neighborhood.hasMany(Unit, {
    foreignKey: 'neighborhood_id'
});

Person.belongsTo(Unit, {
    foreignKey: 'unit_id',
    onDelete: 'CASCADE'
});

Unit.hasMany(Person, {
    foreignKey: 'unit_id',
});

Person.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasOne(Person, {
    foreignKey: 'user_id',
})

Post.belongsTo(User, {
    foreignKey: 'post_user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'post_user_id'
});

Event.belongsTo(User, {
    foreignKey: 'event_user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Event, {
    foreignKey: 'event_user_id'
});


module.exports = { Event, Neighborhood, Person, Post, Role, Unit, User };