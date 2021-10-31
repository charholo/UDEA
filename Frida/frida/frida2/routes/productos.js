const{Router} = require('express');

const router = Router();

const {insertarProducto,listarProducto,eliminarProducto,actualizarProducto,listarProductoT} = require('../controllers/producto');


//Listar todo de la BD GET
router.post('/insertar',insertarProducto);

//Listar todo de la BD GET
router.get('/listar/:id',listarProducto);

router.get('/listar/',listarProductoT);


//Listar todo de la BD PUT actualziar
router.put('/actualizar/:id',actualizarProducto);


//Listar todo de la BD delete
router.delete('/eliminar/:id',eliminarProducto);



//**hacemos el export de los router como configuracion de ruta, almacena los identificadores de la ruta **/
module.exports = router;