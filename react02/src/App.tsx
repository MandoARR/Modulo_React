//import 'boostrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Card from './card/Card'

function App() {
  return (
    <>
      <div className='container text-center'>
        <main id="content">
          <Card titulo="Primer Gato" descripcion="01 Este es la imagen de un gatito que es feliz"></Card>
          <Card titulo="Segundo Gato" descripcion="02 Este es la imagen de un gatito que es feliz"></Card>
          <Card titulo="Siguiente Gato" descripcion="03 Este es la imagen de un gatito que es feliz"></Card>
          <Card titulo="Casi el último Gato" descripcion="04 Este es la imagen de un gatito que es feliz"></Card>
          <Card titulo="Ultimo Gato" descripcion="05 Este es la imagen de un gatito que es feliz"></Card>
        </main>
      </div>
    </>
  )
}

export default App
