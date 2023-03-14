import "./ItemListContainer.css"

function Saludo(props){
    return(
        <div className="ItemListContainer">
            <h1>
                {props.texto}
            </h1>
        </div>
    )
}

export default Saludo