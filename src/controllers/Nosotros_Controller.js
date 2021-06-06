const NosotrosCtrl = {}

const Nosotros = require('../models/Nosotros.js')
//const bebidas = require('../routes/data.json');

NosotrosCtrl.getNosotros=async (req,res)=>{
    const nosotros = await Nosotros.find()
    res.json(nosotros)
}

NosotrosCtrl.createNosotros = async (req,res)=>{
    const newNosotros= new Nosotros(req.body);
    await newNosotros.save();
    res.send({message: 'bebida añadida'})
    console.log(req.body)
}

NosotrosCtrl.getBebida = async (req,res)=>{
    const BebidaN= await Nosotros.findById(req.params.id);
    res.send(BebidaN)
}

NosotrosCtrl.deleteNosotros = async (req, res)=>{
    console.log(req.params)
    const BebidaF= await Nosotros.findByIdAndDelete(req.params.id);
    res.send({message:'receta eliminada'})
    
}

NosotrosCtrl.updateNosotros = async (req, res) =>{
    const BebidaU = await Nosotros.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'Receta modificada', BebidaU})
}

module.exports = NosotrosCtrl;