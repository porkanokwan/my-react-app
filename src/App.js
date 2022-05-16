// การ import แบบ default จะเปลือง memory มากกว่าแบบ name เพราะ แบบ default จะเอา library/component ทั้งอันมาใส่แล้วเรียกใช้แยกเอา แต่แบบ name คือการเอาแค่เฉพาะส่วน function ที่ import มาใช้ทำให้ใช้ memory น้อยกว่า performance ดีกว่า
import _ from "lodash";
import Timer from "./Timer";
import "./App.css";
import TimerClass from "./TimerClass";
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:8080/transactions')
    .then(res => setState(res.data));
  }, [])
  // let user1 = {
    // fullName: { firstName: "Andy", lastName: "Bobby" },
    // now: new Date(),
  // };
  // let user2 = _.cloneDeep(user1);
  // console.log(user2);
  // console.log(typeof user2.now);// obj สามารถเอาไปใช้ต่อได้
  // console.log(_.join(["a", "b", "c"], "/")); // 'a/b/c'
  return (
    <div className="App">
      <ul>
        {state.map(item => <li key={item.id}>{item.payee}</li>)}
      </ul>
      <Timer />
      <TimerClass />
    </div>
  );
}

export default App;
