import './App.css';
import Nombre from './Nombre';
import Saludo from './Saludo';


function App() {

  const avengers = {

    spiderman: {
    
    nombreReal: "Peter Parker",
    
    nombre: "Spiderman"
    
    },
    
    ironMan: {
    
    nombreReal: "Tony Stark",
    
    nombre: "Iron Man"
    
    },
    
    capAmerica: {
    
    nombreReal: "Steve Rogers",
    
    nombre: "Capitán América"
    
    }
    
    }

  return (
  <>
  <Saludo nombre= {avengers.spiderman.nombre} nombreReal={avengers.spiderman.nombreReal}/>
  <Nombre nombre={avengers.ironMan.nombre} nombreReal={avengers.ironMan.nombreReal} />
  <Nombre nombre={avengers.capAmerica.nombre} nombreReal={avengers.capAmerica.nombreReal} />
  </>
  );
}

export default App;
