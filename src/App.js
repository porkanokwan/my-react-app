import './App.css';
import styles from './App.module.css'

function App() {
  return (
    // <div className='main' style={{padding:'20px', lineHeight: '200%'}}>
    //   <button>Add</button> 
    //   <br/>
    //   <span className='fspan' style={{color:'green', textDecoration: 'line-through', marginRight: '10px'}} >Task1</span> <button style={{marginRight: '10px'}}>Edit</button> <button>Del</button>
    //   <br/>
    //   <span className='sname' style={{marginRight: '10px'}}>Task2</span> <button style={{marginRight: '10px'}}>Edit</button> <button>Del</button>
    // </div>
    <div className={styles.main}>
      <button>Add</button> 
      <br/>
      <span className={styles['first']}>Task1</span> <button className={styles.fbutton}>Edit</button> <button>Del</button>
      <br/>
      <span className={styles.second}>Task2</span> <button className={styles.fbutton}>Edit</button> <button>Del</button>
    </div>
  );
}

export default App;
