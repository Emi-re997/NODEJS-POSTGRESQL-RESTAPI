const app = require('./app');
const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});
