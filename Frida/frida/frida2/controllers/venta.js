const {response} = require('express');
const Venta = require('../models/Venta');
const ventaC = require('../models/CVenta');

const {validationResult}=require("express-validator");

//Insertar producto
const insertarVenta = (req,resp=response) =>{
     
    const {id,codigo,producto,precio,estado,cliente,cantidad,total,vendedor} = req.body

  
    /*Guardar Producto*/  
    const venta = new Venta(req.body);
    venta.save();

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
        msg:'Llama metodo de insertarVenta', 
        id,
        codigo,
        producto,
        precio,
        estado,
        cliente,
        cantidad,
        total,
        vendedor

      })

}



//consultar producto 
const listarVenta = async (req,resp=response) =>{
    

    const {id,codigo,producto,precio,estado,cliente,cantidad,total,vendedor,vendedorId} = req.body

    const ventaId = req.params.id;
    const venta = await Venta.findById(ventaId);
    //const productos = await Producto.find()
    //                                .populate('id');
    
    resp.status(200).json({
        ok:true,
        msg:'Llama metodo de ListarProductoVededor', 
        //productos
        venta,
        id,
        codigo,
        producto,
        precio,
        estado,
        cliente,
        cantidad,
        total,
        vendedor,
        vendedorId


      });

}


//consultar todas ventas 
const listarVentaT = async (req,resp=response) =>{
    

    
    const {vendedorId} = req.body

  
    //const ventaId = req.params.id;
    const venta = await Venta.findOne()
                                    .populate(vendedorId);
    
    resp.status(200).json({
        ok:true,
        msg:'Llama metodo de ListarVentaT', 
        //productos
        venta

      });

}

//consultar todas ventas por vendedor 
const listarVentaV = async (req,resp=response) =>{
    
    
    //const ventaId = req.params.vendedorId;
    //console.log(ventaId);

    //const venta = await Venta.findById(ventaId);
    //const venta = await Venta.find()
    //                                .populate('ventaId');
    
    ///Nueva validacion un solo usuario
    const {vendedorId} = req.body
    console.log(vendedorId);
    
    /**Confirmar Usuario */
    let CventaS = await Usuario.findOne({ vendedorId }); 
    console.log(CventaS);

    ///Nueva validacion un solo usuario



                                    
    resp.status(200).json({
        ok:true,
        msg:'Llama metodo de ListarVentaV', 
        //productos
        venta

      });

}





//Eliminar producto 
const eliminarVenta = async (req,resp=response) =>{
    
    const ventaId = req.params.id;
    
    //new ObjectID.createFromHexString(req.params.id)
    console.log(ventaId);
    console.log(ventaId);

    try {
        
        const venta = await Venta.findById(ventaId);
        
        console.log(venta);
        console.log(venta)

        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta  no coincide con ningun elemento en la base de datos',
            });
        }

        await Venta.findByIdAndDelete(ventaId);

        resp.json({
            ok: true,
            msg: 'Venta eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al eliminar el producto',
        });
    }
}


/**actualizarProducto */

const actualizarVenta = async (req, resp = response) => {

    const ventaId = req.params.id;

    try {
        
        const venta = await Venta.findById(ventaId);

        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta no coincide con ningun elemento en la base de datos',
            });
        }

        const ventaActualizado = await Venta.findByIdAndUpdate(ventaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Venta actualizada de manera exitosa',
            producto: ventaActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        });
    }
}
 




module.exports= {insertarVenta,listarVenta,eliminarVenta,actualizarVenta,listarVentaT,listarVentaV};