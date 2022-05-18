import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactItem from './Components/ContactItem';
import Header from './Components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      {/* การใส่แบบนี้จะทำให้ path ทุกหน้าในเว็บมี Header ประกอบอยู่ด้วยเสมอ แต่ทุกหน้าไมได้ต้องการให้มี Header ให้ทำการ Nested Route */}
      {/* <Header/> */}

      {/* Routes เป็นกลุ่มของ Route ที่เราจะ config*/}
      <Routes>
        {/* Route จะกำหนดเส้นทางของ web โดยใช้ path ซึ่งสิ่งที่ Route ทำคือ check ว่า path ใน url ของ web เรา มีคำว่า /login รึเปล่า
        ถ้ามีคำว่า /login จะ render element props ออกมา ซึ่ง props element จะมีค่าเป็น component ที่เราอยากให้มัน render ออกมา */}

        {/* การ Nested Route จะเป็นการเอา path มาต่อกัน Header จะ run เมื่อ path แรกเป็น / เท่านั้น ส่วน path ที่ต่อต้องเป็น relative */}
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<Home/>}></Route> {/* จะ render Home ได้เมื่อ path เป็น / + / === / */}
          <Route path='about' element={<About/>}></Route> {/* จะ render About ได้เมื่อ path เป็น / + about(เป็น relative path) === /about  */}
          <Route path='contact' element={<Contact/>}>
            <Route path=':contactId' element={<ContactItem/>}></Route> {/* /contact/อะไรก็ได้ เพราะ เป็น parameter */}
          </Route> {/* จะ render Contact ได้เมื่อ path เป็น / + contact(เป็น relative path) === /contact */}
          {/* ทุก path ที่ไม่ใช่ path ที่เรากำหนดใน Route ข้างบน ให้ render ค่า <h1>404 not found</h1> */}
          <Route path='*' element={<h1>404 not found</h1>} />
        </Route>

        <Route path='/login' element={<Login/>} caseSensitive/>
      </Routes>
    </div>
  );
}

export default App;
