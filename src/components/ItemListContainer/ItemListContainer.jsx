import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../Item/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getItemsFire,getItemsByCategoryFire } from "../../services/firestore";

function ItemListContainer() {

    const [producto, setProducto] = useState([])
    const {categoryid} = useParams();

    useEffect(() =>{
        if(categoryid === undefined){
            getItemsFire().then((respuesta) => {
                setProducto(respuesta)
            });
        }
        else{
            getItemsByCategoryFire(categoryid).then((respuesta) => {
                setProducto(respuesta)
            })
        }
    },[categoryid]);

    if(producto.length === 0){
        return <Loader/>
    }

    return(
        <ItemList product = {producto}/>
    )
}

export default ItemListContainer;
