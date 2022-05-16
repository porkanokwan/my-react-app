import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    const tick = () => {
        return setSeconds(prev => prev + 1);
    }

    useEffect( () => {
        // ตัวแปร intervalID จะเป็นตัวเลขที่ setInterval return มาให้จากการทำงานในแต่ละ 1 วินาที (เป็นเลข reference ของระบบ Browser) ดังนั้น intervalID จึงเป็นตัวคุมการทำงานของนาฬิกา
        let intervalID  = setInterval(() => {
            tick()
            // console.log('aaa');
    }, 1000);
    console.log(intervalID);
    // ต้องมีการ clear intervalID ไม่งั้น setInterval จะ run ทุกๆ 1 วินาที แล้วจะเกิด intervalID ของทุกๆ วินาที จะทำให้เปลือง memory มากขึ้นและ performance ลดลง
        return () => clearInterval(intervalID);
    }, []); // เป็น [] ได้เพราะ setInterval เป็นตัว update ให้

      return (
        <div>
          Seconds by function: {seconds}
        </div>
      );
  }
  
  export default Timer;