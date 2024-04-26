import './App.css'
import { ButtonInc } from './components/Buttoninc'
import { useCounterStore } from './store/counterStore'

function App() { 
  const {count} = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)


  return (
    <>
    <div>
      <h2>Contador: {count}</h2>
      <ButtonInc></ButtonInc>
    </div>
    </>
  )
}

export default App
