import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="card-group col">
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
          <div className={`${props.detalle}`}>
            <Link to={`/detail/${props.id}`}>
              <button type="button" className="btn btn-outline-secondary w-50 ">
                Ver en detalle
              </button>
            </Link>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <h4 className="col-6">{props.price}$</h4>
            <ItemCount stock={props.stock} />
          </div>
        </div>
      </div>
    </div>
  );
}
