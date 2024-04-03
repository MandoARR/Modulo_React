import { useState } from "react"

function AgregarPost() {

    const [titulo,setTitulo] = useState("") 

    function tituloChangeHandler(event){
        setTitulo(event.target.value)
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                <input onChange={tituloChangeHandler} type="text" className="form-control border-success" id="exampleFormControlInput1" placeholder="Nombre del Titulo"/>
            </div>

            <div>
                {titulo}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
                <textarea className="form-control bg-info bg-opacity-10 
                border border-info border-start-0 rounded-end" 
                id="exampleFormControlTextarea1" 
                rows={3}></textarea>
            </div>
        </>
    )
}


export default AgregarPost