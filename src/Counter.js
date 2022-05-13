import { Component } from "react";

class Counter extends Component{
// Class App ส่ง props มาเก็บใน property ที่ชื่อว่า props ที่อยู่ใน Class Component (Counter สืบทอดมาแล้วใช้ได้เฉยๆ) ดังนั้น เวลาจะเรียกใช้ props ที่ส่งมา ต้องเรียกเหมือนที่เรียก property ใน Class แบบนี้ this.props(property ชื่อว่า props).ชื่อpropsที่ส่งมา 
    render() {
        // console.log(this.props); // {count: '10', title: 'Counter App'} ยังเก็บค่าเป็น Obj เหมือนเดิม
        // สาารถ destructuring ได้
        const {count, title} = this.props;
        return (
          <div className='App'>
            {/* <h1>{this.props.count}</h1> */}
            <h1>{title}</h1>
            <h2>{count}</h2>
          </div>
        )
      }
}

export default Counter;