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
  // ปกติใน constructor function ของ Class Component จะรับ parameter props อยู่แล้ว ดังนั้น เวลาจะสืบทอดต่อ แล้วจะ override เลยต้องเรียก super(props) ส่งค่า props เข้าไปเป็น parameter ให้ constructor function ของ Class Component ทำงาน
  constructor(props) {
    super(props)
    // State ต้องกำหนดใน constructor function และ State เป็น property ตัวนึงของ class component เวลาจะเรียกใช้ 
    this.state = {
      // ไม่สามารถแยก state แบบ useState ได้ต้องรวมค่า state ใน obj นี้เท่านั้น key-value 1ชุด === state 1 ตัว
      // transaction: [],
      // editingTransaction: null,
      // setIsShow: false,
      count: 0
    }
    this.handleDecrement = this.handleDecrement.bind(this); // this จะหมายถึง obj ของ App component เพราะ ตัวที่เรียกคือ constructor และตัวที่จะเรียก constructor ได้ มีแค่ obj ของ App เท่านั้น
  }

  // การสร้าง state อีกวิธี(ปัจจุบัน)
  // state = {
    // count: 0,
    // test: 'Test state'
  // };

  handleDecrement() {
    console.log(this);
    this.setState({ count: this.state.count - 1 })
  };

  render() {
    // เข้าถึง State แบบตรงๆ ไม่ได้ต้องผ่าน this เท่านั้น
    const { count } = this.state; 
    console.log(this.state)
    return(
      <div className='App'>
        {/* props จะเก็บ attribute เป็น obj เหมือนเดิม */}
        {/* <Counter count={this.state.count} title='Counter App'/> */}
        {/*เมื่อ Class ที่เรากำหนดถูกสร้าง/ทำงาน React จะสร้าง instance obj สำหรับ Class นั้นๆ ให้โดยที่เรามองไม่เห็นแบบนี้ const instanceObj = new ชื่อClass(props) 
        โดยที่ส่งค่า props ของ class นั้นๆ เข้าไปใน constructor function ให้เราด้วย ซึ่งทำให้ Class ที่เรากำหนดเรียกใช้ property/method ต่างๆ ของ Class Component ของ react ได้
        เช่น propery props, property state , method setState เป็นต้น และ keyword this ที่เรียกใช้ภายใน class จะหมายถึง instance obj ของ class นั้นๆ */}
        <Counter count={count} title='Counter App'/>
        {/* this.setState: merge old State and setState argument => {...{count: 0, test: 'Test state'}, ...{count: 1}} แล้ว property ที่ซ้ำกันจะเอาค่าใหม่ที่อยู่ขวามือ ไปแทนที่ค่าเดียวกันที่อยู่ซ้ายมือ */}
        <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
        <button onClick={this.handleDecrement }>-</button>
        {/* การเขียน onClick={this.handleDecrement} แบบนี้จะหมายความว่า onClick={function() { this.setState({ count: this.state.count - 1 }) } } 
        จะทำให้ this ที่อยู่หน้า function ที่เป็นตัวเรียกใช้ function หายไป พอมันหายไป this == undefined ทำให้มันไม่รู้จัก this ที่อยู่ข้างใน function นี้ มีวิธีแก้คือ 
        1. ตั้ง function handleDecrement เป็น arrow เพราะ arrow function ไม่มี this
        2. ใช้ bind(this) ที่ constructor เพราะ bind จะบอกว่า this ใน function คืออะไร ซึ่งมันก็จะหมายถึงตัวมันเองก็คือ obj ของ App component
        */}
        <button onClick={() => this.setState({ count: this.state.count = 0})}>reset</button>
    </div>
    )
  }
}

export default App;
