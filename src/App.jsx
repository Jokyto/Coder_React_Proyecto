import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer/>
      {/* <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
