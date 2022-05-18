import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <nav style={{ backgroundColor: 'salmon', padding: '0.5rem 0' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
          {/* ถ้า cilck จะไปหน้า web ที่ url มี path ตามที่กำหนดใน to พอได้ path มา Route จะ check ว่า path ตรงกับใน Route ไหม ถ้าตรงจะ render สิ่งที่อยู่ใน props element  */}
            <li style={{ margin: '0 1rem' }}><Link to='/'>Home</Link></li>
            <li style={{ margin: '0 1rem' }}><Link to='/login'>Login</Link></li>
            <li style={{ margin: '0 1rem' }}><Link to='/about'>About</Link></li>
            <li style={{ margin: '0 1rem' }}><Link to='/contact'>Contact</Link></li>
        </ul>
    </nav>
    {/* Component อะไรก็ตามที่เป็น Child ของ path Header หรือมี path relative มาถึง path ของ Header จะเอา Component พวกนั้นมา render ใน Outlet Component */}
    <Outlet /> {/* ถ้า path math กับอันไหน จะเอา Component ใน props element ที่ต้อง render จาก path นั้น มาแทนที่ Outlet */}
    
    </>
  )
}