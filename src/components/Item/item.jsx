import ItemCount from "../ItemCount/ItemCount";

export default function Item(props) {
  return (
    <div className="col">
      <div className="card text-center w-75 m-5">
        <div className="card-header">
          <h3 className="card-title">{props.title}</h3>
        </div>
        <img
          src={props.img}
          className="rounded mx-auto d-block w-50"
          alt={props.description}
        />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
          <h4>{props.price}$</h4>
          <ItemCount stock = {props.stock}/>
        </div>
      </div>
    </div>
  );
}
