import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/', { state: {email: email} }); // เป็นการสั่งให้ redirect ไปหน้าที่เราต้องการเมื่อกด submit พร้อมกับส่งข้อมูล state ไปด้วย ซึ่งส่งแบบ obj ที่มี key ชื่อ state และ value เป็นข้อมูลที่จะส่ง เราจะส่งเป็น string, obj หรืออะไรก็ได้ 
        // ซึ่งในตัวอย่างนี้จะ redirect ไปที่ url path ของหน้า Home และส่งข้อมูลไปด้วย
    }

    return(
        <>
            <div> This is Login page </div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={email} onChange={e => setEmail(e.target.value) }/>
                <input type='text'/>
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;