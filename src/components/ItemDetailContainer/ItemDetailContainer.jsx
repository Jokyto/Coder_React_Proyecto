import React, { useState, useEffect,useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import { getSingleItemFire } from "../../services/firestore";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [addedToCartWidget, seTaddedToCartWidget] = useState(false);

  let { id } = useParams();
  const { addItem, getCountInCart } = useContext(cartContext);

  useEffect(() => {
    getSingleItemFire(id).then((respuesta) => {
      setProduct(respuesta);
      setIsLoading(false);
    });
  }, [id]);

  function handleAddToCar(count) {
    seTaddedToCartWidget(true)
    addItem(product, count);
  }

  if (isLoading) {
    return <Loader />;
  }


  const countInCart = getCountInCart(product.id);

  return (
        <ItemDetail product={product}>
          <div className="card-footer">
            <div className="row">
              <h4>{product.price}$</h4>
              <div className="row justify-content-md-between justify-content-center ms-1 m-md-0">
                {!addedToCartWidget ? <ItemCount stock={product.stock - countInCart} onAddToCar={handleAddToCar} /> 
                :
                  <Link to={`/cart`}>
                    <Button classes = "btn btn-outline-primary w-50"> 
                      Ver en el carrito
                    </Button>
                  </Link>
                }
              </div>
            </div>
          </div>
        </ItemDetail>
  );
}

export default ItemDetailContainer;
