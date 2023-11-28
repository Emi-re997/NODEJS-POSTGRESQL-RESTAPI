// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empleados', 'postgres', "12345", {
  host: 'localhost',
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