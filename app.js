// app.js
const express = require('express');
const app = express();
const sequelize = require('./db');
const rutas = require('./rutas');

// Middlewares
app.use(express.json());
app.use('/api', rutas); // Puedes ajustar la ruta base según tus necesidades

module.exports = app
