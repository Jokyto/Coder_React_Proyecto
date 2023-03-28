import React, { useState, useEffect } from "react";
import productsDataBase from "../../data/products";


function getSingleItem() {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () =>{
                resolve(productsDataBase[3])
            }, 1000)
        
    })

    return promesa;
}

function ItemDetailContainer(){
    const[product, setProduct] = useState([])

    useEffect(() => {
      getSingleItem().then((respuesta) =>{
        setProduct(respuesta);
      })
    }, [])

/*itemDetail*/

    return(
        <div>
            <h1>
                {product.title}
            </h1>
            <h3>
                {product.category}
            </h3>
            <p>
                Precio: ${product.price}
            </p>
        </div>
    )
}

export default ItemDetailContainer

