import { Link, Outlet } from "react-router-dom";

const persons = [
    {id: 1, name: 'john', phone: '0845621284'}, 
    {id: 2, name: 'joey', phone: '0854684132'}, 
    {id: 3, name: 'jimmy', phone: '0948576521'}, 
]

function Contact() {
    return(
        <>
            <div> This is Contact page</div>
            <ul>
                {/* ใน to เป็น relative path ได้เพราะ มี path ก่อนหน้าอยู่แล้ว แค่เอา relative path มาต่อ */}
                {persons.map(item => <li key={item.id}><Link to={`${item.id}`}>{item.name}</Link></li>)}
            </ul>
            <Outlet/>
        </>
    )
}

export default Contact;