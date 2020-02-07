const { Router } = require('express');
var api = Router();
var registrarusuario = require('../Logicas/registroUsuario');
//var iniciosesion = require('../Logicas/inicioSecion');
//var cerrarsesion = require('../Logicas/cerrarSecion');
api.use('/registrarusuario', registrarusuario);
//api.post('/iniciosesion', iniciosesion.iniciarsesion);
//api.post('/cerrarsesion', cerrarsesion.cerrarsesion);

module.exports = api;