// ถ้าไม่ export ตัวแปร, function, component ที่อยู่ในนี้ มันก็จะใช้ได้แค่ใน file Welcome.js นี้เท่านั้น  เพราะ ทุกไฟล์จะทำงานแบบ Module 
function Welcome() {
    return (
        <div>
            This is Welcome Component
        </div>
    )
};

function sum(a, b) {
    return a + b
};

// เมื่อ export ออก ไฟล์อื่นจะสามารถใช้ได้แต่ต้อง import ก่อน ซึ่งการ export สามารถ export อะไรก็ได้ เช่น ตัวแปร, function, component เป็นต้น
export {Welcome, sum};