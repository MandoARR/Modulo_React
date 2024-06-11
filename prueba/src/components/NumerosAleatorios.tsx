import { useState } from "react"

export function NumerosAleatorios() {
    const [numeroRandom1, setNumeroRandom1] = useState(-1)
    const [numeroRandom2, setNumeroRandom2] = useState(-2)

    const aleatorio = () => {
        const n1 = Math.floor(Math.random() * 10)
        const n2 = Math.floor(Math.random() * 10)

        setNumeroRandom1(n1)
        setNumeroRandom2(n2)
    }

    return (
        <>
            <div>
                <h1>Números Aleatorios</h1>
                {numeroRandom1 >= 0 ? (
                    <>
                        <p>Número: {numeroRandom1}</p>
                        <p>Número: {numeroRandom2}</p>
                    </>) : ''}

                <button onClick={aleatorio}>Generar Números</button>
                {numeroRandom1 === numeroRandom2 ? <h2>Los Números son Iguales</h2> : ''}
            </div>
        </>
    )
}