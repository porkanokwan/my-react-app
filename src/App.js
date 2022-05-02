import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div >
      <div className='p-3 mb-2 bg-dark text-info d-flex bd-highlight mb-3'>
        <div className='mr-auto p-2 bd-highlight'>
          <span>To Do List App</span>
        </div>
        <div className='p-2 bd-highlight'>
          <input placeholder='Search'/>
        </div>
        <div className='p-2 bd-highlight'>
          <button className='mr-3 rounded btn btn-outline-info'>Search</button>
          <button className='rounded btn btn-outline-info'>Add</button>
        </div>
      </div>
      <div className='border border-dark'>
        <div className="border-bottom-0 border border-dark">
          <p>TO DO</p>
        </div>
        <div>
          <p>Wireframe</p>
          <p>14/02/2021</p>
        </div>
        <div>
          <p>Design Component and API</p>
          <p>05/03/2021</p>
        </div>
        <div>

        </div>
       </div>
      
    </div>
  );
}

export default App;
