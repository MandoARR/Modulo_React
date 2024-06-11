import { Link } from 'react-router-dom'
import '../App.css'

export function List(){
    return(
        <>
        <ul>
            <li><Link to="/detalles/Armnado">Armando</Link></li>
            <li><Link to="/detalles/Carlos">Carlos</Link></li>
            <li><Link to="/detalles/Dany">Dany</Link></li>
            <li><Link to="/detalles/Jorge">Jorge</Link></li>
            <li><Link to="/detalles/Mario">Mario</Link></li>
            <li><Link to="/detalles/Saul">Saul</Link></li>
            <li><Link to="/detalles/Roberto">Roberto</Link></li>
        </ul>
        </>
    )
}