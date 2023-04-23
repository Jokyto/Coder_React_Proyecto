import React from "react";

export default function Input(props) {
    function handleKeyDown(evt){
        const key = evt.key;
        const maskinput = props.maskinput;
        
        if (maskinput.includes(key)){
            evt.preventDefault();
        }

    }
  return (
    <>
      <div className="form-group">
        <label className="text-muted mb-1">
          <small>{props.text}</small>
        </label>
        <input
          onKeyDown={handleKeyDown}
          type="ejemplo"
          className="form-control"
          id="ejemplo"
          aria-describedby="ejemplo"
          placeholder="Ingresé el texto"
        />
      </div>
      <div className="mt-3 btn-group" role="group">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
    </>
  );
}
