const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    define: {
        underscored: true
    },
    host: process.env.PSQL_HOST || "localhost",
    dialect: "postgres",
    pool: {
      max: 100,
      min: 0,
    },
});
module.exports = sequelize;