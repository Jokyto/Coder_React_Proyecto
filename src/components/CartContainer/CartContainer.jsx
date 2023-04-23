import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { createOrder } from "../../services/firestore";
import swal from 'sweetalert';

function CartContainer() {
  const context = useContext(cartContext);
  const { cart, getPriceInCart, removeItem, clearCart} = context;

  async function handleCheckout() {
    const order = {
      items: cart,
      buyer: { name: "José" },
      total: getPriceInCart(),
      date: new Date(),
    };
    const orderId = await createOrder(order);

    const orderComplete = await swal({
      title:"Gracias por su compra.",
      text:"Su compra se realizó correctamente, ticket Nº: "+ orderId,
      icon:"success",
    })
    clearCart();
  }

  function handleRemoveItem(id) {
    removeItem(id);
  }

  return (
    <>
      {!cart.length == 0 ? (
        <div>
          <div className="justify-content-center d-flex">
            <table className="table table-striped table-bordered align-middle m-5">
              <thead className="table-warning">
                <tr>
                  <th scope="col">Miniatura</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Remover</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((element) => (
                  <tr key={element.id}>
                    <td scope="col-3">
                      <div className="justify-content-center d-flex">
                        <img
                          className="w-25"
                          src={element.img}
                          alt={element.title}
                        />
                      </div>
                    </td>
                    <td scope="col-2">{element.title}</td>
                    <td scope="col-2">{element.price}$</td>
                    <td scope="col-2">{element.countCounter}</td>
                    <td scope="col-3">
                      <div className="justify-content-center d-flex">
                        <Button
                          onClick={() => handleRemoveItem(element.id)}
                          classes="btn btn-danger"
                        >
                          x
                        </Button>
                      </div>
                    </td>
                    <td scope="col">{element.price * element.countCounter}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="card col-3">
              <h4>Total: {getPriceInCart()}$</h4>
            </div>
            <div className="justify-content-center d-flex m-5">
              <Button
                onClick={() => handleCheckout()}
                classes={"nav-item btn btn-primary"}
              >
                Finalizar compra
              </Button>
            </div>
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
