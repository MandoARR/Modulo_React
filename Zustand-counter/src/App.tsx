import './App.css'
import { useCounterStore } from './counterStore/counterStore'

function App() {
  const count = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.increment)


  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => increment()}>Incrementar</button>
    </div>
  )
}

export default App
