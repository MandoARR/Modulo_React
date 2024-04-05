import { useState } from "react"

function AgregarPost(props) {

    const [titulo,setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")

    function tituloChangeHandler(e){
        setTitulo(e.target.value)
    }

    function descripcionChangeHandler(e){
        setDescripcion(e.target.value)
    }

    function buttonClickHandler(){
        props.onAgregarPostChange(titulo,descripcion)
        setTitulo("")
        setDescripcion("")
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                <input onChange={tituloChangeHandler} type="text" className="form-control border-success" id="exampleFormControlInput1" placeholder="Nombre del Titulo"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
                <textarea onChange={descripcionChangeHandler} className="form-control bg-info bg-opacity-10 
                border border-info border-start-0 rounded-end" 
                id="exampleFormControlTextarea1" 
                rows={3}></textarea>
            </div>
            <button onClick={buttonClickHandler} type="button" className="btn btn-outline-primary">Agregar</button>
        </>
    )
}


export default AgregarPost