import React, {Component} from 'react';


const url = 'http://192.168.0.107:4000/api/productos/listar'


class Navigation extends Component{

    render () {
        return(
         <nav className= "navbar navbar-dark bg-blue">
          <a  href= "" className="text-white">
            {this.props.titulo  }
          
          </a>
          <style>
                      </style>

          <table border="3">
        
        <thead>
        <tr>
        <th>IDs</th>
        <th>Precios</th>
        <th>Productos</th>  
        </tr>  
        </thead>
        <tbody id = 'data'>
       
        </tbody>
        </table>
     
        <script>{
        
        console.log("Holaaaaaaaaaaaa")
  
        
          
        } </script>          
  
    

            <p>dHolguin</p>
            



        </nav>
      


        );

    }
}   

export default Navigation;