import './App.css';
import {useState} from 'react'

function App() {
  const [hide, setHide] = useState('');
  
  return (
    <div className="App">
      <button onClick={() => setHide('none')}>Click to hide text</button>
      <h1 style={{display: hide}}>Text</h1>
    </div>
  );
}

export default App;
