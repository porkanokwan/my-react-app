import { useState } from 'react';
import _ from 'lodash';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState({id: _.uniqueId, input: ''});
  const [isEdit, setEdit] = useState(false);

  const handleAdd = () => {
    const newList = [...list];
    newList.push(task);
    setList(newList);
    setTask({...task, input: ''});
  }
  return (
    <div className="App">
      <input value={task.input} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map(item => <li key={item.id} style={{edit}}>{item} <span>
            <button>Edit</button>
            <button>Delete</button>
          </span></li> )}
      </ul>
    </div>
  );
}

export default App;
