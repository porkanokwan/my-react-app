import './App.css';
import {useState} from 'react'

function App() {
  // const [check, setCheck] = useState('');
  // const [error, setError] = useState('');
  // const [border, setBorder] = useState('');
  // const handleCheck = () => {
  //   if(check.length === 0){
  //     setError('Phone number is required');
  //     setBorder('red');
  //   } else
  //   if(isNaN(check)){
  //     setError('Phone number is invalid');
  //     setBorder('red');
  //   } else
  //   if(check.length < 10){
  //     setError('invalid length');
  //     setBorder('red');
  //   }else {
  //     setError('');
  //     setBorder('');
  //     alert('Your number is valid');
  //   }
  // }

  // return (
  //   <div className="App">
  //     <div>
  //       <input type='text' name='phoneNumber' placeholder='Phone Number' style={{borderColor: border}} value={check} onChange={(e) => setCheck(e.target.value)}/>
  //       <button onClick={handleCheck}>Check</button>
  //     </div>
  //     <p style={{color:'red'}}>{error}</p>
  //   </div>
  // );
  
  // เฉลย
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const errorMesssage = error === '' ? null : <p style={{color:'red'}}>{error}</p>
  const handleClickCheck = () => {
    if(phone === ''){
      setError('Phone number is required')
    } else if(isNaN(phone.trim())) {
      setError('Phone number is invalid')
    } else if(phone.length != 10) {
      setError('invalid length');
    } else {
      setError('');
      alert('Your number is valid');
    }
  }

  const border = error === '' ? null : {borderColor: 'red'};

  return (
    <div className="App">
        <input type='text' name='phoneNumber' placeholder='Phone Number' value={phone} style={border} onChange={(e) => setPhone(e.target.value)} />
        <button onClick={handleClickCheck}>Check</button>
        {errorMesssage}
    </div>
  );
}

export default App;
