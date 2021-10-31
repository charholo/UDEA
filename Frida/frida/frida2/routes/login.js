const{check} = require("express-validator");

const{Router} = require('express');

const router = Router();

const {loginUsuario} = require('../controllers/login');


//Login

router.post(
    '/new', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6})
        //,validarCampos
    ],
    loginUsuario);

//router.get('/renew', validarJWT, revalidarToken);




//**hacemos el export de los router como configuracion de ruta, almacena los identificadores de la ruta **/
module.exports = router;