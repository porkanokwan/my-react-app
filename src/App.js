import './App.css';
import {useState} from 'react'

function App() {
  // let state = useState('Test'); // return ค่าเป็น Array ที่ index 0 เก็บค่า state ปัจจุบัน, index 1 เก็บ function ที่ใช้การ update ค่า state
  // let state1 = useState('Abc'); // state1 มีค่าเริ่มต้นเป็น 'Abc'
  // // ใช้การ destructuring ประกาศ State เพื่อให้ function App เกิดการ re-run อีกรอบ แล้ว return ค่าใหม่ตามที่ State เปลี่ยนแปลง
  // const [population, setPopulation] = useState(1000);
  // // การ Initialize นี้จะถูกกำหนด แค่ครั้งแรกที่ function App() ถูก run
  // const [country, setCountry] = useState('Thailand');
  // // let value = '';
  // const handleInput = (e) => {
  //   let value = e.target.value
  //   setPopulation(value)
  //   // country = value //ห้าม update state แบบนี้
  //   console.log(value)
  // }
  // return (
  //   <div className="App">
  //     <input type='text' onChange={e => setCountry(e.target.value)}/>
  //     <h1>{country}</h1>
  //     <hr/>

  //     <input type='text' onChange={handleInput}/>
  //     <h1>{population}</h1>
  //     <hr/>

  //     {/* ได้ Test ก่อนเพราะ ค่า State ปัจจุบัน เท่ากับค่า State เริ่มต้นและยังไม่มีการเปลี่ยนแปลง State แต่เมื่อเกิด event ขึ้น จะเกิดการเปลี่ยนแปลงค่าของ State เป็น 'State changed when occured event onChange at input obj' */}
  //     <input type='text' onChange={(e) => state[1]('State changed when occured event onChange at input obj')}/>
  //     <h1>{state[0]}</h1>
  //     <hr/>

  //     {/* ได้ Abc ก่อนเพราะ เป็นค่า State เริ่มต้นและยังไม่มีการเปลี่ยนแปลง State แต่เมื่อเกิด event ขึ้น จะเกิดการเปลี่ยนแปลงค่าของ State เป็นค่า value ของ input obj */}
  //     <input type='text' onChange={(e) => state1[1](e.target.value)}/>
  //     {/* ค่าในวงเล็บ state1[1] คือ ค่า state ถัดไปของ state1 */}
  //     <h1>{state1[0]}</h1>

  //   </div>
  // );
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(5); // update count=5 จะเก็บไว้ใน memory ทำงานแบบ asynchronus
    setCount(count + 1); // ไปเอาค่าของ count ที่ยังไม่ update มาใช้ count = 0 เพราะ ไม่รอให้ update count=5 เสร็จก่อน เลยเอาค่าที่มีอยู่มาใช้ก่อน
    setCount(curCount => curCount + 1); // ถ้าจะเอาค่า ณ ปัจจุบันที่ update แล้วมาใช้ต้องเขียนในรูป callback function เท่านั้น curCount = 5 เป็นค่า state ปัจจุบันจริงๆ แล้ว return nextState ออกไป
    // เพราะว่า การเขียนแบบ callback จะบังคับว่าให้รอ update count=5 ให้เสร็จก่อนค่อยเอามาใช้ ดังนั้น การเขียนแบบ callback จะใช้ เมื่อค่า state ถ้ดไป ต้องอ้างอิงจากค่า state ปัจจุบัน
  }
  return(
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button> */}
      <button onClick={handleCount}>Add</button>
    </div>
  );
}

export default App;

// First render run: App() ได้ค่า country='Thailand', function setCountry(nextState) และ return ค่าได้
{/* <div className="App">
      <input type='text' onChange={e => setCountry(e.target.value)}/>
      <h1>Thailand</h1>
</div>  ออกมาแล้วเอาไปใส่ใน DOM */}

    // พิมพ์ Korea === การ update country ให้เป็น Korea

  // เกิด Second render run: App() ใหม่ โดยจะไม่ได้เซ็ตค่า State ให้กลับไปเป็นค่าเริ่มต้นใหม่ แต่จะเอา State มาใช้คือ country จะมีค่าตามสิ่งที่เราพิมพ์ใน input เช่น พิมพ์ Korea จะได้ country = 'Korea'
  // country = 'Korea' (ค่าที่เราพิมพ์) , function setCountry(nextState) และ App() return ค่าได้
  {/* <div className="App">
      <input type='text' onChange={e => setCountry(e.target.value)}/>
      <h1>Korea</h1>
</div>  ออกมาแล้วเอาไปใส่ใน DOM */}

    // พิมพ์ Korea girl === การ update country ให้เป็น Korea girl

  // เกิด Third render run: App() ใหม่
  // country = 'Korea girl' , function setCountry(nextState) และ App() return ค่าได้
  {/* <div className="App">
      <input type='text' onChange={e => setCountry(e.target.value)}/>
      <h1>Korea girl</h1>
</div>  ออกมาแล้วเอาไปใส่ใน DOM */}
