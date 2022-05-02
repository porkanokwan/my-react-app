import './App.css';
import styles from './App.module.css'

function App() {
  return (
    <div className='container'>
      <div className={styles.main}>
        <h2>Happy new year</h2>
        <div className={styles.box}>
          <span>Author: John</span>
          <span >1/1/2021 00.01 AM</span>
        </div>
      </div>
      <div className={styles.main}>
        <h2>Programming if fun</h2>
        <div className={styles.box}>
          <span>Author: Jack</span>
          <span >30/6/2021 10.23 AM</span>
        </div>
      </div>
      <div className={styles.main}>
        <h2>Oh Amazing!</h2>
        <div className={styles.box}>
          <span>Author: Sarah</span>
          <span >23/7/2021 08.17 AM</span>
        </div>
      </div>
    </div>
  );
}

export default App;
