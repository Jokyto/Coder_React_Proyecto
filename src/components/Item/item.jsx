import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <>
      <div className="card-header">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <img
        src={props.img}
        className="rounded mx-auto d-block w-50"
        alt={props.description}
        style={{ filter: props.stock === 0 && "grayscale(0.7)" }}
      />
      <div className="card-body">
        <div className={`${props.detalle}`}>
          {props.offer && <h3 style={{ color: "green" }}>{props.offer}%</h3>}
          <h4>{props.price}$</h4>
          <p className="card-text">{props.description}</p>
          {props.stock > 0 ? (
            <Link to={`/detail/${props.id}`}>
              <Button classes="btn btn-outline-secondary w-50">
                Ver en detalle
              </Button>
            </Link>
            ) : (
            <h4>Sin stocks!</h4>
            )
          }
        </div>
      </div>
    </>
  );
}
