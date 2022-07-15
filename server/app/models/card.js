const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class Card extends Model{};

Card.init({
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    position: DataTypes.INTEGER,
    color: DataTypes.TEXT,
    list_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "card"
});

module.exports = Card;