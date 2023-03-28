import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import productsDataBase from "../../data/products";
import ItemList from "../Item/ItemList";
import { useParams } from "react-router-dom";

function getItems(){
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsDataBase);
        },1000);
    });
    return promesa
}

function getItemsByCategory(categoryURL){
    const promesa = new Promise((resolve) => {
        setTimeout(() => {

         const filtrado = productsDataBase.filter((item) => item.category === categoryURL);
         resolve(filtrado)
        },1000);
    });
    return promesa
}

function ItemListContainer() {

    const [producto, setProducto] = useState([])
    const {categoryid} = useParams();
    useEffect(() =>{
        if(categoryid === undefined){
            getItems().then((respuesta) => {
                setProducto(respuesta)
            });
        }
        else{
            getItemsByCategory(categoryid).then((respuesta) => {
                setProducto(respuesta)
            })
        }
    },[categoryid]);

    return(
        <ItemList product = {producto}/>
    )
}

export default ItemListContainer;
