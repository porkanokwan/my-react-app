import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <label htmlFor = 'province'>Province : </label>
        <select id = 'province'>
          <option value='select'>Select</option>
          <option value='bangkok'>Bangkok</option>
          <option value='rayong'>Rayong</option>
          <option value='chonburi'>Chonburi</option>
        </select>
      <br/>
      <label htmlFor = 'district'>District : </label>
      <select id = 'district'>
        <option value = 'select'>Select</option>
        <option value = 'bang-na'>Bang-Na</option>
        <option value = 'bangkhunnon'>Bangkhunnon</option>
        <option value = 'pathum-wan'>Pathum-Wan</option>
      </select>
    </div>
  );
}

export default App;
