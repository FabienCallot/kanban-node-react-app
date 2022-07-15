const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PGURL, {
    define: {
        underscored: true
    },
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
});


module.exports = sequelize;