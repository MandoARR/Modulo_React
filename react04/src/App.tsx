import Post from './components/Post'
import AgregarPost from './components/AgregarPost'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'


function App() {

  const [tarjetas, setTarjetas] = useState([])


  function botonClickHandler() {
    let nuevoArreglo = tarjetas.filter(x => true)
    nuevoArregloArreglo.push({"titulo" : "Otro titulo", "descripcion" : "Otra Descripcion"})
    setTarjetas(nuevoArreglo)
  }

  return (
    <>
      <div className='container'>
        <main id="content">
          <ul className="list-group list-group-horizontal">
            {tarjetas.map(tarjeta => (
              <li className="list-group-item">
                <Post titulo="Titulo" descripcion="Descripcion breve" />
              </li>
            ))}



          </ul>

          <ul className="list-group">
            <li className="list-group-item"><AgregarPost /></li>
          </ul>

          <ul>
            <p></p>
            <button onClick={botonClickHandler} type="button" className="btn btn-outline-primary">Agregar</button>
          </ul>

        </main>
      </div>
    </>
  )
}

export default App
