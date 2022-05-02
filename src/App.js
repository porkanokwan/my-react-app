import './App.css';
import {useState} from 'react'

function App() {
  const [cal, setCal] = useState('');
  const calculate = (dollar) => {
    return dollar * 30;
  }
  return (
    <div className="App">
      <label htmlFor='dollar'>Enter Dollar : </label>
      <input id='dollar' name='convert-dollar' value={cal} onChange={(e) => setCal(e.target.value)}/>
      <h2>Convert to Baht: {calculate(cal)} Baht</h2>
    </div>
  );
}

export default App;
