import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getItemsInCart } = useContext(cartContext);
  const itemsCart = getItemsInCart();

  return (
    <>
      {!itemsCart == 0 ? (
        <div className="cart-icon">
          <Link to={"/cart"} className="nav-item btn btn-outline-danger">🛒{itemsCart}</Link>
        </div>
      ) : 
      (
        <div className="cart-icon"> 🛒</div>
      )}
    </>
  );
}
export default CartWidget;
