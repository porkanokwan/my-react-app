// ถ้าเขียน import CSS แบบนี้จะทำให้ไฟล์อื่นหรือ Component อื่น ที่อยู่นอกไฟล์นี้และมี class ชื่่อเดี่ยวกับที่อยู่ในไฟล์ App.css นีจะใช้ CSS จากไฟล์ App.css ได้ด้วย
// import './App.css';
import Welcome from './Welcome';
// ถ้าจะเรียกใช้ CSS จากไฟล์ App.module.css ต้องเรียกใช้ผ่าน styles obj ทำให้การใช้ CSS นี้ใช้ได้เฉพาะในไฟล์นี้เท่านั้น ไฟล์อื่นหรือ Component อื่น Apply เอาไปใช้ไม่ได้
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const divStyle = {color: 'red', textAlign: 'center', margin: '20px 10px', padding: 10};
  return (
    // <div style = {{color: 'red', textAlign: 'center', margin: '20px 10px', padding: 10}}>Hello React Basic Styling</div>
    // <div style = {divStyle}>Hello React Basic Styling</div>
    <div className={styles.container}>
      <div className = 'main-div'>Hello React Basic Styling</div>
      {/* <div className = 'text-danger'>Hello React Basic Styling from Bootstrap</div> */}
      <div className = "alert alert-danger" role="alert">Hello React Basic Styling from Bootstrap</div>
      {/* เวลาจะเรียกใช้ property ในไฟล์ App.module.css ต้องเรียกใช้ผ่าน styles obj */}
      <div className = {styles['main-div']}>Hello React Basic Styling</div>
      <div className = {styles.main}>Hello React Basic Styling</div>
      <Welcome/>
    </div>
  );
}

export default App;
