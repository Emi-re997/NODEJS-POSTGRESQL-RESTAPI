// usuarioController.js
const Usuario = require('../modelos/usuario');

//En los controladores podemos configurar el "CRUD" que influira en la base de datos, si tuvieramos una API 
//externa deberiamos de concatenar el resultado de la función obtenerEmpleados con el resultado de la
// petición que se le solicite a la API con su respectiva información.

//Obtiene los empleados de la base de datos

exports.obtenerEmpleados = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener Empleado:', error);n
    res.status(500).send('Error interno del servidor');
  }
};

//Crea un empleado y lo incorpora a la base de datos

exports.crearEmpleado = async (req, res) => {
  const { nombre, edad } = req.body;

  try {
    const nuevoUsuario = await Usuario.create({ nombre, edad });
    res.json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear Empleado:', error);
    res.status(500).send('Error interno del servidor');
  }
};



//Actualiza el usuario en la base de datos

exports.actualizarEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, edad } = req.body;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }

  
    await usuario.update({ nombre, edad });

    res.json(usuario);
  } catch (error) {
    console.error('Error al actualizar Empleado:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Metodo para crear un empleado en la base de datos

exports.eliminarEmpleado = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }

    // Elimina el usuario
    await usuario.destroy();

    res.json({ mensaje: 'Usuario eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar Empleado:', error);
    res.status(500).send('Error interno del servidor');
  }
};
