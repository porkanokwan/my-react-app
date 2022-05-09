import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./Message";

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
  // console.log('App run'); // แสดงทุกครั้งเมื่อมีการ re-render ของ App ซึ่งจะแสดงก่อนการ return ค่า
  const [todo, setTodo] = useState({});
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  // Side Effect เพราะ ขอข้อมูลจากภายนอก
  // axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
  //   console.log(res.data)
  // setState(res.data) แบบนี้จะทำให้เกิด Side-effect คือการ re-render แบบ infinite เพราะ เราไป setState ให้มันอัพเดทตลอดเวลา ดังนั้นห้ามใช้ side sffect ใช้ body function component โดยตรง จึงมี Hook useEffect มาจัดการ(handle) side effect ใน body นี้
  // ดังนั้น ถ้าอยากจะเอาสิ่งที่ res ส่งมา เข้าไปใน state ต้องใช้ useEffect ในการจัดการ เราไม่สามารถยัดเข้า state ตรงๆ แบบนี้ได้
  // });

  // render ครั้งแรกจะ run function นี้ และเมื่อมีการ update stateใหม่ component App จะ run ใหม่แล้ว return ค่าออกมาก่อน พอ return เสร็จแล้ว function ที่อยู่ใน useEffect จะค่อย run ดังนั้น function ใน useEffect จะ run ทุกครั้งที่เกิดการ re-render แต่ run หลังจากที่ return ค่าเสร็จแล้ว
  // useEffect( () => {
  //   console.log('Effect run');
  // }, [] ); // dependencies Array เป็น [] แบบนี้จะทำให้ effect function run แค่ครั้งแรกและครั้งเดียว

  // useEffect( () => {
  //   console.log('First Effect function run');
  //   return () => {console.log('Cleaning effect')}
  // }); // ไม่มี dependencies Array จะทำให้ effect function run ทุกครั้งที่มีการ re-render App

  // useEffect( () => {
  //   console.log('Second Effect function run');
  // }, [toggle, toggle2] ); // ค่าข้างใน dependencies Array มีกี่ตัวก็ได้ และถ้ามีตัวใดตัวนึงใน array มีการเปลี่ยนแปลง effect function จะ run

  // useEffect( () => {
  //   console.log('Effect run');
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(res => {
  //     console.log(res.data)
  //     setTodo(res.data);
  //   })
  // }, [toggle] ); // dependencies Array มีตัวแปร todo state อยู่ข้างในแบบนี้ [todo] จะทำให้ effect function run เมื่อค่าใน todo state มีการเปลี่ยนแปลงเท่านั้น

  // console.log('Before return')
  return (
    // <div className="App">
    //   {state.title} {/* title โชว์หน้า Web */}
    // </div>
    <div className="App">
      <h1>{todo.title}</h1>
      <button onClick={() => setToggle((prev) => !prev)}>Click</button>
      <button onClick={() => setToggle2((prev) => !prev)}>Toggle 2</button>
      {/* ถ้า toggle เป็น false Component Message จะไม่โชว์ เป็นเหมือนการถูก remove ออกไปจาก DOM หรือเรียกว่า component Unmount ดังนั้นเมื่อเกิด Component unmount function cleaning up effect ที่อยู่ใน component นั้นจะทำงาน */}
      {toggle && <Message />}
    </div>
  );
}

export default App;
