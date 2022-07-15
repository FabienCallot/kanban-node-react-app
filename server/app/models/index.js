const List = require('./list');
const Card = require('./card');
const Tag = require('./tag');

List.hasMany(Card, {
    as: 'cards',
    // Ici pas beoisn de préciser la foreignKey même si on utilise un alias différent du nom du model, il prendra le nom de la table du model List et y ajoutera _id (parce qu'on a précisé underscored: true dans le client.js qui est une information disponible dans tous les models)
    foreignKey: 'list_id'
});

Card.belongsTo(List, {
    as: 'list',
    // Ici par contre si on précise un alias différent du nom de la table du model fourni dans le belongsTo, alors il faudra précisier la foreignKey, sinon il utilisera l'alias auquel il ajoutera '_id'
    foreignKey: 'list_id'
});

Card.belongsToMany(Tag, {
    as: 'tags',
    through: 'card_has_tag',
    foreignKey: 'card_id',
    otherKey: 'tag_id'
});

Tag.belongsToMany(Card, {
    // On  peut avoir 2 alias qui ont le même nom, à partir du moment ou ceux-ci sont rattachés a des models différents.
    as: 'cards',
    through: 'card_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'card_id'
});

module.exports = { Card, Tag, List };