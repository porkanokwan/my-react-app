import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from 'react'

// Side Effect คือ function ทำสิ่งที่อยู่นอกเหนือ scope ของมัน เช่น
// let cat = 'Meaow';

// // เปลี่ยนค่าตัวแปรข้างนอก
// function a() {
//   cat = 'Mal';
//   // function ส่ง feature request something to server
// }

// // Not Side Effect
// function sum(a, b) {
//   // ทุกอย่างทำงานใน scope ของ function
//   return a+b;
// }

function App() {
  const [state, setState] = useState({});
  // Side Effect เพราะ ขอข้อมูลจากภายนอก
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    console.log(res.data)
    // setState(res.data) แบบนี้จะทำให้เกิด Side-effect คือการ re-render แบบ infinite เพราะ เราไป setState ให้มันอัพเดทตลอดเวลา ดังนั้นห้ามใช้ side sffect ใช้ body function component โดยตรง จึงมี Hook useEffect มาจัดการ(handle) side effect ใน body นี้
  // ดังนั้น ถ้าอยากจะเอาสิ่งที่ res ส่งมา เข้าไปใน state ต้องใช้ useEffect ในการจัดการ เราไม่สามารถยัดเข้า state ตรงๆ แบบนี้ได้
  });
  return (
    <div className="App">
      {state.title} {/* title โชว์หน้า Web */}
    </div>
  );
}

export default App;
