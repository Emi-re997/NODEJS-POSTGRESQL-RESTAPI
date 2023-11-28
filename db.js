// db.js
const { Sequelize } = require('sequelize');

const url = process.env.DATABASE_URL

const sequelize = new Sequelize( url, {
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