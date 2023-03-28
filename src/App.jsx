import NavBar from "./components/NavBar"
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer";


function App() {

  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
