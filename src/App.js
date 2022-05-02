import './App.css';
import {useState} from 'react'

function App() {
  const [change, setChange] = useState('Hide');
  const [show, setShow] = useState('block')
  const handleChange = (e) => {
    // setChange('Show')
    // console.log(change) // เป็น Hide อยู่เพราะเสร็จก่อนจะ Update ค่าเสร็จ
    if(change === 'Hide'){
      setChange('Show');
      setShow('none');
    }
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
  
  // เฉลย
  // const [show, setShow] = useState(true);
  // const btnText = show ? 'Hide' : 'Show';
  // const text = show ?  <h2>Lorem ipsum dolor sit</h2> : null;
  // return (
  //   <div className="App">
  //     <button onClick={() => setShow(!show)}>{btnText}</button>
  //     {text}
  //   </div>
  // );

}

export default App;
