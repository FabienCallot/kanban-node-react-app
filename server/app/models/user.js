const { DataTypes, Model } = require('sequelize');
const sequelize = require('../client');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    color: DataTypes.TEXT,
  },
  {
    sequelize,
    tableName: 'user',
  }
);

module.exports = User;
