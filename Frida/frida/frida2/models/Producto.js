const {Schema,model}  = require("mongoose");

const productoS = Schema({
    
    id: {
        type:Number,
        require:true,
        unique:true

    },

    producto: {
        type:String,
        require:false
    },

    precio: {
        type:Number,
        require:false
    },

    estado: {
        type:String,
        require:false
    }
});

module.exports=model('Producto', productoS);
//var schema = new schema ({nombre:String},{collection:'usuarios'});  autorizado, no, pendiente--- 