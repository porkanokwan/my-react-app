import './App.css';
import {useState} from 'react'

function App() {
  const [check, setCheck] = useState('');
  const [warn, setWarn] = useState('');
  const [border, setBorder] = useState('');
  const handleCheck = () => {
    if(check.length === 0){
      setWarn('Phone number is required');
      setBorder('red');
    } else
    if(isNaN(check)){
      setWarn('Phone number is invalid');
      setBorder('red');
    } else
    if(check.length < 10){
      setWarn('invalid length');
      setBorder('red');
    }else {
      setWarn('');
      setBorder('');
      alert('Your number is valid');
    }
  }

  return (
    <div className="App">
      <div>
        <input type='text' name='phoneNumber' placeholder='Phone Number' style={{borderColor: border}} value={check} onChange={(e) => setCheck(e.target.value)}/>
        <button onClick={handleCheck}>Check</button>
      </div>
      <p style={{color:'red'}}>{warn}</p>
    </div>
  );
}

export default App;
