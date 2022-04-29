import './Home.css';
// function Home() {
//     return <div>This is Home Component</div>
// }

// const day = 'Monday';

// ใน 1 moodule มี default export ได้แค่อันเดียว ดังนั้น เวลา module ไหน import แบบ default ไปใช้ มันจะไปหา สิ่งที่ export default จากไฟล์นั้นอัตโนมัติ
// export default Home;
// ใน 1 module มีได้ทั้ง name export และ default export ปนๆ กันได้
// export {day};

// หรือจะเขียน name export, default export ในบรรทัดเดียวก็ได้
// ถ้าเขียนแบบ default export ไม่ต้องเขียนชื่อ function ก็ได้ เพราะ มันมีได้แค่อันเดียวในไฟล์ๆ นึง เวลาไฟล์อื่น import แบบ default มันจะวิ่งมาหาตัวนี้โดยตรง
export default function Home() {
    return <div className = 'home'>This is Home Component</div>
}

// name export ต้องมีชื่อ เพราะ มัน export ได้หลายตัว เวลาไฟล์อื่น import ไปใช้จะได้เรียกชื่อไปถูก
export const day = 'Monday';
export const year = '2022';
