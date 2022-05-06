import './App.css';

function App() {
  return (
    <>
      {/* <div classNameNameName='p-3 bg-dark text-info d-flex me-auto bd-highlight mb-3'>
        <div classNameNameName='me-auto p-2 bd-highlight'>
          <span>To Do List App</span>
        </div>
        <div classNameNameName='p-2 bd-highlight'>
          <input placeholder='Search'/>
        </div>
        <div classNameNameName='p-2 bd-highlight'>
          <button classNameNameName='me-3 rounded btn btn-outline-info'>Search</button>
          <button classNameNameName='rounded btn btn-outline-info'>Add</button>
        </div>
      </div> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="/">To Do List</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          
        {/* <form classNameName="d-flex ms-auto"> */}
        <form className="d-flex ms-auto">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-info me-2" type="submit">Search</button>
          <button className="btn btn-outline-info" type="submit">Add</button>
        </form>
        </div>
        </div>
      </nav>
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-4 col-sm-6 col-xs'>
            <div className="card">
              <div className="card-header">
                TO DO
              </div>
            <div className="card-body d-flex">
              <div className='flex-grow-1'>
                <h6 className="card-title">Wireframe</h6>
                <span className="card-text text-muted fs-6">14/02/2021</span>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-sm btn-outline-primary"> <i className='bi bi-pencil-square'></i> </button>
                <button type="button" className="btn btn-sm btn-outline-danger"> <i class="bi bi-trash3"></i> </button>
                <button type="button" className="btn btn-sm btn-outline-info">Doing</button>
                <button type="button" className="btn btn-sm btn-outline-success">Done</button>
              </div>
            </div>
            <div className="card-body d-flex border-top">
              <div className='flex-grow-1'>
                <h6 className="card-title">Design Component and API</h6>
                <span className="card-text text-muted fs-6">05/03/2021</span>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-sm btn-outline-primary"> <i className='bi bi-pencil-square'></i> </button>
                <button type="button" className="btn btn-sm btn-outline-danger"> <i class="bi bi-trash3"></i> </button>
                <button type="button" className="btn btn-sm btn-outline-info">Doing</button>
                <button type="button" className="btn btn-sm btn-outline-success">Done</button>
              </div>
            </div>
          </div>
          </div>
          <div className='col-md-4 col-sm-6 col-xs '>
            <div className="card">
              <div className="card-header">
                DOING
              </div>
              <div className="card-body d-flex">
              <div className='flex-grow-1'>
                <h6 className="card-title">Protptype</h6>
                <span className="card-text text-muted fs-6">21/02/2021</span>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-sm btn-outline-primary"> <i className='bi bi-pencil-square'></i> </button>
                <button type="button" className="btn btn-sm btn-outline-danger"> <i class="bi bi-trash3"></i> </button>
                <button type="button" className="btn btn-sm btn-outline-info">Doing</button>
                <button type="button" className="btn btn-sm btn-outline-success">Done</button>
              </div>
            </div>
          </div>
          </div>
          <div className='col-md-4 col-sm-6 col-xs'>
          <div className="card">
              <div className="card-header">
                DONE
              </div>
              <div className="card-body d-flex">
              <div className='flex-grow-1'>
                <h6 className="card-title">Requirement</h6>
                <span className="card-text text-muted fs-6">07/02/2021</span>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-sm btn-outline-primary"> <i className='bi bi-pencil-square'></i> </button>
                <button type="button" className="btn btn-sm btn-outline-danger"> <i class="bi bi-trash3"></i> </button>
                <button type="button" className="btn btn-sm btn-outline-info">Doing</button>
                <button type="button" className="btn btn-sm btn-outline-success">Done</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
