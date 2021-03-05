const express = require('express');
const app = express();
const morgan = require('morgan');


//Configuraciones
app.set('port', 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/API',require('./routes/rutas'));


//Empezando server
app.listen(app.get('port'));
console.log("Servidor #1");
