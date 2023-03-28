import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsDataBase from "../../data/products";
import ItemDetail from "./ItemDetail";

function getSingleItem(id) {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = productsDataBase.find((item) => {
        return (item.id === parseInt(id));
      });
      resolve(encontrado);
    }, 1000);
  });
  return promesa;
}

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      setProduct(respuesta);
    });
  }, [id]);

  return (
    <div className="row justify-content-center">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
