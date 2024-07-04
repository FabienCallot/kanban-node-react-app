/* It's defining a variable called `sequelize` that is an instance of the Sequelize class. */
const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(process.env.POSTGRESQL_ADDON_HOST, {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
//     define: {
//         underscored: true,
//         timestamps: false,
//     },
//     password:
// });
const sequelize = new Sequelize(process.env.DATABASE_URI, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD);
console.log(sequelize);
const test = async () => {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
};

sequelize && test();

module.exports = sequelize;
