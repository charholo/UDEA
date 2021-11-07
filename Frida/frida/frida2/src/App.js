import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import {AppRouter} from './router(AppRouter';   

//https://www.youtube.com/watch?v=Q3JBvLOzL0o
//Importar componentes
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';


import {product} from './postman.json';
//console.log(producto);https://www.youtube.com/watch?v=BrGBlDdQwhE



class Formulario extends Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }

  //Metodos para sincronizar valores
  syncChanges(value,property){
    //console.log(email);
    let stage ={};
    stage[property] = value;
    this.setState(stage);  //le pasamos el objeto vacion stage
  }

 

  submitForm=()=>{
    console.log(this.state);

  }

  //**********


  render(){
    return (
    <form>
    <label htmlFor='Email'> Email </label>
    <input type='Email' 
      onChange={(ev)=>{this.syncChanges(ev.target.value,'email')}}
      value={this.state.email} 
      placeholder = 'Ingresa un Email'>
    </input>
  
    <label htmlFor='Password'> Passwordfff </label>
    <input type='Password'
      onChange={(ev)=>{this.syncChanges(ev.target.value,'password')}}
      value={this.state.password}
      placeholder = '********'>
    </input>
  
    <div>
    <input
       onClick={this.submitForm}
       type='submit'
       placeholder = 'Iniciar sesión'>
       </input>
    </div>
    </form>
  )
  }

}




class DatosCh extends Component{
  constructor(){
    super();
    this.state={
      name:'React'
    };
  }  


  componentDidMount(){
    console.log('Espacio para cargar los datos de postman 2');
    let promesa = fetch('http://192.168.0.107:4000/api/productos/listar');

    promesa.then(response=>response.json()).then(datas=>{
      console.log("Siii")
        
      console.log(datas);
      console.log("Siii");
      
      
      const mostrarData = (datas) =>{
        let body =''
        for (let i = 0; i < datas.length;i++){
            body +=`<tr>${datas[i].precio}</tr>`
        }
  
        document.getElementById('charles').innerHTML=body 

      }

    })
  }

  render(){
    return (
      
      <div>
      <label htmlFor='CHCH'> CHHH </label>

        <table border="3">
        <body id = 'charles'>
       
        <thead>
        <tr>
        <th>ID</th>
        <th>Precio</th>
        <th>Producto</th>  
        </tr>  
        </thead>
        
        </body>
        </table>
      </div>
         
      
  )
  }

}
//yyyyyyyy






class App extends Component{

  constructor(){
    super();
    this.state={
      name:'React',
      productos:[]
    };
  }  


  componentDidMount(){
    console.log('Espacio para cargar los datos de postman');
    let promesa = fetch('http://192.168.0.107:4000/api/productos/listar');

    promesa.then(response=>response.json()).then(data=>{
      console.log(data);
      console.log(data);

      
       

      
    })

    
  }


  render(){
    console.log('Antes de pintar la aplciación');
    

   // console.log(this.state.product);
   // console.log(this.state.Formulario);
   
    return(
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      
      <Navigation titulo='Primer navegación'/>
      
      <Navigation titulo='Segunda navegación'/>
              
      <Formulario/>

      <DatosCh/>      
      
      <Navigation2 titulo='Tercera navegación'/>
      
       
      
      
  </div>



);
  }


}

export default App;
