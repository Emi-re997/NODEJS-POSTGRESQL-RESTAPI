// rutas.js
const express = require('express');
const router = express.Router();
const empleadoController = require('./controladores/empleadoController');

// Obtener todos los usuarios
router.get('/usuarios', empleadoController .obtenerEmpleados);

// Crear un nuevo usuario
router.post('/usuarios', empleadoController .crearEmpleado);

// Actualizar un usuario
router.put('/usuarios/:id', empleadoController.actualizarEmpleado);

// Eliminar un usuario
router.delete('/usuarios/:id', empleadoController.eliminarEmpleado);

module.exports = router;
