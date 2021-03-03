const {Router} = require('express');
const router = Router();

//Es lo mismo de arriba
//const express = require(express);
//const router = express.Router();

router.get('/', (req, res) => {
    res.send('API de Resultados de Análisis de Página Web'); 
});

router.get('/', (req, res) => {
    res.json({"name":"Tomate"}); 
});

//Rutas API de Resultados

//Parámetros a recibirse
var PublicidadID;
var Fecha;

//Resultados de Publicidad y Fecha sin filtrado
router.get('/Resultados'+PublicidadID+'/'+Fecha, (req, res) => {
    res.send('Resultados');
});

//Resultados de Clicks
router.get('/Resultados'+PublicidadID+'/'+Fecha+'/Clicks', (req, res) => {
    res.send('Resultados de Clicks');
});

//Resultados de Salidas de la Página
router.get('/Resultados'+PublicidadID+'/'+Fecha+'/Exits', (req, res) => {
    res.send('Resultados de Salidas');
});

//Resultados de Vistas
router.get('/Resultados'+PublicidadID+'/'+Fecha+'/Views', (req, res) => {
    res.send('Resultados de Vistas');
});

//Resultados de Seguimiento de Página
router.get('/Resultados'+PublicidadID+'/'+Fecha+'/Followed', (req, res) => {
    res.send('Resultados de Seguimiento');
});

//Resultados Globales
router.get('/Resultados'+Fecha, (req, res) => {
    res.send('Resultados Globales');
});


module.exports = router;