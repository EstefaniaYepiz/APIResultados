require('./database')
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Configuraciones
app.set('port', 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas
app.use('/api/bebidas',require('./routes/rutas'));


//Empezando server
app.listen(app.get('port'));
console.log("Servidor Your Friend at the Bar");
