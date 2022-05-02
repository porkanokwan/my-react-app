import './App.css';
import {useState} from 'react'

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {/* ใช้ callback เพราะต้องอ้างอิงถึง state ปัจจุบัน */}
      <button onClick={() => setShow(pre => !pre)}>{show ? 'Hide' : 'Show'}</button>
      {/* ใช้หลักเรื่อง Falsy value ถ้า show เป็น true จะแสดงก้อนข้างหลัง แต่ถ้าเป็น false จะ return ค่า เป็น false แต่ false ไม่สามารถแสดงบนหน้า UI ได้ */}
      {show && <p>Lorem ipsum</p>}
    </div>
  );
}

export default App;
