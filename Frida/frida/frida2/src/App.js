import logo from './logo.svg';
import './App.css';

//https://www.youtube.com/watch?v=Q3JBvLOzL0o
//Importar componentes
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Navigation titulo='Primer navegación'/>
        
        <Navigation titulo='Segunda navegación'/>
         
        
        
    </div>
  );
}

export default App;
