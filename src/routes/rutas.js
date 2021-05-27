const {Router} = require('express');
const router = Router();


const bebidas = require('./data.json');
console.log(bebidas);

router.get('/', (req, res) => {
    res.json(bebidas); 
});



router.get('/:id', (req, res) => {
    const {id}=req.params;
    bebidas.forEach(bebida => {
        if(bebidas.id == id){
            res.json(bebida)
        }
    });
        console.log(id)
});



module.exports = router;