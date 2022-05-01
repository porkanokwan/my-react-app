import './App.css';

function App() {
  const handleCheckbox = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    console.log('Tick')
  }
  return (
    <div className="App">
      <input type='checkbox' name='phoneBrand' id='phoneBrand' value='iphone' onChange={handleCheckbox} />
      <label htmlFor='phoneBrand'>Iphone</label>
      <input type='checkbox' name='phoneBrand' id='phoneBrand' value='samsung' onChange={handleCheckbox}/>
      <label htmlFor='phoneBrand'>Samsung</label>
      <input type='checkbox' name='phoneBrand' id='phoneBrand' value='Oppo' onChange={handleCheckbox}/>
      <label htmlFor='phoneBrand'>Oppo</label>
    </div>
  );
}

export default App;
