const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        underscored: true
    },
    host: "127.0.0.1",
    dialect: "postgres",
    pool: {
      max: 100,
      min: 0,
    },
});
module.exports = sequelize;