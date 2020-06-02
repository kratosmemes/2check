const express = require('express');
const app = express();
const morgan = require('morgan');


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


    //Simulacion de productos en BD



    const productos = [{id:1,producto:"laptop"},{id:2 , producto: "Iphone"},{id:3 , producto : "Television LG"}]


    //Morgan
    app.use(morgan('dev'));
    
//Server.Conf
app.set('port' , process.env.PORT || 3000);


//Rutas
app.get('/productos' , (req,res) => {
res.json(
   productos
);
});

app.post('/productos' , (req,res)=>{

});



app.listen(app.get('port') , () =>{

    console.log(`Server en puerto ${app.get("port")}`);

});