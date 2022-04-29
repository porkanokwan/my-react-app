import './App.css';
// การ import แบบ name ต้องใส่ชื่อให้เหมือนกับที่ export มา เพราะ ใน 1 module มี name export ได้หลายอัน ชื่อจึงต้องเหมือนกันเพื่อให้เรียกใช้ถูก
import { Welcome, sum } from './Welcome';
import {Hello} from './component/Hello';
// การ import แบบ default มันจะไปหาสิ่งที่ export default จากไฟล์ Home มาใช้ในชื่อ Abc โดยอัตโนมัติ แต่ควรตั้งชื่อให้เหมือนกัน
import Abc, {day, year} from './pages/Home'
// กรณีที่ import โดยใช้แค่ชื่อ folder ไม่มีชื่อ file มันจะวิ่งไปหา file ที่ชื่อ index.js ใน folder นั้นอัตโนมัติ เสมือนว่าไป import มาจากไฟล์ index.js ใน folder Login โดยอัตโนมัติ (เป็น default) ซึ่งใช้ได้กับทั้ง default export และ name export
import Login from './Login';

function App() {
  const result = sum(20, 80);
  return (
    <div>
      Hello React {result} {day} {year}
      <Welcome/>
      <Hello/>
      <Abc/>
      <Login/>
    </div>
  );
}

export default App;
