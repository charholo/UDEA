const {Schema,model}  = require("mongoose");

const usuarioS = Schema({
    name: {
        type: String,
        require:true
        
    },

    id: {
        type:Number,
        require:true,
        unique:true

    },

    Password: {
        type:String,
        require:true
    },

    estado: {
        type:String,
        require:true
    },
    
    correo: {
        type:String,
        require:true
    }



});

module.exports=model('Usuario', usuarioS);
//var schema = new schema ({nombre:String},{collection:'usuarios'});  autorizado, no, pendiente--- 