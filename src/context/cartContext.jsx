import { createContext, useState } from "react";

const cartContext = createContext();
const Provider = cartContext.Provider;


function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState()
  
  function addItem(product,count){
    const newCart = [...cart];

    newCart.push({...product, count})
    setCart(newCart)
  }

  function getItemsInCart(){
    let total = 0;
    cart.forEach(item => total+=item.count)
    setTotalCart(total)
    return totalCart
  }

  function getPriceInCart(){
    let precioTotal = 0;
    cart.forEach((Element) => 
      precioTotal += Element.count*Element.price
    )
    return precioTotal
  }

  return(
    <Provider value={{ cart: cart, addItem: addItem, getItemsInCart:getItemsInCart,getPriceInCart:getPriceInCart}}>
        {props.children}
    </Provider>
  )
}

export {cartContext,CartProvider};