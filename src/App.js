import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import Counter from './Counter';

// การประกาศ Class function 
class Person {
  // ประกอบด้วย 2 ส่วนสำคัญ คือ ค่าคงที่จะเรียก property กับ function จะเรียก method

  //  constructor function เป็น method พิเศษที่จะทำงานเมื่อ instance ถูกสร้าง และรับค่า parameter มาจากที่ Class ส่งมาให้
  constructor(firstName, lastName) {
    console.log(firstName + ' ' +lastName);
    // ส่วนมากใน constructor จะกำหนดค่า preperty ให้
    this.firstName = firstName;
    this.lastName = lastName;
  }

  firstName; // เขียนแบบนี้จะเป็นการเขียน ค่าคงที่หรือตัวแปรที่ไม่ได้ระบุค่า เรียก property

  // การเขียน function เขียนประกาศแบบ function declaration ได้เลยไม่ต้องประกาศแบบ expression แล้ว class จะเรียก function ที่ประก่าศนี้ว่า method
  sayHi() {
    console.log('Hi');
    return 'Over'
  }

  getFullName() {
    // การที่ method หรืออะไรก็ตามต้องการจะเข้าถึง method/property อื่นที่อยู่ใน Class เดียวกันต้องใช้ this. ในการเข้าถึง เพราะ this จะ refer ถึงตัวมันเอง ซึ่ง ตัวมันเอง ก็คือ obj ที่สร้างจาก class 
    return this.firstName; // === instacePerson.firstName
  };
}

// Class function จะเป็นแม่แบบในการสร้าง Obj ที่หน้าตาเหมือนมันออกมาได้ โดยจะเรียก Obj ที่สร้างจาก Class ว่า Instance
const instacePerson = new Person('Depny', 'Doe'); // instacePerson จะเป็น obj(instance) ของ Class Person แล้วสามารถเรียกใช้ property/method ที่อยู่ใน class ได้
console.log(instacePerson);
// console.log(instacePerson.sayHi());
instacePerson.firstName = 'John'; // firstName มีค่าเป็น "John"
console.log(instacePerson.getFullName()); // "John"

// Engineer สืบทอดทุกอย่างมาจาก Class Person ดังนั้น instance ที่ถูกสร้างมาจาก Class Engineer จะสามารถใช้ property/method ที่อยู่ใน Class Engineer และ Person ได้
class Engineer extends Person {
  // Override constructor คือ ถ้าตัวลูกมี constructor เป็นของตัวเองมันจะต้องไปสืบทอด constructor มาจาก parent ของมันโดยใช้ super() เสมอ
  constructor(firstName, lastName) {
    super(firstName, lastName); // super จะหมายถึง parent class หรือตัวที่มันไป extends มา และถ้าเขียน super() แบบนี้จะไปเรียก constructor function ใน parent class ให้มันทำงาน
    this.hasSpecialSkill = true;
  }

  getFullName() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

// พอ obj ของ Class Engineer เกิดขึ้น มันจะไปสั่งให้ constructor function ของ Class Engineer ทำงานอัตโนมัติ แต่ใน Class Engineer ไม่มี constructor เป็นของตัวเอง มันเลยไปเรียก constructor ของ Class ที่มันสืบทอดมาให้ทำงาน
const instaceEngineer = new Engineer('Roland', 'Mc');
console.log(instaceEngineer.sayHi()); // over

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  // ปกติใน constructor function ของ Class Component จะรับ parameter props อยู่แล้ว ดังนั้น Class ที่จะสืบทอดต่อ แล้วจะ override เลยต้องเรียก super(props) ส่งค่า props เข้าไปเป็น parameter ให้ constructor function ของ Class Component ทำงาน ซึ่งทำให้ Class ที่เรากำหนดเรียกใช้ property/method ต่างๆ ของ Class Component ได้ โดยใช้ this เพราะ this จะหมายถึง instace obj ของ class นั้นที่สืบทอดทุกอย่างมาจาก Class Component 
  constructor(props) {
    console.log('Constructor App run');
    super(props)
    // State ต้องกำหนดใน constructor function และ State เป็น property ตัวนึงของ class component  
    this.state = {
      // ไม่สามารถแยก state แบบ useState ได้ต้องรวมค่า state ใน obj นี้เท่านั้น key-value 1ชุด === state 1 ตัว
      // transaction: [],
      // editingTransaction: null,
      isShow: true,
      count: 0
    }
    this.handleDecrement = this.handleDecrement.bind(this); // this จะหมายถึง obj ของ App component เพราะ ตัวที่เรียกคือ constructor และตัวที่จะเรียก constructor ได้ มีแค่ obj ของ App เท่านั้น
  }

  // การสร้าง state อีกวิธี(ปัจจุบัน)
  // state = {
  //   count: 0,
  //   test: 'Test state', 
  //   isShow: false
  // };

  handleDecrement = () => {
    console.log(this);
    this.setState({ count: this.state.count - 1 })
  };

  componentDidMount() {
    console.log('App componentDidMount')
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate run')
  }

  /* เมื่อ Class ที่เรากำหนดถูกเรียกให้ทำงาน คือการ insert เข้าไปใน DOM React จะสร้าง instance obj สำหรับ Class นั้นๆ ให้โดยที่เรามองไม่เห็นแบบนี้ const instanceObj = new ชื่อClass(props) 
  และเมื่อมี instance obj ของ class นั้นๆ เกิดขึ้น react จะสร้าง lifecycle ของ obj ของ class นั้นๆ ให้เราด้วย มี 3 phase */

  render() {
    console.log('Render App run');
    // เข้าถึง State แบบตรงๆ ไม่ได้ต้องผ่าน this เท่านั้น
    const { count } = this.state; 
    console.log(this.state)
    return(
      <div className='App'>
        <h1>Counter App</h1>
        <div><button onClick={() => this.setState({ isShow: !this.state.isShow })}>Toggle</button></div>
        
        <form action=''>
          <input/>
          <button>Click</button> {/* ใน form ถ้าเราไม่ได้กำหนด path ใน action ว่าหลังจากกดปุ่มแล้วให้ไปที่ server ไหน มันจะส่งข่อมูลกลับมาที่ url ที่มันอยู่ตอนนี้ ก็จะเหมือนกับว่ามัน render มาที่ component ตัวเดิม เท่ากับว่ามันจะทำการ render component App เข้าไปใน DOM ใหม่ เหมือนกับการ refresh หน้าจอใหม่ */}
        </form>

        {/* Phase 1: Mounting จากตัวอย่างนี้คือ กดปุ่ม toogle แล้ว Component Counter ถูก insert เข้า DOM */}
        {this.state.isShow ? <> <Counter count={count} title='Counter App'/>
        {/* Phase 2: Updating จากตัวอย่างนี้คือ กดปุ่ม +/-/reset จะเกิดการ update state ค่า count เปลี่ยน */}
        <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
        <button onClick={this.handleDecrement }>-</button>
        <button onClick={() => this.setState({ count: this.state.count = 0})}>reset</button> </> : null}
        {/* Phase 3: Unmounting จากตัวอย่างนี้คือ กดปุ่ม toogle แล้ว Component Counter ถูก remove ออกไปจาก DOM */}  
    </div>
    )
  }
}

export default App;

// ลำดับการ run 
// 1. เมื่อ Class App ถูก insert เข้า DOM/ถูกสร้าง เกิดการสร้าง obj ของ App แบบนี้ 
  // const app = new App(props);
// เมื่อสร้าง obj ของ App เสร็จ constructor ของ App จะ run อัตโนมัติ
// 2. พอ constructor ของ App run เสร็จ render method จะ run ต่อทันที ซึ่งมันจะ return JSX ออกมา ถ้าการ return มี Class Component อยู่มันจะ Mounting Component ตัวนั้นเข้ามาใน DOM
// พอ Mounting เข้ามา จะเกิดการสร้าง obj ของ Class นั้นเหมือนแบบของ App ซึ่งใน code นี้ เจอ Component Counter มันก็เลย Mounting และสร้าง obj ของ Component Counter แบบนี้
  // const counter = new Counter(props);
// จากนั้น constructor ของ Counter จะ run แล้ว render method ก็จะ run ต่อ ตามลำดับ