const {Schema,model}  = require("mongoose");

const CventaS = Schema({
    
    vendedorId: {
        type:Number,
        require:false
    }
    
    
});



module.exports=model('CVenta', CventaS);


//var schema = new schema ({nombre:String},{collection:'usuarios'});  autorizado, no, pendiente--- 