const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config({path:'./port.env'});

const port = process.env.PORT;
const routes = require('./routes/user');

//Configurar el trabajo con vistas html
app.set('view engine', 'hbs');

//Configurar el trabajo de los partials
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Configurar los archivos estaticos
app.use(express.static('public'));

//Configuracion para la renderizacion de formulario
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Configurar el router
app.use('/' , routes);

//Escuchar el puerto 
app.listen(port);