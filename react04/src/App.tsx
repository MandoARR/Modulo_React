import Post from './components/Post'
import AgregarPost from './components/AgregarPost'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  return (
    <>
      <div className='container'>
        <main id='content'>

          <ul className="list-group list-group-horizontal">
            <li className="list-group-item"><Post></Post></li>
            <li className="list-group-item"><Post></Post></li>
            <li className="list-group-item"><Post></Post></li>
          </ul>

          <ul>
            <button type="button" className="btn btn-outline-primary">Agregar</button>
          </ul>

          <ul className="list-group">
            <li className="list-group-item"><AgregarPost></AgregarPost></li>
          </ul>

        </main>
      </div>
    </>
  )
}

export default App
