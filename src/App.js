import './App.css';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <button className={styles.bu1}>New Game</button>  
      </div>
      <div className={styles.container}>
        <div className={styles['box-1']}>
          <h1>Player1</h1>
          <h2>0</h2>
        </div>
        <div className={styles['box-2']}>
          <button className={styles.roll}>Roll</button>
          <button className={styles.keep}>Keep</button>
          <div className={styles.score}>1</div>
          <h3 className={styles.head3}>Round Score: 0</h3>
        </div>
        <div className={styles['box-3']}>
          <h1>Player2</h1>
          <h2>0</h2>
        </div>
      </div>     
    </div>
  );
}

export default App;
