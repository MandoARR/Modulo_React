import { useLoaderData } from 'react-router-dom' 
import '../App.css'

export function Detalle(){

    const nombre = useLoaderData() 

    return (
        <>
        <form>
            Nombre
            <input value={nombre}></input>
            Apellido
            <input></input>
        </form>
        </>
    )
}

export async function loader({params}) {
    return params.nombre       
}