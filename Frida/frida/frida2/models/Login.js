const {Schema,model}  = require("mongoose");

const logiN = Schema({
    
    email: {
        type:String,
        require:true,
        unique:false

    },
    password: {
        type:String,
        require:true
    }
    
});

module.exports=model('Login', logiN);
//var schema = new schema ({nombre:String},{collection:'usuarios'});  autorizado, no, pendiente--- 