import React, { useEffect } from 'react'

function Message() {
    useEffect( () => {
        console.log('Message Component effect');
        // ถ้า Component Message ถูก remove ออกจาก DOM ไป functio cleaning up effect ของ Message จะทำงานทันที คือ log 'Message Cleaning effect' ออกมา 
        return () => console.log('Message Cleaning effect')
    } )
  return (
    <div>
      Hello
    </div>
  )
}

export default Message
