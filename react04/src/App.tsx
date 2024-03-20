import Postdata from './components/Post'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  return (
    <>
      <div className='container'>
        <main id='content'>
          <ul className='list-group list-group-horizontal'></ul>
          <li className='list-group-item'>
            <Postdata></Postdata>
          </li>
        </main>
      </div>
    </>
  )
}

export default App
