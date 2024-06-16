import { useState } from "react"

export function RandomNumber() {
    const [Numero1, setNumero1] = useState(-1)
    const [Numero2, setNumero2] = useState(0)

    const handleGenerador = () => {
        const num1 = Math.floor(Math.random() * 6)
        const num2 = Math.floor(Math.random() * 6)

        setNumero1(num1)
        setNumero2(num2)
    }

    return (
        <>
            <h1>Números Aletorios</h1>
            <button onClick={() => handleGenerador()}>Generar</button>

            {Numero1 >= 0 ? <div>
                <p>Numero1: {Numero1}</p>
                <p>numero2: {Numero2}</p>
            </div> : null}

            {Numero1 === Numero2 ? <h1>Numeros Iguales</h1> : null}
        </>
    )
}