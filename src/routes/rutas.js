const {Router} = require('express');
const router = Router();


//const bebidas = require('./data.json');
//console.log(bebidas);


const NosotrosCtrl = require('../controllers/Nosotros_Controller')


router.get('/', NosotrosCtrl.getNosotros);



/*router.get('/:id', (req, res) => {
    const {id}=req.params;
    bebidas.forEach(bebida => {
        if(bebidas.id == id){
            res.json(bebida)
        }
    });
        console.log(id)
});*/

router.post('/', NosotrosCtrl.createNosotros);

router.get('/:id', NosotrosCtrl.getBebida);

router.delete('/:id', NosotrosCtrl.deleteNosotros);

router.put('/:id', NosotrosCtrl.updateNosotros);

module.exports = router;