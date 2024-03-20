//Componentes de React son funciones
//<></> es un componente vacio / empty element / void element
import 'bootstrap/dist/css/bootstrap.css'

function Post() {
    return (
        <div className="card text-center mb-3" style={{"width": "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">Titulo</h5>
                <p className="card-text">Descripcion del Post</p>
                
            </div>
        </div>
    )
}


export default Post