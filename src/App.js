import './App.css';
import {useState} from 'react'

function App() {
  const arr =['Lin', 'Min', 'Bell'];
  const li = arr.map((el, id) => <li key={id}>{el}</li>)
  return (
    <div className="App">
      <ul>
        {li}
      </ul>
    </div>
  );
}

export default App;
