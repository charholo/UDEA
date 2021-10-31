const jwt = require('jsonwebtoken');


//Funcion de generacion de token -promesa
const generarJWT = (uid, name) => {
    
    return new Promise((resolve, reject) => {

        const payload = {uid, name};
        jwt.sign(payload, process.env.Token_JWT, {
            expiresIn: '2h'
        }, (err, token) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar el token')
            }

            resolve(token);
        })

    });
}

module.exports = {
    generarJWT
}
