import './App.css';

function App() {
  const handleCheckbox = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    // checked เป็น attribute ของ input tag ใน html แต่ถ้าใน DOM เป็น property ตัวนึง ใช้ check ว่า checkbox/radio ถูกเลือกมั้ย
    console.log(event.target.checked ? 'Tick' : 'U ntick')
  }
  return (
    <div className="App">
      <input type='checkbox' name='phoneBrand' id='iphone' value='iphone' onChange={handleCheckbox} />
      <label htmlFor='iphone'>Iphone</label>
      <input type='checkbox' name='phoneBrand' id='samsung' value='samsung' onChange={handleCheckbox}/>
      <label htmlFor='samsung'>Samsung</label>
      <input type='checkbox' name='phoneBrand' id='oppo' value='Oppo' onChange={handleCheckbox}/>
      <label htmlFor='oppo'>Oppo</label>
    </div>
  );
}

export default App;
