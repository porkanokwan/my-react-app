import './App.css';
import {useState} from 'react'

let id = 3;

function App() {
  const arr = [1, 2, 3, 4];
  const jsxArr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];

  // ถ้าจะ render สิ่งที่อยู่ใน Array ต้องเอามา .map ให้อยู่ในรูปแบบ jsx ที่ต้องการ
  const result = arr.map(el => <li>{el}</li>)
  // สามารถ .map กับ component ได้ เช่น
  // arr.map( (el, index) => <Post key={index} title='example'/>) // กรณีไม่มี id ใน array จะเอา index มาใช้แทน
  // obj.map( (el) => <Post key={el.id} title={el.title}/>)

  const [obj, setObj] = useState([
    {
      id: 1,
      title: 'A'
    },
    {
      id: 2,
      title: 'B'
    }
  ])
  // เพิ่มสิ่งที่พิมพ์ลงไปใน List และ State
  const handleClick = () => {
    const input = prompt('Enter something');
    const newState = [{id: id++, title: input}, ...obj]
    setObj(newState);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Add</button>
      <ul>
        {/* แบบนี้ไม่นิยมเขียน <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <li>{arr[3]}</li> */}
        {/* ถ้าเขียนแบบนี้ จะเกิด Warning: Each child in a list should have a unique 'key' prop. */}
        {/* {jsxArr}
        {result} */}

        {obj.map(i => <li key={i.id}>{i.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
