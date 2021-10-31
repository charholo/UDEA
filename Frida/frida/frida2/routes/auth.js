//RUTAS

const{Router} = require('express');
//**Charck es un midleware* */
const{check} = require("express-validator");
const router = Router();

const {crearUsuario,listarUsuario,eliminarUsuario,actualizarUsuario} = require('../controllers/auth');

//**Definición de los Endpoint productos y usuarios**/


//**Router.metodo(path)**/
router.post('/insert',
[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('id','El id es obligatorio').not().isEmpty().isNumeric(),
    check('Password','El password debe ser de 8 caracteres').isLength({min: 8}),
    check('estado','El estado solo puede ser Autorizado, no autorizado, pendiente').not().isEmpty(),
    
       

] ,
crearUsuario
);




//Listar todo de la BD GET
router.get('/listar/:id',listarUsuario);


//Listar todo de la BD delete
router.delete('/eliminar/:id',eliminarUsuario);


//Listar todo de la BD PUT actualziar
router.put('/actualizar/:id',actualizarUsuario);


/** 
router.post('/new', (req,res) => {
    res.json({
      ok:true,
      msg:'registro'    
    })  

});

**/







//**hacemos el export de los router como configuracion de ruta, almacena los identificadores de la ruta **/
module.exports = router;