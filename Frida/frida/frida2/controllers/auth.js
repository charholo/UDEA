const {response} = require('express');
const {validationResult}=require("express-validator");
const Usuario = require('../models/Usuario');
const Producto = require('../models/Producto');
const bcrypt = require('bcryptjs');



/**mongodb+srv://root:<password>@cluster0.frm8k.mongodb.net/test*clear*/
//**Definir los metodos como funciones de flecha que recibe request y response**/
//**Componente logico en un controlador, estado, get, pull, pa** */
const crearUsuario = async (req,resp=response) =>{

//    const {id} = req.body();
  /*Guardar usuario*/  
  const {name,id,Password,estado} = req.body;
  

  let usuario = await Usuario.findOne({id});
  console.log(usuario);

  //Valida si el usuario ya existe 
  if (usuario){
      return resp.status(400).json({
          ok:false,
          msg:"Usuario con el identificador enviado ya existe en la BD"
      });
  } 
 /// Valida si el usuario ya existe

  usuario = new Usuario(req.body);
  //encriptar contraseña, recibe salt con hash de encripcion, hace 10 veces el proceso
  const salt = bcrypt.genSaltSync();
  usuario.Password = bcrypt.hashSync(Password,salt);
  usuario.save();

  /**Objeto errors**/
  const errors = validationResult(req);

  if (!errors.isEmpty()){
      return resp.status(400).json({
          ok:false,
          errors:errors.mapped()
      });

  }



    console.log(req.body);
    

    resp.json({
        ok:true,
        msg:'Llama metodo de crearUsuario',    
        name,
        id,
        Password,
        estado
      })

}
 



//consultar usuario 
const listarUsuario = async (req,resp=response) =>{
    
    const usuarioId = req.params.id;
    const usuario = await Usuario.findById(usuarioId);
    //const productos = await Producto.find()
    //                                .populate('id');
    
    resp.status(200).json({
        ok:true,
        msg:'Llama metodo de ListarUsuario', 
        //productos
        usuario

      });

}






//Eliminar usuario 
const eliminarUsuario = async (req,resp=response) =>{
    
    const usuarioId = req.params.id;
    
    //new ObjectID.createFromHexString(req.params.id)
    console.log(usuarioId);
    console.log(usuarioId);

    try {
        
        const usuario = await Usuario.findById(usuarioId);
        
        console.log(usuario);
        console.log(usuario)

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

        await Usuario.findByIdAndDelete(usuarioId);

        resp.json({
            ok: true,
            msg: 'Usuario eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar el usuario',
        });
    }
}




/**actualizarUsuario */

const actualizarUsuario = async (req, resp = response) => {

    const usuarioId = req.params.id;
    
    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

    
        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: true });
       

        resp.json({
            ok: true,
            msg: 'Usuario actualizado de manera exitosa',
            producto: usuarioActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        });
    }
}
 




module.exports= {crearUsuario,listarUsuario,eliminarUsuario,actualizarUsuario};