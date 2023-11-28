// db.js
const { Sequelize } = require('sequelize');



// Configuración de Sequelize utilizando las variables de entorno
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: true, // Puedes cambiarlo a false en producción para evitar la salida de las consultas SQL en la consola
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Configuración para aceptar certificados no válidos (¡ten cuidado en producción!)
    },
  },
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