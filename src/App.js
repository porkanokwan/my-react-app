import './App.css';
import Item from './component/Item';

function App() {
  return (
    <div>
      <button>Add</button>
      <ul>
        <Item text='Task1' type='Edit' del='Del'/>
        <Item text='Task2' type='Edit' del='Del'/>
      </ul>  
    </div>
  );
}

export default App;
