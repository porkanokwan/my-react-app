import logo from './logo.svg';
import './App.css';

function App() {
  // const handleLink = (event) => {
  //   if( window.confirm('Leave for https://www.google.com/ ?') === false) {
  //     event.preventDefault();
  //   }
  // }
  const handleLink = (event) => {
    event.preventDefault();
    if( window.confirm('Leave for https://www.google.com/ ?')) {
      // window.location.assign('https://www.google.com/ ')
    }
  }
  
  // เฉลย
  // const handleLink = (event) => {
  //   event.preventDefault()
  //   const redirect = window.confirm('Leave for https://www.google.com/ ?');
  //   if(redirect) {
  //     window.location.assign('https://www.google.com/ ')
  //   }
  // }
  return (
    <div className="App">
      <a href='https://www.google.com/' onClick={handleLink}>Google</a>
    </div>
  );
}

export default App;
