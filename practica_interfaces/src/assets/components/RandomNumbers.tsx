import { useState } from "react"

interface INumbers {
    number1: number,
    number2: number,
}

const RandomGenerator = (): number => {
    return Math.floor(Math.random()*10)
} 

export function RandomNumbers(){
    const [numbers, setNumbers] = useState<INumbers>({}) as INumbers

    const generateRandomNumbers = () => {
        
    }

    return(
        <>

        </>
    )
}