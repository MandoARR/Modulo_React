import { useState } from "react"

export function BotonAlgo() {
    const [mensaje, setMensaje] = useState(String)

    const handleInputChange = (event) => {
        setMensaje(event.target.value);
    };

    return (
        <>
            <div>
                <p>Escribe Algo:</p>
                <input type="text" onChange={handleInputChange} /> 
                <button onClick={}>Agregar</button>
                {mensaje != '' ? <h2>{mensaje}</h2> : null}
            </div>
        </>
    )
}