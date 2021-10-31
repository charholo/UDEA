const{check} = require("express-validator");


const{Router} = require('express');

const router = Router();

const {insertarVenta,listarVenta,eliminarVenta,actualizarVenta,listarVentaT,listarVentaV} = require('../controllers/venta');


//Listar todo de la BD GET
router.post('/insertar',insertarVenta);

//Listar todo de la BD GET
router.get('/listar/:id',listarVenta);


//Listar todo de la BD GET
router.get('/listar/',listarVentaT);

//Listar por vendedor 
router.get('/listar/:id',listarVentaV);



//Listar todo de la BD PUT actualziar
router.put('/actualizar/:id',actualizarVenta);


//Listar todo de la BD delete
router.delete('/eliminar/:id',eliminarVenta);



//**hacemos el export de los router como configuracion de ruta, almacena los identificadores de la ruta **/
module.exports = router;