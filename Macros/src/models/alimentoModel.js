const mongoose = require('mongoose');
const {Schema} = mongoose;

let AlimentoSchema = new Schema({
    NombreAlimento:String,
    Calorias:String,
    Grasas:Number,
    Carbohidratos:Number,
    Proteinas:Number,
    Dia:String
});

module.exports = mongoose.model('Alimentos',AlimentoSchema);