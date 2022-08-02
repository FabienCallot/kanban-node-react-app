const List = require('./list');
const Card = require('./card');
const Tag = require('./tag');
const User = require('./user');

User.hasMany(List, {
  as: 'lists',
  foreignKey: 'user_id',
});

List.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
});

List.hasMany(Card, {
  as: 'cards',
  foreignKey: 'list_id',
});

Card.belongsTo(List, {
  as: 'list',
  foreignKey: 'list_id',
});

Card.belongsToMany(Tag, {
  as: 'tags',
  through: 'card_has_tag',
  foreignKey: 'card_id',
  otherKey: 'tag_id',
});

Tag.belongsToMany(Card, {
  as: 'cards',
  through: 'card_has_tag',
  foreignKey: 'tag_id',
  otherKey: 'card_id',
});

module.exports = { Card, Tag, List };
