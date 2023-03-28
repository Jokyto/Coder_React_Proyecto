export default function Item(props) {
    return (
        <div className="card text-center w-75 m-5">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
            </div>
            <img src={props.img} className="rounded mx-auto d-block w-50" alt={props.description}/>
                <div className="card-body">  
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer text-muted">
                    <h4>{props.price}$</h4>
                </div>
        </div>
    )
}
