import React from "react";
import Item from "../Item/item";

export default function ItemList(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {props.product.map((producto) => (
        <div className="d-flex col ">
          <div className="card text-center w-75 m-5">
            <Item
              key={producto.id}
              id={producto.id}
              detalle={"d-block"}
              title={producto.title}
              price={producto.price}
              description={producto.description}
              offer={producto.offer}
              img={producto.img}
              stock={producto.stock}
            />
          </div>
          </div>
      ))}
    </div>
  );
}
