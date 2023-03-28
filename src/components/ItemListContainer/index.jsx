import React, { useState } from "react";
import "./ItemListContainer.css";
import productsDataBase from "../../data/products";
import ItemList from "../Item/ItemList";


function getItems(){
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDataBase);
        },2000);
    });
    return promesa
}

function ItemListContainer(props) {

    const [producto, setProducto] = useState([])

    getItems().then((respuesta) => {
        setProducto(respuesta)
    });

    return(
        <ItemList product = {producto}/>
    )
}

export default ItemListContainer;
