import './App.css';
import {useState} from 'react'

function App() {
  // วิธีนี้จะไม่ได้ลบออกไปจาก DOM แค่ซ่อนไว้
  // const [hide, setHide] = useState(false)
  // const handleButton = () => {
  //   setHide(!hide)
  // }
  // const [hide, setHide] = useState('')
  // const handleButton = () => {
  //   setHide('hidden')
  // }
  const [hide, setHide] = useState('inline')
  const handleButton = () => {
    setHide('none')
  }
  return (
    <div className="App">
      {/* <button onClick={handleButton} hidden={hide}>Click to hide me</button> */}
      <button onClick={handleButton} style={{display: hide}}>Click to hide me</button>
    </div>
  );
  
  
  // เฉลย
//   const [show, setShow] = useState(true)
    // วิธีนี้ remove tag ออกไปจาก DOM เลย
//   if(show === false) {
//     return <></>
//   }
//   return (
//     <div className="App">
//       <button onClick={() => setShow(false)} >Click to hide me</button>
//     </div>
//   );
}

export default App;
