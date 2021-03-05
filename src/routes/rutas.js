const {Router} = require('express');
const router = Router();

//Es lo mismo de arriba
//const express = require(express);
//const router = express.Router();

const data = require('./data.json');

router.get('/', (req, res) => {
    res.send(data); 
});

//Ruta de Publicidad
router.get('/:PublicidadID', (req, res) => {
    const {id}=req.params;
    data.forEach(publicidad => {
        if(data.PublicidadID == id){
            console.log(data.title);
            res.json(publicidad);
        }
    });
    console.log(id);
});

//Ruta de las Fechas
router.get('/:PublicidadID/:date', (req, res) => {
    const {id}=req.params;
    const {fecha}=req.params;
    data.forEach(fechas => {
        if(data.date == fecha && data.PublicidadID){
            console.log(data.date);
            res.json(fechas);
        }
    });
    console.log(fecha);
});

//Ruta de clicks
router.get('/:PublicidadID/:date/:clicks', (req, res) => {
    const {clicks}=req.params;
    data.forEach(clicksdados => {
        if(data.clicks == clicks){
            console.log(data.clicks);
            res.json(clicksdados);
        }
    });
    console.log(clicks);
});

//Ruta de Exits
router.get('/:PublicidadID/:date/:exits', (req, res) => {
    const {exits}=req.params;
    data.forEach(exitsdados => {
        if(data.exits == exits){
            console.log(data.exits);
            res.json(exitsdados);
        }
    });
    console.log(exits);
});

//Ruta de Views
router.get('/:PublicidadID/:date/:views', (req, res) => {
    const {views}=req.params;
    data.forEach(viewsdados => {
        if(data.views == views){
            console.log(data.views);
            res.json(viewssdados);
        }
    });
    console.log(views);
});

//Ruta de Followed
router.get('/:PublicidadID/:date/:followed', (req, res) => {
    const {followed}=req.params;
    data.forEach(followeddados => {
        if(data.followed == followed){
            console.log(data.followed);
            res.json(followedsdados);
        }
    });
    console.log(followed);
});

//Post de Postman y recibir datos correctamente
router.post('/', (req, res) => {
    const {title, clicks, exits, views, followed, date} = req.body;
    if(title && clicks && exits && views && followed && date){
        const PublicidadID = data.length + 1;
        const newPublicidad = {...req.body, PublicidadID};
        data.push(newPublicidad);
        //console.log(newPublicidad);
        res.status(200).json(data);
    }
    else{
        res.status(500).json({error:'No data'});}
        //res.send('Error: No data');}
});






//Rutas API de Resultados

//Parámetros a recibirse
var PublicidadID;
var date;

//Resultados de Publicidad y date sin filtrado
router.get('/'+PublicidadID+'/'+date, (req, res) => {
    res.send('Resultados');
});

//Resultados de Clicks
router.get('/'+PublicidadID+'/'+date+'/Clicks', (req, res) => {
    res.send('Resultados de Clicks');
});

//Resultados de Salidas de la Página
router.get('/'+PublicidadID+'/'+date+'/Exits', (req, res) => {
    res.send('Resultados de Salidas');
});

//Resultados de Vistas
router.get('/'+PublicidadID+'/'+date+'/Views', (req, res) => {
    res.send('Resultados de Vistas');
});

//Resultados de Seguimiento de Página
router.get('/'+PublicidadID+'/'+date+'/Followed', (req, res) => {
    res.send('Resultados de Seguimiento');
});

//Resultados Globales
router.get('/'+date, (req, res) => {
    res.send('Resultados Globales');
});


module.exports = router;