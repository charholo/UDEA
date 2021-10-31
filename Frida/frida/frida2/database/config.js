const mongoose = require("mongoose");

/*Funsion asincrona de conexiòn con Mongo*/
const mongoConection =async() => {

    try{
        await mongoose.connect(process.env.mongo_Conection);
        console.log('Base de datos arriba');
    } catch(error){
        console.log(error);
        throw new Error("Error de conexión con mongo");
    }



};

module.exports = {mongoConection}
