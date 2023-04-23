import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsDataBase from "../../data/products";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

function getSingleItem(id) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = productsDataBase.find((item) => {
        return item.id === parseInt(id);
      });
      resolve(encontrado);
    }, 1000);
  });

  return promesa;
}

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [addedToCartWidget, seTaddedToCartWidget] = useState(false);

  let { id } = useParams();
  const { addItem } = useContext(cartContext);

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
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

  return (
    <div className="d-flex justify-content-center">
      <div className="card text-center w-50 m-5">
        <ItemDetail product={product} />
        <div className="card-footer">
          <div className="row">
            <h4>{product.price}$</h4>
            <div className="row justify-content-md-between justify-content-center ms-1 m-md-0">
              {!addedToCartWidget ? <ItemCount stock={product.stock} onAddToCar={handleAddToCar} /> 
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
      </div>
    </div>
  );
}

export default ItemDetailContainer;
