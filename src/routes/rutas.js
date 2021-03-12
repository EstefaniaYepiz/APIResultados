const {Router} = require('express');
const router = Router();


const data = require('./data.json');

router.get('/', (req, res) => {
    res.send(data); 
});

//req.params → id para sacar la info de cada parametro y solicitar desde req.params


router.get('/:PublicidadID', (req, res) => {
    const id=req.params.PublicidadID;
    console.log(req.params);

    res.send('PublicidadID:   '+id);
});



router.get('/:PublicidadID/:date', (req, res) => {
    const id=req.params.PublicidadID;
    const fecha=req.params.date;
    
    console.log(req.params);
    res.send('PublicidadID:  '+id+'  Fecha:  '+fecha);

});

//Ruta de clicks
router.get('/:PublicidadID/:date/:clicks', (req, res) => {
    const id=req.params.PublicidadID;
    const fecha=req.params.date;
    const clicks=req.params.clicks;

    console.log(req.params);
    res.send('PublicidadID:  '+id+'  Fecha:  '+fecha+'    Clicks:   '+clicks);
});


//Ruta de Exits
router.get('/:PublicidadID/:date/:exits', (req, res) => {
    const id=req.params.PublicidadID;
    const fecha=req.params.date;
    const exits=req.params.exits;
   
    console.log(req.params);
    res.send('PublicidadID:  '+id+'  Fecha:  '+fecha+'    Salidas:   '+exits);
});

//Ruta de Views
router.get('/:PublicidadID/:date/:views', (req, res) => {
    const id=req.params.PublicidadID;
    const fecha=req.params.date;
    const views=req.params.views;
   
    console.log(views);
    res.send('PublicidadID:  '+id+'  Fecha:  '+fecha+'    Vistas:   '+views);
});

//Ruta de Followed
router.get('/:PublicidadID/:date/:followed', (req, res) => {
    const id=req.params.PublicidadID;
    const fecha=req.params.date;
    const followed=req.params.followed;    
    
    console.log(followed);
    res.send('PublicidadID:  '+id+'  Fecha:  '+fecha+'    Seguimientos:   '+followed);

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
        res.send('Registrado exitosamente.');
    }
    else{
        res.status(500).json({error:'No data'});}
        //res.send('Error: No data');}
}); 


module.exports = router;