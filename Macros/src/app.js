const express = require("express");
const app = express();
const morgan = require("morgan");
const Alimentos = require("./models/alimentoModel");
const BD = require('./BD');
const bodyParser = require('body-parser');
const cors = require('cors');


/// Habilita CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, token'
    );
    res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
    });
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/Alimento',(req,res)=>{
let Alimento = new Alimentos({
    NombreAlimento:req.body.NombreAlimento,
    Grasas:req.body.Grasas,
    Carbohidratos:req.body.Carbohidratos,
    Proteinas:req.body.Proteinas,
    Dia:req.body.Dia
    });
Alimento.save();
res.send("Se guardo el Producto con Exito");
});

app.listen(3000, function(){
console.log("Server corriendo en puerto 3000");
})

