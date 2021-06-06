const {Schema, model} = require ('mongoose')

const ProductSchema = new Schema ({
    bebida:{type:String, required:false},
    temporada:{type:String, required:false},
    receta:{type:String,required:false},
    img:{type:String, required:false}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('Nosotros', ProductSchema )
