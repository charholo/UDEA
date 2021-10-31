const {Schema,model}  = require("mongoose");

const ventaS = Schema({
    
    id: {
        type:Number,
        require:true,
        unique:true

    },
    codigo: {
        type:Number,
        require:true
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
    },

    cliente: {
        type:String,
        require:false
    },

    cantidad: {
        type:Number,
        require:false
    },

    total: {
        type:Number,
        require:false
    },
    vendedor: {
        type:String,
        require:false
    },
    vendedorId: {
        type:Number,
        require:false
    }
    

    
});




module.exports=model('Venta', ventaS);


//var schema = new schema ({nombre:String},{collection:'usuarios'});  autorizado, no, pendiente--- 