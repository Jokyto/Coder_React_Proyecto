import React from "react";
import Item from "../Item/item";


export default function ItemList(props) {
  return (
    <div className="card-group row row-cols-1 row-cols-md-3">
          {props.product.map((producto) => (
              <Item
                key={producto.id}
                id={producto.id}
                detalle={"d-block"}
                title={producto.title}
                price={producto.price}
                description={producto.description}
                img={producto.img}
                stock={producto.stock}
            ></Item>
            ))}
    </div>
  );
}
