const express = require ('express'); // sintaxis para importar modulos en nodejs
require('dotenv').config();
const {dbConection} = require('./config/database');
const cors = require('cors');


//crear el servidor express
const app = express();

//Estableciendo la configuracion de cors
app.use(cors());


//Crear la conexion a la BD
dbConection();

// verificando variables de entorno
//console.log(process.env);

// Creando las rutas de mi app
app.get('/',(req,res)=>{
    res.json({
        ok: true,
        msg: 'Bienvenidos a la App Proyectos'
    });
});


//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Servidor Nodejs desplegado en el puerto:' + process.env.PORT)
})


