import { useParams } from "react-router-dom";

function ContactItem() {
    // useParams จะไปเอาค่า contactId ใน path url ที่เราคลิกแต่ละครั้งออกมา แล้วตัวแปร params จะเก็บข้อมูล path นั้นไว้ในรูปแบบ Obj โดยชื่อ key มาจาก path=':contactId' ที่เรากำหนด และ value มาจากค่าที่เราคลิก
    const params = useParams();
    console.log(params); // ได้ออกมาเป็น {contactId: '1'} มาจาก url parameter เพราก็จะสามารถเอาค่า params มาใช้ต่อได้
    return <h1>{params.contactId}</h1>;
}

export default ContactItem;