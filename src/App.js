import './App.css';
import {useState} from 'react'

function App() {
  // const [hide, setHide] = useState('');
  
  // return (
  //   <div className="App">
  //     <button onClick={() => setHide('none')}>Click to hide text</button>
  //     <h1 style={{display: hide}}>Text</h1>
  //   </div>
  // );
  const [show, setShow] = useState(true);
  
  const text = show ? <h1>Text</h1> : null;
  return (
    <div className="App">
      <button onClick={() => setShow(false)}>Click to hide text</button>
      {text}
    </div>
  );
}

export default App;
