import Item from "../Item/item";

export default function ItemList(props) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {props.product.map((producto) => (
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
          classes={"card text-center w-75 m-5"}
        />
      ))}
    </div>

  );
}
