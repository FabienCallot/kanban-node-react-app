const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class Tag extends Model{};

Tag.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    color: DataTypes.TEXT
}, {
    sequelize,
    tableName: "tag"
});

module.exports = Tag;