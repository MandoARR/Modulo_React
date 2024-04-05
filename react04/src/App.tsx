import Post from './components/Post'
import AgregarPost from './components/AgregarPost'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'


function App() {

  const [tarjetas, setTarjetas] = useState([])

  function actualizaValores(t, d) {
    let nuevoArreglo = tarjetas.filter(x => true)
    nuevoArreglo.push({ "titulo": t, "descripcion": d })
    setTarjetas(nuevoArreglo)

  }

  return (
    <>
      <div className='container text-center'>
        <main id="content">
          <div className="row row-cols-auto">

            {tarjetas.map(tarjeta => (
              <div className="col">
                <Post titulo={tarjeta.titulo} descripcion={tarjeta.descripcion} />
              </div>
            ))}

          </div>
        </main>
        <p></p>


        <AgregarPost onAgregarPostChange={actualizaValores} />
        <p></p>
      </div>
    </>
  )
}

export default App
