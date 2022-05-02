import './App.css';
import {useState} from 'react'

function App() {
  const [show, setShow] = useState(false)
  const handleButton = () => {
    setShow(!show)
  }
  // const [show, setShow] = useState('')
  //   const handleButton = () => {
  //   setShow('hidden')
  // }
  return (
    <div className="App">
      <button onClick={handleButton} hidden={show}>Click to hide me</button>
    </div>
  );
}

export default App;
