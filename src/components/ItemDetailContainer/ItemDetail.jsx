import React from 'react'
import Item from '../Item/item'


export default function ItemDetail(props) {
    return(
        <div className="d-flex w-50 text-center">
            <Item
            key={props.product.id}
            title={props.product.title}
            price={props.product.price}
            description={props.product.description}
            img={props.product.img}
            stock={props.product.stock}
            detalle={"d-none"}
            />
        </div>
    )
}
