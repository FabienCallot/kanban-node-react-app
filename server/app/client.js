const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.PGURL, {
    define: {
        underscored: true
    }
});
module.exports = sequelize;