// db.js
const { Sequelize } = require('sequelize');
const userName = process.env.USERNAME;
const host = process.env.HOST
const password = process.env.PASSWORD
const dataBase = process.env.DATABASE

const sequelize = new Sequelize( dataBase , userName , password , {
  host: host,
  dialect: 'postgres', // Ajusta esto según tu DBMS
});

// Habilita la sincronización automática con alter
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

module.exports = sequelize;