// db.js
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // Ajusta esto según tu DBMS
  logging: true, // Puedes cambiarlo a false en producción para evitar la salida de las consultas SQL en la consola
});

// Verificar la conexión
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
}

testDatabaseConnection();

// Habilita la sincronización automática con alter
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

module.exports = sequelize;