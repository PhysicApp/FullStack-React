
import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
  return <p>Este es un curso de react fullstack</p>
}

const App = () => {
  return (
    <div className="App">
      <h1> Mi primera pagina web con react</h1>
      <Mensaje color='green' message='Estamos '/>
      <Mensaje color='red' message='trabajando '/>
      <Mensaje color='black' message='en un curso de react'/>
      <Description/>
    </div>
  )
}

export default App;
