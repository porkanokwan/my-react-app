import React from "react";

class TimerClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }

//   ใช้ componentDidMount เพราะ เมื่อ state แรกเกิดจะถูกเอาไปใส่ในหน้า UI พอ state 2 จะเกิดต่อมา state แรกจะโดนลบออกไป แล้วใส่ state 2 เข้าไปในหน้า UI แทนเป็นแบบนี้วนไปเรื่อยๆ 
//   ดังนั้น จึงต้องใช้ componentDidMount บังคับให้ state ทุกๆ 1 วินาที เข้าไปใน DOM หลังจากอันเก่าถูกลบ  มันเลยใช้ componentDidUpdate ไม่ได้ เพราะ ไม่ใช่การที่ Mount เข้าไปแล้ว update ค่าเก่าเรื่อยๆ 
    componentDidMount() {
        // เลขคุมการทำงานของ setInterval นี้
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds by class: {this.state.seconds}
          <p>intervalID: {this.interval}</p>
        </div>
      );
    }
  }
  
  export default TimerClass;