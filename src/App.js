import './App.css';

function App() {
  const handleSelect = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <select onChange={handleSelect}>
        <optgroup label='country'>
          <option value='Japan'>Japan</option>
          <option value='Australia'>Australia</option>
          <option value='England'>England</option>
          <option  value='Italy'>Italy</option>
          <option  value='Taiwan'>Taiwan</option>
        </optgroup>
      </select>
    </div>
  );
}

export default App;
