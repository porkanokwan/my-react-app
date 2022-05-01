import './App.css';

function App() {
  const handleInput = (event) => {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <input onChange={handleInput}/>
    </div>
  );
}

export default App;
