import './App.css';
import {useState} from 'react'

const mapProvinceDistrict = {
  BangKok : ['Bangbon', 'Bangkhae', 'Bangkapi'],
  Phuket : ['Kathu', 'Thalang'],
  Ranong : ['Kra buri', 'Ka poe']
}

function App() {
  const [selectProvince, setSelectProvince] = useState('')
  const option = selectProvince === '' ? null : mapProvinceDistrict[selectProvince].map(el => <option value={el}>{el}</option>);
  return (
    <div className="App">
      <label htmlFor='province'>Province : </label>
      <select id='province' value={selectProvince} onChange={(e) => setSelectProvince(e.target.value)}>
        {/* ถ้าเราเลือกอะไร ค่า value จะเป็นไปตามที่เลือก เช่น เลือก BangKok value = BangKok ทำให้ค่าของ state เปลี่ยนไปตามที่เราเลือก*/}
        <option value=''>SELECT</option>
        <option value='BangKok'>BangKok</option>
        <option value='Phuket'>Phuket</option>
        <option value='Ranong'>Ranong</option>
      </select>

      <label htmlFor='distract'>Distract : </label>
      <select id='distract'>
        <option value=''>SELECT</option>
        {option}
      </select>
    </div>
  );
}

export default App;
