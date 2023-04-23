import React, { useState } from "react";
import Button from "../Button/Button";

export default function ItemCount(props) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleMinus() {
    if (count > props.stock - props.stock) {
      setCount(count - 1);
    }
  }

  return (
    <>
    <div className="col align-self-center">

        <Button onClick={handleMinus} classes="btn btn-primary">
          -
        </Button>
        <span className="m-2">{count}</span>
        <Button onClick={handleAdd} classes="btn btn-primary">
          +
        </Button>
    </div>
    <div className="col align-self-center">
        <Button onClick={() => props.onAddToCar(count)} classes="btn btn-warning m-2">
              Agregar al carrito
      </Button>

    </div>
    </>
  );
}
