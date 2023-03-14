import NavBar from "./components/NavBar"
import Saludo from "./components/ItemListContainer"

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Saludo texto = "Bienvenidos a mi e-commerce, saludos!" />
    </div>
  );
}

export default App;
