import { useLocation } from "react-router-dom";

function Home() {
    // navigate จากหน้า login มาที่หน้านี้และมีข้อมูลมาด้วย ถ้าเราจะใช้ข้อมูลที่มันส่งมาต้องใช้ useLocation
    const location = useLocation();
    console.log(location); // จะได้ค่านี้ออกมา {pathname: '/', search: '', hash: '', state: {email: 'gg@gmail.com'}, key: 'scy4s89q'}

    return(
        <>
            <div> This is Home page </div>
            {location.state && <p> Welcome to {location.state.email} </p>}
        </>
    )
}

export default Home;