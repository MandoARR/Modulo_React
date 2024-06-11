import { useState } from "react"

export function NumberRandom() {
    const [numero1, setNumero1] = useState(-1)
    const [numero2, setNumero2] = useState(Number)

    const aleatorio = () => {
        const n1 = Math.floor(Math.random() * 10)
        const n2 = Math.floor(Math.random() * 10)

        setNumero1(n1)
        setNumero2(n2)

    }

    return (
        <>
            <div>
                <h1>Números Aleatorios</h1>
                <button onClick={aleatorio}>Generador de Números</button>

                {numero1 >= 0 ? (
                    <>
                        <p>Número: {numero1}</p>
                        <p>Número: {numero2}</p>
                    </>
                ): null}

                {numero1 === numero2 ? <h2>Los Números son Iguales</h2> : null}
            </div>
        </>
    )
}