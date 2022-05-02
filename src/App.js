import './App.css';
import {useState} from 'react'

function App() {
  const [change, setChange] = useState('Hide');
  const [show, setShow] = useState('none')
  const handleChange = (e) => {
    setChange('Show')
    console.log(change) // เป็น Hide อยู่เพราะเสร็จก่อนจะ Update ค่าเสร็จ
    // พอ update ค่าเสร็จจะเข้าเงื่อนไขนี้
    if(change === 'Show'){
      setChange('Hide');
      setShow('block');
    }
  }
  return (
    <div className="App">
      <button onClick={handleChange}>{change}</button>
      <h2 style={{display: show}}>Lorem ipsum dolor sit</h2>
    </div>
  );
}

export default App;
