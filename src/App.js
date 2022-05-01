import logo from './logo.svg';
import './App.css';

function App() {
  const handleLink = (event) => {
    if( window.confirm('Leave for https://www.google.com/ ?') === false ) {
      event.preventDefault();
    }
  }
  return (
    <div className="App">
      <a href='https://www.google.com/' onClick={handleLink}>Google</a>
    </div>
  );
}

export default App;
