import './App.css';
import { useReducer } from 'react'

// action: INCREASE, DECREASE, RESET
const counterReducer = (state, action) => {
  switch(action.type) {
    case 'INCREASE': return state + 1; 
    case 'DECREASE': return state ? state - 1 : state;
    case 'RESET': return 0;
    default: return state;
  }
}

function App() {
  const [number, dispatch] = useReducer(counterReducer, 0)
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => dispatch({ type: 'INCREASE' }) }>+</button>
      <button onClick={() => dispatch({ type: 'DECREASE' }) }>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  );
}

export default App;
