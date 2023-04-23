import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import {CartProvider} from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="*" element={<h1>Error 404: Page not found!</h1>} />
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
        <Form />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
