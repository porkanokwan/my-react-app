import './App.css';
import styles from './App.module.css'

function App() {
  return (
    // <div style={{display: 'flex', justifyContent: 'space-evenly', width: '200px', margin:'auto'}}>
    <div className={styles.main}>
      <button>+</button>
      <span>0</span>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
