import './App.css';

function App() {
  // ถ้าจะไม่ใช้ข้อมูลใน event ก็ไม่ต้องใส่ parameter event เข้าไป
  // const handleClicked = (event) => console.log(event);

  // อยากส่ง parameter อื่นนอกจาก event obj เข้าไปข้างใน handler function ด้วย
  // const handleClicked = (event, id) => console.log(id);

  // วิธีการซ้อน function คือ function handleClicked2 return ค่าออกมาเป็น handler function
  // const handleClicked2 = (id) => event => console.log(id);
  // ===
  // function handleClicked2(id) {
  //   return (event) => {
  //     console.log(id);
  //   }
  // }

  const handleSubmitForm = (event) => {
    event.preventDefault(); // จะป้องกัน default action ของ submit คือป้องกันการ sent request ไปที่ server เมื่อกด submit 
    console.log('submit is done'); // อันนี้ก็จะไม่หายไป แต่ถ้าไม่มี prevent ข้อความนี้จะขึ้นแค่แปปเดียวแล้วหายไป เพราะ หน้า web ถูก refresh หลังส่ง request เสร็จ
  }

  const handleChangeEmail = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      {/* ใส่ event เป็นเหมือนเป็น attribute ของ element นั้น แต่ event handler ต้องมีค่าเป็น function */}
      {/* <button onClick={() => console.log('Clicked')}>Click Me</button> */}
      {/* <button onClick={handleClicked}>Click Me</button> */}

      {/* การส่ง parameter อื่นนอกจาก event obj เข้าไปข้างใน handler function ต้องเขียน handler function ในรูปแบบ annonymus function แล้วเรียกใช้ function ที่รับ parameter อื่นเข้ามาใน handler function อีกที */}
      {/* <button onClick={(event) => {
        handleClicked(event, 2);
      }}
        >Click Me
      </button> */}
      {/* หรือจะใช้วิธีการซ้อน function ก็ได้ */}
      {/* <button onClick={handleClicked2(5)}>Click Me</button> */}

      <form onSubmit={handleSubmitForm}>
        {/* ถ้าอยาก log ค่าที่อยู่ใน input มาดูต้องใช้ event onChange */}
        <input name='email' onChange={handleChangeEmail}/>
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
