import { useState } from "react"

export function NumerosAleatorios() {
    const [numeroRandom1, setNumeroRandom1] = useState(-1)
    const [numeroRandom2, setNumeroRandom2] = useState(-2)
    const [numeroRandom3, setNumeroRandom3] = useState(-2)

    const aleatorio = () => {
        const n1 = Math.floor(Math.random() * 5)
        const n2 = Math.floor(Math.random() * 5)
        const n3 = Math.floor(Math.random() * 5)

        setNumeroRandom1(n1)
        setNumeroRandom2(n2)
        setNumeroRandom3(n3)
    }

    return (
        <>
            <div>
                <h1>Números Aleatorios</h1>
                {numeroRandom1 >= 0 ? (
                    <>
                        <p>Número: {numeroRandom1}</p>
                        <p>Número: {numeroRandom2}</p>
                        <p>Número: {numeroRandom3}</p>
                    </>) : ''}

                <button onClick={aleatorio}>Generar Números</button>
                {numeroRandom1 === numeroRandom2 && numeroRandom2 === numeroRandom3 ? <h2>Los Números son Iguales</h2> : ''}
            </div>
        </>
    )
}