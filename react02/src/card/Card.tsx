import CardHeader from "./CardHeader"

function Card(props) {
    return (
        <>
        <div className="card" style={{"width": "18rem;"}}> 
        <CardHeader></CardHeader>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href="#" className="btn btn-primary">Dale click!</a>
            </div>
        </div>
        </>
    )
}

export default Card