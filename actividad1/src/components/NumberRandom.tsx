import { useState } from 'react';

export function NumberRandom() {
    const [randomNumber1, setRandomNumber1] = useState(-1);
    const [randomNumber2, setRandomNumber2] = useState(null);

    const generateRandomNumbers = () => {
        const newRandomNumber1 = Math.floor(Math.random() * 10) + 1; // Genera el primer número aleatorio
        const newRandomNumber2 = Math.floor(Math.random() * 10) + 1; // Genera el segundo número aleatorio
        setRandomNumber1(newRandomNumber1); // Actualiza el estado con el primer número aleatorio
        setRandomNumber2(newRandomNumber2); // Actualiza el estado con el segundo número aleatorio

    };

    return (
        <>
            <div>
                <h1>Números Aleatorios</h1>
                <p>Primer Número: {randomNumber1}</p>
                <p>Segundo Número: {randomNumber2}</p>
                <button onClick={generateRandomNumbers}>Generar Números Aleatorios</button>
                {randomNumber1 === randomNumber2 ? <h2>LOS NUMEROS SON IGUALES</h2> : ""}
            </div>
        </>
    );
}



//Math.floor(Math.random() * 10);
//<button onClick={() => setCount((count) => count + 1)}>
//const [items, setItems] = useState<ITask[]>([])