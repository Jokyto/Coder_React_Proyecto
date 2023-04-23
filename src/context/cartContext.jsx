import { createContext, useState } from "react";

const cartContext = createContext();
const Provider = cartContext.Provider;


function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState()
  const newCart = [...cart];

  function isItemInCart(id){
    return cart.some(ItemInCart => ItemInCart.id === id)
  }
  
  function addItem(product,countCounter){

    if (isItemInCart(product.id)) {
      const itemIndex = cart.findIndex((ItemInCart) => ItemInCart.id === product.id);
      newCart[itemIndex].countCounter += countCounter;
    }
    else{
      newCart.push({...product, countCounter})
    }
    setCart(newCart)
  }

  function getItemsInCart(){
    let total = 0;
    cart.forEach(item => total+=item.countCounter)
    setTotalCart(total)
    return totalCart
  }

  function getPriceInCart(){
    let precioTotal = 0;
    cart.forEach((Element) => 
      precioTotal += Element.countCounter*Element.price
    )
    return precioTotal
  }

  function removeItem(id){
    const producto = cart.findIndex((itemInCart) => itemInCart.id === id)
    newCart.splice(producto,1)
    setCart(newCart)
  }

  function getCountInCart(id){
    
    const producto = cart.find((itemInCart) => itemInCart.id === id);
    return producto !== undefined ? producto.countCounter:0;
  }

  function clearCart(){
    setCart([])
  }

  return(
    <Provider value={{ cart, addItem, getItemsInCart,getPriceInCart, getCountInCart, removeItem,clearCart}}>
        {props.children}
    </Provider>
  )
}

export {cartContext,CartProvider};