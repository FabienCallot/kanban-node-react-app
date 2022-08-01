const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class List extends Model {}

List.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    position: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    sequelize,
    tableName: 'list',
  }
);

module.exports = List;
