/**importamos el paquete de express**/
const express = require('express');
require("dotenv").config();
const {mongoConection} = require("./database/config");
//console.log(process.env);

/**Crear como un servidor a express, una instalcia de express llamada app **/
/**Definiciòn del endpoint **/
const app = express();

/*Conexión a BD Mongo*/
mongoConection();

/**Crear el directorio publico con la funcion midleware antes de llegar a las rutas, public carpeta creada **/
app.use(express.static("public"));

//**Hace el parceo de los cuerpos en formato json **/
app.use(express.json());



//**Ruta padre de los endpoints, auth es el recurso**/
app.use('/api/auth', require('./routes/auth'));


app.use('/api/productos', require('./routes/productos'));


app.use('/api/ventas', require('./routes/ventas'));

app.use('/api/login', require('./routes/login'));

//**Ruta padre de los endpoints, auth es el recurso**/








/**Crear rutas de acceso, recibe la ruta con la que va a ingresar y un callback
    app.get("/", (req,res) => {
          res.json({
            OK:true    
          })  


    });
**/
/**Subirlo recibe dos parametros puerto y un callback **/
app.listen(process.env.Port,() => {console.log(`El servidor esta corriendo en el puerto ${process.env.Port}`) }  );


