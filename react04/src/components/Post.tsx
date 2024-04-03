//Componentes de React son funciones
//<></> es un componente vacio / empty element / void element
function Post(props) {
    return (
        <div className="card text-center mb-3" style={{"width": "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                
            </div>
        </div>
    )
}


export default Post