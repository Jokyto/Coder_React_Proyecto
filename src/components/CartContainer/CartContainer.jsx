import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


function CartContainer() {
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;

  return (
    <>
      {!cart.length == 0 ? (
        <div>
          {cart.map((element) => (
            <div className="d-flex justify-content-center">
              <div className="card text-center w-50 m-5">
                <ItemDetail product={element} />
                <div className="card-footer">
                  <div className="row">
                    <h4>{element.price}$</h4>
                    <h4>Cantidad: {element.count}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row justify-content-center">
            <h2 className="card col-6 text-center">
              Total: {`${getPriceInCart()}`}
            </h2>
          </div>
        </div>
      ) : (
        <div className="justify-content-center d-flex m-5 row">
          <h1 className="col-12 text-center">No tiene nada en el carrito.</h1>
          <div className="justify-content-center d-flex m-5">
            <Link to="/">
              <Button classes={"nav-item btn btn-primary"}>
                Volver a la tienda
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer;
