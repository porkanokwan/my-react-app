import React from "react";
// import { Button, Row, Col } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);


function App() {
  // เมื่อเรากรอกข้อมูลใน form แล้ว กด submit function onFinish จะทำงาน ซึ่ง antd จะทำการ group ค่า key(ชื่อ name ของ input นั้น) - value (ข้อมูลที่เรากรอก) ทุกอันใน form มาเก็บเป็น obj แล้วส่งให้ parameter value ใน function onFinish เก็บ 
  const onFinish = value => {
    console.log(value); // value คือ obj ที่เก็บค่าทั้งหมดที่อยู่ใน form ที่ antd ส่งมาให้แบบนี้ {username: 'kanokwan', password: '123456', remember: true}
  }
  return (